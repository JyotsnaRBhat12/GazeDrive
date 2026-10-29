// GazeDrive Central Rule Engine Module (Traffic Rules & Live Driving Assessment)
// Evaluates vehicle telemetry every frame against traffic laws (LHT Indian Rules of the Road / IRC standards)

import { logEvent } from './telemetry.js';
import * as trafficLight from './trafficLight.js';
import { getSeatbeltStatus, getCurrentGear, isEngineStalledStatus, getGearOverrevTimer } from './car.js';

let violations = [];
let violationCallbacks = [];
let totalPenaltyPoints = 0;

// Tracking state for debounce & continuity
let wrongSideTimer = 0;
let lastWrongSideViolationTime = 0;
const WRONG_SIDE_DEBOUNCE_MS = 4000;

// Seatbelt & Gear evaluation timers
let lastSeatbeltViolationTime = 0;
let hasStallViolationTriggered = false;
let lastOverrevViolationTime = 0;
let lastZoneSpeedingTime = 0;

// Track intersection statuses to prevent duplicate triggering per pass
const processedStopLines = new Set();
const processedRedLightJumps = new Set();


/**
 * Initializes the RuleEngine buffers and registers state.
 */
export function init() {
  violations = [];
  violationCallbacks = [];
  totalPenaltyPoints = 0;
  wrongSideTimer = 0;
  lastWrongSideViolationTime = 0;
  processedStopLines.clear();
  processedRedLightJumps.clear();
}

/**
 * Registers an observer callback fired whenever a violation is committed.
 * Used by the HUD for live animated toasts and counter updates.
 * @param {Function} callback - fn(violation)
 */
export function onViolation(callback) {
  if (typeof callback === 'function') {
    violationCallbacks.push(callback);
  }
}

/**
 * Dispatches a violation to all subscribers and telemetry.
 */
function emitViolation(violation) {
  violations.push(violation);
  totalPenaltyPoints += violation.penaltyPoints || 10;

  logEvent('TRAFFIC_RULE_VIOLATION', {
    violationId: violation.id,
    type: violation.type,
    title: violation.title,
    speedKmh: violation.speedKmh,
    penaltyPoints: violation.penaltyPoints,
    pos: violation.position,
  });

  violationCallbacks.forEach((cb) => {
    try {
      cb(violation);
    } catch (err) {
      console.error('Error in violation callback:', err);
    }
  });
}

/**
 * Records a formal traffic violation.
 */
