// GazeDrive Car Module (Low-poly car model, interior dashboard, & physics simulation)

import * as THREE from 'three';
import { CONFIG } from './config.js';

let carGroup;
let chassisGroup;
let cabinMesh, roofMesh, rearGlassMesh, frontWindshieldMesh, pillarsGroup;
let frontLeftPivot, frontRightPivot;
let steeringWheelGroup;
let gearLeverMesh;
let seatbeltMesh3D;
let driverFigureGroup;
let wheels = [];
let brakeLightLeftMat, brakeLightRightMat, brakeLightCenterMat;
let brakePointLight;

// State variables (Player starts in left lane for Left-Hand Traffic)
let speed = 0; // Current speed in m/s
let distanceTraveled = 0; // Total distance in meters
let position = new THREE.Vector3(-2.2, 0, 0);
let targetCruiseSpeed = null; // Optional cruise target speed in m/s

// Driving Test System State: Seatbelt & Transmission
let isSeatbeltFastened = false; // Candidate starts unbuckled to test pre-drive check!
let currentGear = '1'; // 'R', 'N', '1', '2', '3', '4', '5'
let engineRpm = 900; // Idle engine RPM
let isEngineStalled = false;
let stallTimer = 0;
let gearOverrevTimer = 0;

// Smooth visual tilt values
let currentPitch = 0;
let currentRoll = 0;


/**
 * Initializes and creates a sleek, realistically proportioned modern car hierarchy.
 * Dimensions: ~1.46m wide, 3.55m long, 1.15m high - sits realistically inside 4.4m lane.
 * @param {THREE.Scene} scene
 */
