// GazeDrive Hazards Module (Multi-Class Road Hazards: Vehicles, Pedestrians, Cones, Construction Barriers, & 3D Scenario Hazards)

import * as THREE from 'three';
import { CONFIG } from './config.js';
import { logEvent } from './telemetry.js';
import { applyCollisionImpact, getSpeedKmh } from './car.js';
import { recordViolation } from './ruleEngine.js';
import { scenarioEngine } from './scenarioEngine.js';

const registeredHazards = [];
let sceneRef = null;

let collisionsCount = 0;
let hazardsAvoidedCount = 0;
let lastCollisionTime = 0;
const COLLISION_COOLDOWN_MS = 1500;

// Dedicated 3D Scenario Hazard Group (synchronized with offline scenarios.json)
let scenarioHazardGroup = null;
let scenarioCarObj = null;
let scenarioPedMesh = null;
let scenarioCyclistMesh = null;

/**
 * Creates a high-fidelity, realistically proportioned 3D Traffic Sedan/SUV.
 * Features bodywork, sloped hood, glass cabin, bright headlights, glowing taillights,
 * brake lights, alloy wheels, and a dynamic setBraking(state) method.
 */
export function createTrafficCarMesh({ color = 0xdc2626, isOncoming = false, isBraking = false } = {}) {
  const carGroup = new THREE.Group();

  // Automotive Paint Material
  const paintMat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.22,
    metalness: 0.65,
  });

  const darkTrimMat = new THREE.MeshStandardMaterial({
    color: 0x111318,
    roughness: 0.85,
  });

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x09101d,
    roughness: 0.08,
    metalness: 0.92,
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.9,
    roughness: 0.2,
  });

  // 1. Lower Chassis & Underbody Tub
  const underbodyGeo = new THREE.BoxGeometry(1.52, 0.22, 3.7);
  const underbody = new THREE.Mesh(underbodyGeo, darkTrimMat);
  underbody.position.y = 0.22;
  underbody.castShadow = true;
  carGroup.add(underbody);

  // 2. Main Car Body Beltline
  const bodyGeo = new THREE.BoxGeometry(1.50, 0.44, 3.5);
  const bodyMesh = new THREE.Mesh(bodyGeo, paintMat);
  bodyMesh.position.y = 0.44;
  bodyMesh.castShadow = true;
  carGroup.add(bodyMesh);

  // 3. Aerodynamic Sloped Hood
  const hoodGeo = new THREE.BoxGeometry(1.42, 0.08, 1.15);
  const hoodMesh = new THREE.Mesh(hoodGeo, paintMat);
  hoodMesh.position.set(0, 0.52, 1.05);
  hoodMesh.rotation.x = 0.125;
  hoodMesh.castShadow = true;
  carGroup.add(hoodMesh);

  // Front Radiator Grille
  const grilleGeo = new THREE.BoxGeometry(0.85, 0.14, 0.04);
  const grille = new THREE.Mesh(grilleGeo, darkTrimMat);
  grille.position.set(0, 0.38, 1.76);
  carGroup.add(grille);

  // 4. Modern Headlights (Xenon White / Light Cyan)
  const hlMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xa5f3fc,
    emissiveIntensity: isOncoming ? 2.8 : 1.2,
    roughness: 0.1,
  });
  const hlGeo = new THREE.BoxGeometry(0.28, 0.09, 0.1);
  const hlL = new THREE.Mesh(hlGeo, hlMat);
  hlL.position.set(-0.52, 0.44, 1.74);
  const hlR = new THREE.Mesh(hlGeo, hlMat);
  hlR.position.set(0.52, 0.44, 1.74);
  carGroup.add(hlL, hlR);

  // 5. Cabin & Glass Greenhouse
  const cabinGeo = new THREE.BoxGeometry(1.24, 0.48, 1.95);
  const cabinMesh = new THREE.Mesh(cabinGeo, glassMat);
  cabinMesh.position.set(0, 0.88, -0.15);
  cabinMesh.castShadow = true;
  carGroup.add(cabinMesh);

  // Roof
  const roofGeo = new THREE.BoxGeometry(1.12, 0.035, 1.25);
  const roofMesh = new THREE.Mesh(roofGeo, paintMat);
  roofMesh.position.set(0, 1.13, -0.32);
  roofMesh.castShadow = true;
  carGroup.add(roofMesh);

  // 6. Taillights & Brake Lights
  const taillightMat = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    emissive: 0xff0000,
    emissiveIntensity: isBraking ? 2.8 : 0.45,
    roughness: 0.2,
  });
  const tlGeo = new THREE.BoxGeometry(0.36, 0.08, 0.06);
  const tlL = new THREE.Mesh(tlGeo, taillightMat);
  tlL.position.set(-0.52, 0.50, -1.74);
  const tlR = new THREE.Mesh(tlGeo, taillightMat);
  tlR.position.set(0.52, 0.50, -1.74);

  // Center High-Mounted Brake Light (CHMSL)
  const chmslGeo = new THREE.BoxGeometry(0.38, 0.03, 0.04);
  const chmsl = new THREE.Mesh(chmslGeo, taillightMat);
  chmsl.position.set(0, 1.12, -0.96);
  carGroup.add(tlL, tlR, chmsl);

  // Rear Lip Spoiler
  const spoilerGeo = new THREE.BoxGeometry(1.36, 0.035, 0.12);
  const spoiler = new THREE.Mesh(spoilerGeo, darkTrimMat);
  spoiler.position.set(0, 0.65, -1.72);
  carGroup.add(spoiler);

  // Dual Exhaust Tips
  const exGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.08, 12);
  exGeo.rotateX(Math.PI / 2);
  const exL = new THREE.Mesh(exGeo, chromeMat);
  exL.position.set(-0.38, 0.22, -1.78);
  const exR = new THREE.Mesh(exGeo, chromeMat);
  exR.position.set(0.38, 0.22, -1.78);
  carGroup.add(exL, exR);

  // 7. Wheels & Tires
  const wheelRadius = 0.30;
  const wheelWidth = 0.20;
  const tireGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 16);
  tireGeo.rotateZ(Math.PI / 2);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x161618, roughness: 0.9 });
  const rimGeo = new THREE.CylinderGeometry(0.18, 0.18, wheelWidth + 0.01, 12);
  rimGeo.rotateZ(Math.PI / 2);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xa1a1aa, metalness: 0.8, roughness: 0.2 });

  const createWheel = (x, z) => {
    const wg = new THREE.Group();
    const tire = new THREE.Mesh(tireGeo, tireMat);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    tire.castShadow = true;
    wg.add(tire, rim);
    wg.position.set(x, wheelRadius, z);
    return wg;
  };

  const wFL = createWheel(-0.76, 1.1);
  const wFR = createWheel(0.76, 1.1);
  const wRL = createWheel(-0.76, -1.1);
  const wRR = createWheel(0.76, -1.1);
  carGroup.add(wFL, wFR, wRL, wRR);

  // Oncoming vehicles face towards player (+Z)
  if (isOncoming) {
    carGroup.rotation.y = Math.PI;
  }

  // Dynamic method to toggle intense red brake lights & forward brake dip
  const setBraking = (brakingState) => {
    const active = Boolean(brakingState);
    taillightMat.emissiveIntensity = active ? 2.8 : 0.45;
    carGroup.rotation.x = active ? -0.025 : 0;
  };

  return {
    mesh: carGroup,
    setBraking,
    wheels: [wFL, wFR, wRL, wRR],
  };
}

