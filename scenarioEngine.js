// GazeDrive Scenario Execution & Hazard Fixation Evaluation Engine
// Integrates:
// 1. Offline YOLOv8 + Vision Mamba pre-detected hazard bounding boxes (scenarios.json)
// 2. 60 Hz synchronized requestAnimationFrame clock
// 3. MediaPipe Iris Gaze-in-Box testing with EMA (0.7/0.3) & 9-point calibration
// 4. Metrics: First-fixation latency (<= 1200 ms) & Secondary dwell time (>= 150 ms)
// 5. Alert-to-freeze window reaction tracking: Keyboard BRAKE / SWERVE -> SUCCESS vs COLLISION
// 6. ESP32 Haptic feedback dispatch
// 7. Results persistence via FastAPI backend (/api/results)

import { esp32Haptics } from './esp32Haptics.js';
import { geminiViva } from './geminiViva.js';

export class ScenarioEngine {
  constructor() {
    this.scenarios = [];
    this.activeScenario = null;
    this.scenarioIndex = 0;
    this.clockMs = 0;
    this.isRunning = false;
    this.isAlertActive = false;
    this.isFrozen = false;

    // Fixation Metrics
    this.firstFixationLatencyMs = null;
    this.isLatencyPass = false;
    this.secondaryDwellMs = 0;
    this.isDwellPass = false;
    this.isGazeCurrentlyInside = false;

    // Reaction Metrics
    this.reactionInput = 'NONE';
    this.reactionTimeMs = null;
    this.outcome = 'PENDING'; // 'PENDING' | 'SUCCESS' | 'COLLISION'
    this.finalTrialResult = null;

    // Current interpolated hazard box in screen pixels
    this.currentHazardBox = null;

    // Hazard Occurrence Tolerance & Multi-Trial Tracking
    this.maxAcceptableHazards = 3; // Total acceptable hazard encounters before test conclusion
    this.failThreshold = 2; // Test fails upon 2 or 3 failed hazard occurrences
    this.totalHazardOccurrences = 0;
    this.failedHazardOccurrences = 0;
    this.occurrenceHistory = [];
    this.isTestDisqualified = false;

    // Callbacks
    this.onTrialCompleted = null;
    this.onScenarioTick = null;
    this.onAlertOnset = null;
    this.onTestFailedDueToHazards = null;

    this.loadScenarios();
  }

  async loadScenarios() {
    try {
      const res = await fetch('/scenarios.json');
      if (res.ok) {
        const data = await res.json();
        this.scenarios = data.scenarios || [];
        if (this.scenarios.length > 0) {
          this.setScenario(0);
        }
      }
    } catch (e) {
      console.warn('[ScenarioEngine] Could not load scenarios.json, retrying via FastAPI:', e);
      try {
        const res2 = await fetch('http://localhost:8000/api/scenarios');
        if (res2.ok) {
          const data = await res2.json();
          this.scenarios = data.scenarios || [];
          if (this.scenarios.length > 0) this.setScenario(0);
        }
      } catch (err) {
        console.error('[ScenarioEngine] Failed to load scenarios:', err);
      }
    }
  }

  setScenario(index) {
    if (index >= 0 && index < this.scenarios.length) {
      this.scenarioIndex = index;
      this.activeScenario = this.scenarios[index];
      this.resetTrial();
      console.log(`[ScenarioEngine] Active Scenario: ${this.activeScenario.name} (${this.activeScenario.id})`);
    }
  }

  nextScenario() {
    const nextIdx = (this.scenarioIndex + 1) % (this.scenarios.length || 1);
    this.setScenario(nextIdx);
  }

  resetTrial() {
    this.clockMs = 0;
    this.isRunning = true;
    this.isAlertActive = false;
    this.isFrozen = false;
    this.firstFixationLatencyMs = null;
    this.isLatencyPass = false;
    this.secondaryDwellMs = 0;
    this.isDwellPass = false;
    this.isGazeCurrentlyInside = false;
    this.reactionInput = 'NONE';
    this.reactionTimeMs = null;
    this.outcome = 'PENDING';
    this.finalTrialResult = null;
    this.currentHazardBox = null;
  }

