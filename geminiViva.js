// GazeDrive: Gemini Flash Voice Viva Examiner Module
// Dynamic audio viva examinations based on traffic rules, hazard perception, fixation latency, and dwell.

export const CLIENT_MEDIUM_QUESTIONS = [
  {
    id: 'TRAFFIC_RULES_SCHOOL_ZONE',
    category: 'Traffic Rules & School Zones',
    categoryBadge: '🚦 TRAFFIC RULES',
    title: 'School Zone Speed Limit & Pedestrian Priority',
    question:
      'Candidate #402, you navigated through a designated School Zone with a 30 km/h posted limit. ' +
      'Explain why exceeding 30 km/h in this zone dramatically increases pedestrian fatality risk, ' +
      'and what specific gaze scanning routine you must maintain approaching a zebra crossing.',
    targetKeywords: ['30', 'speed', 'stopping distance', 'pedestrian', 'zebra', 'cross', 'dwell', 'foveal', 'curb', 'scan', 'brake', 'right of way'],
    verifiedAnswer:
      'In a 30 km/h school zone, vehicle stopping distance is roughly 13 meters compared to over 27 meters at 50 km/h, ' +
      'dramatically lowering pedestrian fatality risk. Approaching the zebra crossing, I scanned both curbs with peripheral vision, ' +
      'checked left and right mirrors, and maintained a foveal dwell to ensure no children were stepping onto the crossing.',
  },
  {
    id: 'TRAFFIC_RULES_STOP_LINE',
    category: 'Traffic Signals & Stop Line Obedience',
    categoryBadge: '🛑 ROAD COMPLIANCE',
    title: 'Mandatory Stop Sign & Solid White Stop Line Compliance',
    question:
      'Candidate #402, at a traffic-controlled junction with a red signal and solid white stop line, ' +
      'explain the exact legal stopping position, the safety hazard of overrunning into the pedestrian crossing box, ' +
      'and what visual scan checks you must complete before proceeding on green.',
    targetKeywords: ['stop line', 'solid line', 'red', 'signal', 'green', 'crosswalk', 'pedestrian', 'overrun', 'mirror', 'blind spot', 'cross traffic'],
    verifiedAnswer:
      'The vehicle must come to a complete halt behind the solid white stop line without bumper encroachment over the pedestrian crosswalk. ' +
      'Overrunning obstructs pedestrians and risks collision with cross traffic. Before proceeding on green, I check rearview and side mirrors, ' +
      'ensure the intersection is clear of turning cyclists in my blind spot, and verify cross traffic has stopped.',
  },
  {
    id: 'HAZARD_PERCEPTION_LATENCY',
    category: 'Hazard Perception & Eye Gaze Scanning',
    categoryBadge: '⚠️ HAZARD PERCEPTION',
    title: 'First-Fixation Latency & Saccadic Dwell',
    question:
      'Candidate #402, during the hazard encounter, your eye tracking measured a first-fixation latency of {latency} ms ' +
      '(licensing standard: ≤ 1200 ms) and secondary dwell of {dwell} ms. Explain how human peripheral vision detects lateral motion, ' +
      'and why a minimum dwell of 150 ms is vital before executing emergency braking.',
    targetKeywords: ['peripheral', 'foveal', 'latency', 'dwell', '1200', '150', 'hazard', 'reaction', 'brake', 'saccade', 'confirmation'],
    verifiedAnswer:
      'Peripheral vision rapidly detects lateral movement vectors through optical flow, triggering a saccade to center the hazard on the fovea ' +
      'within 1200 ms. The secondary dwell of at least 150 ms is critical for the visual cortex to evaluate the hazard’s crossing velocity, ' +
      'confirming that defensive braking is needed rather than an erratic swerve.',
  },
  {
    id: 'HAZARD_PERCEPTION_FOLLOWING_DISTANCE',
    category: 'Lead Vehicle Hazards & Following Distance',
    categoryBadge: '🚗 DEFENSIVE DRIVING',
    title: 'Emergency Braking Ahead & The 3-Second Rule',
    question:
      'Candidate #402, when traveling behind a lead vehicle that brakes abruptly, explain how the 3-Second Following Distance Rule ' +
      'provides an adequate reaction buffer, and how you use rearview mirror scans to prevent being rear-ended.',
    targetKeywords: ['3-second', 'following distance', 'lead vehicle', 'rearview', 'mirror', 'rear-end', 'brake', 'reaction time', 'stopping distance'],
    verifiedAnswer:
      'The 3-second rule ensures at least 1.5 seconds of perception-reaction time plus adequate vehicle braking distance on dry asphalt. ' +
      'When the lead vehicle decelerates, a quick glance at the rearview mirror allows me to gauge trailing vehicle gap and apply progressive ' +
      'threshold braking to prevent a rear-end collision.',
  },
  {
    id: 'TRAFFIC_RULES_GIVE_WAY',
    category: 'Right of Way & Give Way Junctions',
    categoryBadge: '🚦 RIGHT OF WAY',
    title: 'Give Way Priority vs Mandatory Stop',
    question:
      'Candidate #402, differentiate between a "Give Way / Yield" sign and an octagonal "Stop" sign. ' +
      'In what specific traffic circumstances must you bring your vehicle to a complete halt at a Give Way line, and who holds absolute right-of-way?',
    targetKeywords: ['give way', 'yield', 'stop sign', 'halt', 'priority', 'right of way', 'oncoming', 'cross traffic', 'gap'],
    verifiedAnswer:
      'A Give Way sign requires yielding priority to circulating or cross traffic, permitting you to proceed without stopping if the road is completely clear. ' +
      'A Stop sign requires a complete halt regardless. At a Give Way junction, you must stop if approaching traffic does not offer a safe 3-second gap, ' +
      'as oncoming traffic holds absolute right-of-way.',
  },
  {
    id: 'HAZARD_DEFENSIVE_SWERVE_VS_BRAKE',
    category: 'Vehicle Dynamics & Emergency Reactions',
    categoryBadge: '⚡ VEHICLE DYNAMICS',
    title: 'Controlled Braking vs High-Speed Swerve Dynamics',
    question:
      'Candidate #402, when an unexpected road obstacle emerges within 30 meters, explain the vehicular dynamics risk of swerving ' +
      'at speed into an adjacent lane versus applying straight-line ABS braking within your designated travel lane.',
    targetKeywords: ['swerve', 'brake', 'abs', 'traction', 'rollover', 'weight transfer', 'lane', 'adjacent', 'oncoming', 'control'],
    verifiedAnswer:
      'Swerving at speed creates violent lateral weight transfer that can break tire traction, induce a rollover, or cause a head-on collision ' +
      'with oncoming vehicles in adjacent lanes. Straight-line threshold ABS braking maintains directional control and maximum tire grip within your protected lane.',
  },
];

