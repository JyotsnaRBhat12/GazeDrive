// GazeDrive Traffic Signs & Road Regulations Module (IRC / Global Road Standards)
// Procedurally generates realistic 3D road signboards:
// 1. "GO SLOW - JUNCTION AHEAD" (Cautionary Yellow Diamond)
// 2. "SPEED LIMIT 30 km/h - SCHOOL ZONE" (Regulatory Red Ring Circle)
// 3. "STOP" (Mandatory Octagonal Sign)
// 4. "PEDESTRIAN CROSSING / ZEBRA" (Informatory Blue Square)
// 5. "GIVE WAY / YIELD" (Inverted Triangular Sign)
// 6. "NO OVERTAKING" (Prohibitory Solid Line Sign)
// Integrates with driver iris gaze tracking (visual sign acknowledgment) and rule engine zone compliance.

import * as THREE from 'three';
import { logEvent } from './telemetry.js';

let signsGroup;
const activeSigns = [];
let sceneRef = null;

let totalSignsEncountered = 0;
let totalSignsAcknowledged = 0;

// Sign texture cache
const textureCache = {};

/**
 * Creates a high-resolution procedural canvas texture for each traffic sign.
 */
function getSignTexture(type) {
  if (textureCache[type]) return textureCache[type];

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 512, 512);

  if (type === 'SPEED_LIMIT_30') {
    // White Circle, Thick Red Border, Black "30"
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(256, 256, 240, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 48;
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 210px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('30', 256, 262);
  } else if (type === 'SPEED_LIMIT_50') {
    // White Circle, Thick Red Border, Black "50"
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(256, 256, 240, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 48;
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 210px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('50', 256, 262);
  } else if (type === 'GO_SLOW') {
    // Yellow Diamond with Black Border & "GO SLOW" Text
    ctx.save();
    ctx.translate(256, 256);
    ctx.rotate(Math.PI / 4);

    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(-175, -175, 350, 350);

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 28;
    ctx.strokeRect(-170, -170, 340, 340);
    ctx.restore();

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 68px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GO', 256, 210);
    ctx.fillText('SLOW', 256, 290);
  } else if (type === 'STOP') {
    // Red Octagon with White Border & "STOP" Text
    const r = 240;
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4 + Math.PI / 8;
      const x = 256 + r * Math.cos(angle);
      const y = 256 + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();

    // White inner border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 18;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 130px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('STOP', 256, 260);
  } else if (type === 'PEDESTRIAN_CROSSING') {
    // Blue Square with White Triangle & Walking Person
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(20, 20, 472, 472);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(256, 60);
    ctx.lineTo(450, 430);
    ctx.lineTo(62, 430);
    ctx.closePath();
    ctx.fill();

    // Zebra stripes inside triangle
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(160, 370, 192, 22);
    ctx.fillRect(180, 335, 152, 20);

    // Walking stickman
    ctx.beginPath();
    ctx.arc(256, 175, 26, 0, Math.PI * 2); // Head
    ctx.fill();

    ctx.lineWidth = 22;
    ctx.strokeStyle = '#0f172a';
    ctx.beginPath();
    ctx.moveTo(256, 205); ctx.lineTo(256, 275); // Torso
    ctx.moveTo(256, 225); ctx.lineTo(215, 260); // Left arm
    ctx.moveTo(256, 225); ctx.lineTo(295, 255); // Right arm
    ctx.moveTo(256, 275); ctx.lineTo(220, 350); // Left leg
    ctx.moveTo(256, 275); ctx.lineTo(290, 345); // Right leg
    ctx.stroke();
  } else if (type === 'GIVE_WAY') {
    // Inverted Triangle, Red Border, White Center, "GIVE WAY"
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(60, 70);
    ctx.lineTo(452, 70);
    ctx.lineTo(256, 445);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 42;
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 52px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GIVE', 256, 180);
    ctx.fillText('WAY', 256, 240);
  } else {
    // Generic Caution
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(30, 30, 452, 452);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 80px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CAUTION', 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  textureCache[type] = texture;
  return texture;
}

/**
 * Creates secondary text sub-plate (e.g. "SCHOOL ZONE", "JUNCTION AHEAD").
 */
function createSubplateTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 512, 160);

  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 14;
  ctx.strokeRect(6, 6, 500, 148);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 44px Inter, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 80);

  return new THREE.CanvasTexture(canvas);
}

/**
 * Builds a 3D Traffic Signboard assembly.
 */
