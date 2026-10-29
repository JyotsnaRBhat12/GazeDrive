// GazeDrive Configuration & Constants

export const CONFIG = {
  // Car Physics & Dimensions (Tunable dynamically via UI sliders)
  CAR: {
    maxSpeed: 33.33, // ~120 km/h in m/s (1 m/s = 3.6 km/h)
    acceleration: 14.0, // m/s^2
    braking: 22.0, // m/s^2
    handbrake: 30.0, // m/s^2
    drag: 0.14, // Natural rolling resistance & coasting decay factor (allows reaching full 120 km/h)
    steerSpeed: 3.8, // Horizontal turn speed factor
    steerReturnSpeed: 6.0, // Speed at which steering centers
    maxSteerAngle: 0.38, // Visual front wheel turn angle in radians
    roadBoundsX: 3.4, // Car X limit to stay within road/sidewalk bounds
    pitchSensitivity: 0.035, // Body pitch intensity on accel/brake
    rollSensitivity: 0.045, // Body roll intensity on turning
  },

  // Simulation playback speed multiplier (1.0x, 1.5x, 2.0x)
  simSpeedMultiplier: 1.0,

  // Road & Environment Geometry
  ROAD: {
    segmentLength: 40,
    numSegments: 14,
    totalWidth: 8.8,
    laneWidth: 4.4,
    sidewalkWidth: 3.0,
    dashLength: 4.0,
    dashGap: 4.0,
  },

  // Camera Settings
  CAMERA: {
    chaseOffset: { x: 0, y: 2.1, z: -5.6 },
    chaseLookAtOffset: { x: 0, y: 0.85, z: 8.0 },
    driverOffset: { x: -0.28, y: 1.30, z: 0.38 },
    driverLookAtOffset: { x: -0.12, y: 1.22, z: 42.0 },
    lerpFactorPosition: 0.14,
    lerpFactorLookAt: 0.20,
    fov: 58,
  },

  // Urban Indian City Avenue Environment Palette
  COLORS: {
    sky: 0x8eaec5, // Warm hazy city sky
    fog: 0xd2c6b4, // Golden dust haze
    hemiSky: 0xd8e4f0,
    hemiGround: 0x4a4235,
    sunLight: 0xfff2dc, // Warm tropical sunlight

    road: 0x242830, // Worn city asphalt
    roadMarkings: 0xffffff,
    centerDashes: 0xffca28, // Yellow lane dashes
    markerPosts: 0xffca28,
    sidewalk: 0xbeb6a8, // Paved concrete paver slabs
    grass: 0x4a4742, // Urban foundation ground

    carBody: 0x0066cc,
    carCabin: 0x1a233a,
    carTrim: 0x111115,
    carHeadlights: 0xffffd0,
    carBrakeLightsNormal: 0x660000,
    carBrakeLightsActive: 0xff0000,
    carWheels: 0x1a1a1a,
    carRims: 0xd0d0d0,

    // Dynamic Traffic Cars Palette (Classic Red, White Lexus, Black Sedan, Silver Truck)
    trafficCars: [0xd32f2f, 0xffffff, 0x111115, 0x757575, 0x1565c0],

    buildings: [0x2c3e50, 0x34495e, 0x7f8c8d],
    treesTrunk: 0x4e3629,
    treesFoliage: [0x6b7a42, 0x586935, 0x4a592c],
    lampPosts: 0x333338,
    pedestrian: 0xffcc00,
  },

  // Manual 5-Speed + Reverse Transmission Specifications for Driving Test
  GEARS: {
    'R': { id: 'R', name: 'Reverse', maxKmh: -15, minKmh: -15, optimalKmh: [-15, 0], accelFactor: 0.7 },
    'N': { id: 'N', name: 'Neutral', maxKmh: 0, minKmh: 0, optimalKmh: [0, 0], accelFactor: 0.0 },
    '1': { id: '1', name: '1st Gear', maxKmh: 28, minKmh: 0, optimalKmh: [0, 22], accelFactor: 1.25 },
    '2': { id: '2', name: '2nd Gear', maxKmh: 52, minKmh: 12, optimalKmh: [18, 44], accelFactor: 1.05 },
    '3': { id: '3', name: '3rd Gear', maxKmh: 76, minKmh: 28, optimalKmh: [38, 68], accelFactor: 0.88 },
    '4': { id: '4', name: '4th Gear', maxKmh: 102, minKmh: 46, optimalKmh: [58, 92], accelFactor: 0.75 },
    '5': { id: '5', name: '5th Gear', maxKmh: 135, minKmh: 65, optimalKmh: [80, 125], accelFactor: 0.62 },
  },

  // Visual Overlays Configuration
  OVERLAYS: {
    showObstacleBoxes: false, // Default false: evaluation runs in background without showing visible boxes around obstacles on screen
  },
};

export const TELEMETRY_FIELDS = {
  timestamp: "timestamp_ms",
  frameIndex: "frame_idx",
  posX: "car_pos_x",
  posZ: "car_pos_z",
  speedKmh: "speed_kmh",
  speedMs: "speed_ms",
  steering: "steer_input",
  throttle: "throttle_input",
  brake: "brake_input",
  seatbelt: "seatbelt_fastened",
  currentGear: "current_gear",
  engineRpm: "engine_rpm",
  cameraMode: "camera_mode",
};

export const gaze = {
  x: 0,
  y: 0,
  valid: false,
};

