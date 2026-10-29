// GazeDrive Asset Management & PBR Material Loading Module
// Loads downloaded CC0 1K PBR textures & HDRI from /public/assets/ with zero-crash fallbacks.

import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const textureLoader = new THREE.TextureLoader();
const rgbeLoader = new RGBELoader();
const gltfLoader = new GLTFLoader();

const loadedModels = new Map();
let asphaltMaterial = null;
let pavingMaterial = null;
let concreteMaterial = null;
let brickMaterial = null;
const plasterMaterialsByColor = new Map();
let proceduralSkylineTex = null;

function loadPBRTexture(url, repeatX = 1, repeatY = 1, isSRGB = false) {
  const tex = textureLoader.load(url);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  if (isSRGB) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Loads the Urban HDRI environment or falls back to a procedural warm city sky gradient.
 * @param {THREE.Scene} scene
 * @param {THREE.WebGLRenderer} renderer
 */
export function setupEnvironmentSky(scene, renderer) {
  const hdriPath = '/assets/hdri/city_sky.hdr';

  rgbeLoader.load(
    hdriPath,
    (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
      scene.environment = texture;
      console.log('[GazeDrive Assets] Loaded Urban HDRI from', hdriPath);
    },
    undefined,
    () => {
      console.warn(
        `[GazeDrive Assets] HDRI not found at ${hdriPath}. Falling back to procedural Indian city warm atmospheric haze sky.\n` +
        `To use real HDRI, place city_sky.hdr in public/assets/hdri/`
      );

      // Create high-detail procedural Indian summer afternoon sky gradient
      const skyCanvas = document.createElement('canvas');
      skyCanvas.width = 1024;
      skyCanvas.height = 512;
      const ctx = skyCanvas.getContext('2d');

      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0.0, '#4a6d8c'); // Upper blue-gray sky
      grad.addColorStop(0.45, '#8eaec5'); // Mid haze
      grad.addColorStop(0.75, '#d4c2a5'); // Warm dust layer near horizon
      grad.addColorStop(0.92, '#eedbc5'); // Bright horizon glow
      grad.addColorStop(1.0, '#b8a690'); // Ground reflection haze
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      const sunGrad = ctx.createRadialGradient(680, 220, 10, 680, 220, 180);
      sunGrad.addColorStop(0, 'rgba(255, 250, 230, 0.95)');
      sunGrad.addColorStop(0.2, 'rgba(255, 235, 180, 0.45)');
      sunGrad.addColorStop(0.6, 'rgba(255, 220, 160, 0.15)');
      sunGrad.addColorStop(1, 'rgba(255, 220, 160, 0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, 1024, 512);

      const skyTex = new THREE.CanvasTexture(skyCanvas);
      skyTex.mapping = THREE.EquirectangularReflectionMapping;
      skyTex.colorSpace = THREE.SRGBColorSpace;
      scene.background = skyTex;
      scene.environment = skyTex;
    }
  );

  // Set warm golden city street dust fog
  scene.fog = new THREE.FogExp2(0xd2c6b4, 0.005);
}

/**
 * Returns PBR Asphalt material using 1K downloaded CC0 textures (Asphalt012).
 */
export function getAsphaltMaterial() {
  if (asphaltMaterial) return asphaltMaterial;

  const colorMap = loadPBRTexture('/assets/textures/asphalt_color.jpg', 2, 6, true);
  const normalMap = loadPBRTexture('/assets/textures/asphalt_normal.jpg', 2, 6, false);
  const roughMap = loadPBRTexture('/assets/textures/asphalt_roughness.jpg', 2, 6, false);

  asphaltMaterial = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.8, 0.8),
    roughnessMap: roughMap,
    roughness: 0.65,
    metalness: 0.12,
  });

  return asphaltMaterial;
}

/**
 * Returns PBR Paving Stones material for sidewalks (PavingStones092).
 */
