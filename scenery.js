// GazeDrive Scenery Module - Realistic Busy Indian Urban City Street Environment
// Replaces desert scenery with dense multi-storey buildings, shop hoardings, electric poles with wires,
// bus stops, parked & ambient vehicles (auto-rickshaws, city buses, scooters), and urban skyline.

import * as THREE from 'three';
import { CONFIG } from './config.js';
import * as rng from './rng.js';
import {
  getShopSignboardTexture,
  getSkylineSilhouetteTexture,
  getPlasterMaterial,
  getBricksMaterial,
  getConcreteMaterial,
} from './assetLoader.js';

let currentQuality = 'HIGH'; // 'LOW' | 'MEDIUM' | 'HIGH'

/**
 * Sets environment rendering quality level.
 * @param {'LOW'|'MEDIUM'|'HIGH'} quality
 */
export function setEnvironmentQuality(quality) {
  currentQuality = quality.toUpperCase();
  console.log('[GazeDrive Scenery] Environment Quality set to:', currentQuality);
}

export function getEnvironmentQuality() {
  return currentQuality;
}

// Reusable shared materials & geometries for maximum 60fps performance
const acMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5 });
const shutterMat = new THREE.MeshStandardMaterial({ color: 0x5a6578, metalness: 0.6, roughness: 0.4 });
const waterTankBlackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6 });
const waterTankYellowMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.5 });
const concreteCurbMat = new THREE.MeshStandardMaterial({ color: 0x827d73, roughness: 0.85 });
const wireMat = new THREE.LineBasicMaterial({ color: 0x1a1a1a, linewidth: 1 });
const glassMat = new THREE.MeshStandardMaterial({ color: 0x1c2b3d, roughness: 0.1, metalness: 0.8 });

/**
 * Creates modular Indian urban multi-storey building (3 to 6 floors).
 * Features commercial ground-floor shops with bilingual signboards, roll-up shutters,
 * residential upper balconies with concrete chhajjas (sunshades), AC units, and rooftop Sintex water tanks.
 */
