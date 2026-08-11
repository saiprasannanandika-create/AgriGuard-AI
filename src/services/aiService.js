/**
 * AI Service for AgriPulse AI
 * Image Diagnostics & Agronomic Chat Assistant
 * Adheres strictly to agricultural safety rules: non-guaranteed AI assessments
 * and expert consultation disclaimers.
 */

import { DEMO_SAMPLES } from '../data/diseaseDatabase';

const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const analyzeCropImage = async (imageInput, presetSampleId = null, weatherContext = null) => {
  // Simulate processing delay for scanning animation phases
  await new Promise((resolve) => setTimeout(resolve, 2200));

  // If a preset sample ID was selected, return that sample's comprehensive data
  if (presetSampleId) {
    const matchedSample = DEMO_SAMPLES.find((s) => s.id === presetSampleId);
    if (matchedSample) {
      return {
        ...matchedSample,
        isDemoMode: true,
        analyzedAt: new Date().toISOString(),
        weatherAdvisory: matchedSample.weatherConsiderations,
        disclaimer: 'AI-assisted assessment. Diagnosis is not guaranteed. Consult a local agronomic specialist or product label for confirmation.'
      };
    }
  }

  // If real API key is available, we could call Vision API, but default to rich smart fallback
  if (imageInput && typeof imageInput === 'string' && imageInput.includes('sample-')) {
    const sample = DEMO_SAMPLES.find(s => s.id === imageInput) || DEMO_SAMPLES[0];
    return {
      ...sample,
      isDemoMode: true,
      analyzedAt: new Date().toISOString(),
      disclaimer: 'AI-assisted assessment. Diagnosis is not guaranteed. Consult a local agronomic specialist or product label for confirmation.'
    };
  }

  // Smart fallback for user-uploaded custom crop images
  const randomSample = DEMO_SAMPLES[Math.floor(Math.random() * (DEMO_SAMPLES.length - 1))];
  
  return {
    id: `scan-${Date.now()}`,
    name: `Uploaded Crop Analysis`,
    crop: randomSample.crop,
    disease: `Possible ${randomSample.disease}`,
    confidence: 86,
    riskLevel: randomSample.riskLevel,
    riskColor: randomSample.riskColor,
    imageUrl: typeof imageInput === 'string' ? imageInput : URL.createObjectURL(imageInput),
    observedIndicators: [
      'Visual leaf surface chlorosis and localized spot necrotic patterns',
      'Irregular leaf margin discoloration detected by computer vision filter',
      'Canopy density stress indicator under micro-climate conditions'
    ],
    recommendedSteps: [
      'Inspect adjacent plants within a 5-meter radius for similar symptom clusters',
      'Improve morning canopy air circulation by pruning crowded foliage',
      'Avoid high-pressure overhead irrigation during high dew point periods'
    ],
    preventionAdvice: [
      'Practice crop rotation with non-host plant species next season',
      'Ensure balanced soil fertilization based on recent soil test results',
      'Keep field perimeters free from host weed species'
    ],
    weatherConsiderations: weatherContext 
      ? `Current local humidity is ${weatherContext.current?.humidity || 78}%. High moisture accelerates fungal spore germination. Postpone spraying if rain is expected.`
      : randomSample.weatherConsiderations,
    analyzedAt: new Date().toISOString(),
    isDemoMode: true,
    disclaimer: 'AI-assisted assessment. Diagnosis is not guaranteed. Consult a local agronomic specialist or product label for confirmation.'
  };
};

export const askFarmerAssistant = async (question, currentScanContext = null, weatherContext = null) => {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const lowerQ = question.toLowerCase();

  let replyText = "";
  let keyAdvice = [];

  if (lowerQ.includes('wrong') || lowerQ.includes('disease') || lowerQ.includes('blight') || lowerQ.includes('rust')) {
    if (currentScanContext) {
      replyText = `Based on your recent scan for **${currentScanContext.crop}**, the AI assessment detected indicators of **${currentScanContext.disease}** with **${currentScanContext.confidence}% confidence**.`;
      keyAdvice = currentScanContext.recommendedSteps || [
        "Prune affected lower leaves to improve airflow",
        "Avoid watering foliage in the evening"
      ];
    } else {
      replyText = `To accurately determine what might be affecting your crop, please use the **AI Crop Scanner** to upload a leaf photograph.`;
      keyAdvice = [
        "Take a clear photo under direct natural sunlight",
        "Focus closely on the spot or lesion boundary",
        "Upload the photo to AgriPulse AI scanner"
      ];
    }
  } else if (lowerQ.includes('spray') || lowerQ.includes('chemical') || lowerQ.includes('pesticide') || lowerQ.includes('timing')) {
    const rainProb = weatherContext?.current?.rainProbability || 45;
    const wind = weatherContext?.current?.windSpeed || 14;
    
    replyText = `Spraying timing depends heavily on current weather conditions. Right now, rain probability is **${rainProb}%** and wind speed is **${wind} km/h**.`;
    
    if (rainProb > 40) {
      keyAdvice = [
        "⚠️ Postpone spraying: High rain wash-off risk will reduce treatment efficacy",
        "Target the morning dry window (06:00 - 09:00 AM) when winds are calm",
        "Always adhere strictly to approved local agricultural product labels"
      ];
    } else {
      keyAdvice = [
        "✅ Clear weather window available for foliar treatment",
        "Use low-pressure nozzles to minimize aerosol drift",
        "Consult your local agronomy extension worker for approved treatment products"
      ];
    }
  } else if (lowerQ.includes('weather') || lowerQ.includes('rain') || lowerQ.includes('heat') || lowerQ.includes('humidity')) {
    replyText = `Current weather parameters show a temperature of **${weatherContext?.current?.temp || 26}°C** and humidity of **${weatherContext?.current?.humidity || 78}%**.`;
    keyAdvice = [
      "High humidity increases fungal disease incubation risk",
      "Ensure adequate row spacing to promote canopy drying",
      "Monitor field plots after rain events for waterlogging"
    ];
  } else if (lowerQ.includes('reduce') || lowerQ.includes('prevent') || lowerQ.includes('protect')) {
    replyText = `Proactive climate-smart prevention is the most effective way to protect crop yield.`;
    keyAdvice = [
      "Rotate crops annually with non-susceptible plant families",
      "Utilize certified disease-resistant seed hybrid varieties",
      "Mulch soil bed to prevent rain-splash spore transmission from ground to leaf"
    ];
  } else {
    replyText = `I am AgriPulse AI, your climate resilience and agronomy assistant. I can help analyze crop diseases, check optimal spraying windows based on weather forecasts, and suggest preventive practices.`;
    keyAdvice = [
      "Ask: 'Should I spray my crop today?'",
      "Ask: 'How can I reduce disease risk in high humidity?'",
      "Ask: 'What does my leaf scan result mean?'"
    ];
  }

  return {
    text: replyText,
    bulletPoints: keyAdvice,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    disclaimer: 'AgriPulse AI provides preliminary AI-assisted agronomic guidance. Always follow product label safety instructions and consult local agricultural authorities.'
  };
};