/**
 * Creates 3D Bicycle with Rider for Cyclist Hazards (SCN_03).
 */
export function createBicycleHazardMesh() {
  const bikeGroup = new THREE.Group();

  const frameMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.7, roughness: 0.3 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
  const spokeMat = new THREE.MeshStandardMaterial({ color: 0xd4d4d8, metalness: 0.9 });

  const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.05, 16);
  wheelGeo.rotateZ(Math.PI / 2);
  const wFront = new THREE.Mesh(wheelGeo, tireMat);
  wFront.position.set(0, 0.32, 0.65);
  const wRear = new THREE.Mesh(wheelGeo, tireMat);
  wRear.position.set(0, 0.32, -0.65);
  bikeGroup.add(wFront, wRear);

  // Frame Tube
  const frameGeo = new THREE.BoxGeometry(0.04, 0.04, 1.25);
  const frame = new THREE.Mesh(frameGeo, frameMat);
  frame.position.set(0, 0.55, 0);
  bikeGroup.add(frame);

  // Handlebars
  const barGeo = new THREE.BoxGeometry(0.55, 0.04, 0.04);
  const bar = new THREE.Mesh(barGeo, spokeMat);
  bar.position.set(0, 0.88, 0.55);
  bikeGroup.add(bar);

  // Rider Figure
  const riderTorso = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.48, 0.22),
    new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5 })
  );
  riderTorso.position.set(0, 0.95, -0.05);
  riderTorso.rotation.x = 0.25;

  const riderHead = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.18, 0.18),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 }) // Helmet
  );
  riderHead.position.set(0, 1.32, 0.05);
  bikeGroup.add(riderTorso, riderHead);

  return bikeGroup;
}

/**
 * Creates low-poly Pedestrian Mesh with distinct shirt colors.
 */