export function createModularIndianBuilding(styleSeed = 0, isRightSide = false) {
  const buildingGroup = new THREE.Group();

  // Floor count: 3 to 6 floors
  const floorCounts = [3, 4, 4, 5, 5, 6];
  const numFloors = floorCounts[Math.abs(styleSeed) % floorCounts.length];
  const floorHeight = 3.2;
  const buildingHeight = numFloors * floorHeight;
  const buildingWidth = 14.0;
  const buildingDepth = 15.0;

  // Weathered Indian plaster color palette
  const wallColors = [
    0xd8cbbe, // Weathered cream
    0xcbb482, // Faded mustard/ochre
    0xb87358, // Terracotta red
    0x789b9e, // Dusty pastel teal
    0xa69d8f, // Weathered grey cement
    0xcfa692, // Faded apricot
  ];
  const baseColor = wallColors[Math.abs(styleSeed) % wallColors.length];

  // Use downloaded CC0 Plaster (Plaster001) or Bricks (Bricks059)
  const isBrickBuilding = Math.abs(styleSeed) % 4 === 1;
  const wallMat = isBrickBuilding ? getBricksMaterial() : getPlasterMaterial(baseColor);

  // Main Building Block
  const blockGeo = new THREE.BoxGeometry(buildingWidth, buildingHeight, buildingDepth);
  const blockMesh = new THREE.Mesh(blockGeo, wallMat);
  blockMesh.position.set(0, buildingHeight / 2, 0);
  blockMesh.castShadow = true;
  blockMesh.receiveShadow = true;
  buildingGroup.add(blockMesh);

  // GROUND FLOOR: 2 Commercial Shop Units with Roll-up Shutters & Signboards
  const shopFacingOffsetZ = isRightSide ? buildingDepth / 2 + 0.05 : -(buildingDepth / 2 + 0.05);
  const facingRotationY = isRightSide ? Math.PI : 0;

  const shopWidth = 5.8;
  const shutterGeo = new THREE.BoxGeometry(shopWidth, 2.5, 0.1);
  [-3.4, 3.4].forEach((xOffset, shopIdx) => {
    // Metal roll-up shutter
    const shutter = new THREE.Mesh(shutterGeo, shutterMat);
    shutter.position.set(xOffset, 1.3, -buildingDepth / 2 - 0.06);
    buildingGroup.add(shutter);

    // Bilingual Indian Shop Signboard
    const signGeo = new THREE.BoxGeometry(shopWidth + 0.2, 1.0, 0.12);
    const signTex = getShopSignboardTexture((styleSeed * 3 + shopIdx) % 7);
    const signMat = new THREE.MeshStandardMaterial({
      map: signTex,
      roughness: 0.3,
    });
    const signboard = new THREE.Mesh(signGeo, signMat);
    signboard.position.set(xOffset, 3.1, -buildingDepth / 2 - 0.12);
    signboard.castShadow = true;
    buildingGroup.add(signboard);

    // Colorful Fabric Shop Awning (Chhajja)
    const awningGeo = new THREE.BoxGeometry(shopWidth + 0.3, 0.15, 1.2);
    awningGeo.rotateX(Math.PI / 12);
    const awningColor = (styleSeed + shopIdx) % 2 === 0 ? 0xcc2222 : 0x0066aa;
    const awningMat = new THREE.MeshStandardMaterial({ color: awningColor, roughness: 0.7 });
    const awning = new THREE.Mesh(awningGeo, awningMat);
    awning.position.set(xOffset, 2.55, -buildingDepth / 2 - 0.65);
    awning.castShadow = true;
    buildingGroup.add(awning);
  });

  // UPPER FLOORS: Windows, Concrete Sunshades (Chhajjas), Balconies, AC Units
  const windowWidth = 1.4;
  const windowHeight = 1.6;
  const windowGeo = new THREE.BoxGeometry(windowWidth, windowHeight, 0.08);
  const chhajjaGeo = new THREE.BoxGeometry(windowWidth + 0.4, 0.1, 0.55);
  const acGeo = new THREE.BoxGeometry(0.75, 0.48, 0.38);

  const windowCols = [-4.5, -1.5, 1.5, 4.5];

  for (let floor = 1; floor < numFloors; floor++) {
    const floorY = floor * floorHeight + 1.6;

    // Continuous concrete floor band / cornice moulding (Concrete 034 PBR)
    const bandMat = getConcreteMaterial();
    const bandGeo = new THREE.BoxGeometry(buildingWidth + 0.3, 0.18, buildingDepth + 0.3);
    const band = new THREE.Mesh(bandGeo, bandMat);
    band.position.set(0, floor * floorHeight, 0);
    buildingGroup.add(band);

    windowCols.forEach((wx, colIdx) => {
      // Glazed window
      const win = new THREE.Mesh(windowGeo, glassMat);
      win.position.set(wx, floorY, -buildingDepth / 2 - 0.04);
      buildingGroup.add(win);

      // Concrete sunshade (Chhajja) above window
      const chhajja = new THREE.Mesh(chhajjaGeo, bandMat);
      chhajja.position.set(wx, floorY + windowHeight / 2 + 0.08, -buildingDepth / 2 - 0.28);
      chhajja.castShadow = true;
      buildingGroup.add(chhajja);

      // External AC Compressor Unit under some windows
      if (currentQuality !== 'LOW' && (styleSeed + floor + colIdx) % 3 === 0) {
        const ac = new THREE.Mesh(acGeo, acMat);
        ac.position.set(wx, floorY - windowHeight / 2 - 0.3, -buildingDepth / 2 - 0.22);
        buildingGroup.add(ac);
      }
    });

    // Balcony on middle columns of some floors
    if (floor % 2 === 1 && currentQuality !== 'LOW') {
      const balconyFloorGeo = new THREE.BoxGeometry(4.2, 0.15, 1.2);
      const balconyFloor = new THREE.Mesh(balconyFloorGeo, bandMat);
      balconyFloor.position.set(0, floor * floorHeight + 0.1, -buildingDepth / 2 - 0.6);

      const railingGeo = new THREE.BoxGeometry(4.2, 0.8, 0.06);
      const railingMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });
      const railing = new THREE.Mesh(railingGeo, railingMat);
      railing.position.set(0, floor * floorHeight + 0.5, -buildingDepth / 2 - 1.18);

      buildingGroup.add(balconyFloor, railing);
    }
  }

  // ROOFTOP: Parapet wall, Sintex Water Tanks, Stair Room, & TV Dish
  const parapetGeo = new THREE.BoxGeometry(buildingWidth + 0.2, 0.8, buildingDepth + 0.2);
  const parapet = new THREE.Mesh(parapetGeo, wallMat);
  parapet.position.set(0, buildingHeight + 0.4, 0);
  buildingGroup.add(parapet);

  // Rooftop Staircase Headhouse
  const headhouseGeo = new THREE.BoxGeometry(3.6, 2.4, 4.2);
  const headhouse = new THREE.Mesh(headhouseGeo, wallMat);
  headhouse.position.set(-3.2, buildingHeight + 1.2, 2.0);
  buildingGroup.add(headhouse);

  // Black / Yellow Sintex Water Tanks
  const tankGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.4, 12);
  const tankMat = styleSeed % 2 === 0 ? waterTankBlackMat : waterTankYellowMat;

  const tank1 = new THREE.Mesh(tankGeo, tankMat);
  tank1.position.set(2.4, buildingHeight + 0.8, -1.8);
  tank1.castShadow = true;
  buildingGroup.add(tank1);

  if (currentQuality === 'HIGH') {
    const tank2 = new THREE.Mesh(tankGeo, waterTankBlackMat);
    tank2.position.set(4.2, buildingHeight + 0.8, -1.8);
    tank2.castShadow = true;
    buildingGroup.add(tank2);

    // Rooftop TV Satellite Dish
    const dishMastGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6);
    const dishMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.6 });
    const dishMast = new THREE.Mesh(dishMastGeo, dishMat);
    dishMast.position.set(1.5, buildingHeight + 0.8, 2.8);

    const dishBowlGeo = new THREE.SphereGeometry(0.45, 12, 6, 0, Math.PI * 2, 0, Math.PI / 3);
    const dishBowl = new THREE.Mesh(dishBowlGeo, dishMat);
    dishBowl.rotation.x = -Math.PI / 4;
    dishBowl.position.set(1.5, buildingHeight + 1.6, 2.8);
    buildingGroup.add(dishMast, dishBowl);
  }

  return buildingGroup;
}

