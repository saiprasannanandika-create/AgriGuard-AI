/**
 * AgriPulse AI Agronomic Knowledge Base
 * Contains detailed pathogen data, climate trigger thresholds,
 * symptom patterns, and safe prevention protocols.
 */

export const DEMO_SAMPLES = [
  {
    id: 'sample-1',
    name: 'Tomato Leaf - Early Blight',
    crop: 'Tomato (Solanum lycopersicum)',
    disease: 'Early Blight (Alternaria solani)',
    confidence: 92,
    riskLevel: 'Moderate',
    riskColor: 'amber',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19657?auto=format&fit=crop&q=80&w=600',
    fallbackPattern: 'concentric-spots',
    observedIndicators: [
      'Target-like concentric ring brown lesions on lower mature leaves',
      'Chlorotic yellow halos surrounding necrotic spot margins',
      'Mild leaf curling and lower canopy premature defoliation'
    ],
    recommendedSteps: [
      'Prune affected lower branches up to 30 cm from soil line to increase air circulation',
      'Apply drip or furrow irrigation early morning; avoid overhead foliage wetting',
      'Mulch soil around tomato plant base to prevent rain-splash spore transmission'
    ],
    preventionAdvice: [
      'Maintain 3-year crop rotation away from Solanaceae family (peppers, potatoes, eggplant)',
      'Utilize pathogen-free certified seeds and resistant cultivars (e.g. Mountain Magic)',
      'Ensure adequate potassium and calcium soil fertility to boost epidermal wall resistance'
    ],
    weatherConsiderations: 'Upcoming high humidity (>80%) and moderate temps (22-26°C) present high spore incubation risk. Delay foliar copper/bio-fungicide spraying if rain is expected within 3 hours.'
  },
  {
    id: 'sample-2',
    name: 'Corn Leaf - Common Rust',
    crop: 'Maize / Corn (Zea mays)',
    disease: 'Common Rust (Puccinia sorghi)',
    confidence: 88,
    riskLevel: 'High',
    riskColor: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600',
    fallbackPattern: 'rust-pustules',
    observedIndicators: [
      'Elongated cinnamon-brown to golden reddish-brown pustules (uredinia) on upper leaf surfaces',
      'Powdery rusty residue released upon leaf friction',
      'Cluster lesions leading to premature leaf tissue necrosis and reduced photosynthesis'
    ],
    recommendedSteps: [
      'Scout field boundaries every 3 days; monitor tassel-stage vulnerability',
      'Avoid high nitrogen top-dressing which produces succulent rust-susceptible foliage',
      'Destruct heavily infected crop residue post-harvest through clean tillage'
    ],
    preventionAdvice: [
      'Plant rust-resistant hybrid corn varieties suited for humid micro-climates',
      'Space rows at 75cm+ to maximize sunlight penetration and foliage canopy drying',
      'Monitor wind direction during spore dispersal periods'
    ],
    weatherConsiderations: 'Cool temperatures (16-23°C) combined with high dew hours significantly accelerate fungal spread. Spraying is recommended during clear morning weather windows.'
  },
  {
    id: 'sample-3',
    name: 'Potato Leaf - Late Blight',
    crop: 'Potato (Solanum tuberosum)',
    disease: 'Late Blight (Phytophthora infestans)',
    confidence: 95,
    riskLevel: 'High',
    riskColor: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600',
    fallbackPattern: 'blight-water-spots',
    observedIndicators: [
      'Large dark irregular water-soaked spots with pale light green margins on leaf tips',
      'White downy fungal growth visible on leaf undersides during moist mornings',
      'Rapid stem blighting and characteristic foul foliage odor'
    ],
    recommendedSteps: [
      'Immediately isolate infected foliage and dispose outside the field boundaries',
      'Hill up soil around potato tubers to protect from down-washed sporangia',
      'Stop overhead sprinkler irrigation immediately'
    ],
    preventionAdvice: [
      'Plant certified disease-free seed tubers from verified seed producers',
      'Eliminate cull piles and volunteer potato plants near production fields',
      'Apply preventive bio-control or copper protectant prior to prolonged rainy spells'
    ],
    weatherConsiderations: 'CRITICAL ALERT: Continuous rain and relative humidity >90% forecasted. Spore sporangia germinate within 2 hours of free leaf moisture. Execute field drainage immediately.'
  },
  {
    id: 'sample-4',
    name: 'Rice Leaf - Bacterial Blight',
    crop: 'Paddy Rice (Oryza sativa)',
    disease: 'Bacterial Blight (Xanthomonas oryzae)',
    confidence: 90,
    riskLevel: 'High',
    riskColor: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=600',
    fallbackPattern: 'wavy-streaks',
    observedIndicators: [
      'Water-soaked to yellowish wavy lesions along leaf margins starting from leaf tips',
      'Lesions enlarge and dry up into straw-colored necrotic bands',
      'Bacterial ooze droplets visible on young leaf lesions during humid mornings'
    ],
    recommendedSteps: [
      'Maintain field water depth at optimal 3-5 cm; prevent floodwater runoff across fields',
      'Suspend nitrogen fertilizer application until leaf streak expansion ceases',
      'Drain paddy field temporarily to dry canopy and suppress bacterial multiplication'
    ],
    preventionAdvice: [
      'Utilize resistant rice cultivars (e.g. Xa21 gene line varieties)',
      'Clean equipment and boots when moving between paddy plots',
      'Balance N-P-K fertilization with adequate potassium and silica additions'
    ],
    weatherConsiderations: 'Strong storm winds (>25 km/h) create microscopic leaf abrasion wounds allowing bacterial entry. Post-storm crop monitoring is mandatory.'
  },
  {
    id: 'sample-5',
    name: 'Healthy Crop Foliage',
    crop: 'Wheat / Grain (Triticum aestivum)',
    disease: 'Healthy Crop (No Pathogen Detected)',
    confidence: 97,
    riskLevel: 'Low',
    riskColor: 'emerald',
    imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600',
    fallbackPattern: 'healthy-green',
    observedIndicators: [
      'Uniform deep green turgid foliage with optimal chlorophyll density',
      'Unblemished leaf blades without necrotic spots or pustule eruptions',
      'Strong erect stem structure and active root tip development'
    ],
    recommendedSteps: [
      'Continue current balanced irrigation and nutrient management schedule',
      'Perform weekly routine scouting at 5 random points across the field',
      'Record local micro-climate weather trends to anticipate seasonal pest emergence'
    ],
    preventionAdvice: [
      'Maintain beneficial insect buffer strips along field borders',
      'Soil test every season before sowing to maintain balanced micro-nutrients',
      'Log weather humidity trends for early disease warning'
    ],
    weatherConsiderations: 'Optimal current weather conditions. Sunshine and moderate wind foster healthy photosynthetic activity.'
  }
];