function createPedestrianMesh(shirtColor = 0xffcc00) {
  const pedGroup = new THREE.Group();

  // Torso / Shirt
  const bodyGeo = new THREE.BoxGeometry(0.5, 0.7, 0.35);
  const bodyMat = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.4 });
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.position.y = 0.9;
  bodyMesh.castShadow = true;
  pedGroup.add(bodyMesh);

  // Pants
  const pantsGeo = new THREE.BoxGeometry(0.48, 0.55, 0.32);
  const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1f2633, roughness: 0.8 });
  const pantsMesh = new THREE.Mesh(pantsGeo, pantsMat);
  pantsMesh.position.y = 0.35;
  pantsMesh.castShadow = true;
  pedGroup.add(pantsMesh);

  // Head & Hair
  const headGeo = new THREE.BoxGeometry(0.32, 0.32, 0.32);
  const headMat = new THREE.MeshStandardMaterial({ color: 0xd89a74, roughness: 0.5 });
  const headMesh = new THREE.Mesh(headGeo, headMat);
  headMesh.position.y = 1.42;
  headMesh.castShadow = true;
  pedGroup.add(headMesh);

  return pedGroup;
}

/**
 * Creates Orange Traffic Cones Cluster.
 */
function createTrafficConeCluster() {
  const clusterGroup = new THREE.Group();
  const coneMat = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.3 });
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });

  [-0.6, 0, 0.6].forEach((xOffset, idx) => {
    const coneGroup = new THREE.Group();
    const baseGeo = new THREE.BoxGeometry(0.45, 0.06, 0.45);
    const baseMesh = new THREE.Mesh(baseGeo, coneMat);
    baseMesh.position.y = 0.03;
    coneGroup.add(baseMesh);

    const coneGeo = new THREE.ConeGeometry(0.18, 0.65, 12);
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.position.y = 0.38;
    coneMesh.castShadow = true;
    coneGroup.add(coneMesh);

    const stripeGeo = new THREE.CylinderGeometry(0.1, 0.14, 0.15, 12);
    const stripeMesh = new THREE.Mesh(stripeGeo, stripeMat);
    stripeMesh.position.y = 0.42;
    coneGroup.add(stripeMesh);

    coneGroup.position.set(xOffset, 0, (idx % 2 === 0 ? 0.3 : -0.3));
    clusterGroup.add(coneGroup);
  });

  return clusterGroup;
}

/**
 * Creates Construction Road Warning Barrier.
 */
function createConstructionBarrier() {
  const barrierGroup = new THREE.Group();
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff5500, roughness: 0.4 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0x22252e, roughness: 0.8 });

  const legGeo = new THREE.BoxGeometry(0.08, 0.9, 0.6);
  const legL = new THREE.Mesh(legGeo, legMat);
  legL.position.set(-1.0, 0.45, 0);
  const legR = new THREE.Mesh(legGeo, legMat);
  legR.position.set(1.0, 0.45, 0);
  barrierGroup.add(legL, legR);

  const plankGeo = new THREE.BoxGeometry(2.1, 0.35, 0.08);
  const plankMesh = new THREE.Mesh(plankGeo, orangeMat);
  plankMesh.position.set(0, 0.65, 0);
  plankMesh.castShadow = true;
  barrierGroup.add(plankMesh);

  const stripeGeo = new THREE.BoxGeometry(0.35, 0.37, 0.09);
  [-0.6, 0, 0.6].forEach((x) => {
    const st = new THREE.Mesh(stripeGeo, whiteMat);
    st.position.set(x, 0.65, 0);
    barrierGroup.add(st);
  });

  return barrierGroup;
}

/**
 * Registers a hazard object into the scene.
 */
export function registerHazard({ id, name, type, mesh, setBraking = null, spawnDistance = 60, speed = 0, laneX = 0, updateFn = null }) {
  const hazardObj = {
    id,
    name: name || id,
    type: type || 'vehicle',
    mesh,
    setBraking,
    spawnDistance,
    speed,
    laneX,
    updateFn,
    active: true,
    triggered: false,
    spottedByDriver: false,
    collided: false,
    passedSafely: false,
    spawnTimeMs: performance.now(),
    reactionTimeMs: 0,
  };

  registeredHazards.push(hazardObj);
  if (sceneRef && mesh) {
    sceneRef.add(mesh);
  }
  return hazardObj;
}

/**
 * Initializes hazards system with realistic, visible 3D vehicles and pedestrians.
 */
