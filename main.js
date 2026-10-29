// GazeDrive Main Application Entry Point (Photorealistic HDRI Skybox & Environment)

import * as THREE from 'three';
import { CONFIG, gaze } from './config.js';
import * as controls from './controls.js';
import * as car from './car.js';
import * as road from './road.js';
import * as hazards from './hazards.js';
import * as hud from './hud.js';
import * as telemetry from './telemetry.js';
import * as trafficLight from './trafficLight.js';
import * as ruleEngine from './ruleEngine.js';
import { setupEnvironmentSky } from './assetLoader.js';
import { setEnvironmentQuality } from './scenery.js';
import { scenarioEngine } from './scenarioEngine.js';
import * as trafficSigns from './trafficSigns.js';

let scene, camera, renderer, clock, dirLight;
let cameraMode = 'DRIVER'; // Default to Photorealistic First-Person Driver View ('DRIVER' or 'CHASE')
let currentCameraPos = new THREE.Vector3();
let currentLookAt = new THREE.Vector3();

let frameIndex = 0;
let fps = 60;
let lastFpsUpdate = 0;
let frameCountForFps = 0;

/**
 * Initializes the Three.js WebGL application & system modules.
 */
function initApp() {
  hud.init();

  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container element #canvas-container not found!');
    return;
  }

  const width = container.clientWidth || 960;
  const height = container.clientHeight || 540;

// 1. Scene Setup & Urban HDRI / Atmospheric Haze Sky
  scene = new THREE.Scene();
  setupEnvironmentSky(scene, renderer);

  // 2. Camera Setup
  camera = new THREE.PerspectiveCamera(CONFIG.CAMERA.fov, width / height, 0.1, 800);

  // 3. WebGL Renderer Setup with ACES Filmic Tone Mapping & Shadow Mapping
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  container.appendChild(renderer.domElement);

  // 4. Photorealistic Lighting System
  setupLighting();

  // 5. Initialize Sub-modules
  road.init(scene);
  car.init(scene);
  hazards.init(scene);
  trafficLight.init(scene);
  trafficSigns.init(scene);
  ruleEngine.init();
  telemetry.init();

  // 6. Initialize Keyboard Controls with callbacks
  controls.init({
    onCameraToggle: () => {
      cameraMode = cameraMode === 'CHASE' ? 'DRIVER' : 'CHASE';
      car.setCameraMode(cameraMode);
      hud.updateCameraModeLabel(cameraMode);
      telemetry.logEvent('CAMERA_TOGGLE', { mode: cameraMode });
    },
    onSeatbeltToggle: () => {
      const state = car.toggleSeatbelt();
      hud.handleSeatbeltToggle(state);
      telemetry.logEvent('SEATBELT_TOGGLE', { fastened: state });
    },
    onShiftUp: () => {
      const g = car.shiftUp();
      hud.handleGearShift(g);
      telemetry.logEvent('GEAR_SHIFT', { gear: g });
    },
    onShiftDown: () => {
      const g = car.shiftDown();
      hud.handleGearShift(g);
      telemetry.logEvent('GEAR_SHIFT', { gear: g });
    },
    onExportTelemetry: () => {
      telemetry.exportSession();
    },
    onDebugToggle: () => {
      hud.toggleDebug();
    },
    onRulesDebugToggle: () => {
      hud.toggleRulesDebug();
    },
    onReset: () => {
      car.reset();
      hazards.resetHazards(0);
      trafficLight.reset(0);
      trafficSigns.reset(0);
      ruleEngine.reset();
      hud.handleReset();
      telemetry.logEvent('SIMULATION_RESET');
    },
  });


  car.setCameraMode(cameraMode);
  hud.updateCameraModeLabel(cameraMode);
  clock = new THREE.Clock();

  window.addEventListener('resize', onWindowResize);

  // Initial Camera Placement
  const initialCarPos = car.getPosition();
  currentCameraPos.set(
    initialCarPos.x + CONFIG.CAMERA.driverOffset.x,
    initialCarPos.y + CONFIG.CAMERA.driverOffset.y,
    initialCarPos.z + CONFIG.CAMERA.driverOffset.z
  );
  currentLookAt.set(
    initialCarPos.x + CONFIG.CAMERA.driverLookAtOffset.x,
    initialCarPos.y + CONFIG.CAMERA.driverLookAtOffset.y,
    initialCarPos.z + CONFIG.CAMERA.driverLookAtOffset.z
  );
  camera.position.copy(currentCameraPos);
  camera.lookAt(currentLookAt);

  setTimeout(onWindowResize, 100);
  animate();
}