export const MOCK_WEATHER_DATA = {
  location: {
    city: 'Green Valley Agronomy Zone',
    region: 'Central River Delta',
    country: 'Agricultural District #4',
    lat: 14.5995,
    lon: 120.9842,
    elevation: '145m ASL'
  },
  current: {
    temp: 26.5,
    feelsLike: 28.2,
    condition: 'Partly Cloudy',
    icon: 'partly-cloudy',
    humidity: 78,
    rainProbability: 35,
    windSpeed: 12.4,
    windDirection: 'NE',
    uvIndex: 6,
    dewPoint: 21.8,
    pressure: 1012,
    updatedAt: 'Just now'
  },
  hourly: [
    { time: 'NOW', temp: 26.5, rain: 35, humidity: 78, wind: 12.4, condition: 'Partly Cloudy', sprayWindow: 'Caution' },
    { time: '12:00', temp: 28.0, rain: 45, humidity: 72, wind: 14.0, condition: 'Scattered Showers', sprayWindow: 'Unsafe' },
    { time: '15:00', temp: 27.2, rain: 60, humidity: 82, wind: 16.5, condition: 'Rain Likely', sprayWindow: 'Unsafe' },
    { time: '18:00', temp: 24.8, rain: 20, humidity: 85, wind: 9.8, condition: 'Overcast', sprayWindow: 'Caution' },
    { time: '21:00', temp: 23.0, rain: 10, humidity: 88, wind: 7.2, condition: 'Clear', sprayWindow: 'Optimal' },
    { time: '00:00', temp: 21.5, rain: 5, humidity: 90, wind: 6.0, condition: 'Clear Night', sprayWindow: 'Optimal' },
    { time: '06:00', temp: 22.0, rain: 10, humidity: 86, wind: 8.0, condition: 'Sunny Morning', sprayWindow: 'Optimal' },
    { time: '09:00', temp: 25.2, rain: 15, humidity: 75, wind: 10.5, condition: 'Sunny', sprayWindow: 'Optimal' }
  ],
  daily: [
    { day: 'Today', tempMax: 28, tempMin: 21, rainProb: 60, humidity: 78, wind: 16, condition: 'Scattered Rain', riskScore: 'Moderate' },
    { day: 'Tomorrow', tempMax: 29, tempMin: 20, rainProb: 15, humidity: 65, wind: 11, condition: 'Mostly Sunny', riskScore: 'Low' },
    { day: 'Day 3', tempMax: 31, tempMin: 22, rainProb: 25, humidity: 70, wind: 13, condition: 'Warm & Humid', riskScore: 'Moderate' },
    { day: 'Day 4', tempMax: 27, tempMin: 19, rainProb: 80, humidity: 88, wind: 22, condition: 'Thunderstorms', riskScore: 'High' }
  ]
};