export function init(scene) {
  carGroup = new THREE.Group();

  chassisGroup = new THREE.Group();
  carGroup.add(chassisGroup);

  const colors = CONFIG.COLORS;

  // Premium Automotive Metallic Shader Materials
  const paintColor = colors.carBody || 0x0066cc;
  const paintMat = new THREE.MeshStandardMaterial({
    color: paintColor,
    roughness: 0.16,
    metalness: 0.68,
    envMapIntensity: 1.5,
  });

  const darkTrimMat = new THREE.MeshStandardMaterial({
    color: 0x111318,
    roughness: 0.85,
    metalness: 0.2,
  });

  const glossBlackMat = new THREE.MeshStandardMaterial({
    color: 0x080a0e,
    roughness: 0.12,
    metalness: 0.8,
  });

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x0d1522,
    roughness: 0.05,
    metalness: 0.95,
    transparent: true,
    opacity: 0.72,
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.92,
    roughness: 0.15,
  });

  // 1. LOWER AERODYNAMIC CHASSIS & UNDERBODY TUB
  const underbodyGeo = new THREE.BoxGeometry(1.38, 0.22, 3.35);
  const underbodyMesh = new THREE.Mesh(underbodyGeo, darkTrimMat);
  underbodyMesh.position.set(0, 0.24, 0.0);
  underbodyMesh.castShadow = true;
  underbodyMesh.receiveShadow = true;
  chassisGroup.add(underbodyMesh);

  // Main Mid-Body Beltline (Sculpted lower cabin body)
  const mainBodyGeo = new THREE.BoxGeometry(1.36, 0.26, 2.30);
  const mainBodyMesh = new THREE.Mesh(mainBodyGeo, paintMat);
  mainBodyMesh.position.set(0, 0.44, -0.05);
  mainBodyMesh.castShadow = true;
  mainBodyMesh.receiveShadow = true;
  chassisGroup.add(mainBodyMesh);

  // Aerodynamic Side Skirts / Rocker Panels
  const sideRockerGeo = new THREE.BoxGeometry(0.06, 0.12, 1.95);
  const rockerLeft = new THREE.Mesh(sideRockerGeo, glossBlackMat);
  rockerLeft.position.set(-0.69, 0.20, 0.0);
  const rockerRight = new THREE.Mesh(sideRockerGeo, glossBlackMat);
  rockerRight.position.set(0.69, 0.20, 0.0);
  chassisGroup.add(rockerLeft, rockerRight);

  // 2. FRONT BUMPER, NOSE & AERODYNAMIC LIP SPLITTER
  const frontBumperGeo = new THREE.BoxGeometry(1.36, 0.26, 0.38);
  const frontBumper = new THREE.Mesh(frontBumperGeo, paintMat);
  frontBumper.position.set(0, 0.31, 1.62);
  frontBumper.castShadow = true;
  chassisGroup.add(frontBumper);

  // Gloss-black front lower air dam & splitter
  const splitterGeo = new THREE.BoxGeometry(1.40, 0.035, 0.26);
  const splitterMesh = new THREE.Mesh(splitterGeo, glossBlackMat);
  splitterMesh.position.set(0, 0.16, 1.72);
  chassisGroup.add(splitterMesh);

  // Radiator center grille intake
  const grilleGeo = new THREE.BoxGeometry(0.78, 0.10, 0.03);
  const grilleMesh = new THREE.Mesh(grilleGeo, darkTrimMat);
  grilleMesh.position.set(0, 0.24, 1.82);
  chassisGroup.add(grilleMesh);

  // Front chrome brand emblem
  const badgeGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.015, 16);
  badgeGeo.rotateX(Math.PI / 2);
  const badgeMesh = new THREE.Mesh(badgeGeo, chromeMat);
  badgeMesh.position.set(0, 0.42, 1.815);
  chassisGroup.add(badgeMesh);

  // 3. SLOPED AERODYNAMIC HOOD & MUSCLE CREASES
  // Slopes downward from windshield cowl (y: 0.59, z: 0.52) to front nose (y: 0.44, z: 1.58)
  const hoodGeo = new THREE.BoxGeometry(1.30, 0.065, 1.10);
  const hoodMesh = new THREE.Mesh(hoodGeo, paintMat);
  hoodMesh.position.set(0, 0.50, 1.05);
  hoodMesh.rotation.x = 0.125; // Sleek downward slope
  hoodMesh.castShadow = true;
  chassisGroup.add(hoodMesh);

  // Left & Right hood character lines (Twin power bulges)
  const creaseGeo = new THREE.BoxGeometry(0.06, 0.02, 1.02);
  const creaseL = new THREE.Mesh(creaseGeo, paintMat);
  creaseL.position.set(-0.34, 0.54, 1.05);
  creaseL.rotation.x = 0.125;
  const creaseR = new THREE.Mesh(creaseGeo, paintMat);
  creaseR.position.set(0.34, 0.54, 1.05);
  creaseR.rotation.x = 0.125;
  chassisGroup.add(creaseL, creaseR);

  // Windshield Cowl Vent & Windshield Wipers (Highly realistic in driver cockpit view!)
  const cowlGeo = new THREE.BoxGeometry(1.24, 0.025, 0.14);
  const cowlMesh = new THREE.Mesh(cowlGeo, darkTrimMat);
  cowlMesh.position.set(0, 0.59, 0.48);
  chassisGroup.add(cowlMesh);

  const wiperGeo = new THREE.BoxGeometry(0.36, 0.012, 0.016);
  const wiperL = new THREE.Mesh(wiperGeo, darkTrimMat);
  wiperL.position.set(-0.24, 0.61, 0.49);
  wiperL.rotation.z = -0.06;
  const wiperR = new THREE.Mesh(wiperGeo, darkTrimMat);
  wiperR.position.set(0.24, 0.61, 0.49);
  wiperR.rotation.z = -0.06;
  chassisGroup.add(wiperL, wiperR);

  // 4. MODERN LED HEADLIGHTS (Cyberpunk / Modern Projector Lamps)
  const headlightMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x00d2b4,
    emissiveIntensity: 1.6,
    roughness: 0.1,
  });
  const hlGeo = new THREE.BoxGeometry(0.25, 0.07, 0.12);
  const hlLeft = new THREE.Mesh(hlGeo, headlightMat);
  hlLeft.position.set(-0.50, 0.40, 1.70);
  const hlRight = new THREE.Mesh(hlGeo, headlightMat);
  hlRight.position.set(0.50, 0.40, 1.70);
  chassisGroup.add(hlLeft, hlRight);

  // Horizontal DRL lightbar eyebrow
  const drlMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 2.2,
  });
  const drlGeo = new THREE.BoxGeometry(0.25, 0.015, 0.02);
  const drlL = new THREE.Mesh(drlGeo, drlMat);
  drlL.position.set(-0.50, 0.445, 1.75);
  const drlR = new THREE.Mesh(drlGeo, drlMat);
  drlR.position.set(0.50, 0.445, 1.75);
  chassisGroup.add(drlL, drlR);

  // 5. RAKED AERODYNAMIC CABIN GLASS, TAPERED ROOF & PILLARS
  // Raked front windshield (sloped back at ~56 degrees)
  const wsGeo = new THREE.BoxGeometry(1.16, 0.52, 0.03);
  frontWindshieldMesh = new THREE.Mesh(wsGeo, glassMat);
  frontWindshieldMesh.position.set(0, 0.82, 0.16);
  frontWindshieldMesh.rotation.x = -0.58;
  chassisGroup.add(frontWindshieldMesh);

  // Tapered aerodynamic roof panel (narrower than body beltline for realistic tumblehome)
  const roofGeo = new THREE.BoxGeometry(1.04, 0.035, 1.25);
  roofMesh = new THREE.Mesh(roofGeo, paintMat);
  roofMesh.position.set(0, 1.08, -0.42);
  roofMesh.castShadow = true;
  chassisGroup.add(roofMesh);

  // Fastback sloped rear window
  const rwGeo = new THREE.BoxGeometry(1.08, 0.54, 0.03);
  rearGlassMesh = new THREE.Mesh(rwGeo, glassMat);
  rearGlassMesh.position.set(0, 0.82, -1.18);
  rearGlassMesh.rotation.x = 0.52;
  chassisGroup.add(rearGlassMesh);

  // Side cabin windows & B-pillars
  cabinMesh = new THREE.Group();
  const sideGlassGeo = new THREE.BoxGeometry(0.025, 0.36, 1.25);
  const glassLeft = new THREE.Mesh(sideGlassGeo, glassMat);
  glassLeft.position.set(-0.52, 0.84, -0.42);
  const glassRight = new THREE.Mesh(sideGlassGeo, glassMat);
  glassRight.position.set(0.52, 0.84, -0.42);
  cabinMesh.add(glassLeft, glassRight);

  pillarsGroup = new THREE.Group();
  const bpillarGeo = new THREE.BoxGeometry(0.04, 0.38, 0.07);
  const bpillarL = new THREE.Mesh(bpillarGeo, glossBlackMat);
  bpillarL.position.set(-0.53, 0.84, -0.40);
  const bpillarR = new THREE.Mesh(bpillarGeo, glossBlackMat);
  bpillarR.position.set(0.53, 0.84, -0.40);
  pillarsGroup.add(bpillarL, bpillarR);
  cabinMesh.add(pillarsGroup);

  // Aerodynamic shark-fin roof antenna
  const antennaGeo = new THREE.ConeGeometry(0.03, 0.08, 4);
  antennaGeo.rotateY(Math.PI / 4);
  const antennaMesh = new THREE.Mesh(antennaGeo, glossBlackMat);
  antennaMesh.position.set(0, 1.14, -0.92);
  cabinMesh.add(antennaMesh);
  chassisGroup.add(cabinMesh);

  // 6. REAR TRUNK DECK, LIP SPOILER, DIFFUSER & TAILLIGHTS
  const trunkGeo = new THREE.BoxGeometry(1.24, 0.08, 0.42);
  const trunkMesh = new THREE.Mesh(trunkGeo, paintMat);
  trunkMesh.position.set(0, 0.56, -1.48);
  chassisGroup.add(trunkMesh);

  // Subtle gloss-black rear lip spoiler
  const spoilerGeo = new THREE.BoxGeometry(1.26, 0.03, 0.09);
  const spoilerMesh = new THREE.Mesh(spoilerGeo, glossBlackMat);
  spoilerMesh.position.set(0, 0.61, -1.68);
  chassisGroup.add(spoilerMesh);

  // Rear bumper
  const rearBumperGeo = new THREE.BoxGeometry(1.34, 0.28, 0.28);
  const rearBumper = new THREE.Mesh(rearBumperGeo, paintMat);
  rearBumper.position.set(0, 0.30, -1.62);
  rearBumper.castShadow = true;
  chassisGroup.add(rearBumper);

  // Rear aerodynamic diffuser
  const diffuserGeo = new THREE.BoxGeometry(1.02, 0.09, 0.18);
  const diffuserMesh = new THREE.Mesh(diffuserGeo, glossBlackMat);
  diffuserMesh.position.set(0, 0.17, -1.68);
  chassisGroup.add(diffuserMesh);

  // Dual chrome exhaust ports
  const exhaustGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.08, 12);
  exhaustGeo.rotateX(Math.PI / 2);
  const exL = new THREE.Mesh(exhaustGeo, chromeMat);
  exL.position.set(-0.36, 0.19, -1.74);
  const exR = new THREE.Mesh(exhaustGeo, chromeMat);
  exR.position.set(0.36, 0.19, -1.74);
  chassisGroup.add(exL, exR);

  // Full-Width Continuous Rear Taillight Strip (Porsche/Audi Style Neon Red Lightbar)
  brakeLightLeftMat = new THREE.MeshStandardMaterial({
    color: colors.carBrakeLightsNormal,
    emissive: colors.carBrakeLightsNormal,
    emissiveIntensity: 0.4,
  });
  brakeLightRightMat = new THREE.MeshStandardMaterial({
    color: colors.carBrakeLightsNormal,
    emissive: colors.carBrakeLightsNormal,
    emissiveIntensity: 0.4,
  });
  brakeLightCenterMat = new THREE.MeshStandardMaterial({
    color: colors.carBrakeLightsNormal,
    emissive: colors.carBrakeLightsNormal,
    emissiveIntensity: 0.35,
  });

  const tlSideGeo = new THREE.BoxGeometry(0.40, 0.045, 0.05);
  const blLeft = new THREE.Mesh(tlSideGeo, brakeLightLeftMat);
  blLeft.position.set(-0.42, 0.54, -1.70);
  const blRight = new THREE.Mesh(tlSideGeo, brakeLightRightMat);
  blRight.position.set(0.42, 0.54, -1.70);

  const tlCenterGeo = new THREE.BoxGeometry(0.44, 0.02, 0.04);
  const blCenter = new THREE.Mesh(tlCenterGeo, brakeLightCenterMat);
  blCenter.position.set(0, 0.54, -1.70);
  chassisGroup.add(blLeft, blRight, blCenter);

  brakePointLight = new THREE.PointLight(0xff0000, 0, 7);
  brakePointLight.position.set(0, 0.54, -1.9);
  chassisGroup.add(brakePointLight);

  // 7. AERODYNAMIC SIDE MIRRORS
  const mirrorGeo = new THREE.BoxGeometry(0.14, 0.075, 0.14);
  const mirrorL = new THREE.Mesh(mirrorGeo, paintMat);
  mirrorL.position.set(-0.73, 0.72, 0.32);
  const mirrorR = new THREE.Mesh(mirrorGeo, paintMat);
  mirrorR.position.set(0.73, 0.72, 0.32);

  // Reflective mirror faces
  const mirrorFaceGeo = new THREE.BoxGeometry(0.01, 0.06, 0.11);
  const mirrorFaceL = new THREE.Mesh(mirrorFaceGeo, chromeMat);
  mirrorFaceL.position.set(0.065, 0, 0);
  mirrorL.add(mirrorFaceL);
  const mirrorFaceR = new THREE.Mesh(mirrorFaceGeo, chromeMat);
  mirrorFaceR.position.set(-0.065, 0, 0);
  mirrorR.add(mirrorFaceR);
  chassisGroup.add(mirrorL, mirrorR);

  // 8. INTERIOR DASHBOARD & DYNAMIC STEERING WHEEL
  const dashGroup = new THREE.Group();
  const dashGeo = new THREE.BoxGeometry(1.22, 0.18, 0.38);
  const dashMesh = new THREE.Mesh(dashGeo, new THREE.MeshStandardMaterial({ color: 0x11131a, roughness: 0.9 }));
  dashMesh.position.set(0, 0.78, 0.42);
  dashGroup.add(dashMesh);

  // Digital Instrument Cluster Display (OLED Speedometer & Status)
  const gaugeGeo = new THREE.BoxGeometry(0.28, 0.10, 0.02);
  const gaugeMat = new THREE.MeshStandardMaterial({
    color: 0x00e5a3,
    emissive: 0x00e5a3,
    emissiveIntensity: 0.85,
  });
  const gaugeMesh = new THREE.Mesh(gaugeGeo, gaugeMat);
  gaugeMesh.position.set(-0.28, 0.86, 0.28);
  dashGroup.add(gaugeMesh);

  // Dynamic Sports Steering Wheel (Modern flat-bottom wheel)
  steeringWheelGroup = new THREE.Group();
  steeringWheelGroup.position.set(-0.28, 0.82, 0.36);

  const steerRimGeo = new THREE.TorusGeometry(0.13, 0.016, 8, 16);
  const steerRimMat = new THREE.MeshStandardMaterial({ color: 0x1f242d, roughness: 0.65 });
  const rimMesh = new THREE.Mesh(steerRimGeo, steerRimMat);
  steeringWheelGroup.add(rimMesh);

  const centerGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.018, 12);
  centerGeo.rotateX(Math.PI / 2);
  const centerMesh = new THREE.Mesh(centerGeo, steerRimMat);
  steeringWheelGroup.add(centerMesh);

  const spokeGeo = new THREE.BoxGeometry(0.22, 0.02, 0.012);
  const spokeMesh = new THREE.Mesh(spokeGeo, steerRimMat);
  steeringWheelGroup.add(spokeMesh);

  steeringWheelGroup.rotation.x = -Math.PI / 6;
  dashGroup.add(steeringWheelGroup);
  chassisGroup.add(dashGroup);

  // 9. DRIVER CABIN SEATING & 3D FIGURE
  const cabinInteriorGroup = new THREE.Group();
  const seatMat = new THREE.MeshStandardMaterial({ color: 0x161922, roughness: 0.8 });
  const seatBaseGeo = new THREE.BoxGeometry(0.40, 0.14, 0.42);
  const seatBase = new THREE.Mesh(seatBaseGeo, seatMat);
  seatBase.position.set(-0.28, 0.40, -0.15);

  const seatBackGeo = new THREE.BoxGeometry(0.38, 0.54, 0.10);
  const seatBack = new THREE.Mesh(seatBackGeo, seatMat);
  seatBack.position.set(-0.28, 0.70, -0.34);
  seatBack.rotation.x = 0.08;

  const headrestGeo = new THREE.BoxGeometry(0.20, 0.14, 0.08);
  const headrest = new THREE.Mesh(headrestGeo, seatMat);
  headrest.position.set(-0.28, 1.04, -0.38);

  const passSeatBase = seatBase.clone();
  passSeatBase.position.x = 0.28;
  const passSeatBack = seatBack.clone();
  passSeatBack.position.x = 0.28;
  cabinInteriorGroup.add(seatBase, seatBack, headrest, passSeatBase, passSeatBack);

  // Center Console & Shift Gate
  const consoleGeo = new THREE.BoxGeometry(0.18, 0.22, 0.75);
  const consoleMesh = new THREE.Mesh(consoleGeo, darkTrimMat);
  consoleMesh.position.set(0.0, 0.46, 0.05);
  cabinInteriorGroup.add(consoleMesh);

  gearLeverMesh = new THREE.Group();
  gearLeverMesh.position.set(0.0, 0.58, 0.15);
  const shaftGeo = new THREE.CylinderGeometry(0.008, 0.01, 0.12, 8);
  const shaft = new THREE.Mesh(shaftGeo, chromeMat);
  shaft.position.y = 0.06;
  gearLeverMesh.add(shaft);

  const knobGeo = new THREE.SphereGeometry(0.024, 12, 12);
  const knob = new THREE.Mesh(knobGeo, new THREE.MeshStandardMaterial({ color: 0x00e5a3, roughness: 0.3 }));
  knob.position.y = 0.12;
  gearLeverMesh.add(knob);
  cabinInteriorGroup.add(gearLeverMesh);

  // 3D Driver Figure
  driverFigureGroup = new THREE.Group();
  const driverTorso = new THREE.Mesh(
    new THREE.BoxGeometry(0.30, 0.38, 0.18),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 })
  );
  driverTorso.position.set(-0.28, 0.65, -0.16);
  driverFigureGroup.add(driverTorso);

  const driverHead = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.17, 0.15),
    new THREE.MeshStandardMaterial({ color: 0xd89a74, roughness: 0.6 })
  );
  driverHead.position.set(-0.28, 0.94, -0.16);
  driverFigureGroup.add(driverHead);

  const beltGeo = new THREE.BoxGeometry(0.032, 0.44, 0.02);
  seatbeltMesh3D = new THREE.Mesh(
    beltGeo,
    new THREE.MeshStandardMaterial({ color: 0x00e5a3, emissive: 0x003322, roughness: 0.5 })
  );
  seatbeltMesh3D.position.set(-0.28, 0.65, -0.06);
  seatbeltMesh3D.rotation.z = 0.55;
  seatbeltMesh3D.visible = isSeatbeltFastened;
  driverFigureGroup.add(seatbeltMesh3D);

  cabinInteriorGroup.add(driverFigureGroup);
  chassisGroup.add(cabinInteriorGroup);

  // 10. SPORT ALLOY WHEELS & PERFORMANCE BRAKES
  wheels = [];
  const wheelRadius = 0.28;
  const wheelWidth = 0.19;

  const tireGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 20);
  tireGeo.rotateZ(Math.PI / 2);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x16161a, roughness: 0.85 });

  const rimGeo = new THREE.CylinderGeometry(0.18, 0.18, wheelWidth + 0.01, 16);
  rimGeo.rotateZ(Math.PI / 2);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.25 });

  const rotorGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.02, 16);
  rotorGeo.rotateZ(Math.PI / 2);
  const rotorMat = new THREE.MeshStandardMaterial({ color: 0xa1a1aa, metalness: 0.9, roughness: 0.15 });

  const caliperGeo = new THREE.BoxGeometry(0.045, 0.07, 0.04);
  const caliperMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.3, roughness: 0.3 });

  const createWheel = () => {
    const wGroup = new THREE.Group();
    const tire = new THREE.Mesh(tireGeo, tireMat);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    tire.castShadow = true;
    wGroup.add(tire, rim);

    // 5 Sport Spokes
    for (let s = 0; s < 5; s++) {
      const angle = (s * Math.PI * 2) / 5;
      const spoke = new THREE.Mesh(
        new THREE.BoxGeometry(0.035, 0.15, 0.015),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 })
      );
      spoke.position.set(0, Math.sin(angle) * 0.075, Math.cos(angle) * 0.075);
      spoke.rotation.x = angle;
      wGroup.add(spoke);
    }

    // Brake rotor & red sport caliper
    const rotor = new THREE.Mesh(rotorGeo, rotorMat);
    rotor.position.x = -0.01;
    const caliper = new THREE.Mesh(caliperGeo, caliperMat);
    caliper.position.set(-0.01, 0.07, 0);
    wGroup.add(rotor, caliper);

    return wGroup;
  };

  // Wheel Track = ±0.68m (Total car width = 1.46m)
  const wheelX = 0.68;
  const wheelZ = 1.05;

  frontLeftPivot = new THREE.Group();
  frontLeftPivot.position.set(-wheelX, wheelRadius, wheelZ);
  const flWheel = createWheel();
  frontLeftPivot.add(flWheel);
  chassisGroup.add(frontLeftPivot);

  frontRightPivot = new THREE.Group();
  frontRightPivot.position.set(wheelX, wheelRadius, wheelZ);
  const frWheel = createWheel();
  frontRightPivot.add(frWheel);
  chassisGroup.add(frontRightPivot);

  const rlWheelGroup = new THREE.Group();
  rlWheelGroup.position.set(-wheelX, wheelRadius, -wheelZ);
  const rlWheel = createWheel();
  rlWheelGroup.add(rlWheel);
  chassisGroup.add(rlWheelGroup);

  const rrWheelGroup = new THREE.Group();
  rrWheelGroup.position.set(wheelX, wheelRadius, -wheelZ);
  const rrWheel = createWheel();
  rrWheelGroup.add(rrWheel);
  chassisGroup.add(rrWheelGroup);

  wheels.push(flWheel, frWheel, rlWheel, rrWheel);

  scene.add(carGroup);
  reset();
}