export function init(scene) {
  sceneRef = scene;
  registeredHazards.length = 0;
  collisionsCount = 0;
  hazardsAvoidedCount = 0;

  // 1. SETUP DEDICATED 3D SCENARIO HAZARDS (Synchronized with scenarioEngine / scenarios.json)
  scenarioHazardGroup = new THREE.Group();

  // Scenario Lead Vehicle (Silver SUV / Sedan)
  scenarioCarObj = createTrafficCarMesh({ color: 0xd1d5db, isOncoming: false, isBraking: false });
  scenarioHazardGroup.add(scenarioCarObj.mesh);

  // Scenario Pedestrian
  scenarioPedMesh = createPedestrianMesh(0xffcc00);
  scenarioHazardGroup.add(scenarioPedMesh);

  // Scenario Cyclist
  scenarioCyclistMesh = createBicycleHazardMesh();
  scenarioHazardGroup.add(scenarioCyclistMesh);

  // Initially hide scenario hazards until an offline scenario runs
  scenarioCarObj.mesh.visible = false;
  scenarioPedMesh.visible = false;
  scenarioCyclistMesh.visible = false;
  scene.add(scenarioHazardGroup);

  // 2. AMBIENT HAZARD 1: Lead Red Sports Car in Player's Lane (x = -2.2)
  // Cruising ~26m ahead of the player, perfectly visible through the windshield!
  const leadCarObj = createTrafficCarMesh({ color: 0xdc2626, isOncoming: false, isBraking: false });
  leadCarObj.mesh.position.set(-2.2, 0, 26);
  registerHazard({
    id: 'traffic_lead_sedan',
    name: 'Lead Red Sports Car',
    type: 'vehicle',
    mesh: leadCarObj.mesh,
    setBraking: leadCarObj.setBraking,
    spawnDistance: 70,
    speed: 10.0,
    laneX: -2.2,
    updateFn: updateLeadVehicle,
  });

  // 3. AMBIENT HAZARD 2: Oncoming Black Executive Sedan in Right Lane (x = 2.2)
  // Drives TOWARDS the player with bright headlights shining, passing by on the right!
  const oncomingCarObj = createTrafficCarMesh({ color: 0x18181b, isOncoming: true, isBraking: false });
  oncomingCarObj.mesh.position.set(2.2, 0, 85);
  registerHazard({
    id: 'traffic_oncoming_sedan',
    name: 'Oncoming Black Executive Sedan',
    type: 'vehicle',
    mesh: oncomingCarObj.mesh,
    setBraking: oncomingCarObj.setBraking,
    spawnDistance: 80,
    speed: -13.5,
    laneX: 2.2,
    updateFn: updateOncomingVehicle,
  });

  // 4. AMBIENT HAZARD 3: Crossing Pedestrian (Left to Right at Zebra Crossing)
  const ped1Mesh = createPedestrianMesh(0xffa500);
  ped1Mesh.position.set(-4.2, 0, 65);
  registerHazard({
    id: 'pedestrian_crossing_1',
    name: 'Crossing Pedestrian Hazard',
    type: 'pedestrian',
    mesh: ped1Mesh,
    spawnDistance: 60,
    speed: 1.6,
    updateFn: updateCrossingPedestrian,
  });

  // 5. AMBIENT HAZARD 4: Modern White SUV in Right Lane (x = 2.2)
  const rightSuvObj = createTrafficCarMesh({ color: 0xf8fafc, isOncoming: false, isBraking: false });
  rightSuvObj.mesh.position.set(2.2, 0, 52);
  registerHazard({
    id: 'traffic_right_suv',
    name: 'White SUV in Right Lane',
    type: 'vehicle',
    mesh: rightSuvObj.mesh,
    setBraking: rightSuvObj.setBraking,
    spawnDistance: 70,
    speed: 12.0,
    laneX: 2.2,
    updateFn: updateRightLaneVehicle,
  });

  // 6. AMBIENT HAZARD 5: Construction Cones Cluster (Lane Hazard)
  const conesMesh = createTrafficConeCluster();
  conesMesh.position.set(-2.2, 0, 95);
  registerHazard({
    id: 'construction_cones',
    name: 'Traffic Cones Hazard',
    type: 'obstacle',
    mesh: conesMesh,
    spawnDistance: 65,
    speed: 0,
    laneX: -2.2,
    updateFn: updateStaticObstacle,
  });

  // 7. AMBIENT HAZARD 6: Construction Road Barrier
  const barrierMesh = createConstructionBarrier();
  barrierMesh.position.set(2.2, 0, 135);
  registerHazard({
    id: 'construction_barrier',
    name: 'Road Construction Barrier',
    type: 'obstacle',
    mesh: barrierMesh,
    spawnDistance: 70,
    speed: 0,
    laneX: 2.2,
    updateFn: updateStaticObstacle,
  });
}

/**
 * Lead Vehicle Update Logic:
 * Smoothly matches player speed while maintaining a visible 22m to 35m gap directly ahead!
 * Taps bright red brake lights if gap closes below 20m.
 */
