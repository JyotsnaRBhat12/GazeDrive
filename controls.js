// GazeDrive Controls Module (Keyboard & UI Virtual Input Processing)

import { CONFIG } from './config.js';
import { adjustSpeedKmh, setSpeedKmh } from './car.js';

const keysPressed = {};
const callbacks = {
  onCameraToggle: null,
  onExportTelemetry: null,
  onDebugToggle: null,
  onReset: null,
  onRulesDebugToggle: null,
  onSeatbeltToggle: null,
  onShiftUp: null,
  onShiftDown: null,
  onEyeResume: null,
  onVoiceToggle: null,
};

// Virtual UI button inputs (set via UI pedal buttons or sliders)
let virtualThrottle = 0;
let virtualBrake = 0;
let virtualSteer = 0;
let virtualHandbrake = 0;

// Smooth interpolated input state
const currentInput = {
  throttle: 0,
  brake: 0,
  steer: 0, // -1 (left) to +1 (right)
  handbrake: 0,
  resetRequested: false,
};

/**
 * Initializes keyboard event listeners and binds callbacks.
 * @param {Object} eventCallbacks - Options object with event hooks
 */
export function init(eventCallbacks = {}) {
  callbacks.onCameraToggle = eventCallbacks.onCameraToggle || null;
  callbacks.onExportTelemetry = eventCallbacks.onExportTelemetry || null;
  callbacks.onDebugToggle = eventCallbacks.onDebugToggle || null;
  callbacks.onReset = eventCallbacks.onReset || null;
  callbacks.onRulesDebugToggle = eventCallbacks.onRulesDebugToggle || null;
  callbacks.onSeatbeltToggle = eventCallbacks.onSeatbeltToggle || null;
  callbacks.onShiftUp = eventCallbacks.onShiftUp || null;
  callbacks.onShiftDown = eventCallbacks.onShiftDown || null;
  callbacks.onEyeResume = eventCallbacks.onEyeResume || null;
  callbacks.onVoiceToggle = eventCallbacks.onVoiceToggle || null;

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
}


