// GazeDrive: ESP32 Microcontroller Haptic Feedback Module
// Communicates with ESP32 over Web Serial API (USB COM Port @ 115200 baud)
// Delivers physical steering wheel & seat vibration pulses synced to gaze-hazard evaluation

export class ESP32HapticsEngine {
  constructor() {
    this.port = null;
    this.writer = null;
    this.isConnected = false;
    this.isSupported = 'serial' in navigator;
    this.currentDutyCycle = 0;
    this.lastCommand = 'IDLE';
    this.hapticHistory = [];
    this.onStateChange = null;

    // Simulation feedback timer
    this.vibrationTimeout = null;
  }

  /**
   * Connects to physical ESP32 via browser Web Serial API.
   */
  async connect() {
    if (!this.isSupported) {
      console.warn('[ESP32 Haptics] Web Serial API not supported in this browser. Using Virtual Haptics Simulator.');
      this.isConnected = true;
      this.triggerStateChange();
      return { success: true, mode: 'VIRTUAL' };
    }

    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 115200 });
      this.port = port;
      this.writer = port.writable.getWriter();
      this.isConnected = true;
      console.log('[ESP32 Haptics] Connected to physical ESP32 on Web Serial @ 115200 baud!');
      await this.sendCommand('STATUS:CONNECTED');
      this.triggerStateChange();
      return { success: true, mode: 'PHYSICAL_SERIAL' };
    } catch (err) {
      console.warn('[ESP32 Haptics] Serial connection cancelled or failed. Falling back to Virtual ESP32:', err);
      this.isConnected = true;
      this.triggerStateChange();
      return { success: true, mode: 'VIRTUAL' };
    }
  }

  /**
   * Disconnects from serial port.
   */
  async disconnect() {
    if (this.writer) {
      try {
        await this.writer.close();
      } catch (e) {}
      this.writer = null;
    }
    if (this.port) {
      try {
        await this.port.close();
      } catch (e) {}
      this.port = null;
    }
    this.isConnected = false;
    this.triggerStateChange();
  }

  /**
   * Sends haptic vibration command to ESP32 (e.g. HAPTIC:ALERT, HAPTIC:WARNING, HAPTIC:COLLISION).
   */
  async triggerHaptic(type = 'ALERT', durationMs = 250, dutyCycle = 65) {
    this.lastCommand = `HAPTIC:${type}`;
    this.currentDutyCycle = dutyCycle;

    const logEntry = {
      timestamp: new Date().toLocaleTimeString(),
      type,
      dutyCycle: `${dutyCycle}%`,
      durationMs: `${durationMs}ms`,
      command: `HAPTIC:${type}\n`,
    };
    this.hapticHistory.unshift(logEntry);
    if (this.hapticHistory.length > 8) this.hapticHistory.pop();

    // 1. Send physical serial bytes to ESP32 if connected
    if (this.writer) {
      try {
        const encoder = new TextEncoder();
        const payload = `HAPTIC:${type}:${durationMs}:${dutyCycle}\n`;
        await this.writer.write(encoder.encode(payload));
      } catch (err) {
        console.warn('[ESP32 Haptics] Failed to write serial buffer:', err);
      }
    }

    // 2. Virtual Haptic Simulator animation trigger
    this.triggerStateChange(true);

    if (this.vibrationTimeout) clearTimeout(this.vibrationTimeout);
    this.vibrationTimeout = setTimeout(() => {
      this.currentDutyCycle = 0;
      this.triggerStateChange(false);
    }, durationMs);
  }

  async sendCommand(cmd) {
    if (!this.writer) return;
    try {
      const encoder = new TextEncoder();
      await this.writer.write(encoder.encode(cmd + '\n'));
    } catch (e) {}
  }

  triggerStateChange(isVibrating = false) {
    if (this.onStateChange) {
      this.onStateChange({
        isConnected: this.isConnected,
        isVibrating,
        dutyCycle: this.currentDutyCycle,
        lastCommand: this.lastCommand,
        history: this.hapticHistory,
      });
    }
  }

  getStatus() {
    return {
      isConnected: this.isConnected,
      dutyCycle: this.currentDutyCycle,
      lastCommand: this.lastCommand,
      history: this.hapticHistory,
    };
  }
}

export const esp32Haptics = new ESP32HapticsEngine();