function updateLeadVehicle(dt, carPos, hazardObj, playerSpeedMs = 0) {
  const mesh = hazardObj.mesh;
  const distZ = mesh.position.z - carPos.z;

  let targetSpeed = playerSpeedMs;
  let isBrakingActive = false;

  if (distZ < 20) {
    // Player is approaching fast: Lead car pulls ahead slightly or emergency brakes
    targetSpeed = Math.max(playerSpeedMs + 1.5, 6.0);
    isBrakingActive = true;
  } else if (distZ > 36) {
    // Player is lagging behind: Lead car decelerates smoothly so it remains clearly visible
    targetSpeed = Math.max(0, playerSpeedMs - 2.5);
    isBrakingActive = true;
  } else {
    // Comfortable cruising buffer (22m - 36m directly ahead)
    targetSpeed = Math.max(playerSpeedMs, 7.5);
    isBrakingActive = false;
  }

  hazardObj.speed = lerp(hazardObj.speed, targetSpeed, Math.min(dt * 3.5, 1.0));
  mesh.position.z += hazardObj.speed * dt;
  mesh.position.x = -2.2; // Solidly in left travel lane

  if (hazardObj.setBraking) {
    hazardObj.setBraking(isBrakingActive);
  }

  // If player overtakes, respawn smoothly ahead
  if (distZ < -15) {
    mesh.position.z = carPos.z + 40;
  }
}

/**
 * Oncoming Vehicle Update Logic:
 * Approaches towards the player in the opposite right lane (x = 2.2),
 * sweeps past, and respawns ahead to create a bustling 2-way traffic street!
 */
function updateOncomingVehicle(dt, carPos, hazardObj) {
  const mesh = hazardObj.mesh;
  mesh.position.z += hazardObj.speed * dt; // speed is negative (-13.5 m/s)
  mesh.position.x = 2.2; // Opposite lane

  // When oncoming vehicle passes 25m behind the player, respawn 85m ahead!
  if (mesh.position.z < carPos.z - 25) {
    mesh.position.z = carPos.z + 80 + Math.random() * 35;
    hazardObj.triggered = false;
    hazardObj.active = true;
    hazardObj.spottedByDriver = false;
    hazardObj.collided = false;
    hazardObj.passedSafely = false;
  }
}

/**
 * Right Lane Vehicle Update Logic:
 * Travels forward in the right lane ahead of the player.
 */
function updateRightLaneVehicle(dt, carPos, hazardObj, playerSpeedMs = 0) {
  const mesh = hazardObj.mesh;
  const distZ = mesh.position.z - carPos.z;

  let targetSpeed = Math.max(playerSpeedMs + 1.0, 11.0);
  if (distZ > 55) {
    targetSpeed = Math.max(0, playerSpeedMs - 1.5);
  }

  hazardObj.speed = lerp(hazardObj.speed, targetSpeed, Math.min(dt * 2.0, 1.0));
  mesh.position.z += hazardObj.speed * dt;
  mesh.position.x = 2.2;

  if (distZ < -20) {
    mesh.position.z = carPos.z + 60 + Math.random() * 25;
  }
}

/**
 * Crossing Pedestrian update logic (walks across street).
 */
function updateCrossingPedestrian(dt, carPos, hazardObj) {
  const mesh = hazardObj.mesh;
  const distZ = mesh.position.z - carPos.z;

  if (!hazardObj.triggered && distZ < hazardObj.spawnDistance && distZ > -10) {
    hazardObj.triggered = true;
    hazardObj.active = true;
    hazardObj.spawnTimeMs = performance.now();
    logEvent('HAZARD_SPAWNED', { id: hazardObj.id, name: hazardObj.name });
  }

  if (hazardObj.active && hazardObj.triggered) {
    mesh.position.x += hazardObj.speed * dt;
    mesh.position.y = Math.abs(Math.sin(performance.now() * 0.012)) * 0.1;

    if (mesh.position.x > 4.8) {
      hazardObj.active = false;
    }
  }

  if (carPos.z > mesh.position.z + 20) {
    if (!hazardObj.collided && !hazardObj.passedSafely) {
      hazardObj.passedSafely = true;
      hazardsAvoidedCount++;
    }

    mesh.position.set(-4.2, 0, carPos.z + 120 + Math.random() * 40);
    hazardObj.triggered = false;
    hazardObj.active = false;
    hazardObj.spottedByDriver = false;
    hazardObj.collided = false;
    hazardObj.passedSafely = false;
  }
}

/**
 * Static Obstacle update logic (Cones, Barriers).
 */