export function recordViolation(type, details = {}) {
  const now = performance.now();
  const id = `violation_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  let title = 'Traffic Violation';
  let penaltyPoints = 10;
  let description = details.description || '';

  switch (type) {
    case 'SEATBELT_VIOLATION':
      title = 'Seatbelt Not Fastened';
      penaltyPoints = 20;
      if (!description) description = `Candidate operated vehicle without fastening safety belt!`;
      break;

    case 'GEAR_STALL_VIOLATION':
      title = 'Engine Stall / High Gear Takeoff';
      penaltyPoints = 10;
      if (!description) description = `Attempted takeoff in high gear resulting in engine stall. Select 1st gear.`;
      break;

    case 'GEAR_OVERREV_VIOLATION':
      title = 'Excessive Engine Over-Rev';
      penaltyPoints = 10;
      if (!description) description = `Operated vehicle at redline RPM in low gear without upshifting.`;
      break;

    case 'RED_LIGHT_JUMP':
      title = 'Red Light Jump';
      penaltyPoints = 25;
      if (!description) description = `Crossed intersection on RED signal at ${Math.round(details.speedKmh || 0)} km/h.`;
      break;

    case 'STOP_LINE_VIOLATION':
      title = 'Stop Line Overrun';
      penaltyPoints = 10;
      if (!description) description = `Failed to halt before the white stop line on RED signal.`;
      break;

    case 'WRONG_SIDE_DRIVING':
      title = 'Wrong-Side Driving';
      penaltyPoints = 20;
      if (!description) description = `Drove into oncoming/right lane in Left-Hand Traffic zone.`;
      break;

    case 'COLLISION':
      title = 'Vehicle Collision';
      penaltyPoints = 30;
      if (!description) description = `Collided with a traffic hazard or obstacle.`;
      break;

    case 'SPEEDING':
      title = 'Speed Limit Exceeded';
      penaltyPoints = 15;
      if (!description) description = `Exceeded posted speed zone limit.`;
      break;

    case 'SPEEDING_IN_ZONE':
      title = 'Speeding in Caution / School Zone';
      penaltyPoints = 15;
      if (!description) description = `Exceeded speed limit in designated Go Slow / School Zone!`;
      break;

    case 'SOLID_LINE_CROSSING':
      title = 'Solid Line Cross Violation';
      penaltyPoints = 10;
      if (!description) description = `Crossed solid white divider marking (Overtaking Prohibited).`;
      break;

    case 'STOP_SIGN_IGNORED':
      title = 'Stop Sign Ignored';
      penaltyPoints = 15;
      if (!description) description = `Passed mandatory STOP sign without coming to a complete standstill.`;
      break;

    case 'ZEBRA_YIELD_FAILED':
      title = 'Failure to Yield to Pedestrian';
      penaltyPoints = 25;
      if (!description) description = `Did not yield right of way to crossing pedestrian at zebra crosswalk.`;
      break;

    default:
      title = details.title || 'Rule Infraction';
      penaltyPoints = details.penaltyPoints || 10;
  }


  const violation = {
    id,
    timestampMs: now,
    timeFormatted: new Date().toLocaleTimeString(),
    type,
    title,
    description,
    penaltyPoints,
    speedKmh: details.speedKmh !== undefined ? Number(details.speedKmh.toFixed(1)) : 0,
    position: details.position || { x: 0, y: 0, z: 0 },
  };

  emitViolation(violation);
  return violation;
}

/**
 * Checks rules every frame based on vehicle telemetry, intersections, and road markings.
 */
export function update(dt, carPos, speedKmh, input, zoneLimit = 50, zoneName = 'Urban Zone') {
  if (dt <= 0) return;

  const speedMs = speedKmh / 3.6;
  const now = performance.now();

  // 0. EVALUATE SPEED ZONE COMPLIANCE ("GO SLOW" / "SPEED LIMIT 30" / SCHOOL ZONE)
  if (speedKmh > zoneLimit + 5.0) {
    if (now - lastZoneSpeedingTime > 5000) {
      lastZoneSpeedingTime = now;
      recordViolation('SPEEDING_IN_ZONE', {
        speedKmh,
        position: { x: carPos.x, y: carPos.y, z: carPos.z },
        description: `Exceeded ${zoneName} limit! Drove at ${Math.round(speedKmh)} km/h (limit: ${zoneLimit} km/h).`,
      });
    }
  }

  // 1. EVALUATE TRAFFIC LIGHTS & STOP LINES
  const upcomingIntersection = trafficLight.getUpcomingIntersection(carPos.z);
  if (upcomingIntersection) {
    const interId = upcomingIntersection.id;
    const stopLineZ = upcomingIntersection.stopLineZ;
    const junctionZ = upcomingIntersection.junctionZ;
    const isRed = upcomingIntersection.state === 'RED';
    const isYellow = upcomingIntersection.state === 'YELLOW';

    // Player car length is ~4.0m, front bumper is at carPos.z + 2.0
    const frontBumperZ = carPos.z + 2.0;

    // A. STOP LINE VIOLATION:
    // Car crossed the stop line while light is RED or late YELLOW
    if ((isRed || isYellow) && frontBumperZ > stopLineZ && frontBumperZ < junctionZ + 5.0) {
      if (!processedStopLines.has(interId) && !processedRedLightJumps.has(interId)) {
        // If moving faster than 1.5 m/s or coming to rest over the line
        if (speedMs > 1.5) {
          processedStopLines.add(interId);
          recordViolation('STOP_LINE_VIOLATION', {
            speedKmh,
            position: { x: carPos.x, y: carPos.y, z: carPos.z },
            description: `Overran stop line on ${upcomingIntersection.state} signal (${Math.round(speedKmh)} km/h).`,
          });
        }
      }
    }

    // B. RED LIGHT JUMP:
    // Car entered the central junction box (z > junctionZ - 5) while signal is RED
    if (isRed && frontBumperZ > junctionZ - 4.0 && frontBumperZ < junctionZ + 12.0) {
      if (!processedRedLightJumps.has(interId)) {
        processedRedLightJumps.add(interId);
        recordViolation('RED_LIGHT_JUMP', {
          speedKmh,
          position: { x: carPos.x, y: carPos.y, z: carPos.z },
          description: `Jumped RED traffic signal through intersection at ${Math.round(speedKmh)} km/h!`,
        });
      }
    }

    // Clean up processed IDs once car has cleared the intersection
    if (carPos.z > junctionZ + 25.0) {
      processedStopLines.delete(interId);
      processedRedLightJumps.delete(interId);
    }
  }

  // 2. EVALUATE WRONG-SIDE DRIVING (Left-Hand Traffic standard)
  // Normal driving lane is LEFT (x < 0). Center divider is at x = 0.
  // Driving into right lane (x > 0.45) is driving on the wrong side.
  if (carPos.x > 0.45 && speedKmh > 6.0) {
    wrongSideTimer += dt;
    if (wrongSideTimer > 1.2 && now - lastWrongSideViolationTime > WRONG_SIDE_DEBOUNCE_MS) {
      lastWrongSideViolationTime = now;
      recordViolation('WRONG_SIDE_DRIVING', {
        speedKmh,
        position: { x: carPos.x, y: carPos.y, z: carPos.z },
        description: `Driving on wrong side of the road (right lane in LHT zone) at ${Math.round(speedKmh)} km/h.`,
      });
    }
  } else {
    // Decay timer quickly when back in the left lane
    wrongSideTimer = Math.max(0, wrongSideTimer - dt * 2.5);
  }

  // 3. EVALUATE SEATBELT COMPLIANCE (Mandatory Pre-Drive Driving Test Rule)
  // Vehicle in motion (> 2.5 km/h) without seatbelt fastened
  if (Math.abs(speedKmh) > 2.5 && !getSeatbeltStatus()) {
    if (now - lastSeatbeltViolationTime > 6000) {
      lastSeatbeltViolationTime = now;
      recordViolation('SEATBELT_VIOLATION', {
        speedKmh,
        position: { x: carPos.x, y: carPos.y, z: carPos.z },
        description: `Vehicle driven at ${Math.round(speedKmh)} km/h without fastening seatbelt! Mandatory pre-drive violation.`,
      });
    }
  }

  // 4. EVALUATE TRANSMISSION & GEAR COMPLIANCE
  // A. Engine Stall on High Gear Launch
  if (isEngineStalledStatus()) {
    if (!hasStallViolationTriggered) {
      hasStallViolationTriggered = true;
      recordViolation('GEAR_STALL_VIOLATION', {
        speedKmh: 0,
        position: { x: carPos.x, y: carPos.y, z: carPos.z },
        description: `Engine stalled! Attempted launch in ${getCurrentGear()} gear. Downshift to 1st gear.`,
      });
    }
  } else {
    hasStallViolationTriggered = false;
  }

  // B. Prolonged Low-Gear Over-revving
  if (getGearOverrevTimer() > 2.5 && now - lastOverrevViolationTime > 7000) {
    lastOverrevViolationTime = now;
    recordViolation('GEAR_OVERREV_VIOLATION', {
      speedKmh,
      position: { x: carPos.x, y: carPos.y, z: carPos.z },
      description: `Excessive engine RPM in ${getCurrentGear()} gear at ${Math.round(speedKmh)} km/h. Upshift to higher gear.`,
    });
  }
}

/**
 * Returns complete list of recorded violations.
 */
export function getViolations() {
  return [...violations];
}

/**
 * Returns total count of violations recorded.
 */
export function getViolationCount() {
  return violations.length;
}

/**
 * Returns total penalty points accumulated.
 */
export function getTotalPenaltyPoints() {
  return totalPenaltyPoints;
}

/**
 * Calculates current Driver Safety Score (out of 100).
 */
export function calculateDriverScore() {
  let score = 100 - totalPenaltyPoints;
  if (score < 0) score = 0;
  return score;
}

/**
 * Generates official Driving Test Examination Assessment scorecard.
 * Evaluates candidate against mandatory licensing criteria.
 */
export function getDrivingTestAssessment() {
  const isSeatbeltWorn = getSeatbeltStatus();
  const list = getViolations();

  const seatbeltViolations = list.filter((v) => v.type === 'SEATBELT_VIOLATION').length;
  const gearViolations = list.filter((v) => v.type === 'GEAR_STALL_VIOLATION' || v.type === 'GEAR_OVERREV_VIOLATION').length;
  const redLightViolations = list.filter((v) => v.type === 'RED_LIGHT_JUMP').length;
  const stopLineViolations = list.filter((v) => v.type === 'STOP_LINE_VIOLATION').length;
  const wrongSideViolations = list.filter((v) => v.type === 'WRONG_SIDE_DRIVING').length;
  const collisionViolations = list.filter((v) => v.type === 'COLLISION').length;

  const totalScore = calculateDriverScore();
  const isEligible = totalScore >= 75 && seatbeltViolations === 0 && redLightViolations === 0 && collisionViolations === 0;

  return {
    score: totalScore,
    isEligible,
    verdict: isEligible ? 'PASSED / LICENCE ELIGIBLE' : 'DISQUALIFIED / RETEST REQUIRED',
    seatbeltStatus: isSeatbeltWorn ? 'FASTENED' : 'UNFASTENED',
    checks: [
      {
        id: 'seatbelt',
        title: 'Seatbelt Pre-Drive Compliance',
        status: seatbeltViolations === 0 && isSeatbeltWorn ? 'PASS' : (!isSeatbeltWorn && seatbeltViolations === 0 ? 'PENDING' : 'FAIL'),
        points: seatbeltViolations === 0 && isSeatbeltWorn ? 20 : 0,
        maxPoints: 20,
        notes: seatbeltViolations > 0 ? `${seatbeltViolations} unbuckled drive violations (-${seatbeltViolations * 20} pts)` : (isSeatbeltWorn ? 'Fastened correctly' : 'Not fastened yet (Buckle up!)'),
      },
      {
        id: 'transmission',
        title: 'Transmission & Gear Shifting',
        status: gearViolations === 0 ? 'PASS' : 'WARN',
        points: Math.max(0, 20 - gearViolations * 10),
        maxPoints: 20,
        notes: gearViolations > 0 ? `${gearViolations} gear/stall infractions` : 'Smooth gear changes and RPM control',
      },
      {
        id: 'signals',
        title: 'Traffic Signal Obedience',
        status: redLightViolations === 0 ? 'PASS' : 'FAIL',
        points: redLightViolations === 0 ? 25 : 0,
        maxPoints: 25,
        notes: redLightViolations > 0 ? `${redLightViolations} RED light jumps` : 'Zero signal jumps',
      },
      {
        id: 'stopline',
        title: 'Stop Line Compliance',
        status: stopLineViolations === 0 ? 'PASS' : 'WARN',
        points: Math.max(0, 15 - stopLineViolations * 10),
        maxPoints: 15,
        notes: stopLineViolations > 0 ? `${stopLineViolations} stop line overruns` : 'Halted cleanly before line',
      },
      {
        id: 'lane',
        title: 'Lane Discipline (Left-Hand Traffic)',
        status: wrongSideViolations === 0 ? 'PASS' : 'WARN',
        points: Math.max(0, 20 - wrongSideViolations * 10),
        maxPoints: 20,
        notes: wrongSideViolations > 0 ? `${wrongSideViolations} wrong-lane excursions` : 'Maintained proper left lane',
      },
    ],
  };
}

/**
 * Clears violations buffer for a fresh session reset.
 */
export function reset() {
  violations = [];
  totalPenaltyPoints = 0;
  wrongSideTimer = 0;
  lastWrongSideViolationTime = 0;
  lastSeatbeltViolationTime = 0;
  hasStallViolationTriggered = false;
  lastOverrevViolationTime = 0;
  lastZoneSpeedingTime = 0;
  processedStopLines.clear();
  processedRedLightJumps.clear();
}

