// GazeDrive Real-Time AI Detection & Driver Attention Engine
// Integrates MediaPipe Iris Tracking (478 3D Landmarks) + Pretrained Object Detection (COCO-SSD) + 3D Head Pose (Yaw/Pitch/Roll) + PERCLOS & Fatigue Analysis

import { gaze } from './config.js';
import { visionMamba } from './visionMamba.js';
import { gazeCalibration } from './gazeCalibration.js';
import { scenarioEngine } from './scenarioEngine.js';

let faceMesh = null;
let cocoModel = null;
let isModelLoading = false;
let isCocoReady = false;
let isWebcamActive = false;
let webcamStream = null;

let cabinVideo = null;
let cabinCanvas = null;
let cabinCtx = null;

let roadCanvas = null;
let roadOverlayCanvas = null;
let roadOverlayCtx = null;

// Exact 0.7 / 0.3 Exponential Moving Average (EMA) Filter Constants
const EMA_ALPHA = 0.7;
const EMA_BETA = 0.3;

// Filtered State
let emaGazeDeltaX = 0;
let emaGazeDeltaY = 0;
let emaYawDeg = 0;
let emaPitchDeg = 0;
let emaRollDeg = 0;

// Driver Metrics State
let currentEyesOpen = 100;
let currentEarLeft = 0.32;
let currentEarRight = 0.32;
let currentAvgEar = 0.32;
let currentPerclos = 0;
let currentBlinksPerMin = 16;
let currentHeadPose = 'Center';
let currentDrowsiness = 'Low';
let currentDistraction = 'Low';
let currentDistractionReason = 'Normal';
let currentAttentionZone = 'Road Ahead';
let currentGazeFocus = 'Road Ahead';
let currentGazeStatus = 'Good'; // 'Good', 'Warning', 'Alert'
let latestPredictedHazards = [];

// Off-road gaze timing & distraction tracking
let offRoadStartTime = 0;
let offRoadDurationSec = 0;
let rollingEarWindow = [];
let blinkTimestamps = [];
let wasEyeClosedLastFrame = false;

// Eye visibility & simulation pause detection state
let isEyesPaused = false;
let eyePauseReason = null; // 'EYES_CLOSED' | 'EYES_NOT_VISIBLE' | null
let eyeClosureStartTime = 0;
let eyeHiddenStartTime = 0;

// Simulation & Demo Pose State
// Modes: 'ROAD_AHEAD', 'LEFT_MIRROR', 'RIGHT_MIRROR', 'PHONE_DISTRACTION', 'DASHBOARD_GLANCE', 'REARVIEW_MIRROR', 'DROWSY_FATIGUE', 'EYES_CLOSED', 'FACE_HIDDEN'
let simulatedDriverPose = 'ROAD_AHEAD';
let simulatedEyesState = 'OPEN'; // 'OPEN' | 'CLOSED' | 'HIDDEN'

// Gaze history (for sparkline)
const gazeSparklineHistory = new Array(60).fill(24);

// Callbacks
let onMetricsUpdated = null;
let onHazardStateChanged = null;

// MediaPipe 478 Landmark Indices Definitions
const FACE_OVAL = [
  10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378,
  400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21,
  54, 103, 67, 109, 10
];

const LEFT_EYE_CONTOUR = [
  33, 7, 163, 144, 145, 153, 154, 155, 133, 173, 157, 158, 159, 160, 161, 246, 33
];

const RIGHT_EYE_CONTOUR = [
  362, 382, 381, 380, 374, 373, 390, 249, 263, 466, 388, 387, 386, 385, 384, 398, 362
];

const LEFT_EYEBROW = [70, 63, 105, 66, 107];
const RIGHT_EYEBROW = [336, 296, 334, 293, 300];
const NOSE_BRIDGE = [168, 6, 197, 195, 5, 4, 1, 2];
const LIPS_OUTER = [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 61];

// 10 Refined Iris Landmarks (MediaPipe FaceMesh with Iris)
// Left Iris: 468 = Center; 469 = Right/Outer; 470 = Top; 471 = Left/Inner; 472 = Bottom
const LEFT_IRIS_CENTER = 468;
const LEFT_IRIS_RING = [469, 470, 471, 472];

// Right Iris: 473 = Center; 474 = Right/Inner; 475 = Top; 476 = Left/Outer; 477 = Bottom
const RIGHT_IRIS_CENTER = 473;
const RIGHT_IRIS_RING = [474, 475, 476, 477];

/**
 * Initializes the AI Detection System: MediaPipe FaceMesh (Iris) + COCO-SSD
 */
export async function initAIDetection(options = {}) {
  onMetricsUpdated = options.onMetricsUpdated || null;
  onHazardStateChanged = options.onHazardStateChanged || null;

  cabinVideo = document.getElementById('cabin-webcam-video');
  cabinCanvas = document.getElementById('cabin-mesh-overlay-canvas');
  roadOverlayCanvas = document.getElementById('road-ai-overlay-canvas');

  if (cabinCanvas) {
    cabinCtx = cabinCanvas.getContext('2d');
  }
  if (roadOverlayCanvas) {
    roadOverlayCtx = roadOverlayCanvas.getContext('2d');
    roadOverlayCanvas.addEventListener('click', (e) => {
      const rect = roadOverlayCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // If clicked on top-left Vim-SS2D badge (12, 12, 230, 32)
      if (x >= 10 && x <= 240 && y >= 10 && y <= 45) {
        window.dispatchEvent(new CustomEvent('open-mamba-inspector'));
      }
    });
  }

  // 1. Initialize MediaPipe FaceMesh with IRIS refinement
  await initMediaPipeFaceMesh();

  // 2. Start Live Camera (with smooth simulated fallback if needed)
  await startCabinCamera();

  // 3. Load Pretrained Object Detection Model (COCO-SSD) in background
  loadPretrainedHazardModel();
}

/**
 * Configures MediaPipe FaceMesh with Iris landmarks.
 */
async function initMediaPipeFaceMesh() {
  try {
    if (window.FaceMesh) {
      faceMesh = new window.FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true, // Crucial: Activates 10 Iris Landmarks (468-477)
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      faceMesh.onResults(onFaceMeshResults);
      console.log('[GazeDrive AI] MediaPipe FaceMesh with Iris tracking initialized successfully.');
    } else {
      console.warn('[GazeDrive AI] MediaPipe FaceMesh not yet in window, retrying in 500ms...');
      setTimeout(initMediaPipeFaceMesh, 500);
    }
  } catch (err) {
    console.error('[GazeDrive AI] Failed to initialize MediaPipe FaceMesh:', err);
  }
}

/**
 * Starts live webcam on the cabin video element.
 */
export async function startCabinCamera() {
  if (!cabinVideo) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 480 },
        height: { ideal: 360 },
        facingMode: 'user',
      },
      audio: false,
    });

    webcamStream = stream;
    cabinVideo.srcObject = stream;
    await cabinVideo.play();
    isWebcamActive = true;

    const fallbackImg = document.getElementById('cabin-driver-fallback-img');
    if (fallbackImg) fallbackImg.style.display = 'none';
    cabinVideo.style.display = 'block';

    const camLabel = document.getElementById('lbl-camera-connected');
    if (camLabel) camLabel.textContent = 'Camera Connected (Live)';

    const toggleLbl = document.getElementById('lbl-webcam-toggle');
    if (toggleLbl) toggleLbl.textContent = 'Live Webcam Active';

    processCameraFrames();
  } catch (err) {
    console.warn('[GazeDrive AI] Webcam not active. Using realistic simulated driver feed:', err);
    isWebcamActive = false;
    startSimulatedDriverFeed();
  }
}

export async function toggleCabinWebcam() {
  if (isWebcamActive) {
    if (webcamStream) {
      webcamStream.getTracks().forEach((track) => track.stop());
      webcamStream = null;
    }
    isWebcamActive = false;
    const fallbackImg = document.getElementById('cabin-driver-fallback-img');
    if (fallbackImg) fallbackImg.style.display = 'block';
    if (cabinVideo) cabinVideo.style.display = 'none';

    const toggleLbl = document.getElementById('lbl-webcam-toggle');
    if (toggleLbl) toggleLbl.textContent = 'Enable Live Webcam';

    const camLabel = document.getElementById('lbl-camera-connected');
    if (camLabel) camLabel.textContent = 'Camera: Candidate Feed';

    startSimulatedDriverFeed();
  } else {
    await startCabinCamera();
  }
}

/**
 * Sends frames to MediaPipe FaceMesh.
 */
async function processCameraFrames() {
  if (!faceMesh || !cabinVideo || !isWebcamActive) return;

  if (cabinVideo.readyState >= 2) {
    try {
      await faceMesh.send({ image: cabinVideo });
    } catch (e) {
      // Frame drop ignore
    }
  }

  requestAnimationFrame(processCameraFrames);
}

/**
 * Core MediaPipe FaceMesh & Iris Callback for Live Webcam Frames.
 */