  /**
   * 60 Hz Update Loop synced to simulation clock.
   * @param {number} dt Delta time in seconds (e.g. 0.0166s for 60Hz)
   * @param {object} gaze { x, y, valid } mapped screen pixel coordinates
   * @param {object} input { steer, throttle, brake, handbrake }
   * @param {number} screenW Screen canvas width
   * @param {number} screenH Screen canvas height
   */
  update(dt, gaze, input, screenW, screenH) {
    if (!this.isRunning || !this.activeScenario || this.isFrozen) {
      return this.getState();
    }

    this.clockMs += dt * 1000;
    const { alertOnsetMs, freezeWindowMs, keyframes, allowedActions } = this.activeScenario;

    // 1. Check Alert Onset
    if (!this.isAlertActive && this.clockMs >= alertOnsetMs) {
      this.isAlertActive = true;
      esp32Haptics.triggerHaptic('ALERT', 300, 75);
      if (this.onAlertOnset) {
        this.onAlertOnset(this.activeScenario);
      }
    }

    // 2. Interpolate Hazard Bounding Box from YOLOv8/Vision Mamba Keyframes
    this.currentHazardBox = this.interpolateBox(this.clockMs, keyframes, screenW, screenH);

    // 3. Test if Driver Gaze lies inside Hazard Bounding Box
    if (this.currentHazardBox && gaze && gaze.valid) {
      // 35px foveal tolerance margin
      const margin = 35;
      const inside =
        gaze.x >= this.currentHazardBox.minX - margin &&
        gaze.x <= this.currentHazardBox.maxX + margin &&
        gaze.y >= this.currentHazardBox.minY - margin &&
        gaze.y <= this.currentHazardBox.maxY + margin;

      this.isGazeCurrentlyInside = inside;

      if (inside) {
        // First-fixation latency calculation
        if (this.firstFixationLatencyMs === null) {
          this.firstFixationLatencyMs = Math.max(10, Math.round(this.clockMs - alertOnsetMs));
          this.isLatencyPass = this.firstFixationLatencyMs <= 1200;

          if (!this.isLatencyPass) {
            // Warning pulse for delayed hazard fixation
            esp32Haptics.triggerHaptic('WARNING', 200, 60);
          }
        }

        // Secondary dwell time accumulation (requires >= 150 ms)
        this.secondaryDwellMs += dt * 1000;
        if (this.secondaryDwellMs >= 150) {
          this.isDwellPass = true;
        }
      }
    } else {
      this.isGazeCurrentlyInside = false;
    }

    // 4. Vehicle Reaction Check (Keyboard Brake / Swerve inside alert-to-freeze window)
    const isBraking = input ? input.brake > 0.08 || input.handbrake > 0.08 : false;
    const isSwerving = input ? Math.abs(input.steer) > 0.35 : false;

    if (this.isAlertActive && this.outcome === 'PENDING') {
      if (isBraking || isSwerving) {
        const action = isBraking ? 'BRAKE' : 'SWERVE';
        const isActionAllowed = allowedActions.includes(action) || allowedActions.includes('BRAKE') || allowedActions.includes('SWERVE_LEFT') || allowedActions.includes('SWERVE_RIGHT');

        if (this.clockMs <= freezeWindowMs && isActionAllowed) {
          // Candidate successfully took defensive action in time!
          this.reactionInput = action;
          this.reactionTimeMs = Math.round(this.clockMs - alertOnsetMs);
          this.outcome = 'SUCCESS';
          this.isFrozen = true;

          // Haptic success confirmation
          esp32Haptics.triggerHaptic('BRAKE', 350, 60);
          this.concludeTrial();
          return this.getState();
        }
      }

      // 5. Freeze Deadline Exceeded without Valid Action -> COLLISION!
      if (this.clockMs >= freezeWindowMs) {
        this.outcome = 'COLLISION';
        this.isFrozen = true;
        esp32Haptics.triggerHaptic('COLLISION', 650, 100);
        this.concludeTrial();
        return this.getState();
      }
    }

    if (this.onScenarioTick) {
      this.onScenarioTick(this.getState());
    }

    return this.getState();
  }

