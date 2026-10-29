// GazeDrive Traffic Light & Intersection Module (Left-Hand Traffic IRC/MoRTH Standards)
// Manages 3D intersections, realistic signal gantries, cyclic timing, stop lines, and recycling.

import * as THREE from 'three';
import { CONFIG } from './config.js';
import * as rng from './rng.js';

let trafficGroup;
const intersections = [];
const NUM_INTERSECTIONS = 3;
const INTERSECTION_SPACING = 200; // Spacing in meters between consecutive intersections
const CYCLE_GREEN_TIME = 10.0;
const CYCLE_YELLOW_TIME = 3.0;
const CYCLE_RED_TIME = 8.0;
const TOTAL_CYCLE_TIME = CYCLE_GREEN_TIME + CYCLE_YELLOW_TIME + CYCLE_RED_TIME;

/**
 * Creates and initializes the intersection system and traffic light gantries.
 * @param {THREE.Scene} scene
 */
export function init(scene) {
  trafficGroup = new THREE.Group();
  scene.add(trafficGroup);

  intersections.length = 0;

  for (let i = 0; i < NUM_INTERSECTIONS; i++) {
    const junctionZ = 120 + i * INTERSECTION_SPACING;
    const intersection = createIntersection(i, junctionZ);
    trafficGroup.add(intersection.group);
    intersections.push(intersection);
  }
}

/**
 * Builds a single 3D intersection with cross-road, stop lines, and LHT signal gantry.
 */