/**
 * Creates iconic Indian Auto-Rickshaw (Bajaj RE 3-wheeler).
 * Yellow roof & upper frame, CNG green lower body, black interior, meter box.
 */
export function createIndianAutoRickshaw() {
  const autoGroup = new THREE.Group();

  // 1. Lower Body & Chassis (CNG Green)
  const chassisMat = new THREE.MeshStandardMaterial({ color: 0x008833, roughness: 0.35, metalness: 0.2 });
  const chassisGeo = new THREE.BoxGeometry(1.3, 0.45, 2.4);
  const chassis = new THREE.Mesh(chassisGeo, chassisMat);
  chassis.position.y = 0.45;
  chassis.castShadow = true;
  autoGroup.add(chassis);

  // 2. Yellow Canvas Roof & Upper Hood
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.45 });
  const roofGeo = new THREE.BoxGeometry(1.26, 0.75, 1.8);
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(0, 1.25, -0.2);
  roof.castShadow = true;
  autoGroup.add(roof);

  // Slanted Front Bonnet Nose
  const noseGeo = new THREE.BoxGeometry(1.0, 0.55, 0.7);
  const nose = new THREE.Mesh(noseGeo, roofMat);
  nose.position.set(0, 0.72, 0.95);
  autoGroup.add(nose);

  // Front Windshield Glass
  const winGeo = new THREE.BoxGeometry(1.1, 0.5, 0.05);
  const win = new THREE.Mesh(winGeo, glassMat);
  win.position.set(0, 1.22, 0.72);
  autoGroup.add(win);

  // Front Single Round Headlight
  const hlGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12);
  hlGeo.rotateX(Math.PI / 2);
  const hlMat = new THREE.MeshStandardMaterial({ color: 0xffffd0, emissive: 0xffffd0, emissiveIntensity: 1.2 });
  const headlight = new THREE.Mesh(hlGeo, hlMat);
  headlight.position.set(0, 0.72, 1.32);
  autoGroup.add(headlight);

  // Fare Meter Box (Mounted beside driver)
  const meterGeo = new THREE.BoxGeometry(0.16, 0.16, 0.1);
  const meterMat = new THREE.MeshStandardMaterial({ color: 0xd32f2f });
  const meter = new THREE.Mesh(meterGeo, meterMat);
  meter.position.set(-0.45, 0.85, 0.6);
  autoGroup.add(meter);

  // Interior Passenger Seat Bench
  const seatGeo = new THREE.BoxGeometry(1.1, 0.35, 0.45);
  const seatMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
  const seat = new THREE.Mesh(seatGeo, seatMat);
  seat.position.set(0, 0.65, -0.6);
  autoGroup.add(seat);

  // 3. Wheels (1 Front Center, 2 Rear)
  const wheelRadius = 0.24;
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, 0.16, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.85 });

  // Front single wheel
  const frontWheel = new THREE.Mesh(wheelGeo, tireMat);
  frontWheel.position.set(0, wheelRadius, 0.9);
  frontWheel.castShadow = true;
  autoGroup.add(frontWheel);

  // Rear wheels
  const rearL = new THREE.Mesh(wheelGeo, tireMat);
  rearL.position.set(-0.62, wheelRadius, -0.7);
  const rearR = new THREE.Mesh(wheelGeo, tireMat);
  rearR.position.set(0.62, wheelRadius, -0.7);
  autoGroup.add(rearL, rearR);

  return autoGroup;
}