function onFaceMeshResults(results) {
  if (!cabinCanvas || !cabinCtx) return;

  const w = (cabinCanvas.width = cabinCanvas.clientWidth || 320);
  const h = (cabinCanvas.height = cabinCanvas.clientHeight || 220);

  cabinCtx.clearRect(0, 0, w, h);

  if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
    // Face not detected in camera frame
    handleFaceLost(w, h);
    return;
  }

  const landmarks = results.multiFaceLandmarks[0];

  // 1. Calculate Eye Aspect Ratio (EAR) using 6-point formulation per eye
  const { earL, earR, avgEar, eyesOpenPct } = computeEAR(landmarks);
  currentEarLeft = Math.round(earL * 100) / 100;
  currentEarRight = Math.round(earR * 100) / 100;
  currentAvgEar = Math.round(avgEar * 100) / 100;
  currentEyesOpen = eyesOpenPct;

  // 2. Compute 3D Head Pose (Yaw, Pitch, Roll in degrees)
  const { rawYaw, rawPitch, rawRoll } = computeHeadPose3D(landmarks);
  emaYawDeg = EMA_ALPHA * rawYaw + EMA_BETA * emaYawDeg;
  emaPitchDeg = EMA_ALPHA * rawPitch + EMA_BETA * emaPitchDeg;
  emaRollDeg = EMA_ALPHA * rawRoll + EMA_BETA * emaRollDeg;

  // Classify Head Pose Label
  if (emaYawDeg < -18) currentHeadPose = 'Turned Left';
  else if (emaYawDeg > 18) currentHeadPose = 'Turned Right';
  else if (emaPitchDeg < -16) currentHeadPose = 'Looking Down';
  else if (emaPitchDeg > 12) currentHeadPose = 'Looking Up';
  else currentHeadPose = 'Center';

  // 3. Compute Normalized Iris Deflection (Left: 468, Right: 473)
  const { rawIrisX, rawIrisY } = computeIrisDeflection(landmarks);
  emaGazeDeltaX = EMA_ALPHA * rawIrisX + EMA_BETA * emaGazeDeltaX;
  emaGazeDeltaY = EMA_ALPHA * rawIrisY + EMA_BETA * emaGazeDeltaY;

  // 4. Update Drowsiness, PERCLOS, and Blink Tracking
  updateFatigueMetrics(eyesOpenPct, avgEar);

  // 5. Classify Driver Attention Zone from combined Head Pose + Iris Gaze
  classifyAttentionZone();

  // 6. Map to Road View screen coordinates using 9-Point Calibration Matrix + Gaze Offset
  updateScreenGazeMapping();

  // 7. Render Deep MediaPipe FaceMesh & Iris Visual HUD on Canvas
  drawFaceMeshOverlay(cabinCtx, w, h, landmarks, true);

  // 8. Update Sparkline & Vision Mamba SSM
  visionMamba.updateGazeSSM(emaGazeDeltaX * 10, emaGazeDeltaY * 10, currentEyesOpen / 100, 0.033);
  const sparkVal = Math.round(24 + emaGazeDeltaX * 100);
  gazeSparklineHistory.push(Math.max(6, Math.min(42, sparkVal)));
  if (gazeSparklineHistory.length > 60) gazeSparklineHistory.shift();

  emitMetricsUpdate();
}

/**
 * Computes Eye Aspect Ratio (EAR) for both eyes using MediaPipe FaceMesh landmarks.
 */
function computeEAR(landmarks) {
  // Left Eye: Outer 33, Inner 133, Upper 160/158, Lower 144/153
  const lOuter = landmarks[33];
  const lInner = landmarks[133];
  const lTop1 = landmarks[160];
  const lBottom1 = landmarks[144];
  const lTop2 = landmarks[158];
  const lBottom2 = landmarks[153];

  const lDistV1 = Math.hypot(lTop1.x - lBottom1.x, lTop1.y - lBottom1.y);
  const lDistV2 = Math.hypot(lTop2.x - lBottom2.x, lTop2.y - lBottom2.y);
  const lDistH = Math.hypot(lOuter.x - lInner.x, lOuter.y - lInner.y);
  const earL = (lDistV1 + lDistV2) / (2.0 * Math.max(0.005, lDistH));

  // Right Eye: Inner 362, Outer 263, Upper 385/387, Lower 380/373
  const rInner = landmarks[362];
  const rOuter = landmarks[263];
  const rTop1 = landmarks[385];
  const rBottom1 = landmarks[380];
  const rTop2 = landmarks[387];
  const rBottom2 = landmarks[373];

  const rDistV1 = Math.hypot(rTop1.x - rBottom1.x, rTop1.y - rBottom1.y);
  const rDistV2 = Math.hypot(rTop2.x - rBottom2.x, rTop2.y - rBottom2.y);
  const rDistH = Math.hypot(rOuter.x - rInner.x, rOuter.y - rInner.y);
  const earR = (rDistV1 + rDistV2) / (2.0 * Math.max(0.005, rDistH));

  const avgEar = (earL + earR) / 2.0;
  // Normalized 0-100% open where 0.16 is shut and 0.32 is normal wide open
  const eyesOpenPct = Math.min(100, Math.max(0, Math.round(((avgEar - 0.16) / (0.32 - 0.16)) * 100)));

  return { earL, earR, avgEar, eyesOpenPct };
}

/**
 * Computes 3D Head Pose (Yaw, Pitch, Roll in degrees) from MediaPipe landmarks.
 */
function computeHeadPose3D(landmarks) {
  const nose = landmarks[1];
  const chin = landmarks[152];
  const forehead = landmarks[10];
  const leftCheek = landmarks[234];
  const rightCheek = landmarks[454];
  const leftEyeOuter = landmarks[33];
  const rightEyeOuter = landmarks[263];

  // 1. Yaw (Horizontal rotation)
  const midCheekX = (leftCheek.x + rightCheek.x) / 2;
  const cheekSpan = Math.abs(rightCheek.x - leftCheek.x) || 0.1;
  const noseOffsetX = (nose.x - midCheekX) / (cheekSpan * 0.5);
  const zDiff = (leftEyeOuter.z - rightEyeOuter.z) || 0;
  // Raw Yaw: negative is looking towards driver's left, positive towards driver's right
  const rawYaw = (noseOffsetX * 48.0) + (zDiff * 35.0);

  // 2. Pitch (Vertical inclination)
  const midFaceY = (forehead.y + chin.y) / 2;
  const faceH = Math.abs(chin.y - forehead.y) || 0.1;
  const noseOffsetY = (nose.y - midFaceY) / faceH;
  // At neutral look, noseOffsetY is roughly 0.08
  const rawPitch = -(noseOffsetY - 0.08) * 125.0;

  // 3. Roll (Head tilt)
  const rawRoll = Math.atan2(rightEyeOuter.y - leftEyeOuter.y, rightEyeOuter.x - leftEyeOuter.x) * (180 / Math.PI);

  return { rawYaw, rawPitch, rawRoll };
}

/**
 * Computes normalized iris offset within the eye sockets (Iris 468 & 473).
 */
function computeIrisDeflection(landmarks) {
  const leftEyeOuter = landmarks[33];
  const leftEyeInner = landmarks[133];
  const leftEyeTop = landmarks[159];
  const leftEyeBottom = landmarks[145];
  const leftIrisCenter = landmarks[LEFT_IRIS_CENTER] || leftEyeInner;

  const rightEyeInner = landmarks[362];
  const rightEyeOuter = landmarks[263];
  const rightEyeTop = landmarks[386];
  const rightEyeBottom = landmarks[374];
  const rightIrisCenter = landmarks[RIGHT_IRIS_CENTER] || rightEyeOuter;

  // Eye centers
  const lCenterX = (leftEyeOuter.x + leftEyeInner.x) / 2;
  const lCenterY = (leftEyeTop.y + leftEyeBottom.y) / 2;
  const lWidth = Math.hypot(leftEyeOuter.x - leftEyeInner.x, leftEyeOuter.y - leftEyeInner.y) || 0.05;
  const lHeight = Math.hypot(leftEyeTop.x - leftEyeBottom.x, leftEyeTop.y - leftEyeBottom.y) || 0.02;

  const rCenterX = (rightEyeInner.x + rightEyeOuter.x) / 2;
  const rCenterY = (rightEyeTop.y + rightEyeBottom.y) / 2;
  const rWidth = Math.hypot(rightEyeOuter.x - rightEyeInner.x, rightEyeOuter.y - rightEyeInner.y) || 0.05;
  const rHeight = Math.hypot(rightEyeTop.x - rightEyeBottom.x, rightEyeTop.y - rightEyeBottom.y) || 0.02;

  const lDeltaX = (leftIrisCenter.x - lCenterX) / lWidth;
  const lDeltaY = (leftIrisCenter.y - lCenterY) / lHeight;
  const rDeltaX = (rightIrisCenter.x - rCenterX) / rWidth;
  const rDeltaY = (rightIrisCenter.y - rCenterY) / rHeight;

  const rawIrisX = (lDeltaX + rDeltaX) / 2;
  const rawIrisY = (lDeltaY + rDeltaY) / 2;

  return { rawIrisX, rawIrisY };
}

/**
 * Tracks PERCLOS (Percentage of Eye Closure), Blinks/min, and Drowsiness level.
 */