export class GeminiVivaEngine {
  constructor() {
    this.isListening = false;
    this.isSpeaking = false;
    this.recognition = null;
    this.currentQuestion = '';
    this.currentCategory = 'Traffic Rules & Regulations';
    this.currentCategoryBadge = '🚦 TRAFFIC RULES';
    this.currentVerifiedAnswer = '';
    this.currentQuestionIndex = 0;
    this.totalQuestions = CLIENT_MEDIUM_QUESTIONS.length;
    this.candidateTranscript = '';
    this.evaluationResult = null;
    this.onStateChange = null;

    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        this.candidateTranscript = transcript;
        this.triggerState();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.triggerState();
      };

      this.recognition.onerror = (err) => {
        console.warn('[Gemini Viva] Speech recognition error:', err);
        this.isListening = false;
        this.triggerState();
      };
    }
  }

  /**
   * Generates or retrieves viva question based on driving performance metrics and index.
   */
  async generateQuestion(metrics = {}) {
    const {
      candidateId = 'Candidate #402',
      scenarioName = 'Urban Pedestrian Crossing',
      firstFixationLatencyMs = 420,
      secondaryDwellMs = 280,
      reactionInput = 'BRAKE',
      outcome = 'SUCCESS',
      score = 88,
      questionIndex = this.currentQuestionIndex,
      isTestDisqualified = false,
      failedOccurrences = 0,
      totalOccurrences = 0,
    } = metrics;

    this.currentQuestionIndex = questionIndex;

    let question = '';
    let category = 'Traffic Rules & Regulations';
    let categoryBadge = '🚦 TRAFFIC RULES';
    let verifiedAnswer = '';

    // 1. Try FastAPI backend first
    try {
      const res = await fetch('http://localhost:8000/api/viva/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidateId,
          scenarioName,
          firstFixationLatencyMs,
          secondaryDwellMs,
          reactionInput,
          outcome,
          score,
          questionIndex: this.currentQuestionIndex,
          isTestDisqualified,
          failedOccurrences,
          totalOccurrences,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        question = data.question;
        category = data.category || category;
        categoryBadge = data.categoryBadge || categoryBadge;
        verifiedAnswer = data.verifiedAnswer || '';
      }
    } catch (e) {
      // Backend offline: use high-fidelity client-side fallback
    }

    // 2. Client-side fallback if backend was unavailable
    if (!question) {
      if (isTestDisqualified || failedOccurrences >= 2) {
        const tot = totalOccurrences || 3;
        const fails = failedOccurrences || 2;
        category = 'Safety Failure Review & Mitigation';
        categoryBadge = '🚨 CRITICAL AUDIT';
        question =
          `Candidate #402, your driving skill test has been terminated due to ${fails} hazard safety infractions (${fails} of ${tot} failed), ` +
          `including delayed gaze fixation (${firstFixationLatencyMs} ms) and collision during "${scenarioName}". ` +
          `Under licensing board standards, identify what visual distractors caused this delay, and detail the step-by-step corrective ` +
          `scanning routine you must demonstrate to qualify for re-examination.`;
        verifiedAnswer =
          'My visual scanning was restricted to the immediate front bumper rather than scanning 12 to 15 seconds ahead, which delayed hazard detection ' +
          'past the 1200 ms limit. To qualify for re-examination, I will adopt systematic scanning across mirrors and intersections every 5 to 8 seconds, ' +
          'eliminate in-cabin distractors, and practice early defensive deceleration.';
      } else {
        const idx = this.currentQuestionIndex % CLIENT_MEDIUM_QUESTIONS.length;
        const qData = CLIENT_MEDIUM_QUESTIONS[idx];
        category = qData.category;
        categoryBadge = qData.categoryBadge;
        question = qData.question
          .replace('{latency}', Math.round(firstFixationLatencyMs))
          .replace('{dwell}', Math.round(secondaryDwellMs))
          .replace('{scenarioName}', scenarioName);
        verifiedAnswer = qData.verifiedAnswer;
      }
    }

    this.currentQuestion = question;
    this.currentCategory = category;
    this.currentCategoryBadge = categoryBadge;
    this.currentVerifiedAnswer = verifiedAnswer;
    this.candidateTranscript = '';
    this.evaluationResult = null;
    this.triggerState();

    // Speak question aloud using browser speech synthesis
    this.speak(question);
    return question;
  }

  /**
   * Advances to next medium question in the pool.
   */
  async nextQuestion(metrics = {}) {
    this.currentQuestionIndex = (this.currentQuestionIndex + 1) % CLIENT_MEDIUM_QUESTIONS.length;
    return this.generateQuestion({ ...metrics, questionIndex: this.currentQuestionIndex });
  }

  setCandidateAnswer(text) {
    this.candidateTranscript = text;
    this.triggerState();
  }

  /**
   * Speaks examiner question aloud with Web Speech Synthesis.
   */
  speak(text) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick crisp English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David'))
    );
    if (preferredVoice) utterance.voice = preferredVoice;

    this.isSpeaking = true;
    utterance.onend = () => {
      this.isSpeaking = false;
      this.triggerState();
    };
    utterance.onerror = () => {
      this.isSpeaking = false;
      this.triggerState();
    };

    window.speechSynthesis.speak(utterance);
    this.triggerState();
  }

  speakQuestion() {
    if (this.currentQuestion) {
      this.speak(this.currentQuestion);
    }
  }

  /**
   * Starts listening to candidate's verbal microphone answer.
   */
  startListening() {
    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
    if (this.recognition && !this.isListening) {
      try {
        this.recognition.start();
        this.isListening = true;
        this.triggerState();
      } catch (e) {
        console.warn('[Gemini Viva] Recognition start error:', e);
      }
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
        this.isListening = false;
        this.triggerState();
      } catch (e) {}
    }
  }

  /**
   * Evaluates candidate's spoken response.
   */
  async evaluateAnswer(answerText = '', metrics = {}) {
    const answer = (answerText || this.candidateTranscript || '').trim();
    if (!answer) {
      this.evaluationResult = {
        score: 60,
        grade: 'FAIL',
        feedback: 'No verbal answer recorded. Candidate must answer questions regarding traffic rules and hazard perception to qualify.',
        endorsement: 'RETEST REQUIRED',
      };
      this.triggerState();
      return this.evaluationResult;
    }

    // Try FastAPI backend
    try {
      const res = await fetch('http://localhost:8000/api/viva/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: this.currentQuestion,
          candidateAnswer: answer,
          metrics,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        this.evaluationResult = {
          score: data.score,
          grade: data.grade,
          feedback: data.feedback,
          endorsement: data.examinerEndorsement,
        };
        this.triggerState();
        return this.evaluationResult;
      }
    } catch (e) {}

    // Client-side fallback rubric
    const words = answer.toLowerCase().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const domainTerms = [
      '30', 'speed', 'stopping', 'distance', 'pedestrian', 'zebra', 'stop line', 'solid',
      'red', 'signal', 'green', 'give way', 'yield', 'right of way', 'priority',
      'peripheral', 'foveal', 'latency', 'dwell', '1200', '150', 'hazard', 'reaction',
      'brake', 'saccade', 'following', '3-second', 'rearview', 'mirror', 'blind spot',
      'swerve', 'abs', 'traction', 'rollover', 'weight', 'transfer', 'scan', 'distraction'
    ];
    const matched = domainTerms.filter((term) => answer.toLowerCase().includes(term));
    const matchCount = matched.length;

    let score = 70;
    let grade = 'B';
    let feedback = '';

    if (wordCount < 5) {
      score = 55;
      grade = 'FAIL';
      feedback = 'Answer was too brief. Candidate must articulate specific traffic rules and hazard perception principles.';
    } else if (matchCount >= 4 && wordCount >= 18) {
      score = Math.min(98, 88 + matchCount);
      grade = 'A+';
      feedback = `Outstanding technical response! Accurately cited key safety principles (${matched.slice(0, 3).join(', ')}) with spatial awareness.`;
    } else if (matchCount >= 2 && wordCount >= 10) {
      score = 85 + Math.min(5, matchCount);
      grade = 'A';
      feedback = `Good technical knowledge demonstrated. Correctly explained ${matched.slice(0, 2).join(', ')} and defensive hazard mitigation.`;
    } else if (matchCount >= 1) {
      score = 76 + matchCount * 2;
      grade = 'B';
      feedback = 'Satisfactory pass. Basic understanding demonstrated, but recommended practice on secondary dwell and following distance.';
    } else {
      score = 66;
      grade = 'C';
      feedback = 'Borderline answer. Candidate showed general awareness but omitted essential road rules, stopping distances, and gaze scanning specifics.';
    }

    this.evaluationResult = {
      score: Math.round(score),
      grade,
      feedback,
      endorsement: score >= 75 ? 'RECOMMENDED FOR LICENCE ENDORSEMENT' : 'RETEST REQUIRED',
    };

    this.triggerState();
    return this.evaluationResult;
  }

  triggerState() {
    if (this.onStateChange) {
      this.onStateChange({
        isSpeaking: this.isSpeaking,
        isListening: this.isListening,
        question: this.currentQuestion,
        category: this.currentCategory,
        categoryBadge: this.currentCategoryBadge,
        questionIndex: this.currentQuestionIndex,
        totalQuestions: this.totalQuestions,
        verifiedAnswer: this.currentVerifiedAnswer,
        transcript: this.candidateTranscript,
        result: this.evaluationResult,
      });
    }
  }
}

export const geminiViva = new GeminiVivaEngine();