/**
 * Creates classic Indian City Transit Bus (Single Deck, Red/Yellow or Blue/White).
 */
export function createIndianCityBus() {
  const busGroup = new THREE.Group();

  const busLength = 9.2;
  const busWidth = 2.4;
  const busHeight = 2.9;

  // Main Bus Body (Red with Cream roof)
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.3, metalness: 0.2 });
  const bodyGeo = new THREE.BoxGeometry(busWidth, busHeight, busLength);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = busHeight / 2 + 0.4;
  body.castShadow = true;
  busGroup.add(body);

  // Cream Upper Roof Stripe
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xffe6a3, roughness: 0.5 });
  const roofGeo = new THREE.BoxGeometry(busWidth + 0.05, 0.7, busLength + 0.05);
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.y = busHeight + 0.1;
  busGroup.add(roof);

  // Route Destination Board above windscreen ("ROUTE 42A • MAJESTIC")
  const boardGeo = new THREE.BoxGeometry(1.6, 0.4, 0.1);
  const boardMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6 });
  const board = new THREE.Mesh(boardGeo, boardMat);
  board.position.set(0, busHeight + 0.1, busLength / 2 + 0.05);
  busGroup.add(board);

  // Front Split Windshield
  const wsGeo = new THREE.BoxGeometry(1.0, 0.9, 0.05);
  const wsL = new THREE.Mesh(wsGeo, glassMat);
  wsL.position.set(-0.55, 2.1, busLength / 2 + 0.04);
  const wsR = new THREE.Mesh(wsGeo, glassMat);
  wsR.position.set(0.55, 2.1, busLength / 2 + 0.04);
  busGroup.add(wsL, wsR);

  // Wheels
  const wheelRadius = 0.45;
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, 0.32, 16);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });

  [[-1.15, wheelRadius, 2.4], [1.15, wheelRadius, 2.4], [-1.15, wheelRadius, -2.6], [1.15, wheelRadius, -2.6]].forEach(([x, y, z]) => {
    const w = new THREE.Mesh(wheelGeo, wheelMat);
    w.position.set(x, y, z);
    w.castShadow = true;
    busGroup.add(w);
  });

  return busGroup;
}

/**
 * Creates Commuter Scooter (Bajaj Chetak / Honda Activa).
 */
