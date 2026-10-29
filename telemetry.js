import { TELEMETRY_FIELDS } from './config.js';
import { getSeed } from './rng.js';
import { getViolations } from './ruleEngine.js';

let telemetryFrames = [];
let eventLogs = [];
let isRecording = true;

/**
 * Initializes telemetry system & clears previous buffers.
 */
export function init() {
  telemetryFrames = [];
  eventLogs = [];
  isRecording = true;
  logEvent('SESSION_START', { startTime: new Date().toISOString(), seed: getSeed() });
}

/**
 * Records telemetry data for a single frame.
 * Key names are dynamically mapped from config.js TELEMETRY_FIELDS.
 */
export function recordFrame({
  frameIndex,
  posX,
  posZ,
  speedMs,
  speedKmh,
  steering,
  throttle,
  brake,
  seatbelt,
  currentGear,
  engineRpm,
  cameraMode,
}) {
  if (!isRecording) return;

  const frameRecord = {
    [TELEMETRY_FIELDS.timestamp]: Number(performance.now().toFixed(2)),
    [TELEMETRY_FIELDS.frameIndex]: frameIndex,
    [TELEMETRY_FIELDS.posX]: Number(posX.toFixed(3)),
    [TELEMETRY_FIELDS.posZ]: Number(posZ.toFixed(3)),
    [TELEMETRY_FIELDS.speedMs]: Number(speedMs.toFixed(3)),
    [TELEMETRY_FIELDS.speedKmh]: Number(speedKmh.toFixed(1)),
    [TELEMETRY_FIELDS.steering]: Number(steering.toFixed(3)),
    [TELEMETRY_FIELDS.throttle]: Number(throttle.toFixed(3)),
    [TELEMETRY_FIELDS.brake]: Number(brake.toFixed(3)),
    [TELEMETRY_FIELDS.seatbelt]: seatbelt ? 1 : 0,
    [TELEMETRY_FIELDS.currentGear]: currentGear || '1',
    [TELEMETRY_FIELDS.engineRpm]: engineRpm || 900,
    [TELEMETRY_FIELDS.cameraMode]: cameraMode,
  };


  telemetryFrames.push(frameRecord);
}

/**
 * Empty hook for future research events (hazard shown, gaze sample, hazard reaction, etc.)
 * @param {string} type - Event category identifier
 * @param {Object} data - Event payload details
 */
export function logEvent(type, data = {}) {
  const eventObj = {
    timestamp_ms: Number(performance.now().toFixed(2)),
    event_type: type,
    payload: data,
  };
  eventLogs.push(eventObj);
  console.log(`[Telemetry Event] ${type}`, data);
}

/**
 * Exports in-memory telemetry frames & event logs as downloadable CSV and JSON files.
 */
export function exportSession() {
  if (telemetryFrames.length === 0) {
    alert('No telemetry data recorded yet!');
    return;
  }

  logEvent('SESSION_EXPORT_TRIGGERED', { totalFrames: telemetryFrames.length });

  const dateStr = new Date().toISOString().replace(/[:.]/g, '-');
  const csvFilename = `gazedrive_telemetry_${dateStr}.csv`;
  const jsonFilename = `gazedrive_telemetry_${dateStr}.json`;

  // 1. Convert Frame Telemetry to CSV Format
  const headers = Object.keys(telemetryFrames[0]);
  let csvContent = headers.join(',') + '\n';

  telemetryFrames.forEach((row) => {
    const values = headers.map((header) => {
      const val = row[header];
      return typeof val === 'string' ? `"${val}"` : val;
    });
    csvContent += values.join(',') + '\n';
  });

  // 2. Build JSON Dataset Structure (includes metadata, seed, violations, frames, and event logs)
  const jsonDataset = {
    metadata: {
      exportedAt: new Date().toISOString(),
      seed: getSeed(),
      totalFrames: telemetryFrames.length,
      totalEvents: eventLogs.length,
      totalViolations: getViolations().length,
      fieldMappings: TELEMETRY_FIELDS,
    },
    violations: getViolations(),
    eventLogs: eventLogs,
    telemetryFrames: telemetryFrames,
  };

  // 3. Trigger File Downloads
  downloadFile(csvContent, csvFilename, 'text/csv;charset=utf-8;');
  downloadFile(JSON.stringify(jsonDataset, null, 2), jsonFilename, 'application/json');

  console.log(`Exported ${telemetryFrames.length} frames to ${csvFilename} and ${jsonFilename}`);
}

/**
 * Helper to trigger browser file download via temporary anchor element.
 */
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function getFrameCount() {
  return telemetryFrames.length;
}

export function reset() {
  init();
}
