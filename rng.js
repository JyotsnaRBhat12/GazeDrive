// GazeDrive Seeded Pseudo-Random Number Generator (Mulberry32)
// Ensures reproducible signal timings, hazard placements, and pedestrian events across test runs.

let initialSeed = 12345;
let state = 12345;

/**
 * Initializes the deterministic PRNG state with a custom integer seed.
 * @param {number} seed
 */
export function initSeed(seed = 12345) {
  initialSeed = Number(seed) || 12345;
  state = (initialSeed ^ 0x6d2b79f5) >>> 0;
}

/**
 * Returns a pseudo-random floating point number in [0, 1).
 * @returns {number}
 */
export function random() {
  state = (state + 0x6d2b79f5) >>> 0;
  let t = Math.imul(state ^ (state >>> 15), 1 | state);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/**
 * Returns a pseudo-random floating point number in [min, max).
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomRange(min, max) {
  return min + random() * (max - min);
}

/**
 * Returns a pseudo-random element selected from an array.
 * @param {Array} arr
 * @returns {*}
 */
export function randomChoice(arr) {
  if (!arr || arr.length === 0) return null;
  const idx = Math.floor(random() * arr.length);
  return arr[idx];
}

/**
 * Returns current seed value.
 * @returns {number}
 */
export function getSeed() {
  return initialSeed;
}

// Initialize default seed
initSeed(12345);