function createIntersection(index, junctionZ) {
  const group = new THREE.Group();
  const roadCfg = CONFIG.ROAD;
  const colors = CONFIG.COLORS;

  // 1. Cross-Street Asphalt Road Base
  const crossRoadWidth = 14.0;
  const crossRoadLength = 60.0;
  const crossGeo = new THREE.BoxGeometry(crossRoadLength, 0.082, crossRoadWidth);
  const crossMat = new THREE.MeshStandardMaterial({
    color: colors.road,
    roughness: 0.35,
    metalness: 0.2,
  });
  const crossRoadMesh = new THREE.Mesh(crossGeo, crossMat);
  crossRoadMesh.position.set(0, 0.002, 0);
  crossRoadMesh.receiveShadow = true;
  group.add(crossRoadMesh);

  // 2. Corner Sidewalk Kerbs & Junction Turning Curbs
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.8 });
  const curbGeo = new THREE.BoxGeometry(0.5, 0.2, crossRoadWidth);
  const leftCurb = new THREE.Mesh(curbGeo, curbMat);
  leftCurb.position.set(-(crossRoadLength / 2 - 0.25), 0.1, 0);
  const rightCurb = new THREE.Mesh(curbGeo, curbMat);
  rightCurb.position.set(crossRoadLength / 2 - 0.25, 0.1, 0);
  group.add(leftCurb, rightCurb);

  // 3. Thick Solid White Stop Lines
  // For Left-Hand Traffic (LHT):
  // Approach lane is the LEFT lane (x: -4.4 to 0, center x = -2.2)
  const stopLineOffsetZ = -(crossRoadWidth / 2 + 2.5); // 9.5m before junction center
  const stopLineGeo = new THREE.BoxGeometry(4.2, 0.095, 0.6);
  const stopLineMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.25,
    roughness: 0.4,
  });

  // Approaching driver's stop line (Left Lane)
  const playerStopLine = new THREE.Mesh(stopLineGeo, stopLineMat);
  playerStopLine.position.set(-2.2, 0.048, stopLineOffsetZ);
  playerStopLine.receiveShadow = true;
  group.add(playerStopLine);

  // Opposite approach stop line (Right Lane for oncoming traffic)
  const oncomingStopLine = new THREE.Mesh(stopLineGeo, stopLineMat);
  oncomingStopLine.position.set(2.2, 0.048, -stopLineOffsetZ);
  group.add(oncomingStopLine);

  // Stop Line Text / Transverse Marking Bar
  const transverseBarGeo = new THREE.BoxGeometry(4.2, 0.092, 0.2);
  const transverseMat = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
  const transBar = new THREE.Mesh(transverseBarGeo, transverseMat);
  transBar.position.set(-2.2, 0.049, stopLineOffsetZ - 1.2);
  group.add(transBar);

  // 4. Indian IRC-style Left-Hand Traffic Light Mast & Overhead Cantilever
  const metalMat = new THREE.MeshStandardMaterial({
    color: 0x242a35,
    metalness: 0.85,
    roughness: 0.35,
  });

  const poleHeight = 6.0;
  const poleGeo = new THREE.CylinderGeometry(0.14, 0.18, poleHeight, 16);
  const poleMesh = new THREE.Mesh(poleGeo, metalMat);
  poleMesh.position.set(-(roadCfg.totalWidth / 2 + 1.2), poleHeight / 2, stopLineOffsetZ + 0.5);
  poleMesh.castShadow = true;
  group.add(poleMesh);

  // Cantilever Overhead Arm extending over Left Driving Lane
  const armLength = 3.6;
  const armGeo = new THREE.CylinderGeometry(0.09, 0.09, armLength, 12);
  armGeo.rotateZ(Math.PI / 2);
  const armMesh = new THREE.Mesh(armGeo, metalMat);
  armMesh.position.set(-(roadCfg.totalWidth / 2 + 1.2) + armLength / 2, poleHeight - 0.3, stopLineOffsetZ + 0.5);
  group.add(armMesh);

  // 5. Overhead Signal Head Housing (Above Left Lane at x = -2.2)
  const signalHeadGroup = new THREE.Group();
  signalHeadGroup.position.set(-2.2, poleHeight - 0.7, stopLineOffsetZ + 0.5);

  // Yellow-bordered backplate
  const backplateGeo = new THREE.BoxGeometry(0.9, 2.1, 0.08);
  const backplateMat = new THREE.MeshStandardMaterial({
    color: 0x111317,
    roughness: 0.7,
  });
  const backplate = new THREE.Mesh(backplateGeo, backplateMat);
  signalHeadGroup.add(backplate);

  // Signal Housing Box
  const houseGeo = new THREE.BoxGeometry(0.7, 1.85, 0.35);
  const houseMat = new THREE.MeshStandardMaterial({ color: 0x1a1e24, roughness: 0.6 });
  const house = new THREE.Mesh(houseGeo, houseMat);
  house.position.z = 0.12;
  signalHeadGroup.add(house);

  // Three Signal Lamps (Red top, Yellow mid, Green bot)
  const lampRadius = 0.22;
  const lampGeo = new THREE.SphereGeometry(lampRadius, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  lampGeo.rotateX(-Math.PI / 2);

  // Visor Hoods over each lamp
  const visorGeo = new THREE.CylinderGeometry(lampRadius + 0.04, lampRadius + 0.04, 0.22, 16, 1, true, -Math.PI * 0.75, Math.PI * 1.5);
  visorGeo.rotateX(Math.PI / 2);
  const visorMat = new THREE.MeshStandardMaterial({ color: 0x0f1115, roughness: 0.8 });

  const redMat = new THREE.MeshStandardMaterial({
    color: 0x330000,
    emissive: 0xff1100,
    emissiveIntensity: 0.1,
    roughness: 0.2,
  });
  const redLamp = new THREE.Mesh(lampGeo, redMat);
  redLamp.position.set(0, 0.55, 0.3);
  const redVisor = new THREE.Mesh(visorGeo, visorMat);
  redVisor.position.set(0, 0.55, 0.35);
  signalHeadGroup.add(redLamp, redVisor);

  const yellowMat = new THREE.MeshStandardMaterial({
    color: 0x332600,
    emissive: 0xffb300,
    emissiveIntensity: 0.1,
    roughness: 0.2,
  });
  const yellowLamp = new THREE.Mesh(lampGeo, yellowMat);
  yellowLamp.position.set(0, 0, 0.3);
  const yellowVisor = new THREE.Mesh(visorGeo, visorMat);
  yellowVisor.position.set(0, 0, 0.35);
  signalHeadGroup.add(yellowLamp, yellowVisor);

  const greenMat = new THREE.MeshStandardMaterial({
    color: 0x003318,
    emissive: 0x00ff66,
    emissiveIntensity: 0.1,
    roughness: 0.2,
  });
  const greenLamp = new THREE.Mesh(lampGeo, greenMat);
  greenLamp.position.set(0, -0.55, 0.3);
  const greenVisor = new THREE.Mesh(visorGeo, visorMat);
  greenVisor.position.set(0, -0.55, 0.35);
  signalHeadGroup.add(greenLamp, greenVisor);

  // Dynamic light projecting onto the road
  const signalPointLight = new THREE.PointLight(0x00ff66, 1.2, 18);
  signalPointLight.position.set(0, -0.2, 1.0);
  signalHeadGroup.add(signalPointLight);

  // Secondary Kerbside Signal Head at driver eye height (x = -5.0, y = 2.4)
  const secondaryHead = signalHeadGroup.clone();
  secondaryHead.scale.set(0.65, 0.65, 0.65);
  secondaryHead.position.set(-(roadCfg.totalWidth / 2 + 1.2), 2.5, stopLineOffsetZ + 0.5);
  group.add(secondaryHead);

  group.add(signalHeadGroup);

  // Set intersection world position
  group.position.set(0, 0, junctionZ);

  // Deterministic seed-based initial cycle phase offset
  const initialTimer = rng.randomRange(0, TOTAL_CYCLE_TIME);

  const intersectionObj = {
    id: `intersection_${index}`,
    index,
    group,
    junctionZ,
    stopLineZ: junctionZ + stopLineOffsetZ,
    cycleTimer: initialTimer,
    state: 'GREEN', // 'GREEN', 'YELLOW', 'RED'
    isForced: false,
    redMat,
    yellowMat,
    greenMat,
    signalLight: signalPointLight,
    signalHeadGroup,
    secondaryHead,
    passedPlayer: false,
  };

  updateSignalVisuals(intersectionObj);
  return intersectionObj;
}