export function getPavingMaterial() {
  if (pavingMaterial) return pavingMaterial;

  const colorMap = loadPBRTexture('/assets/textures/paving_color.jpg', 2, 8, true);
  const normalMap = loadPBRTexture('/assets/textures/paving_normal.jpg', 2, 8, false);
  const roughMap = loadPBRTexture('/assets/textures/paving_roughness.jpg', 2, 8, false);

  pavingMaterial = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.7, 0.7),
    roughnessMap: roughMap,
    roughness: 0.75,
    metalness: 0.05,
  });

  return pavingMaterial;
}

/**
 * Returns PBR Concrete material for curbs, foundations, and bridge piers (Concrete034).
 */
export function getConcreteMaterial() {
  if (concreteMaterial) return concreteMaterial;

  const colorMap = loadPBRTexture('/assets/textures/concrete_color.jpg', 1, 3, true);
  const normalMap = loadPBRTexture('/assets/textures/concrete_normal.jpg', 1, 3, false);
  const roughMap = loadPBRTexture('/assets/textures/concrete_roughness.jpg', 1, 3, false);

  concreteMaterial = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.6, 0.6),
    roughnessMap: roughMap,
    roughness: 0.82,
    metalness: 0.05,
  });

  return concreteMaterial;
}

/**
 * Returns PBR Plaster building wall material with custom Indian pastel color tint (Plaster001).
 * @param {number} hexColor - Plaster base tint
 */
export function getPlasterMaterial(hexColor = 0xd8cbbe) {
  if (plasterMaterialsByColor.has(hexColor)) {
    return plasterMaterialsByColor.get(hexColor);
  }

  const colorMap = loadPBRTexture('/assets/textures/plaster_color.jpg', 2, 2, true);
  const normalMap = loadPBRTexture('/assets/textures/plaster_normal.jpg', 2, 2, false);
  const roughMap = loadPBRTexture('/assets/textures/plaster_roughness.jpg', 2, 2, false);

  const mat = new THREE.MeshStandardMaterial({
    color: hexColor,
    map: colorMap,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.65, 0.65),
    roughnessMap: roughMap,
    roughness: 0.85,
    metalness: 0.05,
  });

  plasterMaterialsByColor.set(hexColor, mat);
  return mat;
}

/**
 * Returns PBR Bricks material for exposed brick facade sections (Bricks059).
 */
export function getBricksMaterial() {
  if (brickMaterial) return brickMaterial;

  const colorMap = loadPBRTexture('/assets/textures/bricks_color.jpg', 3, 3, true);
  const normalMap = loadPBRTexture('/assets/textures/bricks_normal.jpg', 3, 3, false);
  const roughMap = loadPBRTexture('/assets/textures/bricks_roughness.jpg', 3, 3, false);

  brickMaterial = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.8, 0.8),
    roughnessMap: roughMap,
    roughness: 0.88,
    metalness: 0.05,
  });

  return brickMaterial;
}

/**
 * Attempts to load an external GLB model; returns null if missing (handled by procedural mesh fallback).
 * @param {string} path
 * @param {string} modelName
 */
export async function loadExternalModel(path, modelName) {
  if (loadedModels.has(path)) {
    return loadedModels.get(path);
  }

  return new Promise((resolve) => {
    gltfLoader.load(
      path,
      (gltf) => {
        console.log(`[GazeDrive Assets] Loaded external 3D model '${modelName}' from ${path}`);
        loadedModels.set(path, gltf.scene);
        resolve(gltf.scene);
      },
      undefined,
      () => {
        console.warn(
          `[GazeDrive Assets] Optional model '${modelName}' not found at ${path}. Using procedural 3D model instead.\n` +
          `Refer to CREDITS.md to see recommended free downloads.`
        );
        loadedModels.set(path, null);
        resolve(null);
      }
    );
  });
}

/**
 * Creates authentic bilingual Indian shop signboards (Hindi/English).
 */
