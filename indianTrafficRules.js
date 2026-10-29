// GazeDrive Indian Traffic Rules & Sign Identification Flashcards Knowledge Base
// Compliant with Ministry of Road Transport and Highways (MoRTH), Indian Roads Congress (IRC:67), and Motor Vehicles Act (MVA 2019).
// Covers:
// 1. Mandatory / Regulatory Signs (Circular Red Ring, Octagon STOP, Inverted Triangle YIELD)
// 2. Cautionary / Warning Signs (Equilateral Red Triangle)
// 3. Informatory Signs (Blue Rectangles)
// 4. Fundamental Rules of the Road & Right of Way in India (Left-Hand Traffic, Overtaking, Roundabouts)
// 5. Motor Vehicles Act Penalties, Speed Limits, Alcohol Limits & Mandatory Safety Laws

export const CATEGORIES = {
  ALL: { id: 'ALL', label: 'All Indian Rules (30)', icon: '📚' },
  MANDATORY: { id: 'MANDATORY', label: '🛑 Mandatory Signs', icon: '🛑' },
  CAUTIONARY: { id: 'CAUTIONARY', label: '⚠️ Cautionary Signs', icon: '⚠️' },
  RULES_OF_ROAD: { id: 'RULES_OF_ROAD', label: '🚗 Rules of the Road', icon: '🚗' },
  PENALTIES: { id: 'PENALTIES', label: '⚖️ Penalties & Laws', icon: '⚖️' },
};