/**
 * Adjusts cabin mesh visibility based on active camera mode.
 * Hides roof and rear pillars in DRIVER view so the camera has a crystal-clear, unobstructed road view.
 */
export function setCameraMode(mode) {
  const isDriver = mode === 'DRIVER';
  if (cabinMesh) cabinMesh.visible = !isDriver;
  if (roofMesh) roofMesh.visible = !isDriver;
  if (rearGlassMesh) rearGlassMesh.visible = !isDriver;
  if (frontWindshieldMesh) frontWindshieldMesh.visible = !isDriver;
  if (driverFigureGroup) driverFigureGroup.visible = !isDriver;
}


/**
 * Updates car physics, world position, wheel rotations, brake lights, and body tilt.
 */
export function update(dt, input) {
  const carCfg = CONFIG.CAR;

  if (input.reset) {
    reset();
    return;
  }

  const gearSpec = CONFIG.GEARS[currentGear] || CONFIG.GEARS['1'];

  // 1. Calculate Acceleration & Braking forces based on Transmission Gear
  const isBraking = input.brake > 0.05 || input.handbrake > 0.05;
  if (isBraking) {
    targetCruiseSpeed = null;
  }

  let accelForce = 0;
  let brakeForce = 0;

  // Handle Neutral Gear (N)
  if (currentGear === 'N') {
    accelForce = 0;
    brakeForce = input.brake * carCfg.braking + input.handbrake * carCfg.handbrake;
    const dragForce = speed * carCfg.drag;
    speed = Math.max(0, speed - (brakeForce + dragForce) * dt);

    // Engine revs freely in Neutral when throttle is pressed
    const targetRpm = 900 + input.throttle * 5800;
    engineRpm = lerp(engineRpm, targetRpm, Math.min(dt * 10.0, 1.0));
  }
  // Handle Reverse Gear (R)
  else if (currentGear === 'R') {
    const maxRevSpeed = Math.abs(gearSpec.maxKmh / 3.6); // ~4.16 m/s
    if (input.throttle > 0.05 && !isBraking) {
      targetCruiseSpeed = null;
      speed = Math.max(-maxRevSpeed, speed - input.throttle * (carCfg.acceleration * 0.7) * dt);
    } else {
      // Natural rolling stop or braking in reverse
      if (isBraking) {
        speed = Math.min(0, speed + (input.brake * carCfg.braking + input.handbrake * carCfg.handbrake) * dt);
      } else {
        speed = Math.min(0, speed + speed * carCfg.drag * dt);
      }
    }
    const revRatio = Math.abs(speed) / maxRevSpeed;
    const targetRpm = 900 + revRatio * 3800 + input.throttle * 800;
    engineRpm = lerp(engineRpm, targetRpm, Math.min(dt * 8.0, 1.0));
  }
  // Handle Forward Gears ('1' through '5')
  else {
    // A. Engine Stall Detection:
    // If starting from rest (speed < 1.8 m/s) in 4th or 5th gear and driver steps on gas
    if ((currentGear === '4' || currentGear === '5') && speed < 1.8 && input.throttle > 0.25) {
      isEngineStalled = true;
      speed = 0;
      engineRpm = 450 + Math.sin(performance.now() * 0.04) * 80;
    }

    if (isEngineStalled) {
      // Vehicle stalled! Player must downshift or brake to recover
      speed = 0;
      accelForce = 0;
      brakeForce = 0;
      engineRpm = lerp(engineRpm, 450, dt * 5.0);
    } else {
      const maxGearSpeed = gearSpec.maxKmh / 3.6;

      if (targetCruiseSpeed !== null && input.throttle < 0.05 && !isBraking) {
        // Cruise control smoothly matches target
        const prevSpeed = speed;
        speed = lerp(speed, Math.min(targetCruiseSpeed, maxGearSpeed), Math.min(dt * 4.0, 1.0));
        const deltaV = (speed - prevSpeed) / Math.max(dt, 0.001);
        if (deltaV > 0) accelForce = Math.min(deltaV, carCfg.acceleration);
        else brakeForce = Math.min(-deltaV, carCfg.braking);
      } else {
        if (input.throttle > 0.05) targetCruiseSpeed = null;

        brakeForce = input.brake * carCfg.braking + input.handbrake * carCfg.handbrake;
        const dragForce = speed * carCfg.drag;

        if (speed >= maxGearSpeed) {
          // Reached maximum speed for this gear: Hit rev limiter!
          accelForce = 0;
          speed = maxGearSpeed;
          engineRpm = 6300 + Math.sin(performance.now() * 0.05) * 120;

          if (currentGear === '1' || currentGear === '2') {
            gearOverrevTimer += dt;
          }
        } else {
          accelForce = input.throttle * carCfg.acceleration * gearSpec.accelFactor;
          const netAccel = accelForce - brakeForce - dragForce;
          speed += netAccel * dt;

          // Calculate Engine RPM smoothly
          const gearRatio = Math.max(0, Math.min(1.0, speed / Math.max(maxGearSpeed, 0.1)));
          const targetRpm = 900 + gearRatio * 4600 + input.throttle * 700;
          engineRpm = lerp(engineRpm, targetRpm, Math.min(dt * 8.0, 1.0));
          gearOverrevTimer = Math.max(0, gearOverrevTimer - dt * 2.0);
        }
      }

      if (speed < 0) speed = 0;
      if (speed > maxGearSpeed) speed = maxGearSpeed;
    }
  }

  distanceTraveled += Math.abs(speed) * dt;

  // 2. Steering & Movement (Looking down +Z: Screen Left is +X, Screen Right is -X)
  const speedScale = Math.min(Math.abs(speed) / (carCfg.maxSpeed * 0.15), 1.0);
  const dx = -input.steer * carCfg.steerSpeed * speedScale * dt * (speed < 0 ? -1 : 1);

  position.x += dx;

  if (position.x < -carCfg.roadBoundsX) position.x = -carCfg.roadBoundsX;
  if (position.x > carCfg.roadBoundsX) position.x = carCfg.roadBoundsX;

  position.z += speed * dt;
  carGroup.position.copy(position);

  // 3. Visual Wheel Rotations & Dynamic Interior Steering Wheel Turn
  const steerAngle = -input.steer * carCfg.maxSteerAngle * speedScale;
  frontLeftPivot.rotation.y = steerAngle;
  frontRightPivot.rotation.y = steerAngle;

  if (steeringWheelGroup) {
    steeringWheelGroup.rotation.z = -input.steer * 1.6;
  }

  // 3B. Dynamic 3D Gear Lever Shift Animation
  if (gearLeverMesh) {
    let targetRotX = 0;
    let targetRotZ = 0;
    switch (currentGear) {
      case '1': targetRotX = 0.28; targetRotZ = 0.22; break;
      case '2': targetRotX = -0.28; targetRotZ = 0.22; break;
      case '3': targetRotX = 0.28; targetRotZ = 0.0; break;
      case '4': targetRotX = -0.28; targetRotZ = 0.0; break;
      case '5': targetRotX = 0.28; targetRotZ = -0.22; break;
      case 'R': targetRotX = -0.28; targetRotZ = -0.22; break;
      default: targetRotX = 0; targetRotZ = 0; break; // Neutral
    }
    gearLeverMesh.rotation.x = lerp(gearLeverMesh.rotation.x, targetRotX, Math.min(dt * 14.0, 1.0));
    gearLeverMesh.rotation.z = lerp(gearLeverMesh.rotation.z, targetRotZ, Math.min(dt * 14.0, 1.0));
  }

  // 3C. Update 3D Seatbelt Mesh
  if (seatbeltMesh3D) {
    seatbeltMesh3D.visible = isSeatbeltFastened;
  }

  const wheelRadius = 0.35;
  const angularVelocity = speed / wheelRadius;
  wheels.forEach((w) => {
    w.rotation.x += angularVelocity * dt;
  });

  // 4. Dynamic Body Pitch & Roll
  const targetPitch = (accelForce / carCfg.acceleration - (brakeForce / carCfg.braking)) * carCfg.pitchSensitivity;
  const targetRoll = input.steer * carCfg.rollSensitivity * speedScale;

  currentPitch = lerp(currentPitch, targetPitch, dt * 8.0);
  currentRoll = lerp(currentRoll, targetRoll, dt * 8.0);

  chassisGroup.rotation.x = currentPitch;
  chassisGroup.rotation.z = currentRoll;

  // 5. Dynamic Brake Lights Glow
  const activeColor = new THREE.Color(CONFIG.COLORS.carBrakeLightsActive);
  const normalColor = new THREE.Color(CONFIG.COLORS.carBrakeLightsNormal);

  if (isBraking) {
    brakeLightLeftMat.color.copy(activeColor);
    brakeLightLeftMat.emissive.copy(activeColor);
    brakeLightLeftMat.emissiveIntensity = 2.5;

    brakeLightRightMat.color.copy(activeColor);
    brakeLightRightMat.emissive.copy(activeColor);
    brakeLightRightMat.emissiveIntensity = 2.5;

    brakePointLight.intensity = 2.0;
  } else {
    brakeLightLeftMat.color.copy(normalColor);
    brakeLightLeftMat.emissive.copy(normalColor);
    brakeLightLeftMat.emissiveIntensity = 0.3;

    brakeLightRightMat.color.copy(normalColor);
    brakeLightRightMat.emissive.copy(normalColor);
    brakeLightRightMat.emissiveIntensity = 0.3;

    brakePointLight.intensity = 0;
  }
}