export function getShopSignboardTexture(index = 0) {
  const shopTemplates = [
    {
      eng: 'SHARMA MEDICALS & SURGICALS',
      ind: 'दवाखाना • 24 HOURS PHARMACY',
      tag: 'ALL MEDICINES & HEALTHCARE • MOB: 98123 45678',
      bg: '#0a643b', // Deep green medical
      accent: '#ffffff',
      cross: true,
    },
    {
      eng: 'ROYAL TEXTILES & SILK SAREES',
      ind: 'रॉयल वस्त्र भण्डार • होलसेल व रिटेल',
      tag: 'EXCLUSIVE WEDDING WEAR & SUITINGS',
      bg: '#8b131f', // Royal maroon
      accent: '#ffd700',
    },
    {
      eng: 'ANNAPURNA VEG RESTAURANT',
      ind: 'होटल अन्नपूर्णा • शुद्ध शाकाहारी',
      tag: 'SOUTH INDIAN MEALS • CHAI • DOSA • COFFEE',
      bg: '#c9510c', // Bright orange restaurant
      accent: '#ffffff',
    },
    {
      eng: 'DELUXE BAKERY & CAKE CORNER',
      ind: 'डिलक्स बेकरी • ताज़ा केक व पेस्ट्री',
      tag: 'FRESH BREAD • PASTRIES • SNACKS & SWEETS',
      bg: '#1b4d89', // Navy blue bakery
      accent: '#ffdd66',
    },
    {
      eng: 'JANATA HARDWARE & ELECTRICALS',
      ind: 'जनता हार्डवेयर व पेंट्स स्टोर',
      tag: 'PAINTS • SANITARY • PIPES • TOOLS',
      bg: '#2b2e35', // Charcoal industrial
      accent: '#ffcc00',
    },
    {
      eng: 'SUPER MOBILE & ELECTRONICS',
      ind: 'सुपर मोबाइल रिपेयरिंग सेंटर',
      tag: 'SMARTPHONE REPAIRS • ACCESSORIES • RECHARGE',
      bg: '#0059b3', // Tech blue
      accent: '#00e5a3',
    },
    {
      eng: 'CHAI POINT & TEA STALL',
      ind: 'स्पेशल अदरक मसाला चाय व नाश्ता',
      tag: 'HOT SAMOSAS • BUN MASKA • FRESH TEA',
      bg: '#7a3b12', // Rich terracotta chai
      accent: '#fff3d1',
    },
  ];

  const tmpl = shopTemplates[index % shopTemplates.length];
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = tmpl.bg;
  ctx.fillRect(0, 0, 512, 128);

  // Border frame
  ctx.strokeStyle = tmpl.accent;
  ctx.lineWidth = 6;
  ctx.strokeRect(4, 4, 504, 120);

  // English main name
  ctx.fillStyle = tmpl.accent;
  ctx.font = 'bold 26px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(tmpl.eng, 256, 42);

  // Hindi / regional subtitle
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText(tmpl.ind, 256, 78);

  // Contact / tagline
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.font = '12px "Inter", monospace';
  ctx.fillText(tmpl.tag, 256, 108);

  // Medical cross icon if applicable
  if (tmpl.cross) {
    ctx.fillStyle = '#ff2222';
    ctx.fillRect(24, 44, 28, 8);
    ctx.fillRect(34, 34, 8, 28);
    ctx.fillRect(460, 44, 28, 8);
    ctx.fillRect(470, 34, 8, 28);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Returns far-distance hazy city skyline silhouette texture.
 */
export function getSkylineSilhouetteTexture() {
  if (proceduralSkylineTex) return proceduralSkylineTex;

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 1024, 256);
  ctx.fillStyle = 'rgba(100, 115, 130, 0.45)';

  let curX = 10;
  while (curX < 1020) {
    const w = 24 + Math.random() * 45;
    const h = 60 + Math.random() * 150;
    ctx.fillRect(curX, 256 - h, w, h);

    if (Math.random() > 0.6) {
      ctx.fillRect(curX + w / 2 - 1, 256 - h - 25, 2, 25);
    }
    curX += w + 6 + Math.random() * 12;
  }

  proceduralSkylineTex = new THREE.CanvasTexture(canvas);
  proceduralSkylineTex.wrapS = THREE.RepeatWrapping;
  proceduralSkylineTex.repeat.set(3, 1);
  return proceduralSkylineTex;
}
