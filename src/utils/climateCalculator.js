/**
 * Climate Risk & Agronomic Timing Calculator
 * Computes disease pressure index, spraying windows, and weather risk metrics.
 */

export const calculateClimateRisk = (weather) => {
  if (!weather || !weather.current) {
    return {
      overallRisk: 'Moderate',
      overallScore: 62,
      rainRisk: { score: 45, level: 'Moderate', label: 'Moderate Wash-Off Risk' },
      heatRisk: { score: 30, level: 'Low', label: 'Mild Evaporation Risk' },
      fungalRisk: { score: 75, level: 'High', label: 'High Spore Incubation Risk' },
      windRisk: { score: 25, level: 'Low', label: 'Favorable Spray Drift Range' },
      optimalSprayWindow: 'Tomorrow 06:00 AM - 09:00 AM'
    };
  }

  const { temp, humidity, rainProbability, windSpeed } = weather.current;

  // 1. Rain Washoff Risk Score (0 - 100)
  const rainScore = Math.min(Math.round(rainProbability * 1.1), 100);
  let rainLevel = 'Low';
  if (rainScore > 65) rainLevel = 'High';
  else if (rainScore > 35) rainLevel = 'Moderate';

  // 2. Heat Stress Risk Score (0 - 100)
  let heatScore = 15;
  if (temp > 35) heatScore = 90;
  else if (temp > 30) heatScore = 65;
  else if (temp > 25) heatScore = 35;
  let heatLevel = heatScore > 60 ? 'High' : heatScore > 30 ? 'Moderate' : 'Low';

  // 3. Humidity & Fungal Pressure Index
  // Fungal spores thrive in humidity >75% and temperatures between 18°C - 28°C
  let fungalScore = Math.round((humidity / 100) * 70);
  if (temp >= 18 && temp <= 28) {
    fungalScore += 25;
  }
  fungalScore = Math.min(fungalScore, 98);
  let fungalLevel = fungalScore > 70 ? 'High' : fungalScore > 40 ? 'Moderate' : 'Low';

  // 4. Wind Drift Risk
  // Spraying unsafe if wind > 20 km/h
  let windScore = Math.min(Math.round((windSpeed / 30) * 100), 100);
  let windLevel = windScore > 65 ? 'High' : windScore > 35 ? 'Moderate' : 'Low';

  // Overall Index Weighted Avg
  const overallScore = Math.round(
    rainScore * 0.35 + fungalScore * 0.35 + heatScore * 0.15 + windScore * 0.15
  );
  let overallRisk = overallScore > 65 ? 'High' : overallScore > 35 ? 'Moderate' : 'Low';

  // Determine Spray Timing Recommendation
  let sprayWindow = 'Today 17:30 - 19:30 (Calm Evening)';
  if (rainProbability > 50) {
    sprayWindow = 'Postpone Spraying (High Rain Washoff Expected)';
  } else if (windSpeed > 18) {
    sprayWindow = 'Wait for Wind Speed to drop below 12 km/h';
  } else if (temp > 30) {
    sprayWindow = 'Tomorrow Morning 06:00 - 08:30 AM (Avoid Peak Heat)';
  }

  return {
    overallRisk,
    overallScore,
    rainRisk: { score: rainScore, level: rainLevel, label: `${rainProbability}% Rain Wash-Off Risk` },
    heatRisk: { score: heatScore, level: heatLevel, label: `${temp}°C Thermal Evaporation` },
    fungalRisk: { score: fungalScore, level: fungalLevel, label: `${humidity}% Humidity Fungal Index` },
    windRisk: { score: windScore, level: windLevel, label: `${windSpeed} km/h Wind Drift` },
    optimalSprayWindow: sprayWindow
  };
};