export function applyCollisionImpact() {
  speed = Math.max(0, speed * 0.15); // Drop speed dramatically on crash
  position.z -= 0.4; // Minor recoil setback
  currentPitch = -0.15; // Visual bonnet dip on crash
}

export function reset() {
  speed = 0;
  distanceTraveled = 0;
  targetCruiseSpeed = null;
  position.set(-2.2, 0, 0);
  currentGear = '1';
  isSeatbeltFastened = false;
  isEngineStalled = false;
  engineRpm = 900;
  gearOverrevTimer = 0;
  if (seatbeltMesh3D) {
    seatbeltMesh3D.visible = false;
  }
  if (carGroup) {
    carGroup.position.copy(position);
  }
  if (chassisGroup) {
    chassisGroup.rotation.set(0, 0, 0);
  }
  currentPitch = 0;
  currentRoll = 0;
}

/**
 * Sets vehicle speed directly in km/h, automatically selecting appropriate gear.
 * @param {number} kmh
 */
export function setSpeedKmh(kmh) {
  const maxKmh = CONFIG.CAR.maxSpeed * 3.6;
  const clampedKmh = Math.max(0, Math.min(kmh, maxKmh));

  // Auto-engage suitable transmission gear for target speed
  if (clampedKmh <= 0) {
    currentGear = '1';
  } else if (clampedKmh <= 25) {
    currentGear = '1';
  } else if (clampedKmh <= 48) {
    currentGear = '2';
  } else if (clampedKmh <= 72) {
    currentGear = '3';
  } else if (clampedKmh <= 98) {
    currentGear = '4';
  } else {
    currentGear = '5';
  }

  isEngineStalled = false;
  speed = clampedKmh / 3.6;
  targetCruiseSpeed = speed > 0 ? speed : null;
}