export function createIndianScooter(isMoving = false) {
  const scooterGroup = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x007aff, roughness: 0.3, metalness: 0.3 });
  const bodyGeo = new THREE.BoxGeometry(0.5, 0.4, 1.4);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.set(0, 0.45, 0);
  scooterGroup.add(body);

  // Front Apron Shield & Handlebar
  const apronGeo = new THREE.BoxGeometry(0.48, 0.7, 0.12);
  const apron = new THREE.Mesh(apronGeo, bodyMat);
  apron.position.set(0, 0.7, 0.55);
  scooterGroup.add(apron);

  const barGeo = new THREE.BoxGeometry(0.7, 0.06, 0.06);
  const barMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
  const bar = new THREE.Mesh(barGeo, barMat);
  bar.position.set(0, 1.05, 0.52);
  scooterGroup.add(bar);

  // Headlight
  const hlGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.06, 12);
  hlGeo.rotateX(Math.PI / 2);
  const hlMat = new THREE.MeshStandardMaterial({ color: 0xffffcc, emissive: 0xffffcc, emissiveIntensity: 1.0 });
  const hl = new THREE.Mesh(hlGeo, hlMat);
  hl.position.set(0, 1.05, 0.58);
  scooterGroup.add(hl);

  // Wheels
  const wheelRadius = 0.2;
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, 0.12, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const wMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
  const wFront = new THREE.Mesh(wheelGeo, wMat);
  wFront.position.set(0, wheelRadius, 0.6);
  const wRear = new THREE.Mesh(wheelGeo, wMat);
  wRear.position.set(0, wheelRadius, -0.5);
  scooterGroup.add(wFront, wRear);

  // Add rider if scooter is in active traffic
  if (isMoving) {
    const riderGroup = new THREE.Group();
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.6 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.25), shirtMat);
    torso.position.set(0, 1.15, -0.05);

    // Helmet
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), helmetMat);
    helmet.position.set(0, 1.55, -0.05);

    riderGroup.add(torso, helmet);
    scooterGroup.add(riderGroup);
  }

  return scooterGroup;
}

/**
 * Creates concrete utility pole with cross arms and multi-strand drooping electric wires.
 */
export function createIndianElectricPoleWithWires(nextZ = 40) {
  const poleGroup = new THREE.Group();

  const poleHeight = 7.5;
  const poleGeo = new THREE.BoxGeometry(0.24, poleHeight, 0.24);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x8a8479, roughness: 0.9 });
  const pole = new THREE.Mesh(poleGeo, poleMat);
  pole.position.y = poleHeight / 2;
  pole.castShadow = true;
  poleGroup.add(pole);

  // Steel Crossbar for Wires
  const crossGeo = new THREE.BoxGeometry(2.4, 0.1, 0.1);
  const crossMat = new THREE.MeshStandardMaterial({ color: 0x333842, metalness: 0.8 });
  const crossbar = new THREE.Mesh(crossGeo, crossMat);
  crossbar.position.set(0, poleHeight - 0.5, 0);
  poleGroup.add(crossbar);

  // Ceramic Disc Insulators
  const insGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.2, 6);
  const insMat = new THREE.MeshStandardMaterial({ color: 0xb5a08a, roughness: 0.3 });
  [-0.9, 0, 0.9].forEach((x) => {
    const ins = new THREE.Mesh(insGeo, insMat);
    ins.position.set(x, poleHeight - 0.38, 0);
    poleGroup.add(ins);
  });

  // Multi-strand catenary drooping overhead wires to next pole (at high/med quality)
  if (currentQuality !== 'LOW') {
    [-0.9, 0, 0.9].forEach((xOffset) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(xOffset, poleHeight - 0.3, 0),
        new THREE.Vector3(xOffset, poleHeight - 0.85, nextZ * 0.5),
        new THREE.Vector3(xOffset, poleHeight - 0.3, nextZ),
      ]);
      const points = curve.getPoints(12);
      const wireGeo = new THREE.BufferGeometry().setFromPoints(points);
      const wire = new THREE.Line(wireGeo, wireMat);
      poleGroup.add(wire);
    });
  }

  return poleGroup;
}

/**
 * Creates Indian Bus Stop Shelter with curved corrugated roof & bench.
 */