function updateStaticObstacle(dt, carPos, hazardObj) {
  const mesh = hazardObj.mesh;
  const distZ = mesh.position.z - carPos.z;

  if (!hazardObj.triggered && distZ < hazardObj.spawnDistance && distZ > -10) {
    hazardObj.triggered = true;
    hazardObj.active = true;
    hazardObj.spawnTimeMs = performance.now();
  }

  if (carPos.z > mesh.position.z + 20) {
    if (!hazardObj.collided && !hazardObj.passedSafely) {
      hazardObj.passedSafely = true;
      hazardsAvoidedCount++;
    }

    const lanes = [-2.2, 2.2];
    const newLane = lanes[Math.floor(Math.random() * lanes.length)];
    mesh.position.set(newLane, 0, carPos.z + 120 + Math.random() * 60);

    hazardObj.laneX = newLane;
    hazardObj.triggered = false;
    hazardObj.active = true;
    hazardObj.spottedByDriver = false;
    hazardObj.collided = false;
    hazardObj.passedSafely = false;
  }
}

/**
 * Main update function called every animation frame.
 */
export function update(dt, carPos, speedKmh = 0, input = null) {
  const playerSpeedMs = (speedKmh || 0) / 3.6;

  // 1. Update Ambient Traffic Hazards
  registeredHazards.forEach((h) => {
    if (h.updateFn) {
      h.updateFn(dt, carPos, h, playerSpeedMs);
    }
  });

  // 2. SYNCHRONIZE 3D SCENARIO HAZARDS WITH SCENARIO ENGINE
  // Places 3D Car, Pedestrian, or Cyclist at the exact scenario distance in 3D space!
  const scnState = scenarioEngine.getState();
  if (scnState && scnState.isRunning && scnState.currentHazardBox) {
    const scnBox = scnState.currentHazardBox;
    const distM = scnBox.distanceM;
    const activeScn = scnState.activeScenario;
    const hType = (activeScn && (activeScn.hazardType || activeScn.targetClass)) || 'VEHICLE';

    if (scenarioHazardGroup) {
      scenarioHazardGroup.visible = true;
    }

    if (hType === 'VEHICLE' || hType === 'car') {
      scenarioCarObj.mesh.visible = true;
      scenarioPedMesh.visible = false;
      scenarioCyclistMesh.visible = false;

      // Position directly at the scenario distance in front of player!
      scenarioCarObj.mesh.position.set(-2.2, 0, carPos.z + distM);
      scenarioCarObj.setBraking(scnState.isAlertActive || scnState.isFrozen);

      // Temporarily hide ambient lead car to prevent mesh overlap during vehicle braking scenario
      const leadCar = registeredHazards.find((h) => h.id === 'traffic_lead_sedan');
      if (leadCar && leadCar.mesh) {
        leadCar.mesh.visible = false;
      }
    } else if (hType === 'PEDESTRIAN' || hType === 'person') {
      scenarioPedMesh.visible = true;
      scenarioCarObj.mesh.visible = false;
      scenarioCyclistMesh.visible = false;

      // Smooth lateral crossing movement across road
      const crossProgress = Math.max(0, Math.min(1.0, ((scnState.clockMs || 2400) - 2400) / 2400));
      const pedX = 3.6 - crossProgress * 5.2;
      scenarioPedMesh.position.set(pedX, 0, carPos.z + distM);
    } else if (hType === 'CYCLIST' || hType === 'bicycle') {
      scenarioCyclistMesh.visible = true;
      scenarioCarObj.mesh.visible = false;
      scenarioPedMesh.visible = false;
      scenarioCyclistMesh.position.set(0.0, 0, carPos.z + distM);
    }
  } else {
    // No active offline scenario: hide scenario meshes & ensure ambient lead car is visible
    if (scenarioCarObj) scenarioCarObj.mesh.visible = false;
    if (scenarioPedMesh) scenarioPedMesh.visible = false;
    if (scenarioCyclistMesh) scenarioCyclistMesh.visible = false;

    const leadCar = registeredHazards.find((h) => h.id === 'traffic_lead_sedan');
    if (leadCar && leadCar.mesh) {
      leadCar.mesh.visible = true;
    }
  }

  checkBrakingReaction(carPos, speedKmh, input);
  checkCollisions(carPos);
}

/**
 * Checks if the driver slows down or brakes upon spotting an approaching hazard.
 */
function checkBrakingReaction(carPos, speedKmh, input) {
  const isBrakingInput = input ? (input.brake > 0.08 || input.handbrake > 0.08) : false;

  for (let i = 0; i < registeredHazards.length; i++) {
    const h = registeredHazards[i];
    if (!h.mesh || !h.active || !h.triggered || h.collided || h.passedSafely) continue;

    const distZ = h.mesh.position.z - carPos.z;
    if (distZ > 4 && distZ < 55) {
      if (isBrakingInput && h.reactionTimeMs === 0) {
        h.reactionTimeMs = Math.round(performance.now() - h.spawnTimeMs);
        h.spottedByDriver = true;

        logEvent('HAZARD_BRAKE_REACTION_CONFIRMED', {
          id: h.id,
          name: h.name,
          speedKmh: Math.round(speedKmh),
          reactionTimeMs: h.reactionTimeMs,
          distanceM: Math.round(distZ),
        });
      }
    }
  }
}