/**
 * Increments or decrements vehicle speed by delta km/h.
 * @param {number} deltaKmh
 */
export function adjustSpeedKmh(deltaKmh) {
  setSpeedKmh(getSpeedKmh() + deltaKmh);
}

/**
 * Sets target cruise speed in km/h.
 * @param {number|null} kmh
 */
export function setCruiseSpeedKmh(kmh) {
  if (kmh === null || kmh <= 0) {
    targetCruiseSpeed = null;
  } else {
    targetCruiseSpeed = Math.min(kmh / 3.6, CONFIG.CAR.maxSpeed);
  }
}

/**
 * Returns active cruise speed in km/h, or null if off.
 */
export function getCruiseSpeedKmh() {
  return targetCruiseSpeed !== null ? targetCruiseSpeed * 3.6 : null;
}

/**
 * Teleports car immediately to a target (x, z) location.
 * Used for debugging & jumping directly to upcoming intersections.
 */
export function teleport(x, z, targetSpeed = null) {
  if (x !== undefined && x !== null) position.x = x;
  if (z !== undefined && z !== null) position.z = z;
  if (targetSpeed !== null) {
    speed = targetSpeed;
    targetCruiseSpeed = speed > 0 ? speed : null;
  }

  if (carGroup) carGroup.position.copy(position);
  if (chassisGroup) chassisGroup.rotation.set(0, 0, 0);
  currentPitch = 0;
  currentRoll = 0;
}