export const MOCK_ALERTS = [
  {
    id: 'alert-101',
    title: 'Fungal Disease Pressure Spikes',
    category: 'Crop Risk',
    severity: 'High',
    time: '25 mins ago',
    message: 'High humidity (>82%) combined with 26°C temperatures creates optimal incubative conditions for Solanaceae leaf blights.',
    actionableAdvice: 'Scout lower mature leaf canopy. Postpone foliar spraying until evening drying period.',
    read: false
  },
  {
    id: 'alert-102',
    title: 'Rain Wash-Off Advisory',
    category: 'Weather Risk',
    severity: 'Moderate',
    time: '2 hours ago',
    message: 'Scattered rainfall expected between 14:00 and 16:00. Any chemical or bio-spray applied now risks 70%+ wash-off loss.',
    actionableAdvice: 'Delay crop treatment spraying until tomorrow early morning window (06:00 - 09:00).',
    read: false
  },
  {
    id: 'alert-103',
    title: 'Heat & Dew Stress Warning',
    category: 'Climate Warning',
    severity: 'Moderate',
    time: '5 hours ago',
    message: 'High morning dew duration predicted tomorrow. Prolonged wet foliage extends leaf rust germination.',
    actionableAdvice: 'Ensure crop row spacing allows airflow and early morning sun exposure.',
    read: true
  },
  {
    id: 'alert-104',
    title: 'Scouting Reminder: Tomato Field B',
    category: 'Monitoring',
    severity: 'Low',
    time: '1 day ago',
    message: 'Routine 7-day post-scan recheck due for Field Plot 4.',
    actionableAdvice: 'Perform 5-point leaf inspection and upload follow-up leaf scan.',
    read: true
  }
];

export const MOCK_SCAN_HISTORY = [
  {
    id: 'scan-801',
    date: '2026-08-10',
    time: '14:20',
    crop: 'Tomato (Solanum lycopersicum)',
    issue: 'Early Blight (Alternaria solani)',
    confidence: 92,
    riskLevel: 'Moderate',
    status: 'Monitored',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19657?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'scan-802',
    date: '2026-08-08',
    time: '09:15',
    crop: 'Maize / Corn',
    issue: 'Common Rust (Puccinia sorghi)',
    confidence: 88,
    riskLevel: 'High',
    status: 'Treated',
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'scan-803',
    date: '2026-08-03',
    time: '16:45',
    crop: 'Wheat',
    issue: 'Healthy Crop (No Pathogen)',
    confidence: 97,
    riskLevel: 'Low',
    status: 'Resolved',
    imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=400'
  }
];

export const FARMER_FAQ_PROMPTS = [
  "What is wrong with my crop?",
  "Should I monitor the crop today?",
  "How can I reduce disease risk?",
  "What weather risks should I watch?",
  "When should I recheck the crop?"
];