/**
 * Checks 3D Bounding Box collisions for all hazard types.
 */
function checkCollisions(carPos) {
  const now = performance.now();
  if (now - lastCollisionTime < COLLISION_COOLDOWN_MS) return;

  const carWidth = 1.46;
  const carLength = 3.6;

  for (let i = 0; i < registeredHazards.length; i++) {
    const h = registeredHazards[i];
    if (!h.mesh || !h.mesh.visible) continue;

    const hPos = h.mesh.position;
    let hWidth = 1.52;
    let hLength = 3.6;

    if (h.type === 'pedestrian') {
      hWidth = 0.8;
      hLength = 0.8;
    } else if (h.type === 'obstacle') {
      hWidth = h.id === 'construction_barrier' ? 2.1 : 1.4;
      hLength = 1.0;
    }

    const dx = Math.abs(carPos.x - hPos.x);
    const dz = Math.abs(carPos.z - hPos.z);

    const isColliding = dx < (carWidth + hWidth) * 0.46 && dz < (carLength + hLength) * 0.44;

    if (isColliding && !h.collided) {
      h.collided = true;
      collisionsCount++;
      lastCollisionTime = now;

      applyCollisionImpact();

      recordViolation('COLLISION', {
        speedKmh: getSpeedKmh(),
        position: { x: carPos.x, y: 0, z: carPos.z },
        description: `Collided with ${h.name} at ${Math.round(getSpeedKmh())} km/h.`,
      });

      logEvent('HAZARD_COLLISION', {
        hazardId: h.id,
        hazardName: h.name,
        type: h.type,
        carPos: [carPos.x, carPos.z],
        totalCollisions: collisionsCount,
      });

      break;
    }
  }
}

/**
 * Driver Webcam Eye Gaze Fixation Check.
 */
export function checkGazeFixation(gazeX, gazeY, camera, width, height) {
  if (!camera || !gazeX || !gazeY) return null;

  const activeTarget = getPrimaryTargetHazard(camera, width, height);
  if (!activeTarget || !activeTarget.isVisible) return null;

  const bboxLeft = activeTarget.screenX - 55;
  const bboxRight = activeTarget.screenX + 55;
  const bboxTop = activeTarget.screenY - 65;
  const bboxBottom = activeTarget.screenY + 65;

  const isInsideBBox = gazeX >= bboxLeft && gazeX <= bboxRight && gazeY >= bboxTop && gazeY <= bboxBottom;

  if (isInsideBBox && !activeTarget.spottedByDriver) {
    activeTarget.hazardRef.spottedByDriver = true;
    activeTarget.hazardRef.reactionTimeMs = Math.round(performance.now() - activeTarget.hazardRef.spawnTimeMs);

    logEvent('HAZARD_GAZE_FIXATION_CONFIRMED', {
      id: activeTarget.id,
      name: activeTarget.name,
      type: activeTarget.hazardRef.type,
      reactionTimeMs: activeTarget.hazardRef.reactionTimeMs,
      gazeX,
      gazeY,
      hazardScreenPos: [activeTarget.screenX, activeTarget.screenY],
    });
  }

  return {
    id: activeTarget.id,
    name: activeTarget.name,
    spotted: activeTarget.hazardRef.spottedByDriver,
    reactionTimeMs: activeTarget.hazardRef.reactionTimeMs,
    screenX: activeTarget.screenX,
    screenY: activeTarget.screenY,
  };
}

/**
 * Returns primary hazard closest to player's view direction.
 */
function getPrimaryTargetHazard(camera, width, height) {
  let closestTarget = null;
  let minScreenDist = Infinity;
  const tempV = new THREE.Vector3();

  for (let i = 0; i < registeredHazards.length; i++) {
    const h = registeredHazards[i];
    if (!h.mesh || !h.mesh.visible) continue;

    tempV.copy(h.mesh.position);
    tempV.y += (h.type === 'pedestrian' ? 0.9 : 0.65);
    tempV.project(camera);

    const isVisible = tempV.z < 1.0 && Math.abs(tempV.x) < 1.1 && Math.abs(tempV.y) < 1.1;
    if (!isVisible) continue;

    const x = (tempV.x * 0.5 + 0.5) * width;
    const y = (-(tempV.y * 0.5) + 0.5) * height;
    const screenDist = Math.hypot(x - width / 2, y - height / 2);

    if (screenDist < minScreenDist) {
      minScreenDist = screenDist;
      closestTarget = {
        id: h.id,
        name: h.name,
        type: h.type,
        worldPos: h.mesh.position,
        screenX: Math.round(x),
        screenY: Math.round(y),
        isVisible: true,
        active: h.active,
        spottedByDriver: h.spottedByDriver,
        collided: h.collided,
        reactionTimeMs: h.reactionTimeMs,
        hazardRef: h,
      };
    }
  }

  return closestTarget;
}

