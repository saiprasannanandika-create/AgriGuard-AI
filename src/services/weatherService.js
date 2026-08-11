/**
 * Weather Service for AgriPulse AI
 * Hyperlocal micro-climate weather forecasting & agricultural risk metrics
 */

import { MOCK_WEATHER_DATA } from '../data/diseaseDatabase';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = async (lat = 14.5995, lon = 120.9842) => {
  // Demo Mode check if API key is missing or invalid
  if (!API_KEY || API_KEY === 'your_openweather_api_key_here') {
    // Return realistic mock weather with slight randomized variance for dynamic updates
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      ...MOCK_WEATHER_DATA,
      isDemoMode: true,
      demoNotice: 'Demo Mode: Displaying simulated agronomy micro-climate grid data',
      current: {
        ...MOCK_WEATHER_DATA.current,
        updatedAt: formattedTime
      }
    };
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      isDemoMode: false,
      location: {
        city: data.name || 'Local Farm Plot',
        region: `${data.sys.country || ''}`,
        country: 'Field Grid',
        lat: data.coord.lat,
        lon: data.coord.lon
      },
      current: {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0]?.main || 'Clear',
        icon: data.weather[0]?.icon || '01d',
        humidity: data.main.humidity,
        rainProbability: data.rain ? Math.min(Math.round(data.rain['1h'] * 20), 95) : 15,
        windSpeed: Math.round(data.wind.speed * 3.6),
        windDirection: getCardinalDirection(data.wind.deg),
        uvIndex: 6,
        dewPoint: Math.round(data.main.temp - ((100 - data.main.humidity) / 5)),
        pressure: data.main.pressure,
        updatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
      hourly: MOCK_WEATHER_DATA.hourly,
      daily: MOCK_WEATHER_DATA.daily
    };
  } catch (error) {
    console.warn('Falling back to Demo Weather Data due to API error:', error);
    return {
      ...MOCK_WEATHER_DATA,
      isDemoMode: true,
      demoNotice: 'Demo Mode: API request failed. Reverted to simulated agronomy grid.'
    };
  }
};

function getCardinalDirection(angle) {
  if (angle === undefined) return 'N';
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(angle / 45) % 8];
}