function handleKeyDown(e) {
  const key = e.code;

  // Prevent page scroll on driving keys
  if (['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(key)) {
    e.preventDefault();
  }

  // Always mark key as pressed, even during OS key repeats
  keysPressed[key] = true;

  // Single-press action triggers (only run once on initial press, not repeats)
  if (e.repeat) return;

  if (key === 'KeyC') {
    if (callbacks.onEyeResume) callbacks.onEyeResume();
  } else if (key === 'KeyV') {
    if (callbacks.onCameraToggle) callbacks.onCameraToggle();
  } else if (key === 'KeyM') {
    if (callbacks.onVoiceToggle) callbacks.onVoiceToggle();
  } else if (key === 'KeyB') {
    // Dedicated Seatbelt Buckle / Release Toggle Key
    if (callbacks.onSeatbeltToggle) callbacks.onSeatbeltToggle();
  } else if (key === 'KeyE' || key === 'BracketRight') {
    // Upshift transmission (1 -> 2 -> 3 -> 4 -> 5)
    if (callbacks.onShiftUp) callbacks.onShiftUp();
  } else if (key === 'KeyQ' || key === 'BracketLeft') {
    // Downshift transmission (5 -> 4 -> 3 -> 2 -> 1 -> N -> R)
    if (callbacks.onShiftDown) callbacks.onShiftDown();
  } else if (key === 'KeyX') {
    if (callbacks.onExportTelemetry) callbacks.onExportTelemetry();
  } else if (key === 'KeyG') {
    if (callbacks.onDebugToggle) callbacks.onDebugToggle();
  } else if (key === 'KeyT') {
    if (callbacks.onRulesDebugToggle) callbacks.onRulesDebugToggle();
  } else if (key === 'Equal' || key === 'NumpadAdd' || e.key === '+' || e.key === '=') {
    adjustSpeedKmh(5);
  } else if (key === 'Minus' || key === 'NumpadSubtract' || e.key === '-' || e.key === '_') {
    adjustSpeedKmh(-5);
  } else if (key === 'Digit1' || key === 'Numpad1') {
    setSpeedKmh(20);
  } else if (key === 'Digit2' || key === 'Numpad2') {
    setSpeedKmh(40);
  } else if (key === 'Digit3' || key === 'Numpad3') {
    setSpeedKmh(60);
  } else if (key === 'Digit4' || key === 'Numpad4') {
    setSpeedKmh(80);
  } else if (key === 'Digit5' || key === 'Numpad5') {
    setSpeedKmh(100);
  } else if (key === 'Digit0' || key === 'Numpad0') {
    setSpeedKmh(0);
  } else if (key === 'KeyR') {
    currentInput.resetRequested = true;
    if (callbacks.onReset) callbacks.onReset();
  }
}

function handleKeyUp(e) {
  keysPressed[e.code] = false;
}


/**
 * Updates inputs smoothly per frame using delta time.
 * @param {number} dt - Frame time in seconds
 * @returns {Object} Interpolated control state
 */
export function update(dt) {
  // Combine Keyboard press + Virtual UI buttons
  const keyThrottle = (keysPressed['KeyW'] || keysPressed['ArrowUp']) ? 1.0 : 0.0;
  const keyBrake = (keysPressed['KeyS'] || keysPressed['ArrowDown'] || keysPressed['KeyB']) ? 1.0 : 0.0;
  const keyHandbrake = keysPressed['Space'] ? 1.0 : 0.0;

  let keySteer = 0.0;
  if (keysPressed['KeyA'] || keysPressed['ArrowLeft']) keySteer -= 1.0;
  if (keysPressed['KeyD'] || keysPressed['ArrowRight']) keySteer += 1.0;

  const targetThrottle = Math.max(keyThrottle, virtualThrottle);
  const targetBrake = Math.max(keyBrake, virtualBrake);
  const targetHandbrake = Math.max(keyHandbrake, virtualHandbrake);
  const targetSteer = keySteer !== 0 ? keySteer : virtualSteer;

  // Ramping response rates
  const throttleRate = 12.0; // Fast acceleration response
  const brakeRate = 14.0;
  const steerRate = targetSteer === 0 ? CONFIG.CAR.steerReturnSpeed : CONFIG.CAR.steerSpeed * 2.5;

  // Smooth linear interpolation (lerp) towards target values
  currentInput.throttle = lerp(currentInput.throttle, targetThrottle, Math.min(dt * throttleRate, 1.0));
  currentInput.brake = lerp(currentInput.brake, targetBrake, Math.min(dt * brakeRate, 1.0));
  currentInput.handbrake = lerp(currentInput.handbrake, targetHandbrake, Math.min(dt * brakeRate, 1.0));
  currentInput.steer = lerp(currentInput.steer, targetSteer, Math.min(dt * steerRate, 1.0));

  const result = {
    throttle: currentInput.throttle,
    brake: currentInput.brake,
    steer: currentInput.steer,
    handbrake: currentInput.handbrake,
    reset: currentInput.resetRequested,
    rawSteer: targetSteer,
    rawThrottle: targetThrottle,
    rawBrake: targetBrake,
  };

  // Consume reset flag
  currentInput.resetRequested = false;

  return result;
}

// Helpers for Onscreen / Virtual UI Pedal Controls
export function setVirtualThrottle(val) { virtualThrottle = val; }
export function setVirtualBrake(val) { virtualBrake = val; }
export function setVirtualSteer(val) { virtualSteer = val; }
export function setVirtualHandbrake(val) { virtualHandbrake = val; }

export function triggerCameraToggle() {
  if (callbacks.onCameraToggle) callbacks.onCameraToggle();
}

function lerp(start, end, amt) {
  return start + (end - start) * amt;
}

export function getInputState() {
  return { ...currentInput };
}
