import React from 'react';
import { 
  MapPin, 
  Thermometer, 
  Droplets, 
  Wind, 
  CloudRain, 
  Scan, 
  CloudSun, 
  Bot, 
  ShieldAlert, 
  Activity, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import { calculateClimateRisk } from '../utils/climateCalculator';

export default function DashboardPage({ 
  weather, 
  location, 
  recentScans, 
  alerts, 
  setActiveTab,
  onRefresh
}) {
  const climateRisk = calculateClimateRisk(weather);
  const healthScore = 78; // Demo baseline crop health score

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* COMMAND CENTER HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl glass-panel border border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold tracking-wide uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Field Command Center
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">AgriGuard Operational Overview</h1>
          <p className="text-xs sm:text-sm text-slate-400">Real-time telemetry, micro-climate metrics & crop health risks</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Location Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-white truncate max-w-[130px]">{location.city}</div>
              <div className="text-[10px] text-slate-400">{location.source || 'GPS Connected'}</div>
            </div>
          </div>

          {/* Refresh Control */}
          <button
            onClick={onRefresh}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Refresh Field Telemetry"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Scan CTA */}
          <button
            onClick={() => setActiveTab('scanner')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <Scan className="w-4 h-4" />
            <span>New Crop Scan</span>
          </button>
        </div>
      </div>

      {/* TOP METRICS & RISK GAUGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Crop Health Score Radial Gauge */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-400" /> Crop Health Score
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Good</span>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400 transition-all duration-1000 ease-out"
                  strokeDasharray={`${healthScore}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-extrabold text-white font-outfit">{healthScore}</span>
                <span className="text-[10px] text-slate-400 font-medium">/ 100 Score</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center">
            Overall field crop vigor index based on recent scans and thermal stress parameters.
          </p>
        </div>

        {/* Metric 2: Disease Vulnerability Risk */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" /> Disease Pressure
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Moderate</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Fungal Incubation Risk</span>
                <span className="font-bold text-amber-400">{climateRisk.fungalRisk.score}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${climateRisk.fungalRisk.score}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Bacterial Blight Index</span>
                <span className="font-bold text-emerald-400">32%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '32%' }} />
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            High leaf humidity is accelerating fungal spore germination.
          </p>
        </div>

        {/* Metric 3: Micro-Climate Risk Index */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <CloudSun className="w-4 h-4 text-cyan-400" /> Climate Risk Index
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
              {climateRisk.overallRisk}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400">Rain Wash-Off</span>
              <span className="font-bold text-cyan-400">{climateRisk.rainRisk.score}%</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400">Wind Spray Drift</span>
              <span className="font-bold text-emerald-400">{climateRisk.windRisk.score}%</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            Rain expected in afternoon hours. Avoid foliar chemical application.
          </p>
        </div>

        {/* Metric 4: Actionable Spraying Window */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between bg-gradient-to-b from-emerald-950/40 to-slate-900">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Spraying Window
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Recommended</span>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-slate-400">Next Optimal Window</div>
            <div className="text-sm font-bold text-white leading-snug">
              {climateRisk.optimalSprayWindow}
            </div>
          </div>

          <button
            onClick={() => setActiveTab('climate')}
            className="w-full py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
          >
            <span>View Climate Forecast</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* WEATHER SUMMARY BAR */}
      <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CloudSun className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-lg text-white">Live Field Weather Telemetry</h3>
          </div>
          <span className="text-xs text-slate-400">Updated: {weather.current?.updatedAt || 'Just now'}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <Thermometer className="w-3.5 h-3.5 text-amber-400" /> Temp
            </div>
            <div className="text-lg font-bold text-white">{weather.current?.temp}°C</div>
            <div className="text-[10px] text-slate-500">Feels like {weather.current?.feelsLike}°C</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <Droplets className="w-3.5 h-3.5 text-cyan-400" /> Humidity
            </div>
            <div className="text-lg font-bold text-white">{weather.current?.humidity}%</div>
            <div className="text-[10px] text-slate-500">Dew Point {weather.current?.dewPoint}°C</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <CloudRain className="w-3.5 h-3.5 text-blue-400" /> Rain Prob
            </div>
            <div className="text-lg font-bold text-white">{weather.current?.rainProbability}%</div>
            <div className="text-[10px] text-slate-500">Showers expected</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <Wind className="w-3.5 h-3.5 text-emerald-400" /> Wind
            </div>
            <div className="text-lg font-bold text-white">{weather.current?.windSpeed} km/h</div>
            <div className="text-[10px] text-slate-500">Dir: {weather.current?.windDirection}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-purple-400" /> UV Index
            </div>
            <div className="text-lg font-bold text-white">{weather.current?.uvIndex}</div>
            <div className="text-[10px] text-slate-500">Moderate sun</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Barometer</div>
            <div className="text-lg font-bold text-white">{weather.current?.pressure} hPa</div>
            <div className="text-[10px] text-slate-500">Stable pressure</div>
          </div>
        </div>
      </div>

      {/* LOWER SECTION: RECENT SCANS & ACTIVE ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Recent Scan Log Feed */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scan className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-lg text-white">Recent Leaf Scans</h3>
            </div>
            <button
              onClick={() => setActiveTab('history')}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {recentScans.map((scan) => (
              <div 
                key={scan.id} 
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <img 
                    src={scan.imageUrl} 
                    alt={scan.crop}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700 shrink-0" 
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm text-white truncate">{scan.crop}</h4>
                    <p className="text-xs text-amber-400 font-medium truncate">{scan.issue}</p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span>{scan.date}</span>
                      <span>•</span>
                      <span>Confidence: {scan.confidence}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                    scan.riskLevel === 'High' 
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' 
                      : scan.riskLevel === 'Moderate'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {scan.riskLevel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActiveTab('scanner')}
            className="w-full py-3 rounded-2xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Scan className="w-4 h-4" />
            <span>Scan Another Leaf Now</span>
          </button>
        </div>

        {/* Right Column: Active Alerts Feed & Quick Actions */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Active Alerts Card */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <h3 className="font-bold text-lg text-white">Active Alerts</h3>
              </div>
              <button
                onClick={() => setActiveTab('alerts')}
                className="text-xs text-rose-400 hover:text-rose-300 font-medium"
              >
                Alert Center ({alerts.length})
              </button>
            </div>

            <div className="space-y-3">
              {alerts.slice(0, 2).map((alert) => (
                <div 
                  key={alert.id} 
                  className="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/20 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                      {alert.title}
                    </span>
                    <span className="text-[10px] text-slate-400">{alert.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Command Shortcuts */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider text-xs">Quick Actions</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setActiveTab('scanner')}
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left space-y-2 group transition-colors"
              >
                <Scan className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-xs text-white">Crop Scanner</div>
                <div className="text-[10px] text-slate-400">Scan leaf for disease</div>
              </button>

              <button
                onClick={() => setActiveTab('climate')}
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left space-y-2 group transition-colors"
              >
                <CloudSun className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-xs text-white">Climate Radar</div>
                <div className="text-[10px] text-slate-400">Check rain & spray window</div>
              </button>

              <button
                onClick={() => setActiveTab('assistant')}
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left space-y-2 group transition-colors"
              >
                <Bot className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-xs text-white">Ask AgriGuard</div>
                <div className="text-[10px] text-slate-400">Chat with AI assistant</div>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left space-y-2 group transition-colors"
              >
                <Clock className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-xs text-white">Scan History</div>
                <div className="text-[10px] text-slate-400">View past reports</div>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