  /**
   * Interpolates normalized keyframe bounding boxes into screen pixel dimensions.
   */
  interpolateBox(clockMs, keyframes, screenW, screenH) {
    if (!keyframes || keyframes.length === 0) return null;

    if (clockMs < keyframes[0].timeMs) {
      const k = keyframes[0];
      return this.keyframeToPixelBox(k, screenW, screenH);
    }
    if (clockMs >= keyframes[keyframes.length - 1].timeMs) {
      const k = keyframes[keyframes.length - 1];
      return this.keyframeToPixelBox(k, screenW, screenH);
    }

    for (let i = 0; i < keyframes.length - 1; i++) {
      const k0 = keyframes[i];
      const k1 = keyframes[i + 1];
      if (clockMs >= k0.timeMs && clockMs <= k1.timeMs) {
        const span = k1.timeMs - k0.timeMs || 1;
        const alpha = (clockMs - k0.timeMs) / span;

        const boxX = k0.box.x + (k1.box.x - k0.box.x) * alpha;
        const boxY = k0.box.y + (k1.box.y - k0.box.y) * alpha;
        const boxW = k0.box.w + (k1.box.w - k0.box.w) * alpha;
        const boxH = k0.box.h + (k1.box.h - k0.box.h) * alpha;
        const dist = Math.round(k0.distanceM + (k1.distanceM - k0.distanceM) * alpha);
        const conf = k0.conf + (k1.conf - k0.conf) * alpha;

        const pxW = boxW * screenW;
        const pxH = boxH * screenH;
        const pxMinX = (boxX - boxW / 2) * screenW;
        const pxMinY = (boxY - boxH / 2) * screenH;

        return {
          minX: Math.round(pxMinX),
          minY: Math.round(pxMinY),
          maxX: Math.round(pxMinX + pxW),
          maxY: Math.round(pxMinY + pxH),
          boxW: Math.round(pxW),
          boxH: Math.round(pxH),
          centerX: Math.round(boxX * screenW),
          centerY: Math.round(boxY * screenH),
          distanceM: dist,
          confidence: Math.round(conf * 100) / 100,
          type: this.activeScenario.hazardType,
          name: this.activeScenario.targetClass.toUpperCase(),
        };
      }
    }

    return null;
  }

  keyframeToPixelBox(k, screenW, screenH) {
    const pxW = k.box.w * screenW;
    const pxH = k.box.h * screenH;
    const pxMinX = (k.box.x - k.box.w / 2) * screenW;
    const pxMinY = (k.box.y - k.box.h / 2) * screenH;
    return {
      minX: Math.round(pxMinX),
      minY: Math.round(pxMinY),
      maxX: Math.round(pxMinX + pxW),
      maxY: Math.round(pxMinY + pxH),
      boxW: Math.round(pxW),
      boxH: Math.round(pxH),
      centerX: Math.round(k.box.x * screenW),
      centerY: Math.round(k.box.y * screenH),
      distanceM: k.distanceM,
      confidence: k.conf,
      type: this.activeScenario.hazardType,
      name: this.activeScenario.targetClass.toUpperCase(),
    };
  }