/**
 * Configures Hemisphere & Directional Sunlight.
 */
function setupLighting() {
  const hemiLight = new THREE.HemisphereLight(
    CONFIG.COLORS.hemiSky,
    CONFIG.COLORS.hemiGround,
    0.85
  );
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);

  dirLight = new THREE.DirectionalLight(CONFIG.COLORS.sunLight, 1.4);
  dirLight.position.set(30, 45, 20);
  dirLight.castShadow = true;

  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 180;

  const shadowCamSize = 30;
  dirLight.shadow.camera.left = -shadowCamSize;
  dirLight.shadow.camera.right = shadowCamSize;
  dirLight.shadow.camera.top = shadowCamSize;
  dirLight.shadow.camera.bottom = -shadowCamSize;

  scene.add(dirLight);
  scene.add(dirLight.target);
}

/**
 * Isolated camera calculation function for smooth chase & driver's-eye views.
 */
function updateCamera(dt, carMesh, carPos, mode) {
  let targetCamPos = new THREE.Vector3();
  let targetLookAtPos = new THREE.Vector3();

  if (mode === 'CHASE') {
    targetCamPos.set(
      carPos.x + CONFIG.CAMERA.chaseOffset.x,
      carPos.y + CONFIG.CAMERA.chaseOffset.y,
      carPos.z + CONFIG.CAMERA.chaseOffset.z
    );
    targetLookAtPos.set(
      carPos.x + CONFIG.CAMERA.chaseLookAtOffset.x,
      carPos.y + CONFIG.CAMERA.chaseLookAtOffset.y,
      carPos.z + CONFIG.CAMERA.chaseLookAtOffset.z
    );
  } else {
    // Photorealistic Driver's Eye (In-car cabin view looking forward over dashboard)
    targetCamPos.set(
      carPos.x + CONFIG.CAMERA.driverOffset.x,
      carPos.y + CONFIG.CAMERA.driverOffset.y,
      carPos.z + CONFIG.CAMERA.driverOffset.z
    );
    targetLookAtPos.set(
      carPos.x + CONFIG.CAMERA.driverLookAtOffset.x,
      carPos.y + CONFIG.CAMERA.driverLookAtOffset.y,
      carPos.z + CONFIG.CAMERA.driverLookAtOffset.z
    );
  }

  const posLerp = mode === 'CHASE' ? CONFIG.CAMERA.lerpFactorPosition : 0.25;
  const lookLerp = mode === 'CHASE' ? CONFIG.CAMERA.lerpFactorLookAt : 0.35;

  currentCameraPos.lerp(targetCamPos, Math.min(dt * (posLerp * 60), 1.0));
  currentLookAt.lerp(targetLookAtPos, Math.min(dt * (lookLerp * 60), 1.0));

  camera.position.copy(currentCameraPos);
  camera.lookAt(currentLookAt);
}

/**
 * Main requestAnimationFrame update & render loop.
 */