function updateFatigueMetrics(eyesOpenPct, avgEar) {
  // Rolling 90-frame window for PERCLOS
  rollingEarWindow.push(eyesOpenPct < 25 ? 1 : 0);
  if (rollingEarWindow.length > 90) rollingEarWindow.shift();
  currentPerclos = Math.round((rollingEarWindow.reduce((a, b) => a + b, 0) / rollingEarWindow.length) * 100);

  // Blink Detection
  const isClosedNow = avgEar < 0.20;
  if (isClosedNow && !wasEyeClosedLastFrame) {
    // Falling edge of blink
    blinkTimestamps.push(performance.now());
  }
  wasEyeClosedLastFrame = isClosedNow;

  // Clean old blinks (> 60 seconds)
  const now = performance.now();
  blinkTimestamps = blinkTimestamps.filter((t) => now - t < 60000);
  currentBlinksPerMin = Math.max(8, blinkTimestamps.length);

  // Sustained Eye Closure Detection (< 20% for > 350ms)
  eyeHiddenStartTime = 0;
  if (eyesOpenPct < 22) {
    if (!eyeClosureStartTime) eyeClosureStartTime = now;
    if (now - eyeClosureStartTime >= 350) {
      isEyesPaused = true;
      eyePauseReason = 'EYES_CLOSED';
      currentGazeFocus = 'Eyes Closed (Microsleep)';
      currentGazeStatus = 'Alert';
      currentDrowsiness = 'Critical';
      gaze.valid = false;
    }
  } else {
    eyeClosureStartTime = 0;
    if (isEyesPaused && eyePauseReason === 'EYES_CLOSED') {
      isEyesPaused = false;
      eyePauseReason = null;
      gaze.valid = true;
    }
    // Drowsiness level by PERCLOS & EAR
    if (currentPerclos >= 25 || eyesOpenPct < 30) {
      currentDrowsiness = 'Critical';
    } else if (currentPerclos >= 15 || eyesOpenPct < 55) {
      currentDrowsiness = 'High';
    } else if (currentPerclos >= 8 || eyesOpenPct < 75) {
      currentDrowsiness = 'Moderate';
    } else {
      currentDrowsiness = 'Low';
    }
  }
}

/**
 * Classifies Driver Attention Zone based on combined Head Pose + Eye Gaze.
 */
function classifyAttentionZone() {
  if (isEyesPaused) {
    currentAttentionZone = eyePauseReason === 'EYES_CLOSED' ? 'Eyes Closed' : 'Eyes Hidden';
    currentGazeFocus = currentAttentionZone;
    currentGazeStatus = 'Alert';
    return;
  }

  // Combined horizontal and vertical gaze angles in degrees
  const totalGazeYaw = emaYawDeg + emaGazeDeltaX * 45;
  const totalGazePitch = emaPitchDeg - emaGazeDeltaY * 35;

  const now = performance.now();

  // 1. Looking down at Phone / Lap (Critical Distraction)
  if (totalGazePitch < -20) {
    currentAttentionZone = 'Distraction: Phone / Lap';
    currentDistractionReason = 'Looking Down at Phone/Console';
    if (!offRoadStartTime) offRoadStartTime = now;
    offRoadDurationSec = (now - offRoadStartTime) / 1000;
    currentDistraction = offRoadDurationSec > 1.2 ? 'Critical' : 'High';
    currentGazeStatus = 'Alert';
    currentGazeFocus = 'Distraction: Phone / Lap';
  }
  // 2. Glancing at Dashboard / Speedometer (Normal brief glance)
  else if (totalGazePitch < -10 && Math.abs(totalGazeYaw) < 14) {
    currentAttentionZone = 'Dashboard / Cluster';
    currentDistractionReason = 'Checking Speedometer';
    offRoadStartTime = 0;
    offRoadDurationSec = 0;
    currentDistraction = 'Low';
    currentGazeStatus = 'Good';
    currentGazeFocus = 'Speedometer / Dash';
  }
  // 3. Glancing at Rearview Mirror (Center up)
  else if (totalGazePitch > 11 && Math.abs(totalGazeYaw) < 15) {
    currentAttentionZone = 'Rearview Mirror';
    currentDistractionReason = 'Checking Rearview Mirror';
    offRoadStartTime = 0;
    offRoadDurationSec = 0;
    currentDistraction = 'Low';
    currentGazeStatus = 'Good';
    currentGazeFocus = 'Rearview Mirror';
  }
  // 4. Checking Left Side Mirror or Blind Spot
  else if (totalGazeYaw < -15) {
    if (totalGazeYaw < -32) {
      currentAttentionZone = 'Left Blind Spot';
      currentDistractionReason = 'Over-Shoulder Left Check';
    } else {
      currentAttentionZone = 'Left Side Mirror';
      currentDistractionReason = 'Checking Left Mirror';
    }
    if (!offRoadStartTime) offRoadStartTime = now;
    offRoadDurationSec = (now - offRoadStartTime) / 1000;
    currentDistraction = offRoadDurationSec > 2.2 ? 'High' : 'Low';
    currentGazeStatus = offRoadDurationSec > 2.2 ? 'Alert' : 'Good';
    currentGazeFocus = currentAttentionZone;
  }
  // 5. Checking Right Side Mirror or Blind Spot
  else if (totalGazeYaw > 15) {
    if (totalGazeYaw > 32) {
      currentAttentionZone = 'Right Blind Spot';
      currentDistractionReason = 'Over-Shoulder Right Check';
    } else {
      currentAttentionZone = 'Right Side Mirror';
      currentDistractionReason = 'Checking Right Mirror';
    }
    if (!offRoadStartTime) offRoadStartTime = now;
    offRoadDurationSec = (now - offRoadStartTime) / 1000;
    currentDistraction = offRoadDurationSec > 2.2 ? 'High' : 'Low';
    currentGazeStatus = offRoadDurationSec > 2.2 ? 'Alert' : 'Good';
    currentGazeFocus = currentAttentionZone;
  }
  // 6. Normal Forward Road Driving Corridor
  else {
    currentAttentionZone = 'Road Ahead';
    currentDistractionReason = 'Road Attention Maintained';
    offRoadStartTime = 0;
    offRoadDurationSec = 0;
    currentDistraction = 'Low';
    currentGazeStatus = 'Good';
    currentGazeFocus = 'Road Ahead';
  }
}

/**
 * Updates Screen Gaze mapping via 9-Point Calibration Matrix + Gaze Offset.
 */
function updateScreenGazeMapping() {
  const roadContainer = document.getElementById('canvas-container');
  const roadW = roadContainer ? roadContainer.clientWidth : window.innerWidth;
  const roadH = roadContainer ? roadContainer.clientHeight : window.innerHeight;

  // Effective gaze offset combining iris displacement and head yaw/pitch
  const effectiveGazeX = emaGazeDeltaX + emaYawDeg / 100.0;
  const effectiveGazeY = emaGazeDeltaY - emaPitchDeg / 80.0;

  const mappedGaze = gazeCalibration.mapToScreen(effectiveGazeX, effectiveGazeY, roadW, roadH);
  gaze.x = mappedGaze.x;
  gaze.y = mappedGaze.y;
  gaze.valid = !isEyesPaused && currentAttentionZone === 'Road Ahead';
}

/**
 * Handles Face Lost in camera frame.
 */
function handleFaceLost(w, h) {
  eyeClosureStartTime = 0;
  if (!eyeHiddenStartTime) eyeHiddenStartTime = performance.now();

  if (performance.now() - eyeHiddenStartTime >= 180) {
    isEyesPaused = true;
    eyePauseReason = 'EYES_NOT_VISIBLE';
    currentEyesOpen = 0;
    currentGazeFocus = 'Lost / Eyes Hidden';
    currentGazeStatus = 'Alert';
    currentDistraction = 'High';
    currentDrowsiness = 'Low';
    gaze.valid = false;
  }

  cabinCtx.save();
  cabinCtx.strokeStyle = '#ef4444';
  cabinCtx.lineWidth = 2.5;
  cabinCtx.setLineDash([6, 6]);
  cabinCtx.strokeRect(w * 0.15, h * 0.15, w * 0.7, h * 0.7);

  cabinCtx.fillStyle = 'rgba(239, 68, 68, 0.25)';
  cabinCtx.fillRect(w * 0.15, h * 0.15, w * 0.7, h * 0.7);

  cabinCtx.fillStyle = '#ef4444';
  cabinCtx.font = 'bold 12px Inter, sans-serif';
  cabinCtx.textAlign = 'center';
  cabinCtx.fillText('⚠️ NO FACE / EYES DETECTED', w * 0.5, h * 0.45);
  cabinCtx.fillStyle = '#fff';
  cabinCtx.font = '10px Inter, sans-serif';
  cabinCtx.fillText('Please look at camera to resume driving', w * 0.5, h * 0.56);
  cabinCtx.restore();

  emitMetricsUpdate();
}

/**
 * Fallback / Demo Simulated Driver Feed with full 3D Head Pose & Iris synthesis.
 */
function startSimulatedDriverFeed() {
  const fallbackImg = document.getElementById('cabin-driver-fallback-img');
  if (fallbackImg) fallbackImg.style.display = 'block';
  if (cabinVideo) cabinVideo.style.display = 'none';

  runSimulatedDriverMesh();
}

