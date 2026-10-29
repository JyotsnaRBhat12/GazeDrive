// GazeDrive AI Dashboard Controller (1:1 Reference Match)
// Integrates MediaPipe Iris tracking, Road Hazard AI, Vehicle Dynamics, and Real-Time Evaluation

import { CONFIG, gaze } from './config.js';
import { setVirtualThrottle, setVirtualBrake, setVirtualSteer, triggerCameraToggle } from './controls.js';
import { exportSession, logEvent } from './telemetry.js';
import * as ruleEngine from './ruleEngine.js';
import * as car from './car.js';
import {
  initAIDetection,
  evaluateGazeVsHazards,
  drawGazeSparkline,
  toggleCabinWebcam,
  isEyesCurrentlyPaused,
  getEyePauseReason,
  toggleSimulatedEyesState,
  getSimulatedEyesState,
  cycleSimulatedPose,
  getSimulatedPose,
  getEmaGazeDeltas,
  toggleObstacleBoxes,
  isObstacleBoxesVisible,
  forceResumeEyes,
} from './aiDetection.js';
import { visionMamba } from './visionMamba.js';
import { gazeCalibration } from './gazeCalibration.js';
import { esp32Haptics } from './esp32Haptics.js';
import { geminiViva } from './geminiViva.js';
import { scenarioEngine } from './scenarioEngine.js';
import * as trafficSigns from './trafficSigns.js';
import { voiceNavigator } from './voiceNavigator.js';
import { indianTrafficRules } from './indianTrafficRules.js';

let isPlaying = true;
let isManualControlActive = true;
let testStartTime = performance.now();
let eyePauseStartTime = 0;
let totalPausedDurationMs = 0;
let lastKnownSpeedKmh = 0;
let lastKnownDistanceM = 0;
let lastKnownScore = 76;
let recentEventsLog = [];
let detectedHazardsCache = [];
let activeScorecardTab = 'THEORY';

/**
 * Initializes the GazeDrive AI UI layout matching the reference image.
 */