function animate() {
  requestAnimationFrame(animate);

  let dt = clock.getDelta();
  if (dt > 0.1) dt = 0.1;

  const effectiveDt = hud.isSimPlaying() ? dt * (CONFIG.simSpeedMultiplier || 1.0) : 0;

  frameIndex++;

  frameCountForFps++;
  const now = performance.now();
  if (now - lastFpsUpdate >= 500) {
    fps = Math.round((frameCountForFps * 1000) / (now - lastFpsUpdate));
    frameCountForFps = 0;
    lastFpsUpdate = now;
  }

  const input = controls.update(effectiveDt);
  car.update(effectiveDt, input);

  const carPos = car.getPosition();
  const speedMs = car.getSpeedMs();
  const speedKmh = car.getSpeedKmh();
  const distanceM = car.getDistanceTraveled();

  if (dirLight) {
    dirLight.position.set(carPos.x + 30, 40, carPos.z + 20);
    dirLight.target.position.copy(carPos);
  }

  road.update(carPos.z);
  trafficLight.update(effectiveDt, carPos);
  hazards.update(effectiveDt, carPos, speedKmh, input);

  const container = document.getElementById('canvas-container');
  const w = container ? container.clientWidth : window.innerWidth;
  const h = container ? container.clientHeight : window.innerHeight;

  const signsData = trafficSigns.update(effectiveDt > 0 ? effectiveDt : dt, carPos, speedKmh, camera, w, h, gaze);
  const signsOverlay = trafficSigns.getSignsScreenOverlay(camera, w, h, carPos.z);
  const upcomingIntersection = trafficLight.getUpcomingIntersection(carPos.z);

  ruleEngine.update(effectiveDt, carPos, speedKmh, input, signsData.activeZoneLimit, signsData.activeZoneName);

  updateCamera(effectiveDt > 0 ? effectiveDt : dt, car.getCarMesh(), carPos, cameraMode);

  telemetry.recordFrame({
    frameIndex,
    posX: carPos.x,
    posZ: carPos.z,
    speedMs,
    speedKmh,
    steering: input.steer,
    throttle: input.throttle,
    brake: input.brake,
    seatbelt: car.getSeatbeltStatus(),
    currentGear: car.getCurrentGear(),
    engineRpm: car.getEngineRpm(),
    cameraMode,
  });

  // 60 Hz synchronized scenario clock update with gaze fixation & alert-to-freeze reaction test
  const scenarioState = scenarioEngine.update(effectiveDt > 0 ? effectiveDt : dt, gaze, input, w, h);

  if (gaze.valid) {
    hazards.checkGazeFixation(gaze.x, gaze.y, camera, w, h);
  }

  const allHazards = hazards.getAllActiveHazards(camera, w, h, carPos.z);
  const hazardDebug = hazards.getHazardDebugInfo(camera, w, h);

  hud.update({
    speedKmh,
    speedMs,
    distanceM,
    input,
    cameraMode,
    fps,
    carPos,
    allHazards,
    hazardDebug,
    scenarioState,
    signsData,
    signsOverlay,
    upcomingIntersection,
    maxSpeedKmh: CONFIG.CAR.maxSpeed * 3.6,
    seatbelt: car.getSeatbeltStatus(),
    currentGear: car.getCurrentGear(),
    engineRpm: car.getEngineRpm(),
    recommendedGear: car.getRecommendedGear(),
    isStalled: car.isEngineStalledStatus(),
  });


  renderer.render(scene, camera);
}

function onWindowResize() {
  const container = document.getElementById('canvas-container');
  if (!container || !renderer || !camera) return;

  const width = container.clientWidth || 960;
  const height = container.clientHeight || 540;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

/**
 * Dynamically adjusts rendering quality (Low / Medium / High).
 */
export function setQuality(quality) {
  const q = (quality || 'HIGH').toUpperCase();
  setEnvironmentQuality(q);
  if (!renderer || !dirLight) return;

  if (q === 'LOW') {
    renderer.shadowMap.enabled = false;
    renderer.setPixelRatio(1.0);
  } else if (q === 'MEDIUM') {
    renderer.shadowMap.enabled = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    renderer.setPixelRatio(1.0);
  } else {
    // HIGH
    renderer.shadowMap.enabled = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  console.log(`[GazeDrive] Graphics & Environment Quality set to: ${q}`);
}

window.setQuality = setQuality;
window.gaze = gaze;
window.addEventListener('DOMContentLoaded', initApp);