// =========================================================================
// DRIVING TEST SEATBELT & GEAR CONTROL API
// =========================================================================

/**
 * Toggles driver seatbelt status (buckled / unbuckled).
 * @returns {boolean} New seatbelt status
 */
export function toggleSeatbelt() {
  isSeatbeltFastened = !isSeatbeltFastened;
  if (seatbeltMesh3D) {
    seatbeltMesh3D.visible = isSeatbeltFastened;
  }
  return isSeatbeltFastened;
}

/**
 * Explicitly sets seatbelt status.
 * @param {boolean} fastened
 */
export function setSeatbelt(fastened) {
  isSeatbeltFastened = Boolean(fastened);
  if (seatbeltMesh3D) {
    seatbeltMesh3D.visible = isSeatbeltFastened;
  }
  return isSeatbeltFastened;
}

/**
 * Returns whether the driver is currently wearing their seatbelt.
 * @returns {boolean}
 */
export function getSeatbeltStatus() {
  return isSeatbeltFastened;
}

const GEAR_ORDER = ['R', 'N', '1', '2', '3', '4', '5'];

/**
 * Manually shifts transmission into a specified gear.
 * @param {string} gear - 'R', 'N', '1', '2', '3', '4', '5'
 */
export function shiftGear(gear) {
  if (GEAR_ORDER.includes(gear)) {
    currentGear = gear;
    if (isEngineStalled && gear !== '4' && gear !== '5') {
      isEngineStalled = false;
    }
  }
  return currentGear;
}