export function createIndianBusStopShelter() {
  const shelterGroup = new THREE.Group();

  // Steel Frame
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x1b4d89, metalness: 0.6 });
  const postGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.8, 8);
  const p1 = new THREE.Mesh(postGeo, frameMat);
  p1.position.set(-1.8, 1.4, -0.6);
  const p2 = new THREE.Mesh(postGeo, frameMat);
  p2.position.set(1.8, 1.4, -0.6);
  shelterGroup.add(p1, p2);

  // Curved Corrugated Blue Canopy Roof
  const roofGeo = new THREE.CylinderGeometry(2.4, 2.4, 4.4, 16, 1, true, 0, Math.PI * 0.45);
  roofGeo.rotateZ(Math.PI / 2);
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x0066cc, roughness: 0.4 });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(0, 2.7, -0.2);
  roof.castShadow = true;
  shelterGroup.add(roof);

  // Bus Stop Board ("BUS STOP / बस स्टॉप")
  const boardGeo = new THREE.BoxGeometry(3.6, 0.45, 0.06);
  const boardMat = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  const board = new THREE.Mesh(boardGeo, boardMat);
  board.position.set(0, 2.5, 0.6);
  shelterGroup.add(board);

  // Passenger Bench
  const benchGeo = new THREE.BoxGeometry(3.2, 0.45, 0.45);
  const benchMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.5 });
  const bench = new THREE.Mesh(benchGeo, benchMat);
  bench.position.set(0, 0.35, -0.6);
  shelterGroup.add(bench);

  return shelterGroup;
}

/**
 * Creates Municipal Waste Bins (Green for Wet, Blue for Dry).
 */
export function createMunicipalDustbins() {
  const binGroup = new THREE.Group();

  const binGeo = new THREE.CylinderGeometry(0.25, 0.22, 0.7, 12);
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x008833, roughness: 0.6 });
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x0066cc, roughness: 0.6 });

  const greenBin = new THREE.Mesh(binGeo, greenMat);
  greenBin.position.set(-0.35, 0.45, 0);
  const blueBin = new THREE.Mesh(binGeo, blueMat);
  blueBin.position.set(0.35, 0.45, 0);

  binGroup.add(greenBin, blueBin);
  return binGroup;
}

/**
 * Creates elevated concrete metro / flyover viaduct spanning across the street in the distance.
 */
export function createFlyoverViaduct() {
  const flyoverGroup = new THREE.Group();
  const flyoverMat = getConcreteMaterial();

  const height = 9.5;
  const spanWidth = 70.0;

  // Massive concrete bridge deck
  const deckGeo = new THREE.BoxGeometry(spanWidth, 1.8, 12.0);
  const deck = new THREE.Mesh(deckGeo, flyoverMat);
  deck.position.set(0, height, 0);
  deck.castShadow = true;
  deck.receiveShadow = true;
  flyoverGroup.add(deck);

  // Heavy concrete support piers (Pillars)
  const pierGeo = new THREE.BoxGeometry(2.8, height, 2.8);
  const pierL = new THREE.Mesh(pierGeo, flyoverMat);
  pierL.position.set(-16.0, height / 2, 0);
  const pierR = new THREE.Mesh(pierGeo, flyoverMat);
  pierR.position.set(16.0, height / 2, 0);
  flyoverGroup.add(pierL, pierR);

  // Parapet barrier walls
  const wallGeo = new THREE.BoxGeometry(spanWidth, 1.2, 0.4);
  const wall1 = new THREE.Mesh(wallGeo, flyoverMat);
  wall1.position.set(0, height + 1.2, -5.8);
  const wall2 = new THREE.Mesh(wallGeo, flyoverMat);
  wall2.position.set(0, height + 1.2, 5.8);
  flyoverGroup.add(wall1, wall2);

  return flyoverGroup;
}

/**
 * Creates far-distance hazy urban skyline silhouette backdrops.
 */