/**
 * Updates lamp emissive brightness and dynamic illumination based on signal state.
 */
function updateSignalVisuals(intersection) {
  const { state, redMat, yellowMat, greenMat, signalLight } = intersection;

  if (state === 'RED') {
    redMat.emissiveIntensity = 3.5;
    redMat.color.setHex(0xff1100);
    yellowMat.emissiveIntensity = 0.05;
    greenMat.emissiveIntensity = 0.05;
    signalLight.color.setHex(0xff1100);
    signalLight.intensity = 1.6;
  } else if (state === 'YELLOW') {
    redMat.emissiveIntensity = 0.05;
    yellowMat.emissiveIntensity = 3.2;
    yellowMat.color.setHex(0xffaa00);
    greenMat.emissiveIntensity = 0.05;
    signalLight.color.setHex(0xffaa00);
    signalLight.intensity = 1.4;
  } else {
    // GREEN
    redMat.emissiveIntensity = 0.05;
    yellowMat.emissiveIntensity = 0.05;
    greenMat.emissiveIntensity = 3.2;
    greenMat.color.setHex(0x00ff66);
    signalLight.color.setHex(0x00ff66);
    signalLight.intensity = 1.6;
  }
}

/**
 * Steps traffic light cycle timers and recycles passed intersections forward.
 */
export function update(dt, carPos) {
  const totalLength = NUM_INTERSECTIONS * INTERSECTION_SPACING;

  for (let i = 0; i < intersections.length; i++) {
    const inter = intersections[i];

    // Progress timer if not manually overridden in debug mode
    if (!inter.isForced && dt > 0) {
      inter.cycleTimer = (inter.cycleTimer + dt) % TOTAL_CYCLE_TIME;

      let newState = 'GREEN';
      if (inter.cycleTimer < CYCLE_GREEN_TIME) {
        newState = 'GREEN';
      } else if (inter.cycleTimer < CYCLE_GREEN_TIME + CYCLE_YELLOW_TIME) {
        newState = 'YELLOW';
      } else {
        newState = 'RED';
      }

      if (newState !== inter.state) {
        inter.state = newState;
        updateSignalVisuals(inter);
      }
    }

    // Recycle intersection forward when 40m behind player
    if (carPos.z > inter.junctionZ + 50) {
      inter.junctionZ += totalLength;
      inter.stopLineZ = inter.junctionZ - (14.0 / 2 + 2.5);
      inter.group.position.z = inter.junctionZ;
      inter.passedPlayer = false;
      inter.isForced = false;
      // Add slight deterministic timer variance for the recycled instance
      inter.cycleTimer = rng.randomRange(0, TOTAL_CYCLE_TIME);
    }
  }
}

/**
 * Returns all active intersections.
 */
export function getIntersections() {
  return intersections;
}

/**
 * Returns the nearest upcoming intersection ahead of the given Z position.
 * @param {number} carZ
 */
export function getUpcomingIntersection(carZ) {
  let closest = null;
  let minDistance = Infinity;

  for (let i = 0; i < intersections.length; i++) {
    const inter = intersections[i];
    const dist = inter.stopLineZ - carZ;
    // Look ahead up to 180m, or still within junction area (-15m)
    if (dist > -15 && dist < minDistance) {
      minDistance = dist;
      closest = inter;
    }
  }
  return closest;
}

/**
 * Forces a specific intersection's signal state for testing/debug.
 * @param {number} index
 * @param {'RED'|'YELLOW'|'GREEN'} state
 */
export function forceLightState(index, state) {
  if (index >= 0 && index < intersections.length) {
    const inter = intersections[index];
    inter.isForced = true;
    inter.state = state;
    updateSignalVisuals(inter);
  }
}

/**
 * Toggles the signal state of the upcoming intersection to the next phase.
 * @param {number} carZ
 */
export function cycleUpcomingSignal(carZ) {
  const upcoming = getUpcomingIntersection(carZ);
  if (!upcoming) return null;

  const states = ['GREEN', 'YELLOW', 'RED'];
  const nextIdx = (states.indexOf(upcoming.state) + 1) % states.length;
  upcoming.isForced = true;
  upcoming.state = states[nextIdx];
  updateSignalVisuals(upcoming);
  return upcoming.state;
}

/**
 * Resets all intersection states and positions.
 */
export function reset(carZ = 0) {
  for (let i = 0; i < intersections.length; i++) {
    const junctionZ = carZ + 120 + i * INTERSECTION_SPACING;
    const inter = intersections[i];
    inter.junctionZ = junctionZ;
    inter.stopLineZ = junctionZ - (14.0 / 2 + 2.5);
    inter.group.position.z = junctionZ;
    inter.passedPlayer = false;
    inter.isForced = false;
    inter.cycleTimer = rng.randomRange(0, TOTAL_CYCLE_TIME);
    inter.state = 'GREEN';
    updateSignalVisuals(inter);
  }
}