export const FLASHCARDS_DATA = [
  // =========================================================================
  // 1. MANDATORY / REGULATORY TRAFFIC SIGNS (IRC:67)
  // =========================================================================
  {
    id: 'MANDATORY_01_STOP',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'STOP Sign',
    question: 'What is the mandatory driver action required when encountering this octagonal sign?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
        <text x="50" y="58" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle">STOP</text>
      </svg>
    `,
    options: [
      'Slow down and proceed without stopping if cross-street looks clear',
      'Come to a complete stop behind the solid white stop line and proceed only when clear',
      'Honk horn twice and maintain speed through the intersection',
      'Stop only if vehicles are approaching from the left'
    ],
    correctIndex: 1,
    explanation: 'The octagonal STOP sign is a mandatory regulatory sign. Under Section 119 of the Motor Vehicles Act, a driver must bring the vehicle to a complete standstill behind the white stop line or pedestrian crossing, yield right of way to cross traffic, and move only when safe.',
    ruleCitation: 'IRC:67-2012 Code of Practice & Section 119 Motor Vehicles Act'
  },
  {
    id: 'MANDATORY_02_GIVE_WAY',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'GIVE WAY / YIELD Sign',
    question: 'Identify this inverted triangular sign and its legal requirement:',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,92 8,15 92,15" fill="#ffffff" stroke="#dc2626" stroke-width="12"/>
      </svg>
    `,
    options: [
      'Dead end road ahead; prepare to make a U-turn',
      'Yield / Give way to traffic on the major road or circulating in the roundabout',
      'Priority road begins; you have absolute right of way',
      'One-way road ending ahead'
    ],
    correctIndex: 1,
    explanation: 'The inverted equilateral triangle is the Give Way / Yield sign. Drivers approaching must slow down or stop if necessary to give precedence to traffic already on the main roadway or roundabout before joining.',
    ruleCitation: 'Regulation 7, Rules of the Road Regulations 1989'
  },
  {
    id: 'MANDATORY_03_NO_ENTRY',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'NO ENTRY Sign',
    question: 'What does this red circle with a horizontal white bar signify?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#dc2626"/>
        <rect x="15" y="42" width="70" height="16" fill="#ffffff" rx="2"/>
      </svg>
    `,
    options: [
      'Entry strictly prohibited for all vehicular traffic from this direction',
      'Parking allowed for authorized government vehicles only',
      'Speed breaker 100 meters ahead',
      'Level crossing gate closed'
    ],
    correctIndex: 0,
    explanation: 'The No Entry sign prohibits all vehicular traffic from entering the street from this side. Driving past this sign is driving against one-way traffic, a severe offense punishable under Dangerous Driving (Section 184 MVA).',
    ruleCitation: 'Schedule to Motor Vehicles Act & IRC:67'
  },
  {
    id: 'MANDATORY_04_ONE_WAY',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'ONE WAY Traffic Sign',
    question: 'What is indicated by this circular sign featuring a single white directional arrow?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#1d4ed8" stroke="#ffffff" stroke-width="3"/>
        <polygon points="50,18 68,38 56,38 56,80 44,80 44,38 32,38" fill="#ffffff"/>
      </svg>
    `,
    options: [
      'Vehicular traffic is permitted to travel only in the direction of the arrow',
      'Compulsory ahead or turn right',
      'Narrow bridge ahead in 100 meters',
      'Expressway entrance; minimum speed 60 km/h'
    ],
    correctIndex: 0,
    explanation: 'The One Way sign mandates that traffic must flow exclusively in the direction specified by the arrow. Reversing or traveling in the opposite direction is prohibited.',
    ruleCitation: 'Regulation 11, Rules of the Road Regulations'
  },
  {
    id: 'MANDATORY_05_SPEED_LIMIT_50',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'SPEED LIMIT 50 Sign',
    question: 'What does this circular sign with a red border containing the numeral "50" represent?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <text x="50" y="62" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="36" fill="#0f172a" text-anchor="middle">50</text>
      </svg>
    `,
    options: [
      'Recommended cruising speed of 50 km/h',
      'Maximum permissible legal speed limit is 50 km/h; exceeding is a punishable offense',
      'Minimum speed required on this highway is 50 km/h',
      'Distance to nearest city center is 50 kilometers'
    ],
    correctIndex: 1,
    explanation: 'A circular sign with a thick red border and black numeral indicates a Maximum Speed Limit. Exceeding 50 km/h on this stretch constitutes overspeeding under Section 112/183 MVA with penalties ranging from ₹1,000 to ₹4,000 and licence suspension.',
    ruleCitation: 'Section 112 & Section 183 Motor Vehicles (Amendment) Act 2019'
  },
  {
    id: 'MANDATORY_06_SPEED_LIMIT_30_SCHOOL',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'SPEED LIMIT 30 - SCHOOL ZONE',
    question: 'Where is this 30 km/h speed limit sign primarily mandated by Indian road authorities?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <text x="50" y="62" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="36" fill="#0f172a" text-anchor="middle">30</text>
      </svg>
    `,
    options: [
      'Near schools, hospitals, residential zones, and heavy pedestrian areas',
      'On multi-lane toll expressways',
      'Only on rural unpaved dirt tracks',
      'Inside automated multi-level parking garages only'
    ],
    correctIndex: 0,
    explanation: 'Under IRC Guidelines and city police traffic regulations, 30 km/h is the statutory maximum speed limit outside schools, universities, hospitals, and high-density pedestrian corridors to minimize child pedestrian fatality risk.',
    ruleCitation: 'IRC:67-2012 & City Traffic Police Speed Notifications'
  },
  {
    id: 'MANDATORY_07_OVERTAKING_PROHIBITED',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'OVERTAKING PROHIBITED Sign',
    question: 'What is the restriction imposed by this sign displaying two cars side by side with one in red?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <!-- Right black car -->
        <rect x="52" y="36" width="22" height="34" rx="4" fill="#0f172a"/>
        <!-- Left red overtaking car -->
        <rect x="26" y="32" width="22" height="34" rx="4" fill="#dc2626"/>
      </svg>
    `,
    options: [
      'Two-lane highway starts ahead',
      'Overtaking any moving vehicle is strictly prohibited on this stretch',
      'Red cars have priority over black cars',
      'Dual carriageway merges into single lane'
    ],
    correctIndex: 1,
    explanation: 'The Overtaking Prohibited sign forbids overtaking other moving motor vehicles on narrow roads, blind corners, bridges, or steep ascents where oncoming sight distance is insufficient.',
    ruleCitation: 'Regulation 9, Rules of the Road Regulations 1989'
  },
  {
    id: 'MANDATORY_08_HORN_PROHIBITED',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'HORN PROHIBITED / SILENT ZONE Sign',
    question: 'What does a horn icon crossed with a diagonal red line mean?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <path d="M 28 46 L 40 46 L 56 32 L 56 68 L 40 54 L 28 54 Z" fill="#0f172a"/>
        <path d="M 64 38 Q 72 50 64 62" stroke="#0f172a" stroke-width="3" fill="none"/>
        <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="8"/>
      </svg>
    `,
    options: [
      'Use horn continuously to alert pedestrians',
      'Honking of horns is strictly prohibited (Silent Zone around hospitals, courts, schools)',
      'Vehicle horn is mandatory to be checked by transport inspector',
      'Music and audio systems must be played on high volume'
    ],
    correctIndex: 1,
    explanation: 'The Horn Prohibited sign designates Silent Zones (within 100m of hospitals, educational institutions, and courts). Unnecessary honking is a violation under Section 194F MVA punishable with a fine of ₹1,000 (first offense) and ₹2,000 (subsequent).',
    ruleCitation: 'Section 194F, Motor Vehicles (Amendment) Act 2019'
  },
  {
    id: 'MANDATORY_09_NO_PARKING',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'NO PARKING Sign',
    question: 'What is the exact distinction between this NO PARKING sign and a NO STOPPING sign?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#1e3a8a" stroke="#dc2626" stroke-width="10"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" stroke-width="10"/>
      </svg>
    `,
    options: [
      'Parking is prohibited, but momentary stopping to pick up or set down passengers/goods is permitted',
      'Neither parking nor stopping for any reason is allowed at all',
      'Free parking zone on Sundays and national holidays',
      'Paid parking zone for commercial taxis only'
    ],
    correctIndex: 0,
    explanation: 'A blue circular disc with a single diagonal red slash is NO PARKING: you cannot leave the vehicle unattended, but brief stopping to embark/disembark passengers is allowed. An "X" cross slash means NO STOPPING (stopping even for a second is illegal).',
    ruleCitation: 'Schedule 1, Motor Vehicles Act 1988'
  },
  {
    id: 'MANDATORY_10_NO_STOPPING',
    category: 'MANDATORY',
    categoryLabel: '🛑 Mandatory Regulatory Sign',
    title: 'NO STOPPING / NO STANDING Sign',
    question: 'What is indicated by a blue disc with a red border and a double diagonal red cross (X)?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <circle cx="50" cy="50" r="45" fill="#1e3a8a" stroke="#dc2626" stroke-width="10"/>
        <line x1="18" y1="18" x2="82" y2="82" stroke="#dc2626" stroke-width="10"/>
        <line x1="82" y1="18" x2="18" y2="82" stroke="#dc2626" stroke-width="10"/>
      </svg>
    `,
    options: [
      'Road intersection with four-way traffic',
      'No Stopping or Standing: Vehicles cannot stop even momentarily on the carriageway',
      'Emergency breakdown area',
      'Airport flyover entrance'
    ],
    correctIndex: 1,
    explanation: 'The Clearway / No Stopping sign mandates continuous vehicle movement. Halting or standing on the carriage way for any duration is prohibited as it causes severe traffic bottlenecks or accidents.',
    ruleCitation: 'IRC:67-2012 Standards'
  },

  // =========================================================================
  // 2. CAUTIONARY / WARNING TRAFFIC SIGNS (IRC:67 - Red Triangle)
  // =========================================================================
  {
    id: 'CAUTIONARY_11_PEDESTRIAN_CROSSING',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'PEDESTRIAN CROSSING (Zebra Ahead)',
    question: 'What precaution is mandatory upon sighting this triangular pedestrian sign?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Pedestrian figure on zebra stripes -->
        <circle cx="50" cy="38" r="5" fill="#0f172a"/>
        <path d="M 50 44 L 46 62 L 40 76 M 50 48 L 56 60 L 62 76 M 44 52 L 56 52" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="30" y1="78" x2="70" y2="78" stroke="#0f172a" stroke-width="3"/>
      </svg>
    `,
    options: [
      'Accelerate rapidly to cross before pedestrians step out',
      'Reduce vehicle speed and yield right of way to any pedestrians crossing',
      'Pedestrians are prohibited from crossing this street',
      'Joggers and athletes track ahead'
    ],
    correctIndex: 1,
    explanation: 'The Pedestrian Crossing warning sign alerts drivers to an upcoming zebra crossing. Under Indian traffic rules, pedestrians have absolute priority on zebra markings; failing to yield carries dangerous driving penalties.',
    ruleCitation: 'Regulation 15, Rules of the Road Regulations 1989'
  },
  {
    id: 'CAUTIONARY_12_SCHOOL_AHEAD',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'SCHOOL AHEAD Sign',
    question: 'What hazard does this triangular sign with school children signify?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Two children silhouette -->
        <circle cx="44" cy="38" r="4" fill="#0f172a"/>
        <circle cx="58" cy="44" r="3.5" fill="#0f172a"/>
        <path d="M 44 43 L 42 60 L 38 74 M 44 43 L 48 58 L 52 74 M 58 48 L 56 62 L 60 74" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    options: [
      'Children and students may be crossing; slow down and observe school zone speed limits (<=30 km/h)',
      'Pedestrian foot overbridge ahead',
      'Public playground with no motor vehicle access',
      'Bus terminal entrance'
    ],
    correctIndex: 0,
    explanation: 'Warns of school premises. Children may impulsively dash across the road. Drivers must decelerate, scan sidewalks, and stay prepared to brake instantly.',
    ruleCitation: 'IRC:67-2012 Code of Practice'
  },
  {
    id: 'CAUTIONARY_13_SPEED_BREAKER',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'SPEED BREAKER / ROAD HUMP Sign',
    question: 'How should a driver properly respond when encountering this Speed Breaker sign?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Road Hump -->
        <path d="M 22 72 Q 50 40 78 72 Z" fill="#0f172a"/>
      </svg>
    `,
    options: [
      'Maintain speed and steer violently to avoid the center of the hump',
      'Decelerate smoothly before the hump and traverse in low gear to protect passengers and suspension',
      'Brake hard precisely while the front wheels are on top of the hump',
      'Turn on hazard warning flashers and overtake preceding car'
    ],
    correctIndex: 1,
    explanation: 'Braking on top of a speed breaker puts peak stress on vehicle suspension and front brakes. Drivers must brake before reaching the hump, release brakes just before mounting, and smoothly roll over at ~15-20 km/h.',
    ruleCitation: 'IRC:99-1988 Guidelines on Traffic Calming'
  },
  {
    id: 'CAUTIONARY_14_ROUNDABOUT',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'ROUNDABOUT AHEAD Sign',
    question: 'What is the priority rule when entering an Indian traffic roundabout indicated by this sign?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- 3 Circular Arrows -->
        <circle cx="50" cy="56" r="15" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-dasharray="14 8"/>
      </svg>
    `,
    options: [
      'Entering vehicles have right of way over vehicles already in the roundabout',
      'Traffic already circulating inside the roundabout coming from your right has right of way',
      'First vehicle to sound their horn has priority',
      'Heaviest commercial vehicle has right of way'
    ],
    correctIndex: 1,
    explanation: 'In Left-Hand Traffic systems like India, vehicles already circulating inside the roundabout or approaching from the right have right of way. Entering drivers must yield.',
    ruleCitation: 'Regulation 8, Rules of the Road Regulations 1989'
  },
  {
    id: 'CAUTIONARY_15_NARROW_BRIDGE',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'NARROW BRIDGE / ROAD NARROWS Sign',
    question: 'What is the critical driving rule when approaching a narrow bridge signified by this sign?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Narrowing hourglass road -->
        <path d="M 28 75 L 38 60 L 38 48 L 28 35 M 72 75 L 62 60 L 62 48 L 72 35" stroke="#0f172a" stroke-width="4.5" fill="none"/>
      </svg>
    `,
    options: [
      'Overtaking is strictly prohibited; yield to oncoming vehicles already on the bridge',
      'Overtake quickly before the bridge begins',
      'Reverse back to find a detour',
      'Stop on the bridge to admire scenery'
    ],
    correctIndex: 0,
    explanation: 'When approaching a narrow bridge, width is restricted to single-lane or tight passing. Under Indian traffic regulations, overtaking on bridges is prohibited, and if an oncoming vehicle has already entered, you must yield.',
    ruleCitation: 'Regulation 9(d), Rules of the Road Regulations 1989'
  },
  {
    id: 'CAUTIONARY_16_STEEP_DESCENT',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'STEEP DESCENT (Ghat / Downhill Slope) Sign',
    question: 'What is the correct vehicle transmission practice on a steep downhill gradient?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Downward triangle ramp with car -->
        <polygon points="26,72 74,72 26,45" fill="#0f172a"/>
      </svg>
    `,
    options: [
      'Shift into Neutral (N) or hold clutch depressed to save fuel',
      'Select a lower gear (1st or 2nd) to utilize engine braking and avoid brake fade',
      'Turn off engine and coast downhill silently',
      'Keep handbrake partially engaged during descent'
    ],
    correctIndex: 1,
    explanation: 'Coasting in neutral or with clutch depressed on steep descents removes engine braking, causing brake pads to overheat and catastrophically fail (brake fade). Drivers must engage the same lower gear used to climb the hill.',
    ruleCitation: 'Standard Defensive Driving Guidelines & Parivahan RTO Manual'
  },
  {
    id: 'CAUTIONARY_17_MEN_AT_WORK',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'MEN AT WORK / ROAD WORK Sign',
    question: 'What does this worker silhouette with a shovel warn drivers of?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Worker with shovel -->
        <circle cx="58" cy="40" r="4" fill="#0f172a"/>
        <path d="M 56 46 L 46 58 L 38 68 M 50 54 L 38 58 L 32 72 M 52 50 L 56 68 L 62 76" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
        <line x1="30" y1="74" x2="42" y2="60" stroke="#0f172a" stroke-width="2.5"/>
      </svg>
    `,
    options: [
      'Agricultural farmland entrance',
      'Road construction or utility repairs ahead; slow down and stay alert for road workers and machinery',
      'Pedestrian sports stadium ahead',
      'Archaeological monument excavation'
    ],
    correctIndex: 1,
    explanation: 'Warns of road repair, resurfacing, or excavation ahead. Loose gravel, construction equipment, barriers, and human workers may occupy lanes. Speed must be drastically reduced.',
    ruleCitation: 'IRC:SP:55-2014 Safety in Road Construction Zones'
  },
  {
    id: 'CAUTIONARY_18_UNGUARDED_RAILWAY',
    category: 'CAUTIONARY',
    categoryLabel: '⚠️ Cautionary Warning Sign',
    title: 'UNGUARDED RAILWAY CROSSING Sign',
    question: 'Under Section 131 of the Motor Vehicles Act, what must a driver do at an unguarded railway crossing?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
        <!-- Steam Locomotive Silhouette -->
        <rect x="30" y="52" width="40" height="20" rx="3" fill="#0f172a"/>
        <circle cx="40" cy="74" r="5" fill="#0f172a"/>
        <circle cx="60" cy="74" r="5" fill="#0f172a"/>
        <rect x="52" y="42" width="16" height="12" fill="#0f172a"/>
      </svg>
    `,
    options: [
      'Honk continuously and cross as fast as possible without stopping',
      'Stop the vehicle, look both ways along the track, listen for approaching train, and proceed only when clear',
      'Cross only if other vehicles are also crossing',
      'Wait for 15 minutes before deciding to cross'
    ],
    correctIndex: 1,
    explanation: 'Section 131 of the Motor Vehicles Act mandates that the driver of every motor vehicle must stop the vehicle before an unguarded level crossing, look left and right down the tracks, and listen for train whistles or engine sounds before crossing.',
    ruleCitation: 'Section 131, Motor Vehicles Act 1988'
  },

  // =========================================================================
  // 3. RULES OF THE ROAD & RIGHT OF WAY (MVA / Road Regulations)
  // =========================================================================
  {
    id: 'RULES_19_LEFT_HAND_TRAFFIC',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Standard Side of Driving in India',
    question: 'On which side of the roadway must a motor vehicle be driven in India according to the Rules of the Road?',
    signSvg: null,
    options: [
      'On the left side of the road, allowing oncoming traffic to pass on the right',
      'On the right side of the road, following North American standards',
      'In the center of the road whenever road markings are absent',
      'On whichever lane has fewer potholes'
    ],
    correctIndex: 0,
    explanation: 'India is a Left-Hand Traffic (LHT) country. Regulation 2 of the Rules of the Road Regulations 1989 requires drivers to keep to the left side of the road and allow all overtaking vehicles to pass on their right.',
    ruleCitation: 'Regulation 2, Rules of the Road Regulations 1989'
  },
  {
    id: 'RULES_20_OVERTAKING_LEFT',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Overtaking from the Left Side',
    question: 'Under what specific legal circumstance is overtaking a vehicle from the LEFT permitted in India?',
    signSvg: null,
    options: [
      'Whenever the vehicle ahead is moving slower than the speed limit',
      'When the driver of the vehicle ahead has signaled their intention to turn right and moved to the road center',
      'Overtaking on the left is permitted at all times on two-lane roads',
      'Whenever flashing your headlights three times'
    ],
    correctIndex: 1,
    explanation: 'Regulation 5 states that overtaking is normally done strictly on the right. The sole exception is when the vehicle ahead has signaled right and taken up a position in the center to turn right, permitting following traffic to pass on its left.',
    ruleCitation: 'Regulation 5, Rules of the Road Regulations 1989'
  },
  {
    id: 'RULES_21_EMERGENCY_VEHICLES',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Emergency Vehicles Priority',
    question: 'What is a driver legally obligated to do when an ambulance or fire brigade vehicle approaches with siren/flashers?',
    signSvg: null,
    options: [
      'Speed up to clear the road ahead of them',
      'Immediately draw to the side of the road, stop if necessary, and afford free passage',
      'Maintain speed and follow closely behind to take advantage of the cleared lane',
      'Sound horn to alert other drivers'
    ],
    correctIndex: 1,
    explanation: 'Section 194E of the MVA mandates that every driver must immediately steer to the side of the road and give clear passage to emergency vehicles (ambulance, fire service). Failing to do so attracts a fine of ₹10,000 and up to 6 months imprisonment.',
    ruleCitation: 'Section 194E, Motor Vehicles (Amendment) Act 2019'
  },
  {
    id: 'RULES_22_FLASHING_AMBER',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Flashing Amber (Yellow) Traffic Light',
    question: 'What does a flashing AMBER (yellow) traffic signal at an intersection instruct a driver to do?',
    signSvg: `
      <svg viewBox="0 0 100 100" class="sign-svg">
        <rect x="34" y="10" width="32" height="80" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3"/>
        <circle cx="50" cy="28" r="10" fill="#334155"/>
        <circle cx="50" cy="50" r="10" fill="#f59e0b" stroke="#fef08a" stroke-width="2"/>
        <circle cx="50" cy="72" r="10" fill="#334155"/>
      </svg>
    `,
    options: [
      'Stop and wait for the signal to turn green',
      'Slow down, look in all directions for cross traffic and pedestrians, and proceed with caution',
      'Speed through the intersection before the red signal appears',
      'The traffic signal is permanently broken; ignore it'
    ],
    correctIndex: 1,
    explanation: 'A flashing amber signal indicates that the automated signal cycle is standby/late night mode. Drivers must slow down, look both ways, yield to any cross traffic already entering, and proceed only with extreme caution.',
    ruleCitation: 'IRC:93-1985 Guidelines on Traffic Signals'
  },
  {
    id: 'RULES_23_FREE_LEFT_TURN',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Free Left Turn Rule in India',
    question: 'Can you automatically make a left turn at an Indian road junction when the traffic signal is RED?',
    signSvg: null,
    options: [
      'Yes, free left turns are always permitted anywhere in India',
      'Only if there is an explicit sign or green left-turn arrow indicating "Free Left Turn", otherwise you must wait',
      'Yes, provided you honk continuously while turning',
      'Only after 10:00 PM at night'
    ],
    correctIndex: 1,
    explanation: 'Contrary to widespread misconception, a red signal applies to all directions unless an unobstructed dedicated left turn slip road or a green directional arrow sign explicitly permits a Free Left Turn. Turning left on red without permission is jumping a red light.',
    ruleCitation: 'IRC:93 & State Motor Vehicle Traffic Rules'
  },
  {
    id: 'RULES_24_ZEBRA_CROSSING_STOP_LINE',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Stop Line & Pedestrian Crossing',
    question: 'Where must a vehicle stop when a red signal or pedestrian is crossing at an intersection?',
    signSvg: null,
    options: [
      'On top of the zebra crossing stripes',
      'Completely behind the solid white Stop Line painted before the zebra crossing',
      'In the center of the intersection',
      'Past the traffic light post'
    ],
    correctIndex: 1,
    explanation: 'The solid white transverse line painted before a zebra crossing is the Stop Line. Vehicles must stop completely behind this line. Stopping on top of the zebra crossing obstructs pedestrians and constitutes a stop-line violation.',
    ruleCitation: 'Regulation 15, Rules of the Road Regulations 1989'
  },
  {
    id: 'RULES_25_HIGH_BEAM_PROHIBITION',
    category: 'RULES_OF_ROAD',
    categoryLabel: '🚗 Fundamental Rules of the Road',
    title: 'Use of High Beam Headlights',
    question: 'When is a driver legally required to switch from HIGH BEAM to LOW BEAM headlights at night?',
    signSvg: null,
    options: [
      'When following another vehicle or when an oncoming vehicle approaches within 200m on city roads',
      'Only when driving inside long tunnels',
      'High beams are never restricted on public roads',
      'Only when stopped at a police checkpoint'
    ],
    correctIndex: 0,
    explanation: 'Using high beams in illuminated urban areas or when facing oncoming traffic causes glare and temporary blindness, leading to fatal crashes. High beams must be dipped to low beams within 200m of oncoming vehicles.',
    ruleCitation: 'Rule 105, Central Motor Vehicles Rules 1989'
  },

  // =========================================================================
  // 4. PENALTIES, SAFETY LAWS & MOTOR VEHICLES ACT (MVA 2019)
  // =========================================================================
  {
    id: 'PENALTIES_26_BAC_LIMIT',
    category: 'PENALTIES',
    categoryLabel: '⚖️ Motor Vehicles Act 2019',
    title: 'Legal Blood Alcohol Content (BAC) Limit',
    question: 'Under Section 185 of the Motor Vehicles Act, what is the maximum permissible Blood Alcohol Concentration (BAC)?',
    signSvg: null,
    options: [
      'Zero is safest; legally up to 30 mg of alcohol per 100 ml of blood',
      'Up to 80 mg of alcohol per 100 ml of blood',
      'Up to 150 mg of alcohol per 100 ml of blood',
      'Any amount is legal as long as the driver is not visibly staggering'
    ],
    correctIndex: 0,
    explanation: 'Section 185 MVA specifies that driving with blood alcohol exceeding 30 mg per 100 ml (detected by breathalyzer) is punishable with imprisonment up to 6 months and/or fine up to ₹10,000 for the first offense; subsequent offenses carry up to 2 years imprisonment and ₹15,000 fine.',
    ruleCitation: 'Section 185, Motor Vehicles (Amendment) Act 2019'
  },
  {
    id: 'PENALTIES_27_SEATBELT_LAW',
    category: 'PENALTIES',
    categoryLabel: '⚖️ Motor Vehicles Act 2019',
    title: 'Mandatory Seatbelt Regulations',
    question: 'Who is legally mandated to wear a safety seatbelt in a motor vehicle under Section 194B MVA?',
    signSvg: null,
    options: [
      'Only commercial taxi drivers',
      'Driver and all front-facing seat occupants (both front and rear passengers)',
      'Only the driver on expressways',
      'Only children under the age of 10'
    ],
    correctIndex: 1,
    explanation: 'Under Section 194B of the Motor Vehicles (Amendment) Act 2019 and Rule 125(1) CMVR, the driver and all passengers occupying front-facing seats must wear seatbelts. Violation attracts a fine of ₹1,000 per unbuckled occupant.',
    ruleCitation: 'Section 194B, Motor Vehicles Act & Rule 125(1) CMVR'
  },
  {
    id: 'PENALTIES_28_MOBILE_PHONE_DRIVING',
    category: 'PENALTIES',
    categoryLabel: '⚖️ Motor Vehicles Act 2019',
    title: 'Mobile Phone Usage While Driving',
    question: 'What is the law regarding using handheld mobile phones while operating a vehicle in India?',
    signSvg: null,
    options: [
      'Holding or speaking on a mobile phone while driving is strictly prohibited; mobile can only be used hands-free for navigation in a dashboard holder',
      'Permitted as long as you drive below 40 km/h in the left lane',
      'Allowed for sending brief text messages at traffic stops',
      'Permitted if using earphones on one ear only'
    ],
    correctIndex: 0,
    explanation: 'Holding or operating a mobile phone while driving constitutes dangerous driving under Section 184(c) MVA, carrying fines up to ₹5,000 and licence suspension. Handheld calls even at red traffic lights are illegal.',
    ruleCitation: 'Section 184(c), Motor Vehicles (Amendment) Act 2019'
  },
  {
    id: 'PENALTIES_29_RED_LIGHT_JUMPING',
    category: 'PENALTIES',
    categoryLabel: '⚖️ Motor Vehicles Act 2019',
    title: 'Red Light Jumping Penalty',
    question: 'What is the penalty for jumping a red traffic light under the amended Motor Vehicles Act?',
    signSvg: null,
    options: [
      '₹100 token warning fine',
      'Fine from ₹1,000 up to ₹5,000 and driver licence suspension for 3 months',
      'Vehicle permanently confiscated',
      'No penalty if no crash occurred'
    ],
    correctIndex: 1,
    explanation: 'Disobeying a red traffic light is classified as dangerous driving under Section 184 MVA. It carries a fine between ₹1,000 and ₹5,000, 3 months driving licence suspension, and possible driver refresher training.',
    ruleCitation: 'Section 184 & 206(4), Motor Vehicles (Amendment) Act 2019'
  },
  {
    id: 'PENALTIES_30_DOCUMENT_CHECK',
    category: 'PENALTIES',
    categoryLabel: '⚖️ Motor Vehicles Act 2019',
    title: 'Mandatory Driving Documents',
    question: 'Which valid documents must a driver carry or present electronically via DigiLocker / mParivahan?',
    signSvg: null,
    options: [
      'Only the vehicle purchase invoice and Aadhaar card',
      'Driving Licence (DL), Registration Certificate (RC), Valid Insurance Certificate, and Pollution Under Control (PUC) Certificate',
      'Vehicle fuel receipt and voter ID card',
      'Only the bank loan hypothecation papers'
    ],
    correctIndex: 1,
    explanation: 'Every driver must produce: 1) Valid Driving Licence, 2) Registration Certificate (RC), 3) Third-Party or Comprehensive Insurance, and 4) Valid PUC Certificate. Under Rule 139 CMVR, digital versions on DigiLocker or mParivahan apps have legal parity with original physical documents.',
    ruleCitation: 'Section 130 MVA & Rule 139 Central Motor Vehicles Rules'
  }
];

class IndianTrafficRulesEngine {
  constructor() {
    this.currentCategory = 'ALL';
    this.currentIndex = 0;
    this.cards = [...FLASHCARDS_DATA];
    this.userAnswers = new Map(); // cardId -> { selectedIndex, isCorrect, reviewed }
    this.mode = 'FLASHCARD'; // 'FLASHCARD' (flip) or 'QUIZ' (multiple choice test)
    this.isFlipped = false;
  }

  setCategory(category) {
    this.currentCategory = category || 'ALL';
    if (this.currentCategory === 'ALL') {
      this.cards = [...FLASHCARDS_DATA];
    } else {
      this.cards = FLASHCARDS_DATA.filter((c) => c.category === this.currentCategory);
    }
    this.currentIndex = 0;
    this.isFlipped = false;
  }

  setMode(mode) {
    this.mode = mode === 'QUIZ' ? 'QUIZ' : 'FLASHCARD';
    this.isFlipped = false;
  }

  getCurrentCard() {
    if (this.cards.length === 0) return null;
    return this.cards[this.currentIndex];
  }

  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.isFlipped = false;
    }
    return this.getCurrentCard();
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
    }
    return this.getCurrentCard();
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
    return this.isFlipped;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    this.currentIndex = 0;
    this.isFlipped = false;
    return this.getCurrentCard();
  }

  submitAnswer(cardId, optionIndex) {
    const card = this.cards.find((c) => c.id === cardId) || this.getCurrentCard();
    if (!card) return null;

    const isCorrect = optionIndex === card.correctIndex;
    this.userAnswers.set(card.id, {
      cardId: card.id,
      selectedIndex: optionIndex,
      isCorrect,
      timestamp: performance.now(),
    });

    return {
      isCorrect,
      correctIndex: card.correctIndex,
      explanation: card.explanation,
      citation: card.ruleCitation,
    };
  }

  getAnswer(cardId) {
    return this.userAnswers.get(cardId) || null;
  }

  getScoreSummary() {
    let correct = 0;
    let answered = 0;
    for (const record of this.userAnswers.values()) {
      answered++;
      if (record.isCorrect) correct++;
    }
    const total = this.cards.length;
    const attemptedPct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const overallPct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const scorePct = attemptedPct; // Accuracy on questions attempted
    const isPassing = scorePct >= 75; // Official RTO benchmark (75%)

    let grade = 'F';
    let verdict = 'NEEDS IMPROVEMENT';
    if (answered === 0) {
      grade = 'PENDING';
      verdict = 'TEST PENDING / CLICK TO START';
    } else if (scorePct >= 90) {
      grade = 'A+';
      verdict = 'OUTSTANDING / RTO TEST CLEARED';
    } else if (scorePct >= 80) {
      grade = 'A';
      verdict = 'COMPLIANT / LICENCE ELIGIBLE';
    } else if (scorePct >= 75) {
      grade = 'B+';
      verdict = 'QUALIFIED (PARIVAHAN PASS)';
    } else {
      grade = 'FAIL';
      verdict = 'RETEST RECOMMENDED (PASS IS 75%)';
    }

    return {
      answered,
      correct,
      total,
      scorePct,
      attemptedPct,
      overallPct,
      isPassing,
      grade,
      verdict,
    };
  }

  getItemizedReview() {
    return FLASHCARDS_DATA.map((card, idx) => {
      const ans = this.userAnswers.get(card.id);
      return {
        index: idx + 1,
        id: card.id,
        category: card.category,
        categoryLabel: card.categoryLabel,
        title: card.title,
        question: card.question,
        signSvg: card.signSvg,
        citation: card.ruleCitation,
        explanation: card.explanation,
        options: card.options,
        correctIndex: card.correctIndex,
        correctAnswerText: card.options[card.correctIndex],
        candidateAnswerText: ans ? card.options[ans.selectedIndex] : 'Not Yet Attempted',
        isAnswered: Boolean(ans),
        isCorrect: ans ? ans.isCorrect : false,
      };
    });
  }

  reset() {
    this.currentIndex = 0;
    this.isFlipped = false;
    this.userAnswers.clear();
  }
}

export const indianTrafficRules = new IndianTrafficRulesEngine();