export function createSkylineSilhouette() {
  const skylineGeo = new THREE.PlaneGeometry(160, 40);
  const skylineMat = new THREE.MeshBasicMaterial({
    map: getSkylineSilhouetteTexture(),
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(skylineGeo, skylineMat);
  mesh.position.y = 20;
  return mesh;
}

/**
 * Creates lush Indian urban shade tree (Neem / Gulmohar).
 */
export function createUrbanTree() {
  const treeGroup = new THREE.Group();

  const trunkGeo = new THREE.CylinderGeometry(0.24, 0.38, 2.4, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a382a, roughness: 0.95 });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = 1.2;
  trunk.castShadow = true;
  treeGroup.add(trunk);

  // Lush leafy canopy spheres
  const foliageMat = new THREE.MeshStandardMaterial({ color: 0x3d6628, roughness: 0.85 });
  const sphereGeo = new THREE.SphereGeometry(1.6, 8, 8);

  const c1 = new THREE.Mesh(sphereGeo, foliageMat);
  c1.position.set(0, 3.2, 0);
  const c2 = new THREE.Mesh(sphereGeo, foliageMat);
  c2.position.set(0.8, 3.6, 0.4);
  c2.scale.set(0.8, 0.8, 0.8);
  const c3 = new THREE.Mesh(sphereGeo, foliageMat);
  c3.position.set(-0.7, 3.4, -0.4);
  c3.scale.set(0.85, 0.85, 0.85);

  c1.castShadow = true;
  c2.castShadow = true;
  c3.castShadow = true;
  treeGroup.add(c1, c2, c3);

  return treeGroup;
}

// ---------------------------------------------------------------------------
// Backward-compatible vehicles for existing hazards.js hazards
// ---------------------------------------------------------------------------
export function createClassicRedCar() {
  return createIndianAutoRickshaw();
}

export function createWhiteSedan() {
  const carGroup = new THREE.Group();
  const bodyGeo = new THREE.BoxGeometry(1.75, 0.65, 3.9);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.2, metalness: 0.4 });
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.position.y = 0.55;
  bodyMesh.castShadow = true;
  carGroup.add(bodyMesh);

  const cabinGeo = new THREE.BoxGeometry(1.35, 0.6, 2.1);
  const cabinMat = new THREE.MeshStandardMaterial({ color: 0x1a2233, roughness: 0.1, metalness: 0.8 });
  const cabinMesh = new THREE.Mesh(cabinGeo, cabinMat);
  cabinMesh.position.set(0, 1.1, -0.2);
  carGroup.add(cabinMesh);

  const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 });
  [[-0.88, 0.32, 1.2], [0.88, 0.32, 1.2], [-0.88, 0.32, -1.2], [0.88, 0.32, -1.2]].forEach(([x, y, z]) => {
    const w = new THREE.Mesh(wheelGeo, wheelMat);
    w.position.set(x, y, z);
    carGroup.add(w);
  });
  return carGroup;
}

export function createBlackSedan() {
  const carGroup = new THREE.Group();
  const bodyGeo = new THREE.BoxGeometry(1.8, 0.68, 4.0);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x11151c, roughness: 0.15, metalness: 0.8 });
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.position.y = 0.55;
  bodyMesh.castShadow = true;
  carGroup.add(bodyMesh);

  const cabinGeo = new THREE.BoxGeometry(1.38, 0.62, 2.15);
  const cabinMat = new THREE.MeshStandardMaterial({ color: 0x090c10, roughness: 0.1, metalness: 0.9 });
  const cabinMesh = new THREE.Mesh(cabinGeo, cabinMat);
  cabinMesh.position.set(0, 1.12, -0.2);
  carGroup.add(cabinMesh);

  const wheelGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.24, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 });
  [[-0.9, 0.33, 1.25], [0.9, 0.33, 1.25], [-0.9, 0.33, -1.25], [0.9, 0.33, -1.25]].forEach(([x, y, z]) => {
    const w = new THREE.Mesh(wheelGeo, wheelMat);
    w.position.set(x, y, z);
    carGroup.add(w);
  });
  return carGroup;
}

export function createSilverTruck() {
  return createIndianCityBus();
}

/**
 * Populates each road segment with the Indian Urban Environment:
 * Buildings on both sides, paved sidewalks, electric poles with cables, bus stops,
 * street furniture, urban trees, flyover viaducts, and ambient vehicles.
 */
