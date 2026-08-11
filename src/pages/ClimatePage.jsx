import React, { useState } from 'react';
import { 
  CloudSun, 
  Thermometer, 
  Droplets, 
  Wind, 
  CloudRain, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  Info,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { calculateClimateRisk } from '../utils/climateCalculator';

export default function ClimatePage({ weather, setActiveTab }) {
  const [activeTimelineTab, setActiveTimelineTab] = useState('24h');
  const climateRisk = calculateClimateRisk(weather);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* PAGE HEADER */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <CloudSun className="w-4 h-4" /> Micro-Climate Risk Engine
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">Hyperlocal Climate Intelligence</h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Monitor rain wash-off risks, fungal dew pressure, and heat stress to pinpoint optimal spraying and fieldwork windows.
        </p>
      </div>

      {/* CROP CLIMATE RISK SCORECARD */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Field Telemetry Risk Index
            </div>
            <h2 className="text-2xl font-bold text-white font-outfit">Crop Climate Risk Radar</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-slate-400">Overall Vulnerability</div>
              <div className="text-xl font-extrabold text-amber-400">{climateRisk.overallRisk} ({climateRisk.overallScore}/100)</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 font-bold text-lg">
              {climateRisk.overallScore}
            </div>
          </div>
        </div>

        {/* 4 Risk Gauge Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Rain Risk */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <CloudRain className="w-4 h-4 text-blue-400" /> Rain Wash-Off Risk
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                {climateRisk.rainRisk.level}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white">{climateRisk.rainRisk.score}%</div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-blue-400 rounded-full" style={{ width: `${climateRisk.rainRisk.score}%` }} />
            </div>
            <p className="text-[11px] text-slate-400">{climateRisk.rainRisk.label}</p>
          </div>

          {/* Heat Stress Risk */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-amber-400" /> Heat Stress Index
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                {climateRisk.heatRisk.level}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white">{climateRisk.heatRisk.score}%</div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: `${climateRisk.heatRisk.score}%` }} />
            </div>
            <p className="text-[11px] text-slate-400">{climateRisk.heatRisk.label}</p>
          </div>

          {/* Fungal Pressure Index */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-cyan-400" /> Fungal Pressure
              </span>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                {climateRisk.fungalRisk.level}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white">{climateRisk.fungalRisk.score}%</div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-rose-500 rounded-full" style={{ width: `${climateRisk.fungalRisk.score}%` }} />
            </div>
            <p className="text-[11px] text-slate-400">{climateRisk.fungalRisk.label}</p>
          </div>

          {/* Wind Drift Risk */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-emerald-400" /> Wind Drift Risk
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                {climateRisk.windRisk.level}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white">{climateRisk.windRisk.score}%</div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${climateRisk.windRisk.score}%` }} />
            </div>
            <p className="text-[11px] text-slate-400">{climateRisk.windRisk.label}</p>
          </div>

        </div>

        {/* Actionable Spraying Window Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-emerald-300 font-semibold">Agronomic Spraying Window Recommendation</div>
              <div className="text-sm font-bold text-white">{climateRisk.optimalSprayWindow}</div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('assistant')}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 transition-colors"
          >
            Ask AI Assistant About Spraying
          </button>
        </div>
      </div>

      {/* CLIMATE TIMELINE (NOW, TODAY, NEXT 24 HOURS, NEXT 3 DAYS) */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-white font-outfit">Weather Forecast & Fieldwork Timeline</h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTimelineTab('24h')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTimelineTab === '24h' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Next 24 Hours
            </button>
            <button
              onClick={() => setActiveTimelineTab('3d')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTimelineTab === '3d' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Next 3 Days
            </button>
          </div>
        </div>

        {/* 24-HOUR HOURLY SLIDER */}
        {activeTimelineTab === '24h' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {weather.hourly.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-2xl border text-center space-y-2 transition-all ${
                    item.time === 'NOW'
                      ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md scale-[1.03]'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{item.time}</div>
                  <div className="text-sm font-bold text-amber-400">{item.temp}°C</div>
                  <div className="text-[11px] text-slate-400">{item.condition}</div>

                  <div className="pt-1 space-y-1 border-t border-slate-800 text-[10px]">
                    <div className="text-blue-300 font-semibold">{item.rain}% Rain</div>
                    <div className="text-cyan-300">{item.humidity}% Hum</div>
                  </div>

                  <div className={`mt-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                    item.sprayWindow === 'Optimal' ? 'bg-emerald-500/20 text-emerald-300' :
                    item.sprayWindow === 'Caution' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-rose-500/20 text-rose-300'
                  }`}>
                    {item.sprayWindow}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center">
              💡 Green pills indicate optimal spraying conditions; red indicates high wash-off rain risk.
            </p>
          </div>
        )}

        {/* 3-DAY EXTENDED FORECAST */}
        {activeTimelineTab === '3d' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {weather.daily.map((day, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-bold text-base text-white">{day.day}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    day.riskScore === 'High' ? 'bg-rose-500/20 text-rose-300' :
                    day.riskScore === 'Moderate' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {day.riskScore} Risk
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Condition</span>
                    <span className="font-semibold text-white">{day.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Temp Range</span>
                    <span className="font-semibold text-amber-400">{day.tempMin}°C - {day.tempMax}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rain Probability</span>
                    <span className="font-semibold text-blue-400">{day.rainProb}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Avg Humidity</span>
                    <span className="font-semibold text-cyan-400">{day.humidity}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