function buildSignMesh(type, subText = '') {
  const group = new THREE.Group();

  // 1. Galvanized Steel Pole Post
  const poleGeo = new THREE.CylinderGeometry(0.065, 0.065, 3.4, 16);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.3 });
  const poleMesh = new THREE.Mesh(poleGeo, poleMat);
  poleMesh.position.y = 1.7;
  poleMesh.castShadow = true;
  group.add(poleMesh);

  // 2. Concrete Base Collar
  const baseGeo = new THREE.CylinderGeometry(0.16, 0.22, 0.25, 12);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.9 });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.y = 0.12;
  group.add(baseMesh);

  // 3. Main Sign Board
  const signSize = 1.15;
  const signGeo = new THREE.PlaneGeometry(signSize, signSize);
  const signMat = new THREE.MeshStandardMaterial({
    map: getSignTexture(type),
    roughness: 0.25,
    metalness: 0.1,
    side: THREE.DoubleSide,
  });
  const signMesh = new THREE.Mesh(signGeo, signMat);
  signMesh.position.set(0, 2.7, 0.02);
  signMesh.castShadow = true;
  group.add(signMesh);

  // Metal Backing Plate
  const backGeo = new THREE.BoxGeometry(signSize + 0.04, signSize + 0.04, 0.03);
  const backMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.4 });
  const backMesh = new THREE.Mesh(backGeo, backMat);
  backMesh.position.set(0, 2.7, -0.005);
  backMesh.castShadow = true;
  group.add(backMesh);

  // 4. Secondary Sub-plate (if any)
  if (subText) {
    const subGeo = new THREE.PlaneGeometry(1.2, 0.38);
    const subMat = new THREE.MeshStandardMaterial({
      map: createSubplateTexture(subText),
      roughness: 0.3,
      side: THREE.DoubleSide,
    });
    const subMesh = new THREE.Mesh(subGeo, subMat);
    subMesh.position.set(0, 1.9, 0.02);
    subMesh.castShadow = true;
    group.add(subMesh);

    const subBackGeo = new THREE.BoxGeometry(1.24, 0.42, 0.025);
    const subBack = new THREE.Mesh(subBackGeo, backMat);
    subBack.position.set(0, 1.9, -0.005);
    group.add(subBack);
  }

  // Face vehicle direction (+Z)
  group.rotation.y = Math.PI;

  return group;
}

/**
 * Initializes the Traffic Signs system and distributes signboards along the road.
 */
export function init(scene) {
  sceneRef = scene;
  signsGroup = new THREE.Group();
  scene.add(signsGroup);

  activeSigns.length = 0;

  // Staggered road signs placed along the left sidewalk (X = -5.1m for Left-Hand Traffic)
  const signSequence = [
    { type: 'GO_SLOW', subText: 'JUNCTION AHEAD', z: 65, speedLimit: 35, name: 'Go Slow - Junction Ahead' },
    { type: 'SPEED_LIMIT_30', subText: 'SCHOOL ZONE', z: 155, speedLimit: 30, name: 'Speed Limit 30 - School Zone' },
    { type: 'PEDESTRIAN_CROSSING', subText: 'ZEBRA CROSSING', z: 235, speedLimit: 40, name: 'Zebra Crossing Ahead' },
    { type: 'STOP', subText: 'CROSS TRAFFIC', z: 310, speedLimit: 20, isMandatoryStop: true, name: 'Mandatory Stop Sign' },
    { type: 'GIVE_WAY', subText: 'MERGING TRAFFIC', z: 410, speedLimit: 35, name: 'Give Way / Yield' },
    { type: 'SPEED_LIMIT_50', subText: 'CITY LIMIT', z: 495, speedLimit: 50, name: 'Speed Limit 50 km/h' },
  ];

  signSequence.forEach((cfg, idx) => {
    const mesh = buildSignMesh(cfg.type, cfg.subText);
    const xPos = -5.0; // Left curb edge
    mesh.position.set(xPos, 0, cfg.z);
    signsGroup.add(mesh);

    activeSigns.push({
      id: `sign_${idx}_${cfg.type}`,
      type: cfg.type,
      subText: cfg.subText,
      name: cfg.name,
      speedLimit: cfg.speedLimit,
      isMandatoryStop: !!cfg.isMandatoryStop,
      zPos: cfg.z,
      mesh,
      acknowledgedByGaze: false,
      gazeFixationTimeMs: 0,
      passed: false,
    });
  });
}

/**
 * Step loop: Checks driver gaze fixation on signs and recycles signs forward.
 */