export function getHazardDebugInfo(camera, width, height) {
  const target = getPrimaryTargetHazard(camera, width, height);
  const isCollisionActive = performance.now() - lastCollisionTime < COLLISION_COOLDOWN_MS;

  if (!target) {
    return {
      isVisible: false,
      collisionsCount,
      hazardsAvoidedCount,
      isCollisionActive,
    };
  }

  return {
    ...target,
    collisionsCount,
    hazardsAvoidedCount,
    isCollisionActive,
  };
}

/**
 * Returns all active hazards within 70m of the vehicle, projecting tight 2D bounding boxes.
 */
export function getAllActiveHazards(camera, width, height, carZ = 0) {
  const visible = [];
  const tempV = new THREE.Vector3();

  for (const h of registeredHazards) {
    if (!h.active || !h.mesh || !h.mesh.visible) continue;

    const distM = Math.round(h.mesh.position.z - carZ);
    // Strict range filter: Only detect real hazards within 70m ahead (excludes distant floating boxes)
    if (distM > 70 || distM < 2) continue;

    tempV.copy(h.mesh.position);
    const isPed = h.type === 'pedestrian' || h.id.startsWith('pedestrian');
    tempV.y += (isPed ? 0.9 : 0.65);
    tempV.project(camera);

    // Frustum check: Must be in front of the camera and within viewport bounds
    if (tempV.z >= 1.0 || Math.abs(tempV.x) > 1.15 || Math.abs(tempV.y) > 1.15) continue;

    const screenX = (tempV.x * 0.5 + 0.5) * width;
    const screenY = (-(tempV.y * 0.5) + 0.5) * height;

    // Accurate perspective bounding box sizing matching the 3D mesh dimensions
    const scaleFactor = 32.0 / Math.max(6, distM);
    const boxW = Math.round((isPed ? 38 : 72) * scaleFactor);
    const boxH = Math.round((isPed ? 84 : 54) * scaleFactor);

    visible.push({
      id: h.id,
      name: isPed ? 'PEDESTRIAN' : (h.type === 'vehicle' ? 'VEHICLE' : 'HAZARD'),
      type: isPed ? 'PEDESTRIAN' : 'VEHICLE',
      distanceM: Math.max(1, distM),
      screenX: Math.round(screenX),
      screenY: Math.round(screenY),
      boxW,
      boxH,
      minX: Math.round(screenX - boxW / 2),
      maxX: Math.round(screenX + boxW / 2),
      minY: Math.round(screenY - boxH / 2),
      maxY: Math.round(screenY + boxH / 2),
      spotted: h.spottedByDriver,
      reactionTimeMs: h.reactionTimeMs,
      rawHazard: h,
    });
  }

  return visible.sort((a, b) => a.distanceM - b.distanceM);
}

/**
 * Resets all hazards to their starting positions relative to carZ.
 */
export function resetHazards(carZ = 0) {
  collisionsCount = 0;
  hazardsAvoidedCount = 0;
  lastCollisionTime = 0;

  registeredHazards.forEach((h) => {
    if (h.mesh) {
      if (h.id === 'traffic_lead_sedan') {
        h.mesh.position.set(-2.2, 0, carZ + 26);
        h.speed = 10.0;
      } else if (h.id === 'traffic_oncoming_sedan') {
        h.mesh.position.set(2.2, 0, carZ + 85);
        h.speed = -13.5;
      } else if (h.id === 'pedestrian_crossing_1') {
        h.mesh.position.set(-4.2, 0, carZ + 65);
      } else if (h.id === 'traffic_right_suv') {
        h.mesh.position.set(2.2, 0, carZ + 52);
        h.speed = 12.0;
      } else if (h.id === 'construction_cones') {
        h.mesh.position.set(-2.2, 0, carZ + 95);
      } else if (h.id === 'construction_barrier') {
        h.mesh.position.set(2.2, 0, carZ + 135);
      }

      h.triggered = false;
      h.active = true;
      h.spottedByDriver = false;
      h.collided = false;
      h.passedSafely = false;
      h.reactionTimeMs = 0;
    }
  });

  if (scenarioCarObj) scenarioCarObj.mesh.visible = false;
  if (scenarioPedMesh) scenarioPedMesh.visible = false;
  if (scenarioCyclistMesh) scenarioCyclistMesh.visible = false;
}

function lerp(start, end, amt) {
  return start + (end - start) * amt;
}
