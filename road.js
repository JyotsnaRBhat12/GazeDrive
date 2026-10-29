import * as THREE from 'three';
import { CONFIG } from './config.js';
import { populateSegmentScenery } from './scenery.js';
import { getAsphaltMaterial, getPavingMaterial, getConcreteMaterial } from './assetLoader.js';

let roadGroup;
const segments = [];
let segmentLength = 40;
let numSegments = 14;

/**
 * Creates and initializes the road segment recycle chain.
 * @param {THREE.Scene} scene
 */
export function init(scene) {
  roadGroup = new THREE.Group();
  scene.add(roadGroup);

  segmentLength = CONFIG.ROAD.segmentLength;
  numSegments = CONFIG.ROAD.numSegments;

  for (let i = 0; i < numSegments; i++) {
    const segment = createRoadSegment(i);
    segment.position.z = i * segmentLength;
    roadGroup.add(segment);
    segments.push(segment);
  }
}

/**
 * Constructs a single road segment with worn city asphalt, paved sidewalks, and street furniture.
 */
function createRoadSegment(segmentIndex) {
  const segmentGroup = new THREE.Group();
  const colors = CONFIG.COLORS;
  const roadCfg = CONFIG.ROAD;

  // 1. Urban Foundation Base Ground under Buildings
  const groundGeo = new THREE.PlaneGeometry(160, segmentLength);
  groundGeo.rotateX(-Math.PI / 2);
  const groundMesh = new THREE.Mesh(groundGeo, getConcreteMaterial());
  groundMesh.position.set(0, -0.02, segmentLength / 2);
  groundMesh.receiveShadow = true;
  segmentGroup.add(groundMesh);

  // 2. Realistic Worn PBR Asphalt City Street Base (Asphalt 012 PBR)
  const roadGeo = new THREE.BoxGeometry(roadCfg.totalWidth, 0.08, segmentLength);
  const roadMesh = new THREE.Mesh(roadGeo, getAsphaltMaterial());
  roadMesh.position.set(0, 0, segmentLength / 2);
  roadMesh.receiveShadow = true;
  segmentGroup.add(roadMesh);

  // 3. Paved Concrete Sidewalks with Paver Stones (Paving Stones 092 PBR)
  const swWidth = roadCfg.sidewalkWidth + 1.2; // 4.2m wide urban sidewalk
  const swGeo = new THREE.BoxGeometry(swWidth, 0.16, segmentLength);
  const pavingMat = getPavingMaterial();

  const leftSidewalk = new THREE.Mesh(swGeo, pavingMat);
  leftSidewalk.position.set(-(roadCfg.totalWidth / 2 + swWidth / 2), 0.05, segmentLength / 2);
  leftSidewalk.receiveShadow = true;

  const rightSidewalk = new THREE.Mesh(swGeo, pavingMat);
  rightSidewalk.position.set(roadCfg.totalWidth / 2 + swWidth / 2, 0.05, segmentLength / 2);
  rightSidewalk.receiveShadow = true;

  segmentGroup.add(leftSidewalk, rightSidewalk);

  // 4. Concrete Kerb Stones (Concrete 034 PBR)
  const kerbGeo = new THREE.BoxGeometry(0.3, 0.18, segmentLength);
  const concreteMat = getConcreteMaterial();

  const leftKerb = new THREE.Mesh(kerbGeo, concreteMat);
  leftKerb.position.set(-(roadCfg.totalWidth / 2 + 0.15), 0.06, segmentLength / 2);

  const rightKerb = new THREE.Mesh(kerbGeo, concreteMat);
  rightKerb.position.set(roadCfg.totalWidth / 2 + 0.15, 0.06, segmentLength / 2);

  segmentGroup.add(leftKerb, rightKerb);

  // 5. Crisp Edge Lines (Solid White)
  const edgeLineGeo = new THREE.BoxGeometry(0.18, 0.09, segmentLength);
  const edgeLineMat = new THREE.MeshBasicMaterial({ color: colors.roadMarkings });

  const leftEdgeLine = new THREE.Mesh(edgeLineGeo, edgeLineMat);
  leftEdgeLine.position.set(-(roadCfg.totalWidth / 2 - 0.25), 0.045, segmentLength / 2);

  const rightEdgeLine = new THREE.Mesh(edgeLineGeo, edgeLineMat);
  rightEdgeLine.position.set(roadCfg.totalWidth / 2 - 0.25, 0.045, segmentLength / 2);

  segmentGroup.add(leftEdgeLine, rightEdgeLine);

  // 6. Double Center Yellow/White Dashed Markings (LHT Lane Divider at x = 0)
  const dashMat = new THREE.MeshBasicMaterial({ color: colors.centerDashes });
  const dashLength = roadCfg.dashLength;
  const dashGap = roadCfg.dashGap;
  const numDashes = Math.floor(segmentLength / (dashLength + dashGap));

  for (let d = 0; d < numDashes; d++) {
    const dashGeo1 = new THREE.BoxGeometry(0.12, 0.09, dashLength);
    const dashMesh1 = new THREE.Mesh(dashGeo1, dashMat);
    const zPos = d * (dashLength + dashGap) + dashLength / 2;
    dashMesh1.position.set(-0.1, 0.045, zPos);

    const dashGeo2 = new THREE.BoxGeometry(0.12, 0.09, dashLength);
    const dashMesh2 = new THREE.Mesh(dashGeo2, dashMat);
    dashMesh2.position.set(0.1, 0.045, zPos);

    segmentGroup.add(dashMesh1, dashMesh2);
  }

  // 7. Urban Street Lamps (Placed every 20m along the sidewalk)
  const lampPoleGeo = new THREE.CylinderGeometry(0.08, 0.12, 5.5, 8);
  const lampPoleMat = new THREE.MeshStandardMaterial({ color: 0x333b47, metalness: 0.7 });
  const lampHeadGeo = new THREE.BoxGeometry(0.3, 0.15, 0.6);
  const lampHeadMat = new THREE.MeshStandardMaterial({ color: 0x22262e });
  const lampLensMat = new THREE.MeshBasicMaterial({ color: 0xffffea });

  [segmentLength * 0.25, segmentLength * 0.75].forEach((lz) => {
    const lampGroup = new THREE.Group();
    const pole = new THREE.Mesh(lampPoleGeo, lampPoleMat);
    pole.position.y = 2.75;
    lampGroup.add(pole);

    const head = new THREE.Mesh(lampHeadGeo, lampHeadMat);
    head.position.set(0.4, 5.4, 0);
    const lens = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.04, 0.5), lampLensMat);
    lens.position.set(0.4, 5.32, 0);
    lampGroup.add(head, lens);

    lampGroup.position.set(roadCfg.totalWidth / 2 + 1.2, 0, lz);
    lampGroup.rotation.y = Math.PI; // Arm reaches toward the street
    segmentGroup.add(lampGroup);
  });

  // 8. Populate Indian Urban Scenery (Buildings, Shop Signboards, Bus Stops, Poles, Skyline)
  populateSegmentScenery(segmentGroup, segmentLength, segmentIndex);

  return segmentGroup;
}

export function update(carZ) {
  const recycleBuffer = 30;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment.position.z + segmentLength < carZ - recycleBuffer) {
      segment.position.z += numSegments * segmentLength;
    }
  }
}