export function update(dt, carPos, speedKmh, camera, screenW, screenH, gazePoint) {
  let activeZoneLimit = 50; // Default urban speed limit
  let activeZoneName = 'Urban City Drive (50 km/h)';
  let nearestUpcomingSign = null;
  let minDistance = Infinity;

  const tempV = new THREE.Vector3();

  for (let i = 0; i < activeSigns.length; i++) {
    const s = activeSigns[i];
    const distZ = s.zPos - carPos.z;

    // Track active speed zone: if car is within 90m after passing sign
    if (distZ < 5 && distZ > -90) {
      if (s.speedLimit < activeZoneLimit) {
        activeZoneLimit = s.speedLimit;
        activeZoneName = s.name;
      }
    }

    // Track nearest upcoming sign ahead of player (within 140m)
    if (distZ > 0 && distZ < minDistance) {
      minDistance = distZ;
      nearestUpcomingSign = { ...s, distanceM: Math.round(distZ) };
    }

    // Check Gaze Fixation on Sign Board via Camera 2D Projection
    if (camera && gazePoint && gazePoint.valid && distZ > 5 && distZ < 75) {
      tempV.copy(s.mesh.position);
      tempV.y += 2.6; // Center of sign board
      tempV.project(camera);

      const isVisible = tempV.z < 1.0 && Math.abs(tempV.x) < 1.1 && Math.abs(tempV.y) < 1.1;
      if (isVisible) {
        const signScreenX = Math.round((tempV.x * 0.5 + 0.5) * screenW);
        const signScreenY = Math.round((-(tempV.y * 0.5) + 0.5) * screenH);

        // 48px foveal fixation margin
        const gazeDist = Math.hypot(gazePoint.x - signScreenX, gazePoint.y - signScreenY);
        if (gazeDist < 48) {
          if (!s.acknowledgedByGaze) {
            s.acknowledgedByGaze = true;
            totalSignsAcknowledged++;
            s.gazeFixationTimeMs = performance.now();
            logEvent('TRAFFIC_SIGN_ACKNOWLEDGED_BY_GAZE', {
              signId: s.id,
              name: s.name,
              speedLimit: s.speedLimit,
              distanceM: Math.round(distZ),
            });
            window.dispatchEvent(
              new CustomEvent('traffic-sign-noticed', {
                detail: { sign: s, distanceM: Math.round(distZ) },
              })
            );
          }
        }
      }
    }

    // Count passed sign once
    if (distZ < 0 && !s.passed) {
      s.passed = true;
      totalSignsEncountered++;
    }

    // Recycle passed signs forward
    if (carPos.z > s.zPos + 40) {
      s.zPos += 540; // Push forward down the road
      s.mesh.position.z = s.zPos;
      s.acknowledgedByGaze = false;
      s.passed = false;
    }
  }

  return {
    activeZoneLimit,
    activeZoneName,
    nearestUpcomingSign,
  };
}

/**
 * Returns all active signs projected to 2D screen coordinates for HUD overlay tags.
 */
export function getSignsScreenOverlay(camera, screenW, screenH, carZ) {
  if (!camera) return [];
  const overlayList = [];
  const tempV = new THREE.Vector3();

  for (let i = 0; i < activeSigns.length; i++) {
    const s = activeSigns[i];
    const distZ = s.zPos - carZ;
    if (distZ < 4 || distZ > 85) continue;

    tempV.copy(s.mesh.position);
    tempV.y += 2.7;
    tempV.project(camera);

    const isVisible = tempV.z < 1.0 && Math.abs(tempV.x) < 1.05 && Math.abs(tempV.y) < 1.05;
    if (!isVisible) continue;

    const sx = Math.round((tempV.x * 0.5 + 0.5) * screenW);
    const sy = Math.round((-(tempV.y * 0.5) + 0.5) * screenH);

    overlayList.push({
      id: s.id,
      name: s.name,
      type: s.type,
      screenX: sx,
      screenY: sy,
      distanceM: Math.round(distZ),
      acknowledged: s.acknowledgedByGaze,
    });
  }

  return overlayList;
}

/**
 * Returns cumulative signboard gaze acknowledgment stats for Driving Test Scorecard.
 */
export function getSignPerceptionStats() {
  const enc = Math.max(1, totalSignsEncountered);
  const ack = totalSignsAcknowledged;
  const ratePct = Math.min(100, Math.round((ack / enc) * 100));
  return {
    totalEncountered: totalSignsEncountered,
    totalAcknowledged: totalSignsAcknowledged,
    perceptionRatePct: ratePct,
  };
}

export function reset(carZ = 0) {
  totalSignsEncountered = 0;
  totalSignsAcknowledged = 0;
  const baseSpacing = [65, 155, 235, 310, 410, 495];
  activeSigns.forEach((s, idx) => {
    s.zPos = carZ + (baseSpacing[idx] || 60 + idx * 80);
    s.mesh.position.z = s.zPos;
    s.acknowledgedByGaze = false;
    s.passed = false;
  });
}