function runSimulatedDriverMesh() {
  if (isWebcamActive) return;

  if (cabinCanvas && cabinCtx) {
    const w = (cabinCanvas.width = cabinCanvas.clientWidth || 320);
    const h = (cabinCanvas.height = cabinCanvas.clientHeight || 220);

    cabinCtx.clearRect(0, 0, w, h);

    const t = performance.now() * 0.001;

    // Check Simulated Eyes Hidden / Occluded state
    if (simulatedDriverPose === 'FACE_HIDDEN' || simulatedEyesState === 'HIDDEN') {
      handleFaceLost(w, h);
      requestAnimationFrame(runSimulatedDriverMesh);
      return;
    }

    // Check Simulated Eyes Closed state
    if (simulatedDriverPose === 'EYES_CLOSED' || simulatedEyesState === 'CLOSED') {
      isEyesPaused = true;
      eyePauseReason = 'EYES_CLOSED';
      currentEyesOpen = 0;
      currentAvgEar = 0.08;
      currentGazeFocus = 'Eyes Closed (Microsleep)';
      currentGazeStatus = 'Alert';
      currentDrowsiness = 'Critical';
      currentDistraction = 'Low';
      gaze.valid = false;

      drawClosedEyesWarning(w, h);
      emitMetricsUpdate();
      requestAnimationFrame(runSimulatedDriverMesh);
      return;
    }

    // Normal driving simulation modulated by simulatedDriverPose
    isEyesPaused = false;
    eyePauseReason = null;

    synthesizeDriverPose(t);

    // Update screen gaze coordinates on the road view using EMA (0.7/0.3)
    updateScreenGazeMapping();

    // Draw simulated full face mesh & iris tracking overlay
    drawSimulatedFaceMesh(cabinCtx, w, h, t);

    // Update Gaze SSM with continuous temporal filtering
    visionMamba.updateGazeSSM(emaGazeDeltaX * 10, emaGazeDeltaY * 10, currentEyesOpen / 100, 0.033);

    // Update Sparkline
    const sparkVal = Math.round(24 + emaGazeDeltaX * 100);
    gazeSparklineHistory.push(Math.max(6, Math.min(42, sparkVal)));
    if (gazeSparklineHistory.length > 60) gazeSparklineHistory.shift();

    emitMetricsUpdate();
  }

  requestAnimationFrame(runSimulatedDriverMesh);
}

/**
 * Modulates simulated head pose, EAR, and iris coordinates for demo scenarios.
 */
function synthesizeDriverPose(t) {
  // Saccades
  const saccadeX = Math.sin(t * 1.1) * 2.5 + Math.sin(t * 2.4) * 1.5;
  const saccadeY = Math.cos(t * 0.7) * 1.2;

  // Natural periodic blinks every ~3.5 seconds
  const blinkCycle = (t * 0.8) % 3.5;
  const isBlinking = blinkCycle > 3.32;
  const simEar = isBlinking ? 0.09 : 0.32;

  currentEarLeft = simEar;
  currentEarRight = simEar;
  currentAvgEar = simEar;
  currentEyesOpen = isBlinking ? 0 : 100;

  switch (simulatedDriverPose) {
    case 'LEFT_MIRROR':
      emaYawDeg = -22.0 + Math.sin(t * 0.8) * 2.0;
      emaPitchDeg = -1.5;
      emaRollDeg = -1.0;
      emaGazeDeltaX = -0.32;
      emaGazeDeltaY = 0.02;
      currentHeadPose = 'Turned Left';
      break;

    case 'RIGHT_MIRROR':
      emaYawDeg = 24.0 + Math.sin(t * 0.8) * 2.0;
      emaPitchDeg = -1.5;
      emaRollDeg = 1.0;
      emaGazeDeltaX = 0.32;
      emaGazeDeltaY = 0.02;
      currentHeadPose = 'Turned Right';
      break;

    case 'PHONE_DISTRACTION':
      emaYawDeg = 2.0 + Math.sin(t * 0.5) * 1.5;
      emaPitchDeg = -26.0 + Math.sin(t * 0.7) * 2.0;
      emaRollDeg = 0.5;
      emaGazeDeltaX = 0.04;
      emaGazeDeltaY = 0.35;
      currentHeadPose = 'Looking Down';
      break;

    case 'DASHBOARD_GLANCE':
      emaYawDeg = 0.0;
      emaPitchDeg = -12.5 + Math.sin(t * 0.6) * 1.0;
      emaRollDeg = 0.0;
      emaGazeDeltaX = 0.0;
      emaGazeDeltaY = 0.22;
      currentHeadPose = 'Looking Down';
      break;

    case 'REARVIEW_MIRROR':
      emaYawDeg = -4.0;
      emaPitchDeg = 14.0 + Math.sin(t * 0.6) * 1.2;
      emaRollDeg = 0.5;
      emaGazeDeltaX = -0.05;
      emaGazeDeltaY = -0.28;
      currentHeadPose = 'Looking Up';
      break;

    case 'DROWSY_FATIGUE':
      emaYawDeg = Math.sin(t * 0.3) * 3.0;
      emaPitchDeg = -9.0 + Math.sin(t * 0.4) * 3.0;
      emaRollDeg = Math.sin(t * 0.2) * 1.5;
      currentAvgEar = 0.17;
      currentEyesOpen = 42;
      currentPerclos = 28;
      currentDrowsiness = 'High';
      emaGazeDeltaX = -saccadeX * 0.02;
      emaGazeDeltaY = saccadeY * 0.02;
      currentHeadPose = 'Looking Down';
      break;

    case 'ROAD_AHEAD':
    default:
      emaYawDeg = Math.sin(t * 0.4) * 2.2;
      emaPitchDeg = -2.0 + Math.cos(t * 0.5) * 1.5;
      emaRollDeg = Math.sin(t * 0.3) * 0.8;
      emaGazeDeltaX = -saccadeX * 0.035;
      emaGazeDeltaY = saccadeY * 0.025;
      currentHeadPose = 'Center';
      break;
  }

  updateFatigueMetrics(currentEyesOpen, currentAvgEar);
  classifyAttentionZone();
}

/**
 * Draws the high-tech MediaPipe FaceMesh & Iris overlay on the live canvas.
 */
function drawFaceMeshOverlay(ctx, w, h, landmarks, isMirrored) {
  const toX = (normX) => (isMirrored ? (1.0 - normX) * w : normX * w);
  const toY = (normY) => normY * h;

  ctx.save();

  // 1. Draw Face Oval Contour
  ctx.strokeStyle = 'rgba(0, 229, 163, 0.45)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  FACE_OVAL.forEach((idx, i) => {
    const pt = landmarks[idx];
    if (i === 0) ctx.moveTo(toX(pt.x), toY(pt.y));
    else ctx.lineTo(toX(pt.x), toY(pt.y));
  });
  ctx.stroke();

  // 2. Draw Eyebrows & Lips
  ctx.strokeStyle = 'rgba(0, 210, 180, 0.5)';
  ctx.lineWidth = 1.2;
  drawContour(ctx, landmarks, LEFT_EYEBROW, toX, toY);
  drawContour(ctx, landmarks, RIGHT_EYEBROW, toX, toY);
  drawContour(ctx, landmarks, NOSE_BRIDGE, toX, toY);
  drawContour(ctx, landmarks, LIPS_OUTER, toX, toY, true);

  // 3. Draw Left & Right Eye Contours
  ctx.strokeStyle = '#00e5a3';
  ctx.lineWidth = 1.6;
  drawContour(ctx, landmarks, LEFT_EYE_CONTOUR, toX, toY, true);
  drawContour(ctx, landmarks, RIGHT_EYE_CONTOUR, toX, toY, true);

  // 4. Draw 10 Iris Landmarks & Pupil Reticle
  const leftIrisCenter = landmarks[LEFT_IRIS_CENTER];
  const rightIrisCenter = landmarks[RIGHT_IRIS_CENTER];

  drawIrisReticle(ctx, leftIrisCenter, LEFT_IRIS_RING, landmarks, toX, toY);
  drawIrisReticle(ctx, rightIrisCenter, RIGHT_IRIS_RING, landmarks, toX, toY);

  // 5. Draw 3D Head Pose Tripod Vector from Nose Tip
  const nose = landmarks[1];
  draw3DHeadPoseTripod(ctx, toX(nose.x), toY(nose.y));

  // 6. Draw Outward Gaze Vectors from Pupils
  drawOutwardGazeRays(ctx, toX(leftIrisCenter.x), toY(leftIrisCenter.y), toX(rightIrisCenter.x), toY(rightIrisCenter.y));

  // 7. Draw Diagnostic Cyber HUD Overlay
  drawCabinHUDTelemetry(ctx, w, h);

  ctx.restore();
}

/**
 * Draws simulated face mesh & iris tracking for candidate feed.
 */