  async concludeTrial() {
    const fixLatency = this.firstFixationLatencyMs || 1400;
    const dwell = Math.round(this.secondaryDwellMs);
    const passLatency = fixLatency <= 1200;
    const passDwell = dwell >= 150;
    const isSuccess = this.outcome === 'SUCCESS';
    const isPass = isSuccess && passLatency && passDwell;

    this.totalHazardOccurrences++;
    if (!isPass) {
      this.failedHazardOccurrences++;
    }

    const occurrenceRecord = {
      occurrenceIndex: this.totalHazardOccurrences,
      scenarioId: this.activeScenario ? this.activeScenario.id : 'SCN_UNKNOWN',
      scenarioName: this.activeScenario ? this.activeScenario.name : 'Hazard Encounter',
      outcome: this.outcome,
      fixationLatencyMs: fixLatency,
      isLatencyPass: passLatency,
      secondaryDwellMs: dwell,
      isDwellPass: passDwell,
      isPass,
    };
    this.occurrenceHistory.push(occurrenceRecord);

    let score = 50;
    if (this.outcome === 'SUCCESS') {
      score = 75;
      if (passLatency) score += 15;
      if (passDwell) score += 10;
    } else {
      score = Math.max(25, 60 - Math.round(fixLatency / 50));
    }

    const shouldFailTest =
      this.failedHazardOccurrences >= this.failThreshold ||
      (this.totalHazardOccurrences >= this.maxAcceptableHazards && this.failedHazardOccurrences > 0);

    this.finalTrialResult = {
      sessionId: `GD-${Date.now().toString(36).toUpperCase()}`,
      candidateId: 'Candidate #402',
      timestamp: Date.now(),
      scenarioId: this.activeScenario.id,
      scenarioName: this.activeScenario.name,
      firstFixationLatencyMs: fixLatency,
      isLatencyPass: passLatency,
      secondaryDwellMs: dwell,
      isDwellPass: passDwell,
      reactionInput: this.reactionInput,
      reactionTimeMs: this.reactionTimeMs || 0,
      outcome: this.outcome,
      score,
      eyesOpenAvg: 96.5,
      alertOnsetMs: this.activeScenario.alertOnsetMs,
      freezeWindowMs: this.activeScenario.freezeWindowMs,
      totalHazardOccurrences: this.totalHazardOccurrences,
      failedHazardOccurrences: this.failedHazardOccurrences,
      maxAcceptableHazards: this.maxAcceptableHazards,
      isTestDisqualified: shouldFailTest,
    };

    console.log(`[ScenarioEngine] Trial Concluded (${this.totalHazardOccurrences}/${this.maxAcceptableHazards}, Failures: ${this.failedHazardOccurrences}):`, this.finalTrialResult);

    // Persist to FastAPI Backend
    this.persistResult(this.finalTrialResult);

    if (this.onTrialCompleted) {
      this.onTrialCompleted(this.finalTrialResult);
    }

    // Check if test failure condition is met (failed 2 to 3 hazard occurrences)
    if (shouldFailTest && !this.isTestDisqualified) {
      this.isTestDisqualified = true;
      console.warn(`[ScenarioEngine] Driving Test FAILED: Exceeded acceptable hazard occurrences (${this.failedHazardOccurrences}/${this.totalHazardOccurrences} failed). Triggering Viva Examiner.`);
      if (this.onTestFailedDueToHazards) {
        this.onTestFailedDueToHazards({
          totalOccurrences: this.totalHazardOccurrences,
          failedOccurrences: this.failedHazardOccurrences,
          maxAcceptable: this.maxAcceptableHazards,
          history: this.occurrenceHistory,
          lastTrial: this.finalTrialResult,
          reason: `Failed ${this.failedHazardOccurrences} of ${this.totalHazardOccurrences} hazard occurrences (${occurrenceRecord.scenarioName})`,
        });
      }
    } else if (this.totalHazardOccurrences < this.maxAcceptableHazards && !this.isTestDisqualified) {
      // Auto-advance to next hazard encounter after 3.5 seconds
      setTimeout(() => {
        if (!this.isTestDisqualified && this.isRunning) {
          this.nextScenario();
        }
      }, 3500);
    }
  }

  /**
   * Instantly simulates a hazard failure for demonstration & testing.
   */
  triggerInstantFailure() {
    this.failedHazardOccurrences = Math.max(2, this.failedHazardOccurrences + 1);
    this.totalHazardOccurrences = Math.max(this.failedHazardOccurrences, this.totalHazardOccurrences + 1);
    this.outcome = 'COLLISION';
    this.firstFixationLatencyMs = 1480;
    this.isLatencyPass = false;
    this.secondaryDwellMs = 65;
    this.isDwellPass = false;
    this.concludeTrial();
  }

  resetSession() {
    this.totalHazardOccurrences = 0;
    this.failedHazardOccurrences = 0;
    this.occurrenceHistory = [];
    this.isTestDisqualified = false;
    this.setScenario(0);
  }

  async persistResult(result) {
    try {
      await fetch('http://localhost:8000/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
      });
      console.log('[ScenarioEngine] Trial result stored in FastAPI backend.');
    } catch (e) {
      console.warn('[ScenarioEngine] Could not persist to backend:', e);
    }
  }

  getState() {
    return {
      activeScenario: this.activeScenario,
      scenarioIndex: this.scenarioIndex,
      totalScenarios: this.scenarios.length,
      clockMs: Math.round(this.clockMs),
      isAlertActive: this.isAlertActive,
      isFrozen: this.isFrozen,
      currentHazardBox: this.currentHazardBox,
      firstFixationLatencyMs: this.firstFixationLatencyMs,
      isLatencyPass: this.isLatencyPass,
      secondaryDwellMs: Math.round(this.secondaryDwellMs),
      isDwellPass: this.isDwellPass,
      isGazeInside: this.isGazeCurrentlyInside,
      reactionInput: this.reactionInput,
      reactionTimeMs: this.reactionTimeMs,
      outcome: this.outcome,
      finalTrialResult: this.finalTrialResult,
      totalHazardOccurrences: this.totalHazardOccurrences,
      failedHazardOccurrences: this.failedHazardOccurrences,
      maxAcceptableHazards: this.maxAcceptableHazards,
      isTestDisqualified: this.isTestDisqualified,
      occurrenceHistory: this.occurrenceHistory,
    };
  }
}

export const scenarioEngine = new ScenarioEngine();