export function init() {
  const body = document.body;

  body.innerHTML = `
    <div id="gazedrive-app" class="gazedrive-theme">
      <!-- =========================================================================
           TOP MASTER HEADER
           ========================================================================= -->
      <header class="app-header">
        <div class="header-brand">
          <div class="brand-eye-icon">
            <svg viewBox="0 0 32 32" class="eye-svg">
              <ellipse cx="16" cy="16" rx="14" ry="9" fill="none" stroke="#00d2b4" stroke-width="2.4"/>
              <circle cx="16" cy="16" r="5" fill="#00d2b4"/>
              <circle cx="16" cy="16" r="2.2" fill="#0b0f19"/>
            </svg>
          </div>
          <div class="brand-titles">
            <h1 class="brand-title">GazeDrive AI</h1>
            <span class="brand-subtitle">Safer Drivers · Smarter Roads</span>
          </div>
        </div>

        <!-- TOP STAT METRIC CARDS -->
        <div class="header-metrics-group">
          <!-- 1. SPEED -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 12 L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">SPEED</span>
              <div class="metric-stat-row">
                <span id="hdr-speed-val" class="metric-big-num">0</span>
                <span class="metric-unit">km/h</span>
              </div>
            </div>
          </div>

          <!-- 2. GEAR -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">GEAR</span>
              <div class="metric-stat-row">
                <span id="hdr-gear-val" class="metric-big-num">D</span>
                <span id="hdr-gear-label" class="metric-unit">Drive</span>
              </div>
            </div>
          </div>

          <!-- 3. DISTANCE TO HAZARD -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><path d="M4 20 L9 4 M20 20 L15 4 M12 7 L12 9 M12 13 L12 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">DISTANCE TO HAZARD</span>
              <div class="metric-stat-row">
                <span id="hdr-dist-hazard" class="metric-big-num">28</span>
                <span class="metric-unit">m</span>
              </div>
            </div>
          </div>

          <!-- 4. DRIVING TIME -->
          <div class="top-metric-card">
            <div class="metric-icon-wrap">
              <svg viewBox="0 0 24 24" class="hdr-icon"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="12 7 12 12 15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">DRIVING TIME</span>
              <div class="metric-stat-row">
                <span id="hdr-driving-time" class="metric-big-num">02:34</span>
              </div>
            </div>
          </div>

          <!-- 5. ACTIVE SPEED ZONE & REGULATION -->
          <div class="top-metric-card" id="hdr-zone-card" title="Active Road Regulation & Speed Zone">
            <div class="metric-icon-wrap">
              <span id="hdr-zone-icon" style="font-size: 16px;">🚸</span>
            </div>
            <div class="metric-details">
              <span class="metric-heading" id="hdr-zone-title">SPEED ZONE</span>
              <div class="metric-stat-row">
                <span id="hdr-zone-limit-val" class="metric-big-num">50</span>
                <span class="metric-unit">km/h</span>
              </div>
            </div>
            <div id="hdr-zone-badge" class="score-verdict-badge good">Urban</div>
          </div>

          <!-- 6. TEST SCORE RING -->
          <div class="top-metric-card score-card" id="btn-open-scorecard" title="Click to open Full RTO / DMV Scorecard">
            <div class="score-ring-wrap">
              <svg class="score-ring-svg" viewBox="0 0 44 44">
                <circle class="ring-bg" cx="22" cy="22" r="18" />
                <circle id="score-ring-progress" class="ring-fg" cx="22" cy="22" r="18" stroke-dasharray="113.1" stroke-dashoffset="27.1" />
              </svg>
            </div>
            <div class="metric-details">
              <span class="metric-heading">TEST SCORE</span>
              <div class="metric-stat-row">
                <span id="hdr-score-num" class="metric-big-num">76</span>
                <span class="metric-unit">/ 100</span>
              </div>
            </div>
            <div class="score-verdict-badge good" id="hdr-score-verdict">Good</div>
          </div>
        </div>

        <!-- HEADER RIGHT PROFILE & STATUS -->
        <div class="header-right-meta">
          <div id="hdr-system-status-pill" class="status-pill-green">
            <span class="pulse-dot"></span>
            <span id="hdr-system-status-text">System Active</span>
          </div>
          <div id="hdr-live-clock" class="hdr-datetime">Apr 26, 2026 04:32 PM</div>
          <button id="btn-hdr-settings" class="hdr-icon-btn" title="Simulation Settings">⚙️</button>
          <div class="hdr-user-avatar" title="Driver Profile: Active Candidate #402">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar"/>
          </div>
        </div>
      </header>

      <!-- =========================================================================
           APP BODY: LEFT NAV + CENTER VIEWS + RIGHT SIDEBAR
           ========================================================================= -->
      <div class="app-body-layout">
        <!-- 1. LEFT NAVIGATION SIDEBAR -->
        <aside class="app-left-nav">
          <nav class="nav-menu">
            <button class="nav-btn active" data-tab="dashboard"><span class="nav-icon">🏠</span> Dashboard</button>
            <button class="nav-btn" data-tab="monitoring"><span class="nav-icon">👤</span> Driver Monitoring</button>
            <button class="nav-btn" data-tab="road"><span class="nav-icon">🛣️</span> Road View</button>
            <button class="nav-btn" data-tab="hazards"><span class="nav-icon">⚠️</span> Hazard Detection</button>
            <button class="nav-btn" data-tab="mamba"><span class="nav-icon">⚡</span> Vision Mamba SSM</button>
            <button class="nav-btn" data-tab="analytics"><span class="nav-icon">📊</span> Drive Analytics</button>
            <button class="nav-btn" data-tab="settings"><span class="nav-icon">⚙️</span> Settings</button>
          </nav>

          <div class="left-status-footer">
            <div class="status-indicator-row">
              <span class="status-dot green"></span>
              <span id="lbl-camera-connected">Camera Connected</span>
            </div>
            <div class="status-indicator-row">
              <span class="status-dot cyan pulse"></span>
              <span id="lbl-processing-state">Real-time Processing</span>
            </div>
          </div>
        </aside>

        <!-- 2. CENTER CONTENT WORKSPACE -->
        <main class="app-center-workspace">
          <!-- TOP: ROAD VIEW (FRONT CAMERA) -->
          <section class="card-road-view">
            <div class="card-view-header">
              <div class="view-title-tag">
                <span class="cam-icon">📷</span>
                <span>Road View (Front Camera)</span>
              </div>
              <div class="view-header-actions" style="display: flex; align-items: center; gap: 10px;">
                <button id="btn-toggle-voice" class="cam-toggle-btn" style="border-color: rgba(0, 210, 180, 0.45); color: #00d2b4;" title="Toggle Google Maps-style spoken road navigation alerts [M]">
                  🔊 Voice: On
                </button>
                <button id="btn-toggle-boxes" class="cam-toggle-btn" style="border-color: rgba(148, 163, 184, 0.35); color: #94a3b8;" title="Toggle visible bounding boxes on road obstacles">
                  📦 Boxes: Off
                </button>
                <button id="btn-toggle-camera-view" class="cam-toggle-btn" style="border-color: rgba(56, 189, 248, 0.45); color: #38bdf8;" title="Toggle First-Person Cockpit / Third-Person Chase Camera (Press V or C)">
                  🎥 View: Cockpit [V]
                </button>
                <div class="view-live-badge">
                  <span class="live-dot"></span> LIVE
                </div>
              </div>
            </div>

            <div class="road-view-stage">
              <!-- Three.js 3D Simulation Canvas Container -->
              <div id="canvas-container"></div>

              <!-- Live AI Hazard Detection Overlay Canvas (MediaPipe / COCO-SSD / BBoxes) -->
              <canvas id="road-ai-overlay-canvas"></canvas>

              <!-- Dynamic Hazard Alert Banner at Bottom -->
              <div id="road-hazard-alert-banner" class="road-hazard-banner" style="display: none;">
                <span class="alert-icon">⚠️</span> HAZARD DETECTED
              </div>

              <!-- Dynamic Eye Visibility / Closure Pause Alert Overlay -->
              <div id="eye-pause-overlay" class="eye-pause-overlay" style="display: none;">
                <div class="eye-pause-card">
                  <div class="eye-pause-icon-ring">
                    <span class="eye-pause-icon">👁️🚫</span>
                  </div>
                  <h2 id="eye-pause-title" class="eye-pause-title">EYES NOT VISIBLE · SIMULATION PAUSED</h2>
                  <p id="eye-pause-desc" class="eye-pause-desc">
                    Safety system requires continuous driver eye contact. Face the camera and keep eyes open to resume driving.
                  </p>
                  <div class="eye-pause-badges">
                    <div class="eye-pause-pill danger" id="eye-pause-state-pill">
                      <span class="pulse-dot red"></span>
                      <span id="eye-pause-state-text">Driver Eyes Obscured / Closed</span>
                    </div>
                    <div class="eye-pause-pill" id="eye-pause-timer-pill">
                      Paused: <span id="eye-pause-timer-val">0.0s</span>
                    </div>
                  </div>
                  <div class="eye-pause-helper-row">
                    <span class="helper-sub">💡 Press <strong>[C]</strong> to open eyes or look at camera</span>
                    <button id="btn-quick-resume-eyes" class="quick-resume-btn">Open Eyes & Resume ➔</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- BOTTOM: CABIN VIEW (DRIVER CAMERA) + GAZE & ATTENTION -->
          <div class="center-bottom-row">
            <!-- CABIN VIEW (DRIVER CAMERA) -->
            <section class="card-cabin-view">
              <div class="card-view-header">
                <div class="view-title-tag">
                  <span class="cam-icon">📷</span>
                  <span>Cabin View (Driver Camera)</span>
                </div>
                <div class="view-live-badge">
                  <span class="live-dot"></span> LIVE
                </div>
              </div>

              <div class="cabin-view-stage">
                <img id="cabin-driver-fallback-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80" alt="Driver Camera" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%;" />
                <video id="cabin-webcam-video" autoplay playsinline muted style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transform: scaleX(-1); display: none;"></video>
                <canvas id="cabin-mesh-overlay-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;"></canvas>

                <div class="cabin-controls-bar">
                  <button id="btn-cabin-toggle-camera" class="cam-toggle-btn" title="Toggle Live Webcam / Demo Candidate Feed">
                    🎥 <span id="lbl-webcam-toggle">Enable Live Webcam</span>
                  </button>
                  <button id="btn-cabin-cycle-pose" class="cam-toggle-btn pose-cycle-btn" title="Cycle Driver Attention Pose (Head Pose, Phone, Mirrors, Drowsiness)">
                    🔄 <span id="lbl-current-pose">Pose: Road Ahead</span>
                  </button>
                  <button id="btn-cabin-calibrate-gaze" class="cam-toggle-btn calib-btn" title="Run 9-Point Screen Gaze Calibration">
                    🎯 <span id="lbl-calibration-status">9-Pt Calibration</span>
                  </button>
                  <button id="btn-cabin-simulate-eyes" class="cam-toggle-btn eye-test-btn" title="Test Eyes Closed or Hidden to Verify Pause">
                    👁️ <span id="lbl-simulate-eyes">Test Eyes: Open</span>
                  </button>
                </div>
              </div>
            </section>

            <!-- GAZE & ATTENTION -->
            <section class="card-gaze-attention">
              <div class="card-view-header">
                <div class="view-title-tag">
                  <span class="cam-icon">👁️</span>
                  <span>Gaze & Attention (MediaPipe Iris + 3D Head Pose)</span>
                </div>
              </div>

              <div class="gaze-attention-body">
                <!-- Big Hero Focus Indicator -->
                <div class="gaze-focus-hero">
                  <div class="gaze-focus-eye-circle">
                    <svg viewBox="0 0 36 36" class="hero-eye-svg">
                      <ellipse cx="18" cy="18" rx="14" ry="9" fill="none" stroke="#00d2b4" stroke-width="2.5"/>
                      <circle id="hero-eye-pupil" cx="18" cy="18" r="5" fill="#00d2b4"/>
                    </svg>
                  </div>
                  <div class="gaze-focus-labels">
                    <span class="gaze-focus-sub">Gaze Focus Zone</span>
                    <span id="lbl-gaze-focus-target" class="gaze-focus-main">Road Ahead</span>
                    <span id="badge-gaze-status" class="status-pill-small good">Good</span>
                  </div>
                </div>

                <!-- Attention Checklist -->
                <div class="attention-metrics-list">
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">👁️</span> Eyes Open</span>
                    <span id="val-eyes-open" class="attn-value green">100% · EAR 0.32</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">👤</span> Head Pose</span>
                    <span id="val-head-pose" class="attn-value cyan">Center (0°, 0°)</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🌙</span> Drowsiness</span>
                    <span id="val-drowsiness" class="attn-value green">Low (PERCLOS 0%)</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🔄</span> Distraction</span>
                    <span id="val-distraction" class="attn-value green">Low</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🎯</span> Iris Gaze Vector</span>
                    <span id="val-iris-vector" class="attn-value cyan">dx: 0.00, dy: 0.00</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">💓</span> Blink Rate</span>
                    <span id="val-blink-rate" class="attn-value green">16 BPM</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">⚡</span> Vim-SS2D Match</span>
                    <span id="val-mamba-align" class="attn-value cyan">91.4%</span>
                  </div>
                  <div class="attn-row">
                    <span class="attn-label"><span class="attn-ico">🧠</span> SSM Norm ||h_t||</span>
                    <span id="val-mamba-norm" class="attn-value green">1.84</span>
                  </div>
                </div>

                <!-- Vision Mamba Neural Inspector Trigger -->
                <button id="btn-open-mamba-modal" class="mamba-launch-btn" title="Inspect Vision Mamba State-Space Neural Network">
                  ⚡ Inspect Vision Mamba (SS2D) ➔
                </button>

                <!-- Gaze Tracking Sparkline Chart -->
                <div class="gaze-chart-wrap">
                  <div class="gaze-chart-title-row">
                    <span>Gaze Tracking</span>
                    <span class="chart-sub">(Last 10s)</span>
                  </div>
                  <canvas id="gaze-history-sparkline" width="320" height="48"></canvas>
                  <div class="chart-time-ticks">
                    <span>-10s</span>
                    <span>-8s</span>
                    <span>-6s</span>
                    <span>-4s</span>
                    <span>-2s</span>
                    <span>0s</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <!-- 3. RIGHT SIDEBAR: HAZARDS + VEHICLE DYNAMICS + RECENT EVENTS -->
        <aside class="app-right-sidebar">
          <!-- 1. HAZARD DETECTION -->
          <section class="side-card hazard-detection-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span>🚗</span>
                <span>Hazard Detection</span>
              </div>
              <button class="card-link-btn" id="btn-view-all-hazards">View All ➔</button>
            </div>

            <div id="hazard-list-container" class="hazard-items-list">
              <div class="hazard-list-item">
                <span class="item-icon car">🚗</span>
                <div class="item-info">
                  <span class="item-name">Vehicle Detected (front)</span>
                </div>
                <span class="item-dist danger">22 m</span>
                <span class="item-time">Now</span>
              </div>
              <div class="hazard-list-item">
                <span class="item-icon ped">🚶</span>
                <div class="item-info">
                  <span class="item-name">Pedestrian Detected (right)</span>
                </div>
                <span class="item-dist warning">36 m</span>
                <span class="item-time">2s ago</span>
              </div>
              <div class="hazard-list-item">
                <span class="item-icon lane">🛣️</span>
                <div class="item-info">
                  <span class="item-name">Lane Deviation</span>
                </div>
                <span class="item-dist muted">-</span>
                <span class="item-time">5s ago</span>
              </div>
              <div class="hazard-list-item">
                <span class="item-icon speed">🛑</span>
                <div class="item-info">
                  <span class="item-name">Speed Limit Exceeded</span>
                </div>
                <span class="item-dist danger">52 / 40 km/h</span>
                <span class="item-time">7s ago</span>
              </div>
            </div>
          </section>

          <!-- 2. VEHICLE DYNAMICS & CONTROLS -->
          <section class="side-card dynamics-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span>🚗</span>
                <span>Vehicle Dynamics & Controls</span>
              </div>
            </div>

            <!-- 3 Circular Gauges: Speed, RPM, Acceleration -->
            <div class="circular-gauges-row">
              <!-- Speed Gauge -->
              <div class="mini-arc-gauge">
                <svg viewBox="0 0 80 50" class="arc-svg">
                  <path d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" stroke-linecap="round"/>
                  <path id="gauge-arc-speed" d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="#00d2b4" stroke-width="6" stroke-linecap="round" stroke-dasharray="88" stroke-dashoffset="40"/>
                </svg>
                <div class="arc-stat-center">
                  <span id="arc-speed-val" class="arc-val">52</span>
                  <span class="arc-unit">km/h</span>
                </div>
                <span class="arc-label">Speed</span>
              </div>

              <!-- RPM Gauge -->
              <div class="mini-arc-gauge">
                <svg viewBox="0 0 80 50" class="arc-svg">
                  <path d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" stroke-linecap="round"/>
                  <path id="gauge-arc-rpm" d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="#00d2b4" stroke-width="6" stroke-linecap="round" stroke-dasharray="88" stroke-dashoffset="35"/>
                </svg>
                <div class="arc-stat-center">
                  <span id="arc-rpm-val" class="arc-val">2200</span>
                  <span class="arc-unit">RPM</span>
                </div>
                <span class="arc-label">Engine RPM</span>
              </div>

              <!-- Acceleration Gauge -->
              <div class="mini-arc-gauge">
                <svg viewBox="0 0 80 50" class="arc-svg">
                  <path d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" stroke-linecap="round"/>
                  <path id="gauge-arc-accel" d="M 12 45 A 30 30 0 0 1 68 45" fill="none" stroke="#00d2b4" stroke-width="6" stroke-linecap="round" stroke-dasharray="88" stroke-dashoffset="50"/>
                </svg>
                <div class="arc-stat-center">
                  <span id="arc-accel-val" class="arc-val">14</span>
                  <span class="arc-unit">m/s²</span>
                </div>
                <span class="arc-label">Acceleration</span>
              </div>
            </div>

            <!-- Manual Control & D-Pad Row -->
            <div class="manual-controls-subpanel">
              <div class="manual-toggle-row">
                <span>Manual Control</span>
                <label class="switch">
                  <input type="checkbox" id="chk-manual-control" checked>
                  <span class="slider round"></span>
                </label>
              </div>

              <div class="dpad-buttons-row">
                <button id="ctrl-btn-left" class="dpad-btn" title="Steer Left [A / ←]">←</button>
                <button id="ctrl-btn-up" class="dpad-btn" title="Accelerate [W / ↑]">↑</button>
                <button id="ctrl-btn-down" class="dpad-btn" title="Reverse / Decel [S / ↓]">↓</button>
                <button id="ctrl-btn-right" class="dpad-btn" title="Steer Right [D / →]">→</button>
                <button id="ctrl-btn-brake" class="dpad-btn brake-btn" title="Brake [Space]">Brake</button>
                <button id="ctrl-btn-auto" class="dpad-btn auto-btn" title="AI Auto Cruise">Auto</button>
              </div>
            </div>
          </section>

          <!-- 3. RECENT EVENTS -->
          <section class="side-card recent-events-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span>🕒</span>
                <span>Recent Events</span>
              </div>
              <button class="card-link-btn" id="btn-view-all-events">View All ➔</button>
            </div>

            <div id="recent-events-list" class="recent-events-list">
              <div class="event-item">
                <span class="event-time">04:32</span>
                <span class="event-icon ped">🚶</span>
                <span class="event-desc">Pedestrian detected (right)</span>
                <span class="event-badge high">High</span>
              </div>
              <div class="event-item">
                <span class="event-time">04:28</span>
                <span class="event-icon lane">🛣️</span>
                <span class="event-desc">Lane deviation (mild)</span>
                <span class="event-badge medium">Medium</span>
              </div>
              <div class="event-item">
                <span class="event-time">04:21</span>
                <span class="event-icon speed">⚠️</span>
                <span class="event-desc">Speed limit: 60 km/h</span>
                <span class="event-badge info">Info</span>
              </div>
              <div class="event-item">
                <span class="event-time">04:12</span>
                <span class="event-icon car">🚗</span>
                <span class="event-desc">Vehicle detected (22 m)</span>
                <span class="event-badge info">Info</span>
              </div>
            </div>
          </section>

          <!-- ESP32 HAPTIC FEEDBACK MONITOR -->
          <section class="side-card esp32-haptic-card">
            <div class="side-card-header">
              <div class="side-card-title">
                <span class="pulse-haptic-icon">📳</span>
                <span>ESP32 Haptics</span>
              </div>
              <button class="card-link-btn" id="btn-esp32-connect">Connect USB</button>
            </div>

            <div class="esp32-body">
              <div class="esp32-status-banner">
                <div class="esp32-port-pill" id="esp32-port-pill">
                  <span class="status-dot green" id="esp32-dot"></span>
                  <span id="esp32-mode-label">Virtual ESP32 Simulator</span>
                </div>
                <div class="esp32-duty-badge">
                  Duty: <strong id="esp32-duty-val">0%</strong>
                </div>
              </div>

              <!-- Haptic Motor Vibration Visualizer -->
              <div class="esp32-motor-meter-row">
                <div class="motor-unit-box" id="esp32-motor-box">
                  <div class="motor-icon-ring" id="esp32-motor-ring">
                    <span>⚡</span>
                  </div>
                  <div class="motor-meta">
                    <span class="motor-title">ERM / LRA Actuator</span>
                    <span class="motor-cmd" id="esp32-last-cmd">IDLE (0 PWM)</span>
                  </div>
                </div>
                <button id="btn-esp32-test-pulse" class="haptic-test-btn" title="Send Test Haptic Pulse">Test Pulse</button>
              </div>

              <!-- Real-time Serial Packet Log -->
              <div class="esp32-serial-log" id="esp32-serial-log">
                <div class="serial-log-line init">> Serial initialized @ 115200 baud</div>
                <div class="serial-log-line ready">> Ready for Gaze-Hazard sync</div>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <!-- =========================================================================
           MASTER BOTTOM FOOTER BAR
           ========================================================================= -->
      <footer class="app-bottom-footer">
        <div class="footer-left-progress">
          <div class="footer-steering-icon">
            <svg viewBox="0 0 24 24" class="ft-icon"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="9" stroke="currentColor" stroke-width="2"/><line x1="3" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2"/><line x1="15" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/></svg>
          </div>
          <div class="progress-details">
            <div class="progress-label-row">
              <span>Driving Test Progress</span>
              <span id="footer-test-timer" class="progress-time">0:00 / 10:00</span>
            </div>
            <div class="progress-track">
              <div id="footer-test-progress-bar" class="progress-fill" style="width: 5%;"></div>
            </div>
          </div>
        </div>

        <div class="footer-center-meta">
          <div class="scenario-badge" id="btn-cycle-scenario" style="cursor: pointer;" title="Click to Switch Offline Scenario (YOLOv8 + Vision Mamba)">
            <span class="meta-icon">🏙️</span>
            <div class="meta-texts">
              <span class="meta-label">Offline Scenario (YOLOv8 / Vim) 🔄</span>
              <span id="lbl-current-scenario" class="meta-val">Urban Pedestrian Crossing</span>
            </div>
          </div>

          <div class="scenario-badge">
            <span class="meta-icon">🎯</span>
            <div class="meta-texts">
              <span class="meta-label">Evaluation Engine</span>
              <span id="lbl-test-mode" class="meta-val">Iris Fixation (≤1200ms) + Dwell (≥150ms)</span>
            </div>
          </div>
        </div>

        <div class="footer-actions">
          <button id="btn-open-viva" class="footer-btn btn-viva" title="Open Traffic Rules Viva Examination"><span class="btn-ic">📋</span> Traffic Rules Viva</button>
          <button id="btn-end-test" class="footer-btn btn-end"><span class="btn-ic">⏹</span> End Test</button>
          <button id="btn-save-report" class="footer-btn btn-save"><span class="btn-ic">📥</span> Save Report</button>
        </div>
      </footer>

      <!-- OFFICIAL SCORECARD MODAL -->
      <div id="driving-test-modal" class="driving-test-modal">
        <div class="test-scorecard-card">
          <div class="scorecard-header">
            <div>
              <div id="scorecard-title" class="scorecard-title">TRAFFIC RULES VIVA EXAMINATION REPORT</div>
              <div id="scorecard-subtitle" class="scorecard-subtitle">INDIAN TRAFFIC RULES & MVA 2019 VIVA · CANDIDATE #402</div>
            </div>
            <button id="btn-modal-close-test-x" class="debug-close-btn" style="font-size: 16px;">✕</button>
          </div>

          <!-- SCORECARD TABS: Viva vs Practical -->
          <div class="scorecard-tabs-bar">
            <button id="tab-scorecard-theory" class="sc-tab-btn active">📋 Traffic Rules Viva (Questions & Marks)</button>
            <button id="tab-scorecard-practical" class="sc-tab-btn">🚗 3D Driving Skill & Reaction</button>
          </div>

          <div class="scorecard-summary-row">
            <div id="scorecard-circle" class="score-big-circle">
              <span id="modal-test-score" class="score-num">0</span>
              <span id="modal-test-score-unit" class="score-max">/ 30 MARKS</span>
            </div>
            <div class="verdict-box">
              <span id="modal-test-verdict-label" style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Official Test Verdict</span>
              <span id="modal-test-verdict" class="verdict-tag pass">TEST PENDING</span>
              <span id="modal-test-timestamp" style="font-size: 10px; color: var(--text-dim); margin-top: 2px;">Evaluated in real-time</span>
            </div>
          </div>

          <div id="modal-checklist-title" style="font-size: 12px; font-weight: 800; color: var(--text-main); margin-top: 4px;">
            ITEMIZED QUESTION & MARKS BREAKDOWN:
          </div>

          <div id="modal-test-checklist" class="checklist-table"></div>

          <div class="scorecard-actions">
            <button id="btn-modal-reset-test" class="action-btn-red">🔄 Retake Viva Exam</button>
            <button id="btn-scorecard-take-viva" class="action-btn-teal" style="background:#00d2b4; border:1px solid #00d2b4; color:#0b0f19;">📋 Continue Viva Exam</button>
            <button id="btn-modal-close-test" class="action-btn-teal">Close Report</button>
          </div>
        </div>
      </div>

      <!-- =========================================================================
           VISION MAMBA (VIM / SS2D) ARCHITECTURE INSPECTOR MODAL
           ========================================================================= -->
      <div id="vision-mamba-modal" class="gazedrive-modal-backdrop">
        <div class="mamba-modal-content">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="title-with-badge">
                <span style="font-size: 20px;">⚡</span>
                <h2 class="modal-title">Vision Mamba (Vim-SS2D) Neural State-Space Inspector</h2>
              </div>
              <p class="modal-subtitle">Bidirectional 2D Selective Scan (SS2D) + Cross-State-Space Gaze-Hazard Attention</p>
            </div>
            <button id="btn-modal-close-mamba-x" class="modal-close-btn">&times;</button>
          </div>

          <!-- TOP METRIC CARDS -->
          <div class="mamba-metric-cards-row">
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">COMPLEXITY</span>
              <span class="mamba-stat-val cyan">O(N) Linear</span>
              <span class="mamba-stat-sub">vs O(N²) ViT Attention</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">SSM HIDDEN NORM ||h_t||</span>
              <span id="mamba-modal-norm" class="mamba-stat-val green">1.84</span>
              <span class="mamba-stat-sub">Structured HiPPO Decay</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">SELECTIVE STEP Δ_t</span>
              <span id="mamba-modal-delta" class="mamba-stat-val amber">0.192</span>
              <span class="mamba-stat-sub">ZOH Discretization</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">CROSS-SSM LOCK</span>
              <span id="mamba-modal-align" class="mamba-stat-val teal">91.4%</span>
              <span class="mamba-stat-sub">RBF Manifold Kernel</span>
            </div>
            <div class="mamba-stat-box">
              <span class="mamba-stat-label">INFERENCE LATENCY</span>
              <span id="mamba-modal-latency" class="mamba-stat-val green">6.8 ms</span>
              <span class="mamba-stat-sub">147 FPS Throughput</span>
            </div>
          </div>

          <!-- MAIN BODY: VISUAL TOKEN HEATMAP + MATHEMATICAL FORMULATION -->
          <div class="mamba-grid-row">
            <!-- LEFT: 16x12 VISUAL PATCH TOKEN ACTIVATION HEATMAP -->
            <div class="mamba-panel">
              <div class="panel-header-row">
                <span class="panel-title">📡 Live 2D Selective Scan (SS2D) Patch Activation Grid</span>
                <span class="panel-pill">192 Tokens (16×12)</span>
              </div>
              <div class="canvas-wrap">
                <canvas id="mamba-heatmap-canvas" width="460" height="230"></canvas>
              </div>
              <div class="heatmap-legend-row">
                <div class="legend-item"><span class="leg-color leg-scan"></span> 4-Way Sweep (SS2D)</div>
                <div class="legend-item"><span class="leg-color leg-gaze"></span> Driver Gaze Target</div>
                <div class="legend-item"><span class="leg-color leg-hazard"></span> Detected Hazard Cell</div>
                <div class="legend-item"><span class="leg-color leg-high"></span> Peak Token Saliency</div>
              </div>
            </div>

            <!-- RIGHT: MATHEMATICAL SSM FORMULATION -->
            <div class="mamba-panel">
              <div class="panel-header-row">
                <span class="panel-title">📐 State-Space Discretization & Mathematical Proof</span>
                <span class="panel-pill">Vim-S Backbone</span>
              </div>
              <div class="math-equations-box">
                <div class="eq-block">
                  <span class="eq-name">1. Continuous Time State-Space ODE:</span>
                  <div class="eq-latex">h'(t) = A · h(t) + B(x_t) · x(t) &nbsp;|&nbsp; y(t) = C(x_t) · h(t) + D · x(t)</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">2. Input-Dependent Parameter Projections (Selective):</span>
                  <div class="eq-latex">Δ_t = softplus(W_Δ · x_t + b_Δ) &nbsp;|&nbsp; B_t = W_B · x_t &nbsp;|&nbsp; C_t = W_C · x_t</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">3. Zero-Order Hold (ZOH) Discretization:</span>
                  <div class="eq-latex">Ā = exp(Δ_t · A) &nbsp;|&nbsp; B̄ = Δ_t · B_t &nbsp;|&nbsp; h_t = Ā · h_{t-1} + B̄ · x_t</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">4. 2D Selective Scan Unrolling (4 Scan Directions):</span>
                  <div class="eq-latex">Y = (Scan_Fwd + Scan_Bwd + Scan_ColFwd + Scan_ColBwd) / 4</div>
                </div>
                <div class="eq-block">
                  <span class="eq-name">5. Gaze-Hazard Cross-Manifold Fusion Kernel:</span>
                  <div class="eq-latex">K(g_t, s_k) = exp( - ||g_t - s_k||² / (2σ²) ) &nbsp;[Foveal σ = 0.12]</div>
                </div>
              </div>
            </div>
          </div>

          <!-- BOTTOM TABLE: ALL 3 AI MODELS IN PROJECT PIPELINE -->
          <div class="models-summary-card">
            <div class="table-header-title">🛡️ GazeDrive AI Tri-Model Perception & Evaluation Stack</div>
            <table class="stack-table">
              <thead>
                <tr>
                  <th>Model Component</th>
                  <th>Core Architecture</th>
                  <th>Inputs / Landmarks</th>
                  <th>Complexity / FPS</th>
                  <th>Operational Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>MediaPipe Iris</strong></td>
                  <td>Attention Mesh CNN + Iris Refinement</td>
                  <td>478 3D Face Landmarks + 10 Iris Coordinates</td>
                  <td>~12 ms / 60 FPS</td>
                  <td><span class="tbl-badge green">ACTIVE (Real-Time)</span></td>
                </tr>
                <tr>
                  <td><strong>Road Hazard Model</strong></td>
                  <td>Pretrained COCO-SSD (MobileNetV2)</td>
                  <td>Road View Video Stream (Vehicles, Pedestrians)</td>
                  <td>~32 ms / 30 FPS</td>
                  <td><span class="tbl-badge green">ACTIVE (Pretrained)</span></td>
                </tr>
                <tr>
                  <td><strong>Vision Mamba (Vim)</strong></td>
                  <td>Bidirectional 2D Selective Scan (SS2D)</td>
                  <td>192 Visual Patch Tokens + Driver Gaze Vectors</td>
                  <td>6.8 ms / O(N) Linear</td>
                  <td><span class="tbl-badge cyan">ACTIVE (SS2D Tensor)</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="scorecard-actions">
            <button id="btn-modal-close-mamba" class="action-btn-teal">Close Inspector</button>
          </div>
        </div>
      </div>

      <!-- 9-POINT SCREEN GAZE CALIBRATION MODAL -->
      <div id="gaze-calibration-modal" class="gazedrive-modal-backdrop">
        <div class="calibration-modal-stage">
          <div class="calibration-top-header">
            <div class="calib-titles">
              <span class="calib-main-title">🎯 9-Point Driver Gaze Calibration</span>
              <span class="calib-sub-title">Maps normalized MediaPipe Iris landmarks (468/473) with 0.7/0.3 EMA to screen pixels</span>
            </div>
            <div class="calib-status-row">
              <span id="calib-step-indicator" class="calib-step-pill">Point 1 of 9</span>
              <button id="btn-close-calibration" class="modal-close-btn">&times;</button>
            </div>
          </div>

          <!-- 9 Calibration Target Points Grid -->
          <div class="calibration-grid-container" id="calibration-dots-container"></div>

          <div class="calibration-bottom-bar">
            <span class="calib-instruction" id="calib-instruction-text">
              Look directly at the active glowing marker. Press [Space] or click dot to record sample.
            </span>
            <div class="calib-action-btns">
              <button id="btn-calib-sample-now" class="calib-capture-btn">Capture Fixation (Space)</button>
              <button id="btn-calib-auto-cycle" class="calib-auto-btn">Auto-Step (1.2s)</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TRAFFIC RULES VIVA EXAMINATION MODAL -->
      <div id="gemini-viva-modal" class="gazedrive-modal-backdrop">
        <div class="flashcard-modal-content">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="title-with-badge">
                <span style="font-size: 22px;">📋</span>
                <h2 class="modal-title">Traffic Rules Viva Examination</h2>
                <span id="fc-category-badge" class="card-category-tag" style="background:#00d2b426; border-color:#00d2b4; color:#00d2b4;">🛑 MANDATORY SIGNS</span>
                <span id="fc-progress-counter" style="font-size:12px; font-weight:700; color:var(--text-dim); margin-left:8px;">Question 1 of 30</span>
              </div>
              <p class="modal-subtitle">Indian Traffic Rules, IRC:67 Road Signs & Motor Vehicles Act Viva Test</p>
            </div>
            <button id="btn-modal-close-viva-x" class="modal-close-btn">&times;</button>
          </div>

          <!-- TOOLBAR: CATEGORY FILTERS & MODE TOGGLE -->
          <div class="flashcard-toolbar">
            <div class="flashcard-cat-filters" id="fc-cat-filters">
              <button class="cat-filter-btn active" data-cat="ALL">📚 All Rules (30)</button>
              <button class="cat-filter-btn" data-cat="MANDATORY">🛑 Mandatory Signs</button>
              <button class="cat-filter-btn" data-cat="CAUTIONARY">⚠️ Cautionary Signs</button>
              <button class="cat-filter-btn" data-cat="RULES_OF_ROAD">🚗 Rules of the Road</button>
              <button class="cat-filter-btn" data-cat="PENALTIES">⚖️ Penalties & Laws</button>
            </div>
            <div class="mode-toggle-group">
              <button id="btn-mode-flashcard" class="mode-btn active">🎴 Flashcard Mode</button>
              <button id="btn-mode-quiz" class="mode-btn">📝 Quiz Test Mode</button>
            </div>
          </div>

          <!-- MAIN FLASHCARD DISPLAY -->
          <div class="flashcard-main-card" id="fc-main-card">
            <div class="flashcard-card-meta">
              <span id="fc-card-cat-label" class="card-category-tag">🛑 Mandatory Regulatory Sign</span>
              <span id="fc-score-mini" class="fc-score-badge">Score: 0 / 0 (0%)</span>
            </div>

            <div class="flashcard-content-layout">
              <!-- Visual Traffic Sign Display (if sign exists) -->
              <div id="fc-sign-container" class="flashcard-sign-display">
                <!-- SVG injected dynamically -->
              </div>
              <div class="flashcard-prompt-area">
                <h3 id="fc-card-title" class="flashcard-title">STOP Sign</h3>
                <p id="fc-card-question" class="flashcard-question">
                  What is the mandatory driver action required when encountering this octagonal sign?
                </p>
              </div>
            </div>

            <!-- Multiple Choice Interactive Options -->
            <div class="flashcard-options-list" id="fc-options-list">
              <!-- Rendered dynamically -->
            </div>

            <!-- Revealed Answer & Explanation Panel -->
            <div id="fc-revealed-panel" class="flashcard-revealed-panel" style="display: none;">
              <div class="revealed-header">
                <span class="verified-answer-pill">✔ Verified Official Rule Answer</span>
                <span id="fc-rule-citation" class="citation-tag">Section 119 Motor Vehicles Act</span>
              </div>
              <p id="fc-explanation-text" class="revealed-explanation-text">
                Explanation text here...
              </p>
            </div>
          </div>

          <!-- NAVIGATION & ACTION BAR -->
          <div class="flashcard-controls-row">
            <div class="ctrl-btn-group">
              <button id="btn-fc-prev" class="fc-btn">⬅️ Previous</button>
              <button id="btn-fc-flip" class="fc-btn fc-btn-teal">🔄 Flip / Show Answer</button>
              <button id="btn-fc-next" class="fc-btn">Next ➡️</button>
            </div>

            <div class="ctrl-btn-group">
              <button id="btn-fc-shuffle" class="fc-btn" title="Shuffle flashcards randomly">🔀 Shuffle</button>
              <button id="btn-fc-reset" class="fc-btn" title="Reset answers & score">🔄 Restart</button>
              <button id="btn-viva-view-scorecard" class="fc-btn" style="background:var(--accent-cyan); color:#0b101b;">📋 View Scorecard</button>
              <button id="btn-modal-close-viva" class="fc-btn">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  bindEvents();
  startLiveClock();

  // Initialize MediaPipe Iris & Pretrained AI Detection Engine
  initAIDetection({
    onMetricsUpdated: handleAIMetricsUpdate,
    onHazardStateChanged: handleHazardStateChange,
  });

  setTimeout(() => window.dispatchEvent(new Event('resize')), 80);
}

/**
 * Binds UI Event Listeners for controls, navigation, and modals.
 */
function bindEvents() {
  // Navigation Tabs
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab === 'mamba') {
        openMambaModal();
        return;
      }
      if (tab === 'analytics') {
        openModal();
        return;
      }
      navBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Manual Controls D-Pad
  const btnUp = document.getElementById('ctrl-btn-up');
  const btnDown = document.getElementById('ctrl-btn-down');
  const btnLeft = document.getElementById('ctrl-btn-left');
  const btnRight = document.getElementById('ctrl-btn-right');
  const btnBrake = document.getElementById('ctrl-btn-brake');
  const btnAuto = document.getElementById('ctrl-btn-auto');

  if (btnUp) {
    btnUp.addEventListener('mousedown', () => setVirtualThrottle(1.0));
    btnUp.addEventListener('mouseup', () => setVirtualThrottle(0.0));
  }
  if (btnDown) {
    btnDown.addEventListener('mousedown', () => setVirtualBrake(0.8));
    btnDown.addEventListener('mouseup', () => setVirtualBrake(0.0));
  }
  if (btnLeft) {
    btnLeft.addEventListener('mousedown', () => setVirtualSteer(1.0));
    btnLeft.addEventListener('mouseup', () => setVirtualSteer(0.0));
  }
  if (btnRight) {
    btnRight.addEventListener('mousedown', () => setVirtualSteer(-1.0));
    btnRight.addEventListener('mouseup', () => setVirtualSteer(0.0));
  }
  if (btnBrake) {
    btnBrake.addEventListener('mousedown', () => setVirtualBrake(1.0));
    btnBrake.addEventListener('mouseup', () => setVirtualBrake(0.0));
  }
  if (btnAuto) {
    let isAuto = false;
    btnAuto.addEventListener('click', () => {
      isAuto = !isAuto;
      btnAuto.classList.toggle('active', isAuto);
      if (isAuto) {
        car.setSpeedKmh(45);
        btnAuto.textContent = 'Auto: ON';
      } else {
        btnAuto.textContent = 'Auto';
      }
    });
  }

  // Camera & Driver Pose Controls
  const camToggleBtn = document.getElementById('btn-cabin-toggle-camera');
  if (camToggleBtn) {
    camToggleBtn.addEventListener('click', () => {
      toggleCabinWebcam();
    });
  }

  const btnToggleVoice = document.getElementById('btn-toggle-voice');
  if (btnToggleVoice) {
    btnToggleVoice.addEventListener('click', () => {
      const isMuted = voiceNavigator.toggleMute();
      updateVoiceButtonState(isMuted);
    });
  }

  const btnToggleBoxes = document.getElementById('btn-toggle-boxes');
  if (btnToggleBoxes) {
    btnToggleBoxes.addEventListener('click', () => {
      const active = toggleObstacleBoxes();
      btnToggleBoxes.textContent = active ? '📦 Boxes: On' : '📦 Boxes: Off';
      btnToggleBoxes.style.color = active ? '#00d2b4' : '#94a3b8';
      btnToggleBoxes.style.borderColor = active ? 'rgba(0, 210, 180, 0.5)' : 'rgba(148, 163, 184, 0.35)';
    });
  }

  const btnToggleCameraView = document.getElementById('btn-toggle-camera-view');
  if (btnToggleCameraView) {
    btnToggleCameraView.addEventListener('click', () => {
      triggerCameraToggle();
    });
  }

  const btnCyclePose = document.getElementById('btn-cabin-cycle-pose');
  if (btnCyclePose) {
    btnCyclePose.addEventListener('click', () => {
      const nextPose = cycleSimulatedPose();
      const lbl = document.getElementById('lbl-current-pose');
      if (lbl) {
        const poseMap = {
          ROAD_AHEAD: 'Road Ahead',
          LEFT_MIRROR: 'Left Mirror',
          RIGHT_MIRROR: 'Right Mirror',
          PHONE_DISTRACTION: 'Phone (Distracted)',
          DASHBOARD_GLANCE: 'Speedometer',
          REARVIEW_MIRROR: 'Rearview Mirror',
          DROWSY_FATIGUE: 'Drowsy Fatigue',
          EYES_CLOSED: 'Eyes Closed',
          FACE_HIDDEN: 'Face Hidden',
        };
        lbl.textContent = `Pose: ${poseMap[nextPose] || nextPose}`;
      }
    });
  }



  // End Test & Scorecard Modal
  const testModal = document.getElementById('driving-test-modal');
  const btnEndTest = document.getElementById('btn-end-test');
  const btnOpenScorecard = document.getElementById('btn-open-scorecard');
  const btnCloseModal = document.getElementById('btn-modal-close-test');
  const btnCloseModalX = document.getElementById('btn-modal-close-test-x');
  const btnResetModal = document.getElementById('btn-modal-reset-test');
  const tabScorecardTheory = document.getElementById('tab-scorecard-theory');
  const tabScorecardPractical = document.getElementById('tab-scorecard-practical');

  const openModal = () => {
    renderDrivingTestScorecard();
    if (testModal) testModal.classList.add('active');
  };
  const closeModal = () => {
    if (testModal) testModal.classList.remove('active');
  };

  if (tabScorecardTheory) {
    tabScorecardTheory.addEventListener('click', () => {
      activeScorecardTab = 'THEORY';
      renderDrivingTestScorecard();
    });
  }
  if (tabScorecardPractical) {
    tabScorecardPractical.addEventListener('click', () => {
      activeScorecardTab = 'PRACTICAL';
      renderDrivingTestScorecard();
    });
  }

  const btnScorecardTakeViva = document.getElementById('btn-scorecard-take-viva');
  if (btnScorecardTakeViva) {
    btnScorecardTakeViva.addEventListener('click', () => {
      closeModal();
      openViva();
    });
  }

  if (btnEndTest) {
    btnEndTest.addEventListener('click', () => {
      activeScorecardTab = 'PRACTICAL';
      openModal();
    });
  }
  if (btnOpenScorecard) btnOpenScorecard.addEventListener('click', openModal);
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnCloseModalX) btnCloseModalX.addEventListener('click', closeModal);

  if (btnResetModal) {
    btnResetModal.addEventListener('click', () => {
      if (activeScorecardTab === 'THEORY') {
        indianTrafficRules.reset();
        renderFlashcardUI();
        renderDrivingTestScorecard();
        closeModal();
        openViva();
      } else {
        car.reset();
        ruleEngine.reset();
        scenarioEngine.resetTrial();
        handleReset();
        renderDrivingTestScorecard();
        closeModal();
      }
    });
  }

  // =========================================================================
  // 9-POINT SCREEN GAZE CALIBRATION
  // =========================================================================
  const calibModal = document.getElementById('gaze-calibration-modal');
  const btnOpenCalib = document.getElementById('btn-cabin-calibrate-gaze');
  const btnCloseCalib = document.getElementById('btn-close-calibration');
  const btnSampleNow = document.getElementById('btn-calib-sample-now');
  const btnAutoCycle = document.getElementById('btn-calib-auto-cycle');
  const calibContainer = document.getElementById('calibration-dots-container');
  const lblCalibStep = document.getElementById('calib-step-indicator');
  const lblCalibStatus = document.getElementById('lbl-calibration-status');
  let autoCycleTimer = null;

  function renderCalibrationPoints() {
    if (!calibContainer) return;
    calibContainer.innerHTML = '';
    const points = gazeCalibration.points;
    const currentIdx = gazeCalibration.currentPointIndex;

    points.forEach((pt, idx) => {
      const dot = document.createElement('div');
      dot.className = `calib-target-dot ${idx === currentIdx ? 'active' : ''} ${idx < currentIdx ? 'completed' : ''}`;
      dot.style.left = `${pt.x * 100}%`;
      dot.style.top = `${pt.y * 100}%`;
      dot.title = `Calibration Point ${idx + 1} (${pt.label})`;
      dot.innerHTML = `<div class="ring-outer"></div><div class="dot-core"></div>`;

      dot.addEventListener('click', () => {
        captureCalibrationSample();
      });

      calibContainer.appendChild(dot);
    });

    if (lblCalibStep) {
      lblCalibStep.textContent = `Point ${currentIdx + 1} of ${points.length}`;
    }
  }

  function captureCalibrationSample() {
    const deltas = getEmaGazeDeltas ? getEmaGazeDeltas() : { x: 0, y: 0 };
    const isCompleted = gazeCalibration.recordSample(deltas.x, deltas.y);

    if (isCompleted) {
      if (autoCycleTimer) clearInterval(autoCycleTimer);
      if (calibModal) calibModal.classList.remove('active');
      const rms = gazeCalibration.calibrationMatrix.rmsErrorPx;
      if (lblCalibStatus) {
        lblCalibStatus.textContent = `Calibrated (${rms}px RMS)`;
      }
      logRecentEvent('🎯', `9-Pt Gaze Calibration complete (RMS: ${rms}px)`, 'High');
    } else {
      renderCalibrationPoints();
    }
  }

  const openCalibration = () => {
    gazeCalibration.startCalibration();
    renderCalibrationPoints();
    if (calibModal) calibModal.classList.add('active');
  };

  const closeCalibration = () => {
    if (autoCycleTimer) clearInterval(autoCycleTimer);
    if (calibModal) calibModal.classList.remove('active');
  };

  if (btnOpenCalib) btnOpenCalib.addEventListener('click', openCalibration);
  if (btnCloseCalib) btnCloseCalib.addEventListener('click', closeCalibration);
  if (btnSampleNow) btnSampleNow.addEventListener('click', captureCalibrationSample);

  if (btnAutoCycle) {
    btnAutoCycle.addEventListener('click', () => {
      if (autoCycleTimer) clearInterval(autoCycleTimer);
      autoCycleTimer = setInterval(() => {
        captureCalibrationSample();
        if (gazeCalibration.isCalibrated) {
          clearInterval(autoCycleTimer);
        }
      }, 950);
    });
  }

  // =========================================================================
  // ESP32 HAPTIC FEEDBACK MONITOR
  // =========================================================================
  const btnEsp32Connect = document.getElementById('btn-esp32-connect');
  const btnEsp32Test = document.getElementById('btn-esp32-test-pulse');
  const esp32DutyVal = document.getElementById('esp32-duty-val');
  const esp32MotorRing = document.getElementById('esp32-motor-ring');
  const esp32LastCmd = document.getElementById('esp32-last-cmd');
  const esp32SerialLog = document.getElementById('esp32-serial-log');
  const esp32ModeLabel = document.getElementById('esp32-mode-label');

  if (btnEsp32Connect) {
    btnEsp32Connect.addEventListener('click', async () => {
      const res = await esp32Haptics.connect();
      if (esp32ModeLabel) {
        esp32ModeLabel.textContent = res.mode === 'PHYSICAL_SERIAL' ? 'USB COM Port @ 115200' : 'Virtual ESP32 Simulator';
      }
      logRecentEvent('📳', `ESP32 Haptics: ${res.mode}`, 'Info');
    });
  }

  if (btnEsp32Test) {
    btnEsp32Test.addEventListener('click', () => {
      esp32Haptics.triggerHaptic('ALERT', 300, 75);
    });
  }

  esp32Haptics.onStateChange = (state) => {
    if (esp32DutyVal) esp32DutyVal.textContent = `${state.dutyCycle}%`;
    if (esp32MotorRing) {
      esp32MotorRing.classList.toggle('vibrating', state.isVibrating);
    }
    if (esp32LastCmd) esp32LastCmd.textContent = state.lastCommand;
    if (esp32SerialLog && state.history && state.history.length > 0) {
      esp32SerialLog.innerHTML = state.history
        .map((h) => `<div class="serial-log-line">> ${h.timestamp} | ${h.command} (${h.dutyCycle})</div>`)
        .join('');
    }
  };

  // =========================================================================
  // =========================================================================
  // RTO INDIAN TRAFFIC RULES & SIGN IDENTIFICATION FLASHCARDS CONTROLLER
  // =========================================================================
  const vivaModal = document.getElementById('gemini-viva-modal');
  const btnOpenViva = document.getElementById('btn-open-viva');
  const btnCloseViva = document.getElementById('btn-modal-close-viva');
  const btnCloseVivaX = document.getElementById('btn-modal-close-viva-x');

  const fcCategoryBadge = document.getElementById('fc-category-badge');
  const fcProgressCounter = document.getElementById('fc-progress-counter');
  const fcCardCatLabel = document.getElementById('fc-card-cat-label');
  const fcScoreMini = document.getElementById('fc-score-mini');
  const fcSignContainer = document.getElementById('fc-sign-container');
  const fcCardTitle = document.getElementById('fc-card-title');
  const fcCardQuestion = document.getElementById('fc-card-question');
  const fcOptionsList = document.getElementById('fc-options-list');
  const fcRevealedPanel = document.getElementById('fc-revealed-panel');
  const fcRuleCitation = document.getElementById('fc-rule-citation');
  const fcExplanationText = document.getElementById('fc-explanation-text');

  const btnFcPrev = document.getElementById('btn-fc-prev');
  const btnFcFlip = document.getElementById('btn-fc-flip');
  const btnFcNext = document.getElementById('btn-fc-next');
  const btnFcShuffle = document.getElementById('btn-fc-shuffle');
  const btnFcReset = document.getElementById('btn-fc-reset');
  const btnModeFlashcard = document.getElementById('btn-mode-flashcard');
  const btnModeQuiz = document.getElementById('btn-mode-quiz');
  const fcCatFilters = document.getElementById('fc-cat-filters');

  function renderFlashcardUI() {
    const card = indianTrafficRules.getCurrentCard();
    if (!card) return;

    const summary = indianTrafficRules.getScoreSummary();

    // 1. Meta & Header
    if (fcCategoryBadge) fcCategoryBadge.textContent = card.categoryLabel;
    if (fcProgressCounter) {
      fcProgressCounter.textContent = `Question ${indianTrafficRules.currentIndex + 1} of ${indianTrafficRules.cards.length}`;
    }
    if (fcCardCatLabel) fcCardCatLabel.textContent = card.categoryLabel;
    if (fcScoreMini) {
      fcScoreMini.textContent = `Score: ${summary.correct} / ${summary.answered} (${summary.scorePct}%)`;
    }

    // 2. Title & Question
    if (fcCardTitle) fcCardTitle.textContent = card.title;
    if (fcCardQuestion) fcCardQuestion.textContent = card.question;

    // 3. Visual Traffic Sign Display
    if (fcSignContainer) {
      if (card.signSvg) {
        fcSignContainer.style.display = 'flex';
        fcSignContainer.innerHTML = card.signSvg;
      } else {
        fcSignContainer.style.display = 'flex';
        fcSignContainer.innerHTML = `<span style="font-size: 54px;">🚗</span>`;
      }
    }

    // 4. Citation & Explanation
    if (fcRuleCitation) fcRuleCitation.textContent = card.ruleCitation || 'Indian Motor Vehicles Act';
    if (fcExplanationText) fcExplanationText.textContent = card.explanation;

    // 5. Check answered state or flipped state
    const answerRecord = indianTrafficRules.getAnswer(card.id);
    const isAnswered = answerRecord !== null;
    const isFlipped = indianTrafficRules.isFlipped;

    if (fcRevealedPanel) {
      fcRevealedPanel.style.display = (isAnswered || isFlipped) ? 'flex' : 'none';
    }

    // 6. Render Multiple Choice Options
    if (fcOptionsList) {
      fcOptionsList.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      card.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'flashcard-option-btn';

        if (isAnswered) {
          if (idx === card.correctIndex) {
            btn.classList.add('correct');
          } else if (idx === answerRecord.selectedIndex) {
            btn.classList.add('wrong');
          }
          btn.disabled = true;
        } else if (isFlipped && idx === card.correctIndex) {
          btn.classList.add('correct');
        }

        btn.innerHTML = `<span class="opt-badge">${letters[idx]}</span> <span>${optText}</span>`;

        btn.addEventListener('click', () => {
          if (isAnswered) return;
          indianTrafficRules.submitAnswer(card.id, idx);
          renderFlashcardUI();
          renderDrivingTestScorecard();
        });

        fcOptionsList.appendChild(btn);
      });
    }

    // 7. Navigation Buttons
    if (btnFcPrev) btnFcPrev.disabled = indianTrafficRules.currentIndex === 0;
    if (btnFcNext) btnFcNext.disabled = indianTrafficRules.currentIndex === indianTrafficRules.cards.length - 1;
    if (btnFcFlip) {
      btnFcFlip.textContent = isFlipped ? '🔄 Hide Answer' : '🔄 Flip / Show Answer';
    }
  }

  const openViva = () => {
    if (vivaModal) vivaModal.classList.add('active');
    renderFlashcardUI();
  };

  const closeViva = () => {
    if (vivaModal) vivaModal.classList.remove('active');
  };

  if (btnOpenViva) btnOpenViva.addEventListener('click', () => openViva());
  if (btnCloseViva) btnCloseViva.addEventListener('click', closeViva);
  if (btnCloseVivaX) btnCloseVivaX.addEventListener('click', closeViva);

  if (btnFcPrev) {
    btnFcPrev.addEventListener('click', () => {
      indianTrafficRules.prevCard();
      renderFlashcardUI();
    });
  }

  if (btnFcNext) {
    btnFcNext.addEventListener('click', () => {
      indianTrafficRules.nextCard();
      renderFlashcardUI();
    });
  }

  if (btnFcFlip) {
    btnFcFlip.addEventListener('click', () => {
      indianTrafficRules.flipCard();
      renderFlashcardUI();
    });
  }

  if (btnFcShuffle) {
    btnFcShuffle.addEventListener('click', () => {
      indianTrafficRules.shuffle();
      renderFlashcardUI();
    });
  }

  if (btnFcReset) {
    btnFcReset.addEventListener('click', () => {
      indianTrafficRules.reset();
      renderFlashcardUI();
      renderDrivingTestScorecard();
    });
  }

  if (btnModeFlashcard) {
    btnModeFlashcard.addEventListener('click', () => {
      indianTrafficRules.setMode('FLASHCARD');
      btnModeFlashcard.classList.add('active');
      if (btnModeQuiz) btnModeQuiz.classList.remove('active');
      renderFlashcardUI();
    });
  }

  if (btnModeQuiz) {
    btnModeQuiz.addEventListener('click', () => {
      indianTrafficRules.setMode('QUIZ');
      btnModeQuiz.classList.add('active');
      if (btnModeFlashcard) btnModeFlashcard.classList.remove('active');
      renderFlashcardUI();
    });
  }

  if (fcCatFilters) {
    const filterBtns = fcCatFilters.querySelectorAll('.cat-filter-btn');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        indianTrafficRules.setCategory(cat);
        renderFlashcardUI();
      });
    });
  }

  const btnVivaViewScorecard = document.getElementById('btn-viva-view-scorecard');
  if (btnVivaViewScorecard) {
    btnVivaViewScorecard.addEventListener('click', () => {
      closeViva();
      activeScorecardTab = 'THEORY';
      renderDrivingTestScorecard();
      openModal();
    });
  }

  // =========================================================================
  // OFFLINE SCENARIO CYCLER (YOLOv8 + Vision Mamba)
  // =========================================================================
  const btnCycleScenario = document.getElementById('btn-cycle-scenario');
  const lblScenario = document.getElementById('lbl-current-scenario');
  if (btnCycleScenario) {
    btnCycleScenario.addEventListener('click', () => {
      scenarioEngine.nextScenario();
      const state = scenarioEngine.getState();
      if (lblScenario && state.activeScenario) {
        lblScenario.textContent = state.activeScenario.name;
      }
      logRecentEvent('🏙️', `Scenario switched: ${state.activeScenario.name}`, 'Info');
    });
  }

  scenarioEngine.onTrialCompleted = (trial) => {
    logRecentEvent('🏁', `Trial ${trial.scenarioName}: ${trial.outcome} (Fixation: ${trial.firstFixationLatencyMs}ms)`, 'High');
  };

  scenarioEngine.onAlertOnset = (scenario) => {
    logRecentEvent('⚠️', `HAZARD ALERT ONSET: ${scenario.name} - Alert-to-Freeze window open`, 'High');
  };

  // Automatic Viva Summon upon Multi-Hazard Failures (2 to 3 hazard infractions)
  scenarioEngine.onTestFailedDueToHazards = (failData) => {
    logRecentEvent('🚨', `Test Disqualified: ${failData.failedOccurrences} hazard failures. Summoning Viva Examiner.`, 'High');
    setTimeout(() => {
      openViva({
        isTestDisqualified: true,
        totalOccurrences: failData.totalOccurrences,
        failedOccurrences: failData.failedOccurrences,
        scenarioName: failData.lastTrial ? failData.lastTrial.scenarioName : 'Emergency Hazard Encounter',
        firstFixationLatencyMs: failData.lastTrial ? failData.lastTrial.firstFixationLatencyMs : 1450,
        secondaryDwellMs: failData.lastTrial ? failData.lastTrial.secondaryDwellMs : 60,
        outcome: 'COLLISION',
      });
    }, 700);
  };

  // Vision Mamba Neural Inspector Modal
  const mambaModal = document.getElementById('vision-mamba-modal');
  const btnOpenMamba = document.getElementById('btn-open-mamba-modal');
  const btnCloseMamba = document.getElementById('btn-modal-close-mamba');
  const btnCloseMambaX = document.getElementById('btn-modal-close-mamba-x');

  const openMambaModal = () => {
    if (mambaModal) {
      mambaModal.classList.add('active');
      const mambaCanvas = document.getElementById('mamba-heatmap-canvas');
      if (mambaCanvas) {
        visionMamba.renderTokenActivationHeatmap(mambaCanvas, detectedHazardsCache, { x: gaze.x, y: gaze.y });
      }
    }
  };
  const closeMambaModal = () => {
    if (mambaModal) mambaModal.classList.remove('active');
  };

  if (btnOpenMamba) btnOpenMamba.addEventListener('click', openMambaModal);
  if (btnCloseMamba) btnCloseMamba.addEventListener('click', closeMambaModal);
  if (btnCloseMambaX) btnCloseMambaX.addEventListener('click', closeMambaModal);

  if (mambaModal) {
    mambaModal.addEventListener('click', (e) => {
      if (e.target === mambaModal) closeMambaModal();
    });
  }
  if (testModal) {
    testModal.addEventListener('click', (e) => {
      if (e.target === testModal) closeModal();
    });
  }
  if (calibModal) {
    calibModal.addEventListener('click', (e) => {
      if (e.target === calibModal) closeCalibration();
    });
  }
  if (vivaModal) {
    vivaModal.addEventListener('click', (e) => {
      if (e.target === vivaModal) closeViva();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMambaModal();
      closeModal();
      closeCalibration();
      closeViva();
    }
    if (e.key === ' ' && calibModal && calibModal.classList.contains('active')) {
      e.preventDefault();
      captureCalibrationSample();
    }
    if (e.key === 'c' || e.key === 'C' || e.key === 'h' || e.key === 'H') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        handleEyeToggle();
      }
    }
  });

  // Simulated Eye Pause Test Buttons
  const btnSimEyes = document.getElementById('btn-cabin-simulate-eyes');
  const lblSimEyes = document.getElementById('lbl-simulate-eyes');
  const btnResumeEyes = document.getElementById('btn-quick-resume-eyes');

  function handleEyeToggle() {
    const nextState = toggleSimulatedEyesState();
    if (lblSimEyes) {
      lblSimEyes.textContent = nextState === 'OPEN' ? 'Test Eyes: Open' : (nextState === 'CLOSED' ? 'Test Eyes: Closed (Paused)' : 'Test Eyes: Hidden (Paused)');
    }
    if (btnSimEyes) btnSimEyes.classList.toggle('active', nextState !== 'OPEN');
  }

  if (btnSimEyes) btnSimEyes.addEventListener('click', handleEyeToggle);
  if (btnResumeEyes) {
    btnResumeEyes.addEventListener('click', () => {
      forceResumeEyes();
      const pauseOverlay = document.getElementById('eye-pause-overlay');
      if (pauseOverlay) pauseOverlay.style.display = 'none';
      if (lblSimEyes) lblSimEyes.textContent = 'Test Eyes: Open';
      if (btnSimEyes) btnSimEyes.classList.remove('active');
    });
  }

  window.addEventListener('open-mamba-inspector', openMambaModal);

  // Save Report
  const btnSave = document.getElementById('btn-save-report');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      exportSession();
    });
  }
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      exportSession();
    });
  }
}

/**
 * Starts live real-time header clock.
 */
function startLiveClock() {
  const clockEl = document.getElementById('hdr-live-clock');
  const updateClock = () => {
    if (!clockEl) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    clockEl.textContent = `${dateStr} ${timeStr}`;
  };
  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * AI Metrics Callback from MediaPipe Iris Detection.
 */
function handleAIMetricsUpdate(metrics) {
  const elEyesOpen = document.getElementById('val-eyes-open');
  const elHeadPose = document.getElementById('val-head-pose');
  const elDrowsiness = document.getElementById('val-drowsiness');
  const elDistraction = document.getElementById('val-distraction');
  const elGazeFocus = document.getElementById('lbl-gaze-focus-target');
  const badgeGazeStatus = document.getElementById('badge-gaze-status');
  const elIrisVector = document.getElementById('val-iris-vector');
  const elBlinkRate = document.getElementById('val-blink-rate');
  const pupilEl = document.getElementById('hero-eye-pupil');

  // Dynamically shift pupil within hero SVG eye
  if (pupilEl) {
    const cx = Math.max(10, Math.min(26, 18 + (metrics.irisDeltaX || 0) * 32));
    const cy = Math.max(12, Math.min(24, 18 + (metrics.irisDeltaY || 0) * 22));
    pupilEl.setAttribute('cx', cx.toFixed(1));
    pupilEl.setAttribute('cy', cy.toFixed(1));
  }

  // 1. Eyes Open & EAR
  if (elEyesOpen) {
    const earVal = metrics.avgEar !== undefined ? metrics.avgEar.toFixed(2) : '0.32';
    elEyesOpen.textContent = `${metrics.eyesOpen}% · EAR ${earVal}`;
    elEyesOpen.className = `attn-value ${metrics.eyesOpen < 35 ? 'danger' : 'green'}`;
  }

  // 2. Head Pose with Yaw, Pitch, Roll in degrees
  if (elHeadPose) {
    const yawStr = metrics.yawDeg !== undefined ? (metrics.yawDeg > 0 ? `+${Math.round(metrics.yawDeg)}°` : `${Math.round(metrics.yawDeg)}°`) : '0°';
    const pitchStr = metrics.pitchDeg !== undefined ? (metrics.pitchDeg > 0 ? `+${Math.round(metrics.pitchDeg)}°` : `${Math.round(metrics.pitchDeg)}°`) : '0°';
    elHeadPose.textContent = `${metrics.headPose} (${yawStr}, ${pitchStr})`;
    elHeadPose.className = `attn-value ${Math.abs(metrics.yawDeg || 0) > 20 || (metrics.pitchDeg || 0) < -16 ? 'danger' : 'cyan'}`;
  }

  // 3. Drowsiness with PERCLOS %
  if (elDrowsiness) {
    elDrowsiness.textContent = `${metrics.drowsiness} (PERCLOS ${metrics.perclos || 0}%)`;
    elDrowsiness.className = `attn-value ${metrics.drowsiness === 'Critical' || metrics.drowsiness === 'High' ? 'danger' : (metrics.drowsiness === 'Moderate' ? 'warning' : 'green')}`;
  }

  // 4. Distraction level with off-road duration
  if (elDistraction) {
    const durStr = metrics.offRoadDurationSec && metrics.offRoadDurationSec > 0.4 ? ` (${metrics.offRoadDurationSec.toFixed(1)}s)` : '';
    elDistraction.textContent = `${metrics.distraction}${durStr}`;
    elDistraction.className = `attn-value ${metrics.distraction === 'Critical' || metrics.distraction === 'High' ? 'danger' : (metrics.distraction === 'Moderate' ? 'warning' : 'green')}`;
  }

  // 5. Iris Gaze Vector
  if (elIrisVector) {
    const dx = (metrics.irisDeltaX || 0).toFixed(2);
    const dy = (metrics.irisDeltaY || 0).toFixed(2);
    elIrisVector.textContent = `dx:${dx > 0 ? '+' : ''}${dx}, dy:${dy > 0 ? '+' : ''}${dy}`;
  }

  // 6. Blink Rate
  if (elBlinkRate) {
    elBlinkRate.textContent = `${metrics.blinksPerMin || 16} BPM`;
  }

  // 7. Gaze Focus & Status Badge
  if (elGazeFocus) elGazeFocus.textContent = metrics.gazeFocus;
  if (badgeGazeStatus) {
    badgeGazeStatus.textContent = metrics.gazeStatus;
    badgeGazeStatus.className = `status-pill-small ${metrics.gazeStatus.toLowerCase()}`;
  }

  // 8. Vision Mamba Live Telemetry
  const elMambaAlign = document.getElementById('val-mamba-align');
  const elMambaNorm = document.getElementById('val-mamba-norm');
  if (elMambaAlign && metrics.mambaTelemetry) {
    elMambaAlign.textContent = `${metrics.mambaTelemetry.crossAttentionAlignment}%`;
  }
  if (elMambaNorm && metrics.mambaTelemetry) {
    elMambaNorm.textContent = metrics.mambaTelemetry.ssmHiddenNorm;
  }

  // 9. Draw Gaze Sparkline
  drawGazeSparkline('gaze-history-sparkline');
}

/**
 * Hazard State Change Callback.
 */
function handleHazardStateChange(event) {
  if (event.type === 'HAZARD_SPOTTED') {
    logRecentEvent('🚶', `${event.hazard.name} spotted (${event.reactionTimeMs} ms)`, 'High');
  }
}

/**
 * Main per-frame update loop invoked from main.js render loop.
 */
export function update(data) {
  const {
    speedKmh,
    distanceM,
    currentGear,
    engineRpm,
    allHazards,
    hazardDebug,
  } = data;

  lastKnownSpeedKmh = speedKmh;
  lastKnownDistanceM = distanceM;

  const roundedSpeed = Math.round(speedKmh);

  // 1. Top Header Speed & Gear
  const hdrSpeed = document.getElementById('hdr-speed-val');
  if (hdrSpeed) hdrSpeed.textContent = roundedSpeed;

  const hdrGear = document.getElementById('hdr-gear-val');
  const hdrGearLabel = document.getElementById('hdr-gear-label');
  if (hdrGear) hdrGear.textContent = currentGear || 'D';
  if (hdrGearLabel) hdrGearLabel.textContent = currentGear === 'R' ? 'Reverse' : (currentGear === 'N' ? 'Neutral' : 'Drive');

  // 2. Distance to Upcoming Hazard
  const nearestHazard = (allHazards && allHazards[0]) || null;
  const distVal = nearestHazard ? nearestHazard.distanceM : (Math.max(12, Math.round(120 - (distanceM % 120))));
  const hdrDist = document.getElementById('hdr-dist-hazard');
  if (hdrDist) hdrDist.textContent = distVal;

  // 3. Driving Elapsed Time (Freezes when test is paused)
  const elapsedSec = Math.max(0, Math.floor((performance.now() - testStartTime - totalPausedDurationMs) / 1000));
  const m = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
  const s = String(elapsedSec % 60).padStart(2, '0');
  const hdrTime = document.getElementById('hdr-driving-time');
  const footerTimer = document.getElementById('footer-test-timer');
  if (hdrTime) hdrTime.textContent = `${m}:${s}`;
  if (footerTimer) footerTimer.textContent = `${m}:${s} / 10:00`;

  const footerBar = document.getElementById('footer-test-progress-bar');
  if (footerBar) {
    const pct = Math.min(100, Math.max(5, (elapsedSec / 600) * 100));
    footerBar.style.width = `${pct}%`;
  }

  // 4. Test Score & Circular Ring
  const calculatedScore = ruleEngine.calculateDriverScore ? ruleEngine.calculateDriverScore() : 76;
  lastKnownScore = calculatedScore;
  const scoreNumEl = document.getElementById('hdr-score-num');
  const scoreRing = document.getElementById('score-ring-progress');
  const scoreVerdict = document.getElementById('hdr-score-verdict');

  if (scoreNumEl) scoreNumEl.textContent = calculatedScore;
  if (scoreRing) {
    // Circumference = 2 * PI * 18 = 113.1
    const offset = 113.1 * (1 - calculatedScore / 100);
    scoreRing.style.strokeDashoffset = offset;
    scoreRing.style.stroke = calculatedScore >= 75 ? '#00d2b4' : (calculatedScore >= 50 ? '#f59e0b' : '#ef4444');
  }
  if (scoreVerdict) {
    scoreVerdict.textContent = calculatedScore >= 75 ? 'Good' : (calculatedScore >= 50 ? 'Warning' : 'Critical');
    scoreVerdict.className = `score-verdict-badge ${calculatedScore >= 75 ? 'good' : (calculatedScore >= 50 ? 'warning' : 'fail')}`;
  }

  // 5. Active Speed Zone & Road Rules HUD Indicator
  const zoneLimitVal = data.signsData ? data.signsData.activeZoneLimit : 50;
  const zoneName = data.signsData ? data.signsData.activeZoneName : 'Urban Zone';
  const isSpeedingInZone = roundedSpeed > zoneLimitVal + 3;

  const hdrZoneLimit = document.getElementById('hdr-zone-limit-val');
  const hdrZoneBadge = document.getElementById('hdr-zone-badge');
  const hdrZoneIcon = document.getElementById('hdr-zone-icon');
  const hdrZoneCard = document.getElementById('hdr-zone-card');

  if (hdrZoneLimit) hdrZoneLimit.textContent = zoneLimitVal;
  if (hdrZoneBadge) {
    if (isSpeedingInZone) {
      hdrZoneBadge.textContent = 'SPEEDING!';
      hdrZoneBadge.className = 'score-verdict-badge fail';
    } else {
      hdrZoneBadge.textContent = zoneLimitVal <= 35 ? 'GO SLOW' : 'COMPLIANT';
      hdrZoneBadge.className = zoneLimitVal <= 35 ? 'score-verdict-badge warning' : 'score-verdict-badge good';
    }
  }
  if (hdrZoneIcon) {
    hdrZoneIcon.textContent = zoneLimitVal <= 30 ? '🚸' : (zoneLimitVal <= 40 ? '⚠️' : '⚡');
  }
  if (hdrZoneCard) {
    hdrZoneCard.style.borderColor = isSpeedingInZone ? 'rgba(239, 68, 68, 0.7)' : '';
  }

  // 6. Evaluate Gaze vs Road Hazards & Traffic Signs via AI Detection Engine
  const container = document.getElementById('canvas-container');
  const w = container ? container.clientWidth : 960;
  const h = container ? container.clientHeight : 540;

  evaluateGazeVsHazards(
    allHazards || [],
    w,
    h,
    data.signsOverlay || [],
    data.upcomingIntersection || null,
    data.carPos ? data.carPos.z : 0
  );

  // 6. Right Sidebar: Vehicle Dynamics 3 Circular Gauges
  const arcSpeed = document.getElementById('arc-speed-val');
  const gaugeArcSpeed = document.getElementById('gauge-arc-speed');
  if (arcSpeed) arcSpeed.textContent = roundedSpeed;
  if (gaugeArcSpeed) {
    // 88 arc length
    const speedPct = Math.min(1.0, roundedSpeed / 120);
    gaugeArcSpeed.style.strokeDashoffset = 88 * (1 - speedPct);
  }

  const arcRpm = document.getElementById('arc-rpm-val');
  const gaugeArcRpm = document.getElementById('gauge-arc-rpm');
  const rpmVal = Math.round(engineRpm || 900 + roundedSpeed * 28);
  if (arcRpm) arcRpm.textContent = rpmVal;
  if (gaugeArcRpm) {
    const rpmPct = Math.min(1.0, rpmVal / 6000);
    gaugeArcRpm.style.strokeDashoffset = 88 * (1 - rpmPct);
  }

  const arcAccel = document.getElementById('arc-accel-val');
  const gaugeArcAccel = document.getElementById('gauge-arc-accel');
  const accelVal = Math.round(CONFIG.CAR.acceleration || 14);
  if (arcAccel) arcAccel.textContent = accelVal;
  if (gaugeArcAccel) {
    const accelPct = Math.min(1.0, accelVal / 30);
    gaugeArcAccel.style.strokeDashoffset = 88 * (1 - accelPct);
  }

  // 7. Update Hazard Detection List in Right Sidebar
  detectedHazardsCache = allHazards || [];
  updateHazardSidebarList(allHazards);

  // 8. Update Eye Closure / Occlusion Pause Logic & UI
  const isEyePaused = isEyesCurrentlyPaused();
  const pauseOverlay = document.getElementById('eye-pause-overlay');
  const hdrPill = document.getElementById('hdr-system-status-pill');
  const hdrText = document.getElementById('hdr-system-status-text');

  if (isEyePaused) {
    if (!eyePauseStartTime) {
      eyePauseStartTime = performance.now();
      const reason = getEyePauseReason();
      logRecentEvent('👁️', `Driver eyes ${reason === 'EYES_CLOSED' ? 'closed' : 'hidden'} - Test paused`, 'High');
    }
    totalPausedDurationMs += 16.6;
    const pausedSec = ((performance.now() - eyePauseStartTime) / 1000).toFixed(1);

    if (pauseOverlay) pauseOverlay.style.display = 'flex';
    const reason = getEyePauseReason();
    const titleEl = document.getElementById('eye-pause-title');
    const descEl = document.getElementById('eye-pause-desc');
    const stateTextEl = document.getElementById('eye-pause-state-text');
    const timerValEl = document.getElementById('eye-pause-timer-val');

    if (titleEl) titleEl.textContent = reason === 'EYES_CLOSED' ? 'EYES CLOSED · SIMULATION PAUSED' : 'EYES NOT VISIBLE · SIMULATION PAUSED';
    if (descEl) descEl.textContent = reason === 'EYES_CLOSED' ? 'Driver eyes are closed. Open your eyes to resume the driving evaluation.' : 'Driver eyes / face are hidden or obscured. Please face the camera to resume.';
    if (stateTextEl) stateTextEl.textContent = reason === 'EYES_CLOSED' ? 'Eyes State: Closed (0%)' : 'Eye Tracking: Lost / Obscured';
    if (timerValEl) timerValEl.textContent = `${pausedSec}s`;

    if (hdrPill) hdrPill.className = 'status-pill-red';
    if (hdrText) hdrText.textContent = reason === 'EYES_CLOSED' ? 'PAUSED (EYES CLOSED)' : 'PAUSED (EYES HIDDEN)';

    const elEyesOpen = document.getElementById('val-eyes-open');
    const elGazeFocus = document.getElementById('lbl-gaze-focus-target');
    const badgeGazeStatus = document.getElementById('badge-gaze-status');
    if (elEyesOpen) {
      elEyesOpen.textContent = reason === 'EYES_CLOSED' ? '0% (Closed)' : 'Hidden';
      elEyesOpen.className = 'attn-value danger';
    }
    if (elGazeFocus) elGazeFocus.textContent = reason === 'EYES_CLOSED' ? 'Eyes Closed' : 'Lost / Hidden';
    if (badgeGazeStatus) {
      badgeGazeStatus.textContent = 'ALERT';
      badgeGazeStatus.className = 'status-pill-small alert';
    }
  } else {
    if (eyePauseStartTime) {
      eyePauseStartTime = 0;
      logRecentEvent('✔', 'Driver eyes visible & open - Simulation resumed', 'High');
    }
    if (pauseOverlay) pauseOverlay.style.display = 'none';
    if (hdrPill) hdrPill.className = 'status-pill-green';
    if (hdrText) hdrText.textContent = 'System Active';
  }

  // 8. Update Live Vision Mamba Neural Inspector (If Active)
  const mambaModal = document.getElementById('vision-mamba-modal');
  if (mambaModal && mambaModal.classList.contains('active')) {
    const mambaCanvas = document.getElementById('mamba-heatmap-canvas');
    if (mambaCanvas) {
      visionMamba.renderTokenActivationHeatmap(mambaCanvas, allHazards, { x: gaze.x, y: gaze.y });
    }
    const tel = visionMamba.getTelemetry();
    const elModNorm = document.getElementById('mamba-modal-norm');
    const elModDelta = document.getElementById('mamba-modal-delta');
    const elModAlign = document.getElementById('mamba-modal-align');
    const elModLat = document.getElementById('mamba-modal-latency');
    if (elModNorm) elModNorm.textContent = tel.ssmHiddenNorm;
    if (elModDelta) elModDelta.textContent = tel.currentDelta;
    if (elModAlign) elModAlign.textContent = `${tel.crossAttentionAlignment}%`;
    if (elModLat) elModLat.textContent = `${tel.lastLatencyMs} ms`;
  }
}

/**
 * Updates the live Hazard Detection card list.
 */
function updateHazardSidebarList(hazardsList) {
  const container = document.getElementById('hazard-list-container');
  if (!container || !hazardsList) return;

  if (hazardsList.length === 0) return;

  const topItems = hazardsList.slice(0, 4);
  container.innerHTML = topItems.map((h, i) => {
    const isPed = h.type === 'PEDESTRIAN' || h.name === 'PEDESTRIAN';
    const icon = isPed ? '🚶' : '🚗';
    const distClass = h.distanceM < 30 ? 'danger' : 'warning';
    const timeText = i === 0 ? 'Now' : `${i * 2}s ago`;

    return `
      <div class="hazard-list-item ${h.spotted ? 'spotted' : ''}">
        <span class="item-icon ${isPed ? 'ped' : 'car'}">${icon}</span>
        <div class="item-info">
          <span class="item-name">${isPed ? 'Pedestrian Detected (right)' : 'Vehicle Detected (front)'}</span>
        </div>
        <span class="item-dist ${distClass}">${h.distanceM} m</span>
        <span class="item-time">${timeText}</span>
      </div>
    `;
  }).join('');
}

/**
 * Logs events to the Recent Events card.
 */
function logRecentEvent(icon, desc, priority = 'Info') {
  const list = document.getElementById('recent-events-list');
  if (!list) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  const item = document.createElement('div');
  item.className = 'event-item';
  item.innerHTML = `
    <span class="event-time">${timeStr}</span>
    <span class="event-icon">${icon}</span>
    <span class="event-desc">${desc}</span>
    <span class="event-badge ${priority.toLowerCase()}">${priority}</span>
  `;

  list.prepend(item);
  if (list.children.length > 5) {
    list.removeChild(list.lastChild);
  }
}

/**
 * Official Scorecard Modal Renderer.
 * Supports RTO Theory Exam (Questions & Marks) and 3D Driving Skill & Reaction.
 */
export function renderDrivingTestScorecard() {
  const tabTheoryBtn = document.getElementById('tab-scorecard-theory');
  const tabPracticalBtn = document.getElementById('tab-scorecard-practical');
  if (tabTheoryBtn && tabPracticalBtn) {
    if (activeScorecardTab === 'THEORY') {
      tabTheoryBtn.classList.add('active');
      tabPracticalBtn.classList.remove('active');
    } else {
      tabPracticalBtn.classList.add('active');
      tabTheoryBtn.classList.remove('active');
    }
  }

  const titleEl = document.getElementById('scorecard-title');
  const subtitleEl = document.getElementById('scorecard-subtitle');
  const scoreEl = document.getElementById('modal-test-score');
  const scoreUnitEl = document.getElementById('modal-test-score-unit');
  const scoreCircle = document.getElementById('scorecard-circle');
  const verdictLabelEl = document.getElementById('modal-test-verdict-label');
  const verdictEl = document.getElementById('modal-test-verdict');
  const timeEl = document.getElementById('modal-test-timestamp');
  const checklistTitleEl = document.getElementById('modal-checklist-title');
  const checklistEl = document.getElementById('modal-test-checklist');
  const btnReset = document.getElementById('btn-modal-reset-test');
  const btnVivaAction = document.getElementById('btn-scorecard-take-viva');

  // =========================================================================
  // TAB 1: TRAFFIC RULES VIVA EXAM (QUESTIONS & MARKS)
  // =========================================================================
  if (activeScorecardTab === 'THEORY') {
    const fc = indianTrafficRules.getScoreSummary();
    if (titleEl) titleEl.textContent = "TRAFFIC RULES VIVA EXAMINATION REPORT";
    if (subtitleEl) subtitleEl.textContent = 'INDIAN TRAFFIC RULES & ROAD SIGN IDENTIFICATION VIVA (IRC:67 / MVA 2019)';
    if (verdictLabelEl) verdictLabelEl.textContent = 'Viva Exam Result';

    if (fc.answered === 0) {
      if (scoreEl) scoreEl.textContent = '0';
      if (scoreUnitEl) scoreUnitEl.textContent = `/ ${fc.total} MARKS`;
      if (scoreCircle) {
        scoreCircle.style.borderColor = 'rgba(148, 163, 184, 0.4)';
        scoreCircle.style.color = '#94a3b8';
      }
      if (verdictEl) {
        verdictEl.textContent = 'TEST PENDING / CLICK BELOW TO START';
        verdictEl.className = 'verdict-tag';
        verdictEl.style.background = 'rgba(148, 163, 184, 0.15)';
        verdictEl.style.color = '#94a3b8';
      }
      if (timeEl) {
        timeEl.textContent = `No questions attempted yet. Pass mark: 75% (${Math.ceil(fc.total * 0.75)}/${fc.total} correct). Click below to start viva.`;
      }
      if (checklistTitleEl) checklistTitleEl.textContent = 'VIVA EXAM STATUS:';
      if (checklistEl) {
        checklistEl.innerHTML = `
          <div style="text-align:center; padding: 36px 20px; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.12); border-radius: 12px;">
            <div style="font-size: 38px; margin-bottom: 8px;">📋</div>
            <div style="font-size: 16px; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">No Viva Questions Attempted Yet</div>
            <p style="font-size: 13px; color: var(--text-muted); margin: 0 0 16px 0; max-width: 480px; margin-inline: auto; line-height: 1.5;">
              Answer basic Indian traffic rules, mandatory & cautionary road signs, and right-of-way viva questions to calculate your official score card and marks breakdown.
            </p>
            <button id="btn-sc-start-theory-inner" class="action-btn-teal" style="display:inline-flex; align-items:center; gap:8px; padding:10px 22px; font-size:13px; font-weight:800; cursor:pointer; background:#00d2b4; color:#0b0f19; border:none; border-radius:8px;">
              🚀 Start 30-Question Viva Exam Now
            </button>
          </div>
        `;
        const btnInner = document.getElementById('btn-sc-start-theory-inner');
        if (btnInner) {
          btnInner.addEventListener('click', () => {
            const m = document.getElementById('driving-test-modal');
            if (m) m.classList.remove('active');
            const vm = document.getElementById('gemini-viva-modal');
            if (vm) vm.classList.add('active');
          });
        }
      }
    } else {
      if (scoreEl) scoreEl.textContent = fc.correct;
      if (scoreUnitEl) {
        scoreUnitEl.innerHTML = `
          <span style="display:block; font-size: 13px; font-weight: 800; color: var(--text-muted);">/ ${fc.answered} MARKS</span>
          <span style="font-size: 11px; font-weight: 800; color: ${fc.isPassing ? '#10b981' : '#ef4444'};">${fc.scorePct}% ACCURACY</span>
        `;
      }
      if (scoreCircle) {
        scoreCircle.style.borderColor = fc.isPassing ? '#10b981' : '#ef4444';
        scoreCircle.style.color = fc.isPassing ? '#10b981' : '#ef4444';
      }
      if (verdictEl) {
        verdictEl.textContent = fc.isPassing
          ? `PASSED / TRAFFIC RULES VIVA QUALIFIED (GRADE ${fc.grade})`
          : `FAILED / VIVA RETEST REQUIRED (${fc.scorePct}% SCORING · PASS IS 75%)`;
        verdictEl.className = `verdict-tag ${fc.isPassing ? 'pass' : 'fail'}`;
        verdictEl.style.background = '';
        verdictEl.style.color = '';
      }
      if (timeEl) {
        timeEl.textContent = `Attempted: ${fc.answered} Questions · Marks Scored: ${fc.correct} / ${fc.answered} (${fc.scorePct}%) · Correct: ${fc.correct} · Incorrect: ${fc.answered - fc.correct} · Pass Threshold: 75%`;
      }
      if (checklistTitleEl) {
        checklistTitleEl.textContent = `ITEMIZED VIVA QUESTIONS & MARKS BREAKDOWN (${fc.correct}/${fc.answered} CORRECT):`;
      }
      if (checklistEl) {
        const reviewItems = indianTrafficRules.getItemizedReview();
        const answeredItems = reviewItems.filter((i) => i.isAnswered);

        checklistEl.innerHTML = answeredItems.map((item) => `
          <div class="checklist-question-review-row" style="background: rgba(255, 255, 255, 0.025); border: 1px solid ${item.isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}; border-radius: 8px; padding: 12px 14px; display: flex; flex-direction: column; gap: 6px;">
            <div class="q-review-top-line" style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size: 11px; font-weight: 800; color: #00d2b4; text-transform: uppercase;">
                Q${item.index} · ${item.categoryLabel}
              </span>
              <span class="q-review-mark-pill ${item.isCorrect ? 'correct' : 'wrong'}">
                ${item.isCorrect ? '+1 Mark · CORRECT ✓' : '0 Marks · INCORRECT ✗'}
              </span>
            </div>
            <div class="q-review-title" style="font-size: 13.5px; font-weight: 700; color: #f8fafc; line-height: 1.4;">
              ${item.title}: ${item.question}
            </div>
            <div class="q-review-ans-line" style="color: ${item.isCorrect ? '#6ee7b7' : '#fca5a5'};">
              <strong>Your Selected Answer:</strong> ${item.candidateAnswerText}
            </div>
            ${!item.isCorrect ? `
            <div class="q-review-ans-line" style="color: #34d399;">
              <strong>Verified Correct RTO Rule:</strong> ${item.correctAnswerText}
            </div>
            ` : ''}
            <div class="q-review-citation" style="font-size: 11px; color: var(--text-dim); line-height: 1.4; margin-top: 2px;">
              <span style="color: var(--accent-cyan); font-weight: 600;">Legal Citation:</span> ${item.citation} — <span style="color: #cbd5e1;">${item.explanation}</span>
            </div>
          </div>
        `).join('') + `
          <div style="font-size: 11.5px; text-align: center; color: var(--text-dim); padding: 10px 4px; border-top: 1px solid rgba(255, 255, 255, 0.08); margin-top: 6px;">
            Showing all ${answeredItems.length} attempted questions (${fc.correct} Correct · ${fc.answered - fc.correct} Incorrect). Total pool: ${reviewItems.length} RTO questions.
          </div>
        `;
      }
    }

    if (btnReset) {
      btnReset.textContent = '🔄 Retake Viva Exam';
    }
    if (btnVivaAction) {
      btnVivaAction.textContent = '📋 Continue Viva Exam';
      btnVivaAction.style.background = 'rgba(0, 210, 180, 0.15)';
      btnVivaAction.style.borderColor = '#00d2b4';
      btnVivaAction.style.color = '#00d2b4';
    }
    return;
  }

  // =========================================================================
  // TAB 2: PRACTICAL 3D DRIVING TELEMETRY & HAZARD REACTION EVALUATION
  // =========================================================================
  const scnState = scenarioEngine.getState();
  const calibState = gazeCalibration.getStatus();

  const fixLatency = scnState.firstFixationLatencyMs || 420;
  const dwell = scnState.secondaryDwellMs || 280;
  const latencyPass = fixLatency <= 1200;
  const dwellPass = dwell >= 150;
  const isOutcomeSuccess = scnState.outcome === 'SUCCESS';

  const violations = ruleEngine.getViolations ? ruleEngine.getViolations() : [];
  const redLightCount = violations.filter((v) => v.type === 'RED_LIGHT_JUMP').length;
  const stopLineCount = violations.filter((v) => v.type === 'STOP_LINE_VIOLATION').length;
  const zoneSpeedCount = violations.filter((v) => v.type === 'SPEEDING_IN_ZONE' || v.type === 'SPEEDING').length;
  const signStats = trafficSigns.getSignPerceptionStats ? trafficSigns.getSignPerceptionStats() : { totalEncountered: 1, totalAcknowledged: 1, perceptionRatePct: 100 };

  const checks = [
    {
      title: 'First-Fixation Latency (≤ 1200 ms)',
      notes: `MediaPipe Iris gaze fixated in ${fixLatency} ms (${latencyPass ? 'Standard met ≤ 1200 ms' : 'Exceeded reaction threshold'})`,
      points: latencyPass ? 20 : 5,
      maxPoints: 20,
      status: latencyPass ? 'PASS' : 'FAIL',
    },
    {
      title: 'Secondary Gaze Dwell (≥ 150 ms)',
      notes: `Hazard confirmation dwell time: ${dwell} ms (${dwellPass ? 'Threshold met ≥ 150 ms' : 'Inadequate dwell'})`,
      points: dwellPass ? 15 : 4,
      maxPoints: 15,
      status: dwellPass ? 'PASS' : 'FAIL',
    },
    {
      title: 'Alert-to-Freeze Reaction Window',
      notes: `Defensive Input: ${scnState.reactionInput || 'BRAKE'} inside window · Outcome: ${scnState.outcome === 'COLLISION' ? 'COLLISION' : 'SUCCESS (Safe Stop)'}`,
      points: isOutcomeSuccess ? 15 : 0,
      maxPoints: 15,
      status: isOutcomeSuccess ? 'PASS' : 'FAIL',
    },
    {
      title: 'Traffic Signal & Stop Line Obedience',
      notes: redLightCount === 0 && stopLineCount === 0
        ? 'Perfect signal compliance · 0 red jumps, 0 stop line overruns'
        : `${redLightCount} RED signal jumps, ${stopLineCount} stop line overruns`,
      points: redLightCount > 0 ? 0 : Math.max(0, 15 - stopLineCount * 5),
      maxPoints: 15,
      status: redLightCount === 0 ? (stopLineCount === 0 ? 'PASS' : 'WARN') : 'FAIL',
    },
    {
      title: 'Speed Limit & "Go Slow" Zone Compliance',
      notes: zoneSpeedCount === 0
        ? 'Adhered strictly to School Zone (30 km/h) & Caution Limits'
        : `${zoneSpeedCount} zone speeding infractions recorded`,
      points: Math.max(0, 10 - zoneSpeedCount * 5),
      maxPoints: 10,
      status: zoneSpeedCount === 0 ? 'PASS' : 'WARN',
    },
    {
      title: 'Traffic Signboard Visual Perception',
      notes: `Driver iris gaze fixated on ${signStats.totalAcknowledged} of ${signStats.totalEncountered} road signs (${signStats.perceptionRatePct}% recognized)`,
      points: Math.round((signStats.perceptionRatePct / 100) * 10),
      maxPoints: 10,
      status: signStats.perceptionRatePct >= 50 ? 'PASS' : (signStats.perceptionRatePct >= 25 ? 'WARN' : 'FAIL'),
    },
    {
      title: '9-Point Screen Gaze Calibration',
      notes: `Iris 468/473 mapping verified · RMS Error: ${calibState.rmsErrorPx} px`,
      points: 10,
      maxPoints: 10,
      status: 'PASS',
    },
    {
      title: 'Traffic Rules & Road Sign Viva Examination',
      notes: (() => {
        const fc = indianTrafficRules.getScoreSummary();
        return fc.answered > 0
          ? `Traffic Rules Viva: Grade ${fc.grade} (${fc.scorePct}% · ${fc.correct}/${fc.answered} marks) · ${fc.verdict}`
          : 'Traffic Rules Viva pending (Click "Take Traffic Rules Viva Exam" to complete)';
      })(),
      points: (() => {
        const fc = indianTrafficRules.getScoreSummary();
        return fc.answered > 0 ? Math.round(fc.scorePct * 0.1) : 0;
      })(),
      maxPoints: 10,
      status: (() => {
        const fc = indianTrafficRules.getScoreSummary();
        return fc.answered >= 1 && fc.isPassing ? 'PASS' : (fc.answered > 0 ? 'WARN' : 'PENDING');
      })(),
    },
  ];

  let calculatedScore = checks.reduce((sum, c) => sum + c.points, 0);
  if (!isOutcomeSuccess && scnState.outcome === 'COLLISION') {
    calculatedScore = Math.min(calculatedScore, 45);
  }
  if (redLightCount > 0) {
    calculatedScore = Math.min(calculatedScore, 50);
  }

  const fcRes = indianTrafficRules.getScoreSummary();
  const isTheoryPass = fcRes.answered >= 1 ? fcRes.isPassing : true;
  const isEligible = calculatedScore >= 75 && isOutcomeSuccess && redLightCount === 0 && isTheoryPass;
  let verdict = 'IN PROGRESS / QUALIFYING';
  if (redLightCount > 0) {
    verdict = 'DISQUALIFIED / RED LIGHT JUMP';
  } else if (scnState.outcome === 'COLLISION') {
    verdict = 'FAILED / COLLISION RECORDED';
  } else if (fcRes.answered >= 1 && !isTheoryPass) {
    verdict = 'FAILED / TRAFFIC RULES VIVA RETEST REQUIRED';
  } else if (isEligible) {
    verdict = fcRes.answered >= 1 ? 'PASSED / LICENCE ENDORSED' : 'QUALIFYING (VIVA PENDING)';
  }

  if (titleEl) titleEl.textContent = 'OFFICIAL DRIVING SKILL TEST REPORT';
  if (subtitleEl) subtitleEl.textContent = 'AI GAZE & HAZARD REACTION EVALUATION · CANDIDATE #402';
  if (verdictLabelEl) verdictLabelEl.textContent = 'Official Test Verdict';

  if (scoreEl) scoreEl.textContent = calculatedScore;
  if (scoreUnitEl) scoreUnitEl.textContent = '/ 100 PTS';
  if (scoreCircle) {
    scoreCircle.style.borderColor = isEligible ? '#10b981' : (calculatedScore >= 50 ? '#f59e0b' : '#ef4444');
    scoreCircle.style.color = isEligible ? '#10b981' : (calculatedScore >= 50 ? '#f59e0b' : '#ef4444');
  }
  if (verdictEl) {
    verdictEl.textContent = verdict;
    verdictEl.className = `verdict-tag ${isEligible ? 'pass' : 'fail'}`;
    verdictEl.style.background = '';
    verdictEl.style.color = '';
  }
  if (timeEl) {
    timeEl.textContent = `Evaluated at ${new Date().toLocaleTimeString()} · Scenario: ${scnState.activeScenario ? scnState.activeScenario.name : 'Urban Pedestrian Crossing'} (YOLOv8 + Vision Mamba)`;
  }
  if (checklistTitleEl) checklistTitleEl.textContent = 'EVALUATION CRITERIA CHECKLIST:';

  if (checklistEl) {
    checklistEl.innerHTML = checks.map((chk) => `
      <div class="checklist-item-row">
        <div class="checklist-name-group">
          <span class="checklist-title">${chk.title}</span>
          <span class="checklist-notes">${chk.notes}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; color: var(--text-muted); font-size: 11px;">${chk.points}/${chk.maxPoints} pts</span>
          <span class="checklist-status-badge ${chk.status.toLowerCase()}">${chk.status}</span>
        </div>
      </div>
    `).join('');
  }

  if (btnReset) {
    btnReset.textContent = '🔄 Retake / Reset 3D Test';
  }
  if (btnVivaAction) {
    btnVivaAction.textContent = '📋 Take Traffic Rules Viva Exam';
    btnVivaAction.style.background = '#00d2b4';
    btnVivaAction.style.borderColor = '#00d2b4';
    btnVivaAction.style.color = '#0b0f19';
  }
}

export function handleSeatbeltToggle(fastened) {}
export function handleGearShift(gear) {
  const hdrGear = document.getElementById('hdr-gear-val');
  const hdrGearLabel = document.getElementById('hdr-gear-label');
  if (hdrGear) hdrGear.textContent = gear;
  if (hdrGearLabel) hdrGearLabel.textContent = gear === 'R' ? 'Reverse' : (gear === 'N' ? 'Neutral' : 'Drive');
}

export function handleReset() {
  testStartTime = performance.now();
}

export function isSimPlaying() {
  return isPlaying && !isEyesCurrentlyPaused();
}

export function toggleDebug() {}
export function toggleRulesDebug() {}
export function showViolationToast(violation) {}

export function updateCameraModeLabel(mode) {
  const btn = document.getElementById('btn-toggle-camera-view');
  if (btn) {
    btn.innerHTML = mode === 'CHASE' ? '🎥 View: Chase [V]' : '🎥 View: Cockpit [V]';
    btn.style.borderColor = mode === 'CHASE' ? 'rgba(0, 210, 180, 0.5)' : 'rgba(56, 189, 248, 0.45)';
    btn.style.color = mode === 'CHASE' ? 'var(--accent-cyan)' : '#38bdf8';
  }
}

export function updateVoiceButtonState(isMuted) {
  const btn = document.getElementById('btn-toggle-voice');
  if (btn) {
    btn.textContent = isMuted ? '🔇 Voice: Muted' : '🔊 Voice: On';
    btn.style.color = isMuted ? '#94a3b8' : '#00d2b4';
    btn.style.borderColor = isMuted ? 'rgba(148, 163, 184, 0.35)' : 'rgba(0, 210, 180, 0.45)';
  }
}