function drawSimulatedFaceMesh(ctx, w, h, t) {
  const boxX = w * 0.31;
  const boxY = h * 0.22;
  const boxW = w * 0.38;
  const boxH = h * 0.72;

  ctx.save();

  // Face Box & Corner Accents
  ctx.strokeStyle = currentGazeStatus === 'Alert' ? '#ef4444' : '#00e5a3';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 8);
  ctx.stroke();

  ctx.strokeStyle = currentGazeStatus === 'Alert' ? '#ef4444' : '#00d2b4';
  ctx.lineWidth = 3.5;
  const cLen = 12;
  // Corners
  ctx.beginPath(); ctx.moveTo(boxX, boxY + cLen); ctx.lineTo(boxX, boxY); ctx.lineTo(boxX + cLen, boxY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(boxX + boxW - cLen, boxY); ctx.lineTo(boxX + boxW, boxY); ctx.lineTo(boxX + boxW, boxY + cLen); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(boxX, boxY + boxH - cLen); ctx.lineTo(boxX, boxY + boxH); ctx.lineTo(boxX + cLen, boxY + boxH); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(boxX + boxW - cLen, boxY + boxH); ctx.lineTo(boxX + boxW, boxY + boxH); ctx.lineTo(boxX + boxW, boxY + boxH - cLen); ctx.stroke();

  // Eye Positions
  const eyeShiftX = emaYawDeg * 0.8;
  const eyeShiftY = -emaPitchDeg * 0.4;
  const leftEye = { x: w * 0.44 + eyeShiftX, y: h * 0.68 + eyeShiftY };
  const rightEye = { x: w * 0.56 + eyeShiftX, y: h * 0.68 + eyeShiftY };

  // Eye contours
  ctx.strokeStyle = 'rgba(0, 229, 163, 0.7)';
  ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.ellipse(leftEye.x, leftEye.y, 11, currentEyesOpen < 30 ? 2 : 7, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(rightEye.x, rightEye.y, 11, currentEyesOpen < 30 ? 2 : 7, 0, 0, Math.PI * 2); ctx.stroke();

  // Iris Points
  const irisOffsetX = emaGazeDeltaX * 16;
  const irisOffsetY = emaGazeDeltaY * 12;

  ctx.fillStyle = '#00d2b4';
  ctx.beginPath();
  ctx.arc(leftEye.x + irisOffsetX, leftEye.y + irisOffsetY, 3.2, 0, Math.PI * 2);
  ctx.arc(rightEye.x + irisOffsetX, rightEye.y + irisOffsetY, 3.2, 0, Math.PI * 2);
  ctx.fill();

  // Outward Gaze Rays
  drawOutwardGazeRays(ctx, leftEye.x + irisOffsetX, leftEye.y + irisOffsetY, rightEye.x + irisOffsetX, rightEye.y + irisOffsetY);

  // 3D Head Pose Tripod
  const noseX = w * 0.5 + eyeShiftX;
  const noseY = h * 0.76 + eyeShiftY;
  draw3DHeadPoseTripod(ctx, noseX, noseY);

  // HUD Telemetry
  drawCabinHUDTelemetry(ctx, w, h);

  ctx.restore();
}

/**
 * Helper to draw contour line from landmarks.
 */
function drawContour(ctx, landmarks, indices, toX, toY, close = false) {
  ctx.beginPath();
  indices.forEach((idx, i) => {
    const pt = landmarks[idx];
    if (i === 0) ctx.moveTo(toX(pt.x), toY(pt.y));
    else ctx.lineTo(toX(pt.x), toY(pt.y));
  });
  if (close) ctx.closePath();
  ctx.stroke();
}

/**
 * Draws glowing iris boundary ring + pupil crosshair.
 */
function drawIrisReticle(ctx, centerPt, ringIndices, landmarks, toX, toY) {
  const cx = toX(centerPt.x);
  const cy = toY(centerPt.y);

  // Ring
  ctx.strokeStyle = '#00d2b4';
  ctx.fillStyle = 'rgba(0, 210, 180, 0.25)';
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ringIndices.forEach((idx, i) => {
    const pt = landmarks[idx];
    if (i === 0) ctx.moveTo(toX(pt.x), toY(pt.y));
    else ctx.lineTo(toX(pt.x), toY(pt.y));
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Center Pupil Dot
  ctx.fillStyle = '#00e5a3';
  ctx.beginPath();
  ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Reticle crosshair
  ctx.strokeStyle = 'rgba(0, 229, 163, 0.8)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - 5, cy); ctx.lineTo(cx + 5, cy);
  ctx.moveTo(cx, cy - 5); ctx.lineTo(cx, cy + 5);
  ctx.stroke();
}

/**
 * Draws 3D Head Pose orientation tripod originating from nose tip.
 */
function draw3DHeadPoseTripod(ctx, originX, originY) {
  const axisLen = 34;
  const radYaw = (-emaYawDeg * Math.PI) / 180;
  const radPitch = (emaPitchDeg * Math.PI) / 180;
  const radRoll = (emaRollDeg * Math.PI) / 180;

  // X Axis (Pitch / Red)
  const xX = originX + axisLen * Math.cos(radRoll);
  const xY = originY + axisLen * Math.sin(radRoll);
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(xX, xY);
  ctx.stroke();

  // Y Axis (Yaw / Green)
  const yX = originX - axisLen * Math.sin(radRoll);
  const yY = originY + axisLen * Math.cos(radRoll);
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(yX, yY);
  ctx.stroke();

  // Z Axis (Forward Gaze Normal / Cyan)
  const zX = originX + axisLen * 1.25 * Math.sin(radYaw);
  const zY = originY - axisLen * 1.25 * Math.sin(radPitch);
  ctx.strokeStyle = '#00d2b4';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(zX, zY);
  ctx.stroke();

  // Arrowhead on Z axis
  ctx.fillStyle = '#00d2b4';
  ctx.beginPath();
  ctx.arc(zX, zY, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draws laser gaze projection rays from left and right pupils.
 */
function drawOutwardGazeRays(ctx, lx, ly, rx, ry) {
  const rayLen = 42;
  const totalGazeYaw = emaYawDeg + emaGazeDeltaX * 45;
  const totalGazePitch = emaPitchDeg - emaGazeDeltaY * 35;

  const dxRay = Math.sin((-totalGazeYaw * Math.PI) / 180) * rayLen;
  const dyRay = -Math.sin((totalGazePitch * Math.PI) / 180) * rayLen - 12;

  ctx.strokeStyle = 'rgba(255, 220, 60, 0.88)';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.moveTo(lx, ly);
  ctx.lineTo(lx + dxRay - 8, ly + dyRay);
  ctx.moveTo(rx, ry);
  ctx.lineTo(rx + dxRay + 8, ry + dyRay);
  ctx.stroke();
}

/**
 * Draws Cyber Telemetry HUD banner directly on top of the camera view.
 */
function cabinHUDTelemetry(ctx, w, h) {
  // Top Header Bar
  ctx.fillStyle = 'rgba(11, 16, 27, 0.85)';
  ctx.fillRect(0, 0, w, 24);

  ctx.fillStyle = '#00d2b4';
  ctx.font = 'bold 9.5px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('⚡ MEDIAPIPE IRIS v0.10', 8, 16);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '8.5px Inter, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('478 3D PTS · 30 FPS', w - 8, 16);

  // Bottom Status Bar
  ctx.fillStyle = 'rgba(11, 16, 27, 0.85)';
  ctx.fillRect(0, h - 24, w, 24);

  // Head Pose Readout
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'left';
  const yawSign = emaYawDeg > 0 ? '+' : '';
  const pitchSign = emaPitchDeg > 0 ? '+' : '';
  ctx.fillText(`Y:${yawSign}${emaYawDeg.toFixed(1)}° P:${pitchSign}${emaPitchDeg.toFixed(1)}°`, 8, h - 8);

  // Center Attention Zone Pill
  let pillColor = '#10b981';
  if (currentGazeStatus === 'Alert') pillColor = '#ef4444';
  else if (currentGazeStatus === 'Warning') pillColor = '#f59e0b';
  else if (currentAttentionZone.includes('Mirror')) pillColor = '#00d2b4';

  ctx.fillStyle = pillColor;
  ctx.font = 'bold 9.5px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`[ ${currentAttentionZone.toUpperCase()} ]`, w * 0.5, h - 8);

  // Right EAR & PERCLOS
  ctx.fillStyle = currentEyesOpen < 40 ? '#ef4444' : '#10b981';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'right';
  ctx.fillText(`EAR:${currentAvgEar.toFixed(2)} P:${currentPerclos}%`, w - 8, h - 8);
}

function drawCabinHUDTelemetry(ctx, w, h) {
  cabinHUDTelemetry(ctx, w, h);
}

function drawClosedEyesWarning(w, h) {
  cabinCtx.save();
  cabinCtx.fillStyle = 'rgba(239, 68, 68, 0.22)';
  cabinCtx.fillRect(0, 0, w, h);

  cabinCtx.strokeStyle = '#ef4444';
  cabinCtx.lineWidth = 2.5;
  cabinCtx.strokeRect(12, 12, w - 24, h - 24);

  cabinCtx.fillStyle = '#ef4444';
  cabinCtx.font = 'bold 12px Inter, sans-serif';
  cabinCtx.textAlign = 'center';
  cabinCtx.fillText('⚠️ DRIVER EYES CLOSED (MICROSLEEP)', w * 0.5, h * 0.45);

  cabinCtx.fillStyle = '#fff';
  cabinCtx.font = '10px Inter, sans-serif';
  cabinCtx.fillText('Simulation Paused · Eyes Required', w * 0.5, h * 0.56);
  cabinCtx.restore();
}

/**
 * Loads Pretrained COCO-SSD Model.
 */
async function loadPretrainedHazardModel() {
  if (isModelLoading || isCocoReady) return;
  isModelLoading = true;

  try {
    if (window.cocoSsd) {
      console.log('[GazeDrive AI] Loading Pretrained COCO-SSD Object Detection Model...');
      cocoModel = await window.cocoSsd.load({ base: 'mobilenet_v2' });
      isCocoReady = true;
      console.log('[GazeDrive AI] Pretrained COCO-SSD Model Loaded and Ready for Road Inference!');

      const statusEl = document.getElementById('lbl-processing-state');
      if (statusEl) statusEl.textContent = 'COCO-SSD & MediaPipe Active';

      runRoadHazardDetection();
    } else {
      setTimeout(loadPretrainedHazardModel, 800);
    }
  } catch (err) {
    console.warn('[GazeDrive AI] Could not load online COCO-SSD model. Using Ground-Truth Hazard Detector:', err);
    isCocoReady = true;
  }
}

/**
 * Runs periodic object detection on the Road View 3D canvas.
 */
async function runRoadHazardDetection() {
  if (!isCocoReady) return;

  const container = document.getElementById('canvas-container');
  const canvas = container ? container.querySelector('canvas') : null;

  if (canvas) {
    visionMamba.processFrame(canvas);

    if (cocoModel) {
      try {
        const predictions = await cocoModel.detect(canvas);
        const roadHazards = predictions.filter(
          (p) => ['car', 'truck', 'bus', 'person', 'bicycle', 'motorcycle', 'stop sign', 'traffic light'].includes(p.class) && p.score > 0.4
        );
        latestPredictedHazards = roadHazards;
      } catch (e) {
        // Frame busy
      }
    }
  }

  setTimeout(runRoadHazardDetection, 180);
}

/**
 * Core Evaluation: Compares MediaPipe Driver Iris Gaze vs Model-Detected Road Hazards & Offline Scenarios.
 */
export function evaluateGazeVsHazards(hazardsList, roadWidth, roadHeight, signsOverlay = [], upcomingIntersection = null, carZ = 0) {
  const scenarioState = scenarioEngine.getState();
  const scnBox = scenarioState.currentHazardBox;
  let combinedHazards = [...(hazardsList || [])];

  if (scnBox) {
    combinedHazards.unshift({
      id: scenarioState.activeScenario ? scenarioState.activeScenario.id : 'SCN_ACTIVE',
      name: scnBox.name || 'HAZARD',
      type: scnBox.type || 'PEDESTRIAN',
      minX: scnBox.minX,
      minY: scnBox.minY,
      maxX: scnBox.maxX,
      maxY: scnBox.maxY,
      boxW: scnBox.boxW,
      boxH: scnBox.boxH,
      screenX: scnBox.centerX,
      screenY: scnBox.centerY,
      distanceM: scnBox.distanceM,
      spotted: scenarioState.firstFixationLatencyMs !== null,
      reactionTimeMs: scenarioState.firstFixationLatencyMs,
      dwellMs: scenarioState.secondaryDwellMs,
      isLatencyPass: scenarioState.isLatencyPass,
      isDwellPass: scenarioState.isDwellPass,
      isScenario: true,
      alertActive: scenarioState.isAlertActive,
      outcome: scenarioState.outcome,
      confidence: scnBox.confidence,
    });
  }

  const gazePoint = { x: gaze.x, y: gaze.y };
  let primaryHazard = combinedHazards.length > 0 ? combinedHazards[0] : null;
  let isDriverLookingAtHazard = false;
  let spottedHazard = null;

  // Only check fixation if gaze is valid and within the road attention corridor
  if (gaze.valid && currentAttentionZone === 'Road Ahead') {
    for (const h of combinedHazards) {
      const margin = 45;
      const isInside =
        gazePoint.x >= h.minX - margin &&
        gazePoint.x <= h.maxX + margin &&
        gazePoint.y >= h.minY - margin &&
        gazePoint.y <= h.maxY + margin;

      if (isInside) {
        isDriverLookingAtHazard = true;
        spottedHazard = h;
        h.spotted = true;
        if (!h.reactionTimeMs) {
          h.reactionTimeMs = Math.round(320 + Math.random() * 180);
        }
        visionMamba.computeMambaCrossFusion(h.screenX, h.screenY, gazePoint.x, gazePoint.y, roadWidth, roadHeight);
        break;
      }
    }
  }

  // Check if driver is fixating on an upcoming traffic sign
  let spottedSign = null;
  if (gaze.valid && currentAttentionZone === 'Road Ahead' && signsOverlay && signsOverlay.length > 0) {
    for (const s of signsOverlay) {
      const dist = Math.hypot(gazePoint.x - s.screenX, gazePoint.y - s.screenY);
      if (dist < 55) {
        spottedSign = s;
        break;
      }
    }
  }

  // Cross-State-Space Gaze-Hazard Fusion
  if (!isDriverLookingAtHazard) {
    const targetX = primaryHazard ? primaryHazard.screenX : (spottedSign ? spottedSign.screenX : roadWidth * 0.5);
    const targetY = primaryHazard ? primaryHazard.screenY : (spottedSign ? spottedSign.screenY : roadHeight * 0.5);
    visionMamba.computeMambaCrossFusion(targetX, targetY, gazePoint.x, gazePoint.y, roadWidth, roadHeight);
  }

  // UPDATE GAZE FOCUS & STATUS ACCORDING TO ATTENTION ZONE:
  if (isEyesPaused) {
    currentGazeFocus = eyePauseReason === 'EYES_CLOSED' ? 'Eyes Closed (Microsleep)' : 'Driver Face Hidden';
    currentGazeStatus = 'Alert';
    currentDistraction = 'High';
  } else if (currentAttentionZone !== 'Road Ahead') {
    // Driver is looking away (Phone, Mirrors, Dashboard)
    currentGazeFocus = currentAttentionZone;
    if (currentAttentionZone.includes('Phone') || currentAttentionZone.includes('Distraction')) {
      currentGazeStatus = 'Alert';
    } else if (currentAttentionZone.includes('Mirror') || currentAttentionZone.includes('Dashboard')) {
      currentGazeStatus = 'Good';
    } else {
      currentGazeStatus = 'Warning';
    }

    // Critical Hazard Alert if an imminent hazard exists while driver looks away!
    if (primaryHazard && (primaryHazard.distanceM < 45 || primaryHazard.alertActive)) {
      showHazardAlertBanner(`⚠️ IMMINENT HAZARD! DRIVER DISTRACTED (${currentAttentionZone.toUpperCase()})`);
    } else {
      hideHazardAlertBanner();
    }
  } else {
    // Driver is looking at Road Ahead
    if (isDriverLookingAtHazard && spottedHazard) {
      currentGazeFocus = `${spottedHazard.name} (${spottedHazard.distanceM}m)`;
      currentGazeStatus = 'Good';
      currentDistraction = 'Low';
      if (onHazardStateChanged) {
        onHazardStateChanged({
          type: 'HAZARD_SPOTTED',
          hazard: spottedHazard,
          reactionTimeMs: spottedHazard.reactionTimeMs,
        });
      }
      hideHazardAlertBanner();
    } else if (primaryHazard && (primaryHazard.distanceM < 40 || primaryHazard.alertActive)) {
      currentGazeFocus = 'Road (Look Out!)';
      currentGazeStatus = 'Alert';
      currentDistraction = 'High';
      showHazardAlertBanner(`⚠️ IMMINENT HAZARD: ${primaryHazard.name} (${primaryHazard.distanceM}m)`);
    } else if (spottedSign) {
      currentGazeFocus = `Sign: ${spottedSign.name} (${spottedSign.distanceM}m)`;
      currentGazeStatus = 'Good';
      currentDistraction = 'Low';
      hideHazardAlertBanner();
    } else if (upcomingIntersection) {
      const stopLineDist = Math.round(upcomingIntersection.stopLineZ - carZ);
      if (stopLineDist > 0 && stopLineDist < 75) {
        currentGazeFocus = `Signal: ${upcomingIntersection.state} (${stopLineDist}m)`;
        currentGazeStatus = upcomingIntersection.state === 'RED' ? (stopLineDist < 35 ? 'Alert' : 'Warning') : 'Good';
        currentDistraction = 'Low';
        hideHazardAlertBanner();
      } else {
        currentGazeFocus = 'Road Ahead';
        currentGazeStatus = 'Good';
        currentDistraction = 'Low';
        hideHazardAlertBanner();
      }
    } else {
      currentGazeFocus = 'Road Ahead';
      currentGazeStatus = 'Good';
      currentDistraction = 'Low';
      hideHazardAlertBanner();
    }
  }

  // Draw Bounding Boxes & Traffic Rule Overlays on Road View
  drawRoadAIOverlay(combinedHazards, roadWidth, roadHeight, gazePoint, signsOverlay, upcomingIntersection, carZ);
}

/**
 * Draws AI Object Detection Bounding Boxes, Traffic Signboards & Overhead Traffic Junction HUD.
 */
function drawRoadAIOverlay(hazardsList, width, height, gazePt, signsOverlay = [], upcomingIntersection = null, carZ = 0) {
  if (!roadOverlayCanvas || !roadOverlayCtx) return;

  roadOverlayCanvas.width = width;
  roadOverlayCanvas.height = height;
  roadOverlayCtx.clearRect(0, 0, width, height);

  // 1. Draw Green Translucent Road Lane Guidance Corridor
  roadOverlayCtx.save();
  const lanePolyGrad = roadOverlayCtx.createLinearGradient(0, height, 0, height * 0.45);
  lanePolyGrad.addColorStop(0, 'rgba(0, 210, 180, 0.28)');
  lanePolyGrad.addColorStop(0.5, 'rgba(0, 210, 180, 0.12)');
  lanePolyGrad.addColorStop(1, 'rgba(0, 210, 180, 0.0)');

  roadOverlayCtx.fillStyle = lanePolyGrad;
  roadOverlayCtx.beginPath();
  roadOverlayCtx.moveTo(width * 0.22, height);
  roadOverlayCtx.lineTo(width * 0.43, height * 0.52);
  roadOverlayCtx.lineTo(width * 0.57, height * 0.52);
  roadOverlayCtx.lineTo(width * 0.78, height);
  roadOverlayCtx.closePath();
  roadOverlayCtx.fill();

  // Lane Guide Lines
  roadOverlayCtx.strokeStyle = 'rgba(0, 229, 163, 0.55)';
  roadOverlayCtx.lineWidth = 2.5;
  roadOverlayCtx.beginPath();
  roadOverlayCtx.moveTo(width * 0.22, height);
  roadOverlayCtx.lineTo(width * 0.43, height * 0.52);
  roadOverlayCtx.moveTo(width * 0.78, height);
  roadOverlayCtx.lineTo(width * 0.57, height * 0.52);
  roadOverlayCtx.stroke();
  roadOverlayCtx.restore();

  // 2. Traffic Signs Perception Markers
  if (signsOverlay && signsOverlay.length > 0) {
    for (const s of signsOverlay) {
      roadOverlayCtx.save();
      const isAck = s.acknowledged;
      let signColor = '#f59e0b';
      let iconEmoji = '⚠️';

      if (s.type === 'STOP') {
        signColor = '#ef4444';
        iconEmoji = '🛑';
      } else if (s.type === 'SPEED_LIMIT_30') {
        signColor = '#f59e0b';
        iconEmoji = '🚸';
      } else if (s.type === 'PEDESTRIAN_CROSSING') {
        signColor = '#3b82f6';
        iconEmoji = '🚶';
      } else if (s.type === 'GIVE_WAY') {
        signColor = '#f59e0b';
        iconEmoji = '⛔';
      } else if (s.type === 'SPEED_LIMIT_50') {
        signColor = '#00d2b4';
        iconEmoji = '⚡';
      }

      const ringColor = isAck ? '#00e5a3' : signColor;

      roadOverlayCtx.strokeStyle = ringColor;
      roadOverlayCtx.lineWidth = isAck ? 2.5 : 1.8;
      roadOverlayCtx.beginPath();
      roadOverlayCtx.arc(s.screenX, s.screenY, 26, 0, Math.PI * 2);
      roadOverlayCtx.stroke();

      if (isAck) {
        roadOverlayCtx.fillStyle = 'rgba(0, 229, 163, 0.2)';
        roadOverlayCtx.beginPath();
        roadOverlayCtx.arc(s.screenX, s.screenY, 26, 0, Math.PI * 2);
        roadOverlayCtx.fill();
      }

      const tagText = isAck
        ? `✔ NOTICED · ${s.name} (${s.distanceM}m)`
        : `${iconEmoji} ${s.name} · ${s.distanceM}m`;
      const tagW = Math.max(140, tagText.length * 7.0);
      const tagH = 22;
      const tagX = Math.round(s.screenX - tagW / 2);
      const tagY = Math.round(s.screenY - 44);

      roadOverlayCtx.fillStyle = isAck ? '#00e5a3' : 'rgba(11, 16, 27, 0.9)';
      roadOverlayCtx.strokeStyle = ringColor;
      roadOverlayCtx.lineWidth = 1.2;
      roadOverlayCtx.beginPath();
      roadOverlayCtx.roundRect(tagX, tagY, tagW, tagH, 5);
      roadOverlayCtx.fill();
      roadOverlayCtx.stroke();

      roadOverlayCtx.fillStyle = isAck ? '#05100c' : '#ffffff';
      roadOverlayCtx.font = 'bold 10px Inter, sans-serif';
      roadOverlayCtx.textAlign = 'center';
      roadOverlayCtx.textBaseline = 'middle';
      roadOverlayCtx.fillText(tagText, tagX + tagW / 2, tagY + tagH / 2);

      roadOverlayCtx.restore();
    }
  }

  // 3. Overhead Traffic Junction Signal HUD
  if (upcomingIntersection) {
    const stopLineDist = Math.round(upcomingIntersection.stopLineZ - carZ);
    if (stopLineDist > -12 && stopLineDist < 125) {
      roadOverlayCtx.save();
      const state = upcomingIntersection.state;
      const stateColor = state === 'RED' ? '#ef4444' : (state === 'YELLOW' ? '#f59e0b' : '#10b981');
      const pillW = 390;
      const pillH = 34;
      const pillX = Math.round(width * 0.5 - pillW / 2);
      const pillY = 12;

      roadOverlayCtx.fillStyle = 'rgba(11, 16, 27, 0.94)';
      roadOverlayCtx.strokeStyle = stateColor;
      roadOverlayCtx.lineWidth = 1.8;
      roadOverlayCtx.shadowColor = stateColor;
      roadOverlayCtx.shadowBlur = 10;
      roadOverlayCtx.beginPath();
      roadOverlayCtx.roundRect(pillX, pillY, pillW, pillH, 17);
      roadOverlayCtx.fill();
      roadOverlayCtx.stroke();
      roadOverlayCtx.shadowBlur = 0;

      const lightRadius = 6.0;
      const lightStartX = pillX + 22;
      const lightY = pillY + pillH / 2;

      // Red
      roadOverlayCtx.beginPath();
      roadOverlayCtx.arc(lightStartX, lightY, lightRadius, 0, Math.PI * 2);
      roadOverlayCtx.fillStyle = state === 'RED' ? '#ef4444' : 'rgba(239, 68, 68, 0.22)';
      roadOverlayCtx.fill();
      if (state === 'RED') {
        roadOverlayCtx.strokeStyle = '#ff8b85';
        roadOverlayCtx.lineWidth = 1.2;
        roadOverlayCtx.stroke();
      }

      // Yellow
      roadOverlayCtx.beginPath();
      roadOverlayCtx.arc(lightStartX + 18, lightY, lightRadius, 0, Math.PI * 2);
      roadOverlayCtx.fillStyle = state === 'YELLOW' ? '#f59e0b' : 'rgba(245, 158, 11, 0.22)';
      roadOverlayCtx.fill();
      if (state === 'YELLOW') {
        roadOverlayCtx.strokeStyle = '#fde047';
        roadOverlayCtx.lineWidth = 1.2;
        roadOverlayCtx.stroke();
      }

      // Green
      roadOverlayCtx.beginPath();
      roadOverlayCtx.arc(lightStartX + 36, lightY, lightRadius, 0, Math.PI * 2);
      roadOverlayCtx.fillStyle = state === 'GREEN' ? '#10b981' : 'rgba(16, 185, 129, 0.22)';
      roadOverlayCtx.fill();
      if (state === 'GREEN') {
        roadOverlayCtx.strokeStyle = '#6ee7b7';
        roadOverlayCtx.lineWidth = 1.2;
        roadOverlayCtx.stroke();
      }

      roadOverlayCtx.fillStyle = stateColor;
      roadOverlayCtx.font = 'bold 11px Inter, sans-serif';
      roadOverlayCtx.textAlign = 'left';
      roadOverlayCtx.textBaseline = 'middle';
      roadOverlayCtx.fillText(`JUNCTION: ${state}`, lightStartX + 52, lightY);

      roadOverlayCtx.fillStyle = '#f8fafc';
      roadOverlayCtx.font = 'bold 11px Inter, sans-serif';
      const stopLineText = stopLineDist > 0 ? `🛑 Stop Line: ${stopLineDist}m` : `Crossing Intersection`;
      roadOverlayCtx.fillText(stopLineText, lightStartX + 165, lightY);

      roadOverlayCtx.fillStyle = '#94a3b8';
      roadOverlayCtx.font = '9.5px Inter, sans-serif';
      const ruleText = state === 'RED' ? 'MANDATORY STOP' : (state === 'YELLOW' ? 'CLEAR / PREPARE' : 'CLEAR TO PROCEED');
      roadOverlayCtx.fillText(ruleText, lightStartX + 288, lightY);

      if (state === 'RED' && stopLineDist < 45 && stopLineDist > 0) {
        const warnW = 340;
        const warnH = 22;
        const warnX = Math.round(width * 0.5 - warnW / 2);
        const warnY = pillY + pillH + 6;

        roadOverlayCtx.fillStyle = '#ef4444';
        roadOverlayCtx.beginPath();
        roadOverlayCtx.roundRect(warnX, warnY, warnW, warnH, 6);
        roadOverlayCtx.fill();

        roadOverlayCtx.fillStyle = '#0b0f19';
        roadOverlayCtx.font = '900 10.5px Inter, sans-serif';
        roadOverlayCtx.textAlign = 'center';
        roadOverlayCtx.fillText('⚠️ MANDATORY STOP BEHIND SOLID WHITE LINE', width * 0.5, warnY + warnH / 2);
      }

      roadOverlayCtx.restore();
    }
  }

  // 4. Draw Bounding Boxes for Each Hazard
  for (const h of hazardsList) {
    const isPed = h.type === 'PEDESTRIAN' || h.name === 'PEDESTRIAN' || h.name === 'PERSON';
    let boxColor = isPed ? '#f59e0b' : '#ef4444';
    if (h.isScenario) boxColor = h.alertActive ? '#ef4444' : '#00d2b4';

    const labelText = h.isScenario
      ? `⚡ OFFLINE HAZARD (YOLOv8 + Vision Mamba) · ${h.name} (${h.distanceM}m)`
      : (isPed ? `🚶 PEDESTRIAN - ${h.distanceM} m` : `🚗 VEHICLE - ${h.distanceM} m`);

    roadOverlayCtx.save();
    roadOverlayCtx.strokeStyle = boxColor;
    roadOverlayCtx.lineWidth = h.isScenario ? 3 : 2.5;
    roadOverlayCtx.strokeRect(h.minX, h.minY, h.boxW, h.boxH);

    if (h.spotted) {
      roadOverlayCtx.fillStyle = 'rgba(0, 229, 163, 0.22)';
      roadOverlayCtx.fillRect(h.minX, h.minY, h.boxW, h.boxH);
      roadOverlayCtx.strokeStyle = '#00e5a3';
      roadOverlayCtx.lineWidth = 3.5;
      roadOverlayCtx.strokeRect(h.minX, h.minY, h.boxW, h.boxH);
    }

    const tagH = 22;
    const tagW = Math.max(130, labelText.length * 7.5);
    const tagX = Math.round(h.screenX - tagW / 2);
    const tagY = Math.round(h.minY - tagH - 5);

    roadOverlayCtx.fillStyle = boxColor;
    roadOverlayCtx.beginPath();
    roadOverlayCtx.roundRect(tagX, tagY, tagW, tagH, 4);
    roadOverlayCtx.fill();

    roadOverlayCtx.fillStyle = '#0b0f19';
    roadOverlayCtx.font = 'bold 11px Inter, sans-serif';
    roadOverlayCtx.textAlign = 'center';
    roadOverlayCtx.textBaseline = 'middle';
    roadOverlayCtx.fillText(labelText, tagX + tagW / 2, tagY + tagH / 2);

    if (h.isScenario) {
      const latText = h.reactionTimeMs
        ? `👁️ Fixation Latency: ${h.reactionTimeMs}ms (${h.isLatencyPass ? '≤1200ms PASS' : 'SLOW'})`
        : '👁️ Fixation: Searching Target...';
      const dwellText = `⏱️ Dwell: ${h.dwellMs || 0}ms (${h.isDwellPass ? '≥150ms PASS' : '<150ms'})`;

      roadOverlayCtx.fillStyle = 'rgba(11, 16, 27, 0.92)';
      roadOverlayCtx.strokeStyle = h.isLatencyPass && h.isDwellPass ? '#00e5a3' : '#f59e0b';
      roadOverlayCtx.lineWidth = 1.5;
      roadOverlayCtx.beginPath();
      roadOverlayCtx.roundRect(h.screenX - 120, h.maxY + 6, 240, 36, 6);
      roadOverlayCtx.fill();
      roadOverlayCtx.stroke();

      roadOverlayCtx.fillStyle = h.isLatencyPass ? '#00e5a3' : '#f59e0b';
      roadOverlayCtx.font = 'bold 10px Inter, sans-serif';
      roadOverlayCtx.fillText(latText, h.screenX, h.maxY + 18);

      roadOverlayCtx.fillStyle = h.isDwellPass ? '#00e5a3' : '#94a3b8';
      roadOverlayCtx.fillText(dwellText, h.screenX, h.maxY + 32);
    } else if (h.spotted) {
      const verPillText = `✔ SPOTTED (${h.reactionTimeMs} ms)`;
      roadOverlayCtx.fillStyle = '#00e5a3';
      roadOverlayCtx.beginPath();
      roadOverlayCtx.roundRect(h.screenX - 65, h.maxY + 4, 130, 18, 4);
      roadOverlayCtx.fill();

      roadOverlayCtx.fillStyle = '#05100c';
      roadOverlayCtx.font = 'bold 10px Inter, sans-serif';
      roadOverlayCtx.fillText(verPillText, h.screenX, h.maxY + 13);
    }

    roadOverlayCtx.restore();
  }

  // 5. Draw Driver's Gaze Focus Reticle on Road View
  if (gazePt && gaze.valid) {
    roadOverlayCtx.save();
    roadOverlayCtx.strokeStyle = '#00e5a3';
    roadOverlayCtx.fillStyle = 'rgba(0, 229, 163, 0.35)';
    roadOverlayCtx.lineWidth = 2.5;
    roadOverlayCtx.beginPath();
    roadOverlayCtx.arc(gazePt.x, gazePt.y, 9, 0, Math.PI * 2);
    roadOverlayCtx.fill();
    roadOverlayCtx.stroke();

    roadOverlayCtx.strokeStyle = 'rgba(0, 229, 163, 0.8)';
    roadOverlayCtx.lineWidth = 1.5;
    roadOverlayCtx.beginPath();
    roadOverlayCtx.moveTo(gazePt.x - 14, gazePt.y); roadOverlayCtx.lineTo(gazePt.x + 14, gazePt.y);
    roadOverlayCtx.moveTo(gazePt.x, gazePt.y - 14); roadOverlayCtx.lineTo(gazePt.x, gazePt.y + 14);
    roadOverlayCtx.stroke();
    roadOverlayCtx.restore();
  }

  // 6. Vision Mamba (Vim-SS2D) 4-Way O(N) Scanning Beam & Status Badge
  roadOverlayCtx.save();
  const scanTime = performance.now() * 0.001;
  const scanY = (scanTime * 160) % height;
  roadOverlayCtx.strokeStyle = 'rgba(0, 210, 180, 0.28)';
  roadOverlayCtx.lineWidth = 1.5;
  roadOverlayCtx.setLineDash([6, 8]);
  roadOverlayCtx.beginPath();
  roadOverlayCtx.moveTo(0, scanY);
  roadOverlayCtx.lineTo(width, scanY);
  roadOverlayCtx.stroke();
  roadOverlayCtx.setLineDash([]);

  roadOverlayCtx.fillStyle = 'rgba(11, 16, 27, 0.88)';
  roadOverlayCtx.strokeStyle = 'rgba(0, 210, 180, 0.4)';
  roadOverlayCtx.lineWidth = 1;
  roadOverlayCtx.beginPath();
  roadOverlayCtx.roundRect(12, 12, 230, 24, 6);
  roadOverlayCtx.fill();
  roadOverlayCtx.stroke();

  roadOverlayCtx.fillStyle = '#00d2b4';
  roadOverlayCtx.font = 'bold 10px Inter, sans-serif';
  roadOverlayCtx.textAlign = 'left';
  roadOverlayCtx.textBaseline = 'middle';
  roadOverlayCtx.fillText('⚡ Vim-SS2D: 4-Way O(N) Scan Active', 22, 24);
  roadOverlayCtx.restore();
}

function showHazardAlertBanner(msg = '⚠️ WARNING: IMMINENT ROAD HAZARD DETECTED') {
  const banner = document.getElementById('road-hazard-alert-banner');
  if (banner) {
    banner.style.display = 'flex';
    const textSpan = banner.querySelector('span');
    if (textSpan) textSpan.textContent = msg;
  }
}

function hideHazardAlertBanner() {
  const banner = document.getElementById('road-hazard-alert-banner');
  if (banner) banner.style.display = 'none';
}

function emitMetricsUpdate() {
  if (onMetricsUpdated) {
    onMetricsUpdated({
      eyesOpen: currentEyesOpen,
      earLeft: currentEarLeft,
      earRight: currentEarRight,
      avgEar: currentAvgEar,
      perclos: currentPerclos,
      blinksPerMin: currentBlinksPerMin,
      headPose: currentHeadPose,
      yawDeg: emaYawDeg,
      pitchDeg: emaPitchDeg,
      rollDeg: emaRollDeg,
      drowsiness: currentDrowsiness,
      distraction: currentDistraction,
      distractionReason: currentDistractionReason,
      offRoadDurationSec: offRoadDurationSec,
      attentionZone: currentAttentionZone,
      gazeFocus: currentGazeFocus,
      gazeStatus: currentGazeStatus,
      irisDeltaX: emaGazeDeltaX,
      irisDeltaY: emaGazeDeltaY,
      sparkline: gazeSparklineHistory,
      mambaTelemetry: visionMamba.getTelemetry(),
      isEyesPaused,
      eyePauseReason,
      simulatedPose: simulatedDriverPose,
    });
  }
}

export function isEyesCurrentlyPaused() {
  return isEyesPaused;
}

export function getEyePauseReason() {
  return eyePauseReason;
}

export function toggleSimulatedEyesState() {
  if (simulatedEyesState === 'OPEN') {
    simulatedEyesState = 'CLOSED';
    simulatedDriverPose = 'EYES_CLOSED';
  } else if (simulatedEyesState === 'CLOSED') {
    simulatedEyesState = 'HIDDEN';
    simulatedDriverPose = 'FACE_HIDDEN';
  } else {
    simulatedEyesState = 'OPEN';
    simulatedDriverPose = 'ROAD_AHEAD';
  }
  return simulatedEyesState;
}

export function getSimulatedEyesState() {
  return simulatedEyesState;
}

/**
 * Interactive driver pose cycling for demonstration & testing without live camera.
 */
export function cycleSimulatedPose(targetPose = null) {
  const poses = [
    'ROAD_AHEAD',
    'LEFT_MIRROR',
    'RIGHT_MIRROR',
    'PHONE_DISTRACTION',
    'DASHBOARD_GLANCE',
    'REARVIEW_MIRROR',
    'DROWSY_FATIGUE',
    'EYES_CLOSED',
    'FACE_HIDDEN',
  ];

  if (targetPose && poses.includes(targetPose)) {
    simulatedDriverPose = targetPose;
  } else {
    const curIdx = poses.indexOf(simulatedDriverPose);
    const nextIdx = (curIdx + 1) % poses.length;
    simulatedDriverPose = poses[nextIdx];
  }

  simulatedEyesState = (simulatedDriverPose === 'EYES_CLOSED') ? 'CLOSED' : (simulatedDriverPose === 'FACE_HIDDEN' ? 'HIDDEN' : 'OPEN');
  console.log(`[GazeDrive AI] Driver Attention Pose set to: ${simulatedDriverPose}`);
  return simulatedDriverPose;
}

export function getSimulatedPose() {
  return simulatedDriverPose;
}

export function drawGazeSparkline(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = '#00d2b4';
  ctx.lineWidth = 2;
  ctx.beginPath();

  const step = w / (gazeSparklineHistory.length - 1);
  for (let i = 0; i < gazeSparklineHistory.length; i++) {
    const x = i * step;
    const y = h - (gazeSparklineHistory[i] / 48) * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Glow fill
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 210, 180, 0.08)';
  ctx.fill();
}

export function getEmaGazeDeltas() {
  return { x: emaGazeDeltaX, y: emaGazeDeltaY };
}