export function populateSegmentScenery(segmentGroup, segmentLength, segmentIndex) {
  const roadCfg = CONFIG.ROAD;
  const leftX = -(roadCfg.totalWidth / 2 + roadCfg.sidewalkWidth + 7.5);
  const rightX = roadCfg.totalWidth / 2 + roadCfg.sidewalkWidth + 7.5;

  // 1. DENSE BUILDINGS ON BOTH SIDES OF THE STREET
  const buildingsPerSide = 2; // 2 buildings per 40m segment on each side = continuous street wall
  const buildingSpacing = segmentLength / buildingsPerSide;

  for (let b = 0; b < buildingsPerSide; b++) {
    const bZ = b * buildingSpacing + buildingSpacing / 2;
    const seedLeft = segmentIndex * 10 + b * 2;
    const seedRight = segmentIndex * 10 + b * 2 + 1;

    // Left-side Building
    const bLeft = createModularIndianBuilding(seedLeft, false);
    bLeft.position.set(leftX, 0, bZ);
    segmentGroup.add(bLeft);

    // Right-side Building
    const bRight = createModularIndianBuilding(seedRight, true);
    bRight.position.set(rightX, 0, bZ);
    bRight.rotation.y = Math.PI; // Face the road
    segmentGroup.add(bRight);
  }

  // 2. CONCRETE UTILITY ELECTRIC POLES WITH TANGLED OVERHEAD WIRES
  const poleX = -(roadCfg.totalWidth / 2 + 0.6);
  const pole = createIndianElectricPoleWithWires(segmentLength);
  pole.position.set(poleX, 0, segmentLength * 0.15);
  segmentGroup.add(pole);

  // 3. BUS STOP SHELTER (Occurs every 4th segment on the left shoulder)
  if (segmentIndex % 4 === 1) {
    const busStop = createIndianBusStopShelter();
    busStop.position.set(-(roadCfg.totalWidth / 2 + 2.0), 0, segmentLength * 0.55);
    busStop.rotation.y = Math.PI / 2;
    segmentGroup.add(busStop);
  }

  // 4. MUNICIPAL DUSTBINS & PARKED TWO-WHEELERS ALONG SIDEWALK
  const dustbins = createMunicipalDustbins();
  dustbins.position.set(-(roadCfg.totalWidth / 2 + 1.2), 0, segmentLength * 0.85);
  segmentGroup.add(dustbins);

  // Parked Scooter along curb
  if (segmentIndex % 2 === 0) {
    const parkedScooter = createIndianScooter(false);
    parkedScooter.position.set(-(roadCfg.totalWidth / 2 + 0.85), 0, segmentLength * 0.35);
    parkedScooter.rotation.y = Math.PI / 6;
    segmentGroup.add(parkedScooter);
  }

  // 5. ROADSIDE URBAN SHADE TREES (Planted in sidewalk cutouts)
  const tree1 = createUrbanTree();
  tree1.position.set(-(roadCfg.totalWidth / 2 + 2.2), 0, segmentLength * 0.7);
  const tree2 = createUrbanTree();
  tree2.position.set(roadCfg.totalWidth / 2 + 2.2, 0, segmentLength * 0.3);
  segmentGroup.add(tree1, tree2);

  // 6. DISTANT FLYOVER VIADUCT / METRO OVERPASS (Occurs every 6th segment)
  if (segmentIndex % 6 === 3) {
    const flyover = createFlyoverViaduct();
    flyover.position.set(0, 0, segmentLength * 0.5);
    segmentGroup.add(flyover);
  }

  // 7. FAR DISTANT URBAN SKYLINE SILHOUETTES (Replacing mountain backdrop)
  if (segmentIndex % 2 === 0) {
    const skylineL = createSkylineSilhouette();
    skylineL.position.set(-65, 0, segmentLength * 0.5);
    skylineL.rotation.y = Math.PI / 2;
    segmentGroup.add(skylineL);

    const skylineR = createSkylineSilhouette();
    skylineR.position.set(65, 0, segmentLength * 0.5);
    skylineR.rotation.y = -Math.PI / 2;
    segmentGroup.add(skylineR);
  }
}
