import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import DemoBanner from './components/common/DemoBanner';

// Pages
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ScannerPage from './pages/ScannerPage';
import ClimatePage from './pages/ClimatePage';
import AssistantPage from './pages/AssistantPage';
import AlertsPage from './pages/AlertsPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';

// Data & Services
import { MOCK_ALERTS, MOCK_SCAN_HISTORY } from './data/diseaseDatabase';
import { getCurrentLocation } from './services/locationService';
import { fetchWeatherData } from './services/weatherService';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [location, setLocation] = useState({
    city: 'Green Valley Agronomy Zone',
    region: 'Central Delta',
    lat: 14.5995,
    lon: 120.9842,
    source: 'Default Grid'
  });

  const [weather, setWeather] = useState({
    current: {
      temp: 26.5,
      feelsLike: 28.2,
      condition: 'Partly Cloudy',
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
      { time: '06:00', temp: 22.0, rain: 10, humidity: 86, wind: 8.0, condition: 'Sunny Morning', sprayWindow: 'Optimal' }
    ],
    daily: [
      { day: 'Today', tempMax: 28, tempMin: 21, rainProb: 60, humidity: 78, wind: 16, condition: 'Scattered Rain', riskScore: 'Moderate' },
      { day: 'Tomorrow', tempMax: 29, tempMin: 20, rainProb: 15, humidity: 65, wind: 11, condition: 'Mostly Sunny', riskScore: 'Low' },
      { day: 'Day 3', tempMax: 31, tempMin: 22, rainProb: 25, humidity: 70, wind: 13, condition: 'Warm & Humid', riskScore: 'Moderate' },
      { day: 'Day 4', tempMax: 27, tempMin: 19, rainProb: 80, humidity: 88, wind: 22, condition: 'Thunderstorms', riskScore: 'High' }
    ],
    isDemoMode: true
  });

  const [recentScans, setRecentScans] = useState(MOCK_SCAN_HISTORY);
  const [alerts, setAlerts] = useState(MOCK_ALERTS);
  const [selectedScanForChat, setSelectedScanForChat] = useState(null);

  // Initialize Location and Weather Telemetry
  useEffect(() => {
    async function loadTelemetry() {
      const loc = await getCurrentLocation();
      setLocation(loc);
      const wData = await fetchWeatherData(loc.lat, loc.lon);
      setWeather(wData);
    }
    loadTelemetry();
  }, []);

  const handleRefreshTelemetry = async () => {
    const loc = await getCurrentLocation();
    setLocation(loc);
    const wData = await fetchWeatherData(loc.lat, loc.lon);
    setWeather(wData);
  };

  const handleSaveScan = (newScan) => {
    const scanItem = {
      id: newScan.id || `scan-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      crop: newScan.crop,
      disease: newScan.disease,
      issue: newScan.disease,
      confidence: newScan.confidence,
      riskLevel: newScan.riskLevel,
      status: 'Analyzed',
      imageUrl: newScan.imageUrl,
      observedIndicators: newScan.observedIndicators,
      recommendedSteps: newScan.recommendedSteps
    };
    setRecentScans((prev) => [scanItem, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Demo Banner */}
      <DemoBanner />

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadAlertsCount={alerts.filter(a => !a.read).length}
        weatherLocation={location.city}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'landing' && (
          <LandingPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'dashboard' && (
          <DashboardPage
            weather={weather}
            location={location}
            recentScans={recentScans}
            alerts={alerts}
            setActiveTab={setActiveTab}
            onRefresh={handleRefreshTelemetry}
          />
        )}

        {activeTab === 'scanner' && (
          <ScannerPage
            weather={weather}
            setActiveTab={setActiveTab}
            onSaveScan={handleSaveScan}
            setSelectedScanForChat={setSelectedScanForChat}
          />
        )}

        {activeTab === 'climate' && (
          <ClimatePage
            weather={weather}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'assistant' && (
          <AssistantPage
            selectedScanForChat={selectedScanForChat}
            weather={weather}
          />
        )}

        {activeTab === 'alerts' && (
          <AlertsPage
            alerts={alerts}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'history' && (
          <HistoryPage
            scanHistory={recentScans}
            setActiveTab={setActiveTab}
            setSelectedScanForChat={setSelectedScanForChat}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Modern Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
