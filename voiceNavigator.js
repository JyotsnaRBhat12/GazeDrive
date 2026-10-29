// GazeDrive Google Maps-Style Spoken Voice Navigation & Road Alert Assistant
// Uses Web Speech API (window.speechSynthesis) to deliver natural turn-by-turn & road safety announcements:
// - Approaching Road Signs (School Zone, Speed Limits, Zebra Crossing, Stop, Yield)
// - Traffic Signal States (Red Light Ahead, Signal Yellow)
// - Imminent Road Hazards (Pedestrians, Emergency Braking Vehicles, Work Zones)
// - Synchronized announcement pacing, priority interruptions, and sign/hazard deduplication.

class VoiceNavigator {
  constructor() {
    this.isMuted = false;
    this.isSpeaking = false;
    this.preferredVoice = null;
    this.lastAnnouncementTime = 0;
    this.minIntervalMs = 2800; // Minimum time between standard announcements to prevent audio congestion

    // Track announced IDs so each physical sign/hazard is announced once per approach
    this.announcedIds = new Set();
    this.announcedIntersections = new Map(); // intersectionId -> lastAnnouncedState

    // Pending high-priority hazard
    this.currentUtterance = null;

    this.initVoices();
  }

  initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      // Select natural Google/Microsoft navigation-quality English voice
      this.preferredVoice =
        voices.find((v) => v.name.includes('Google') && v.lang.startsWith('en')) ||
        voices.find((v) => (v.name.includes('Natural') || v.name.includes('Online')) && v.lang.startsWith('en')) ||
        voices.find((v) => v.name.includes('Zira') || v.name.includes('David') || v.name.includes('Samantha')) ||
        voices.find((v) => v.lang === 'en-US' || v.lang === 'en-GB') ||
        voices.find((v) => v.lang.startsWith('en')) ||
        voices[0];
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  /**
   * Speaks a Google Maps-style navigation alert aloud.
   * @param {string} text - The spoken sentence
   * @param {string} priority - 'HIGH' (hazards/stops) or 'NORMAL' (signs/zones)
   */
  speak(text, priority = 'NORMAL') {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    const now = performance.now();

    // If currently speaking a normal announcement and a high-priority hazard arrives, interrupt!
    if (priority === 'HIGH' && this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    } else if (this.isSpeaking || now - this.lastAnnouncementTime < this.minIntervalMs) {
      // Don't overlap routine announcements
      if (priority !== 'HIGH') return;
    }

    // Chrome speech synthesis safety wake-up
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.04; // Slightly brisk, natural navigation pace
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (this.preferredVoice) {
      utterance.voice = this.preferredVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.lastAnnouncementTime = performance.now();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    this.lastAnnouncementTime = now;
  }

  /**
   * Evaluates current road elements ahead of car and announces any new upcoming events.
   */
  update({ carPos, speedKmh, signsOverlay = [], upcomingIntersection = null, allHazards = [], scenarioState = null }) {
    if (this.isMuted) return;

    const carZ = carPos ? carPos.z : 0;

    // Clean up announced IDs for objects that have fallen far behind vehicle (> 40m behind)
    // Signs and intersections will re-announce if recycled far ahead.

    // 1. HIGH-PRIORITY: Check Active Scenarios & Imminent Hazards
    if (scenarioState && scenarioState.isRunning && scenarioState.isAlertActive && !scenarioState.isFrozen) {
      const scnId = scenarioState.activeScenario ? scenarioState.activeScenario.id : 'SCN_ACTIVE';
      const eventKey = `scn_alert_${scnId}`;
      if (!this.announcedIds.has(eventKey)) {
        this.announcedIds.add(eventKey);
        const scn = scenarioState.activeScenario;
        let alertPhrase = 'Caution! Imminent hazard ahead. Apply brakes.';
        if (scn && scn.hazardType === 'PEDESTRIAN') {
          alertPhrase = 'Warning: Pedestrian crossing your lane. Brake now.';
        } else if (scn && scn.hazardType === 'VEHICLE') {
          alertPhrase = 'Hazard ahead: Lead vehicle emergency braking. Slow down.';
        } else if (scn && scn.hazardType === 'CYCLIST') {
          alertPhrase = 'Caution: Cyclist entering roadway ahead.';
        }
        this.speak(alertPhrase, 'HIGH');
        return;
      }
    }

    // 2. HIGH-PRIORITY: Check Critical Road Hazards within 55m
    for (const h of allHazards) {
      if (h.distanceM > 8 && h.distanceM < 50) {
        const hazardKey = `hazard_${h.id || h.name}_${Math.floor(carZ / 250)}`;
        if (!this.announcedIds.has(hazardKey)) {
          this.announcedIds.add(hazardKey);
          let phrase = '';
          const isPed = h.type === 'PEDESTRIAN' || (h.name && h.name.includes('Pedestrian'));
          const isCar = h.type === 'VEHICLE' || (h.name && (h.name.includes('Car') || h.name.includes('Sedan') || h.name.includes('SUV')));

          if (isPed) {
            phrase = 'Caution: Pedestrian near roadway ahead.';
          } else if (isCar && h.distanceM < 38) {
            phrase = 'Traffic slowing ahead.';
          } else if (h.type === 'obstacle' || (h.name && (h.name.includes('Cone') || h.name.includes('Barrier')))) {
            phrase = 'Work zone ahead. Watch for obstacles.';
          }

          if (phrase) {
            this.speak(phrase, 'HIGH');
            return;
          }
        }
      }
    }

    // 3. PRIORITY: Upcoming Traffic Light Intersection (Red / Yellow light alert)
    if (upcomingIntersection) {
      const stopLineDist = Math.round(upcomingIntersection.stopLineZ - carZ);
      const junctionId = upcomingIntersection.junctionZ;
      const state = upcomingIntersection.state;

      // Announce when approaching within 75m to 25m
      if (stopLineDist > 20 && stopLineDist < 75) {
        const lastAnnounced = this.announcedIntersections.get(junctionId);
        if (lastAnnounced !== state) {
          if (state === 'RED') {
            this.announcedIntersections.set(junctionId, state);
            this.speak(`Traffic signal ahead is red. Prepare to stop in ${Math.round(stopLineDist)} meters.`, 'HIGH');
            return;
          } else if (state === 'YELLOW' && stopLineDist < 50) {
            this.announcedIntersections.set(junctionId, state);
            this.speak('Signal is yellow. Prepare to stop.', 'NORMAL');
            return;
          }
        }
      }
    }

    // 4. NORMAL: Approaching Road Signs (School Zone, Stop Sign, Pedestrian Crossing, Speed Limits)
    if (signsOverlay && signsOverlay.length > 0) {
      for (const s of signsOverlay) {
        // Announce when approaching at 45m to 85m ahead
        if (s.distanceM >= 45 && s.distanceM <= 85) {
          const signKey = `sign_${s.id || s.type}_${Math.floor(carZ / 300)}`;
          if (!this.announcedIds.has(signKey)) {
            this.announcedIds.add(signKey);

            let phrase = '';
            if (s.type === 'SPEED_LIMIT_30' || (s.subText && s.subText.includes('SCHOOL'))) {
              phrase = 'Caution: School zone ahead. Speed limit 30 kilometers per hour.';
            } else if (s.type === 'GO_SLOW' || (s.subText && s.subText.includes('JUNCTION'))) {
              phrase = 'Junction ahead. Reduce speed.';
            } else if (s.type === 'PEDESTRIAN_CROSSING' || (s.subText && s.subText.includes('CROSSING'))) {
              phrase = 'Pedestrian crossing ahead.';
            } else if (s.type === 'STOP') {
              phrase = 'Stop sign ahead. Prepare to come to a complete stop.';
            } else if (s.type === 'GIVE_WAY') {
              phrase = 'Yield ahead. Watch for merging traffic.';
            } else if (s.type === 'SPEED_LIMIT_50') {
              phrase = 'Speed limit 50 kilometers per hour.';
            } else if (s.name) {
              phrase = `${s.name} ahead.`;
            }

            if (phrase) {
              this.speak(phrase, 'NORMAL');
              return;
            }
          }
        }
      }
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    } else if (!this.isMuted) {
      this.speak('Navigation voice guidance active.', 'HIGH');
    }
    return this.isMuted;
  }

  setMuted(muted) {
    this.isMuted = Boolean(muted);
    if (this.isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }

  getMuted() {
    return this.isMuted;
  }
}

export const voiceNavigator = new VoiceNavigator();