/**
 * Upshifts transmission to the next gear.
 * @returns {string} New current gear
 */
export function shiftUp() {
  const idx = GEAR_ORDER.indexOf(currentGear);
  if (idx < GEAR_ORDER.length - 1) {
    currentGear = GEAR_ORDER[idx + 1];
    if (isEngineStalled && currentGear !== '4' && currentGear !== '5') {
      isEngineStalled = false;
    }
  }
  return currentGear;
}

/**
 * Downshifts transmission to the previous gear.
 * @returns {string} New current gear
 */
export function shiftDown() {
  const idx = GEAR_ORDER.indexOf(currentGear);
  if (idx > 0) {
    currentGear = GEAR_ORDER[idx - 1];
    if (isEngineStalled) {
      isEngineStalled = false;
    }
  }
  return currentGear;
}

/**
 * Returns active transmission gear ('R', 'N', '1', '2', '3', '4', '5').
 */
export function getCurrentGear() {
  return currentGear;
}

/**
 * Returns current simulated engine RPM.
 */
export function getEngineRpm() {
  return Math.round(engineRpm);
}

/**
 * Returns optimal recommended gear for current road speed.
 */
export function getRecommendedGear() {
  const kmh = Math.abs(speed * 3.6);
  if (kmh < 2) return currentGear === 'N' ? '1' : '1';
  if (kmh <= 24) return '1';
  if (kmh <= 46) return '2';
  if (kmh <= 70) return '3';
  if (kmh <= 94) return '4';
  return '5';
}

/**
 * Returns whether engine is currently stalled due to improper gear selection.
 */
export function isEngineStalledStatus() {
  return isEngineStalled;
}

/**
 * Clears engine stall status.
 */
export function clearEngineStall() {
  isEngineStalled = false;
}

/**
 * Returns timer for how long engine has been over-revving.
 */
export function getGearOverrevTimer() {
  return gearOverrevTimer;
}

export function getPosition() {
  return position;
}

export function getSpeedMs() {
  return speed;
}

export function getSpeedKmh() {
  return speed * 3.6;
}

export function getDistanceTraveled() {
  return distanceTraveled;
}

export function getCarMesh() {
  return carGroup;
}

function lerp(start, end, amt) {
  return start + (end - start) * amt;
}

