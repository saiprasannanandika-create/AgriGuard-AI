import React, { useState } from 'react';
import { 
  Bell, 
  ShieldAlert, 
  CloudRain, 
  Droplets, 
  CheckCircle2, 
  Filter, 
  Trash2,
  ArrowRight,
  Info
} from 'lucide-react';

export default function AlertsPage({ alerts, setActiveTab }) {
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [alertsList, setAlertsList] = useState(alerts);

  const filteredAlerts = alertsList.filter((a) => {
    if (filterSeverity === 'All') return true;
    return a.severity === filterSeverity;
  });

  const handleDismiss = (id) => {
    setAlertsList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-2">
            <Bell className="w-4 h-4 text-rose-400" /> Agronomic Alert Center
          </div>
          <h1 className="text-3xl font-extrabold text-white font-outfit">Weather & Crop Risk Alerts</h1>
          <p className="text-xs sm:text-sm text-slate-400">High-priority field alerts, humidity spikes, and rain wash-off warnings</p>
        </div>

        {/* Severity Filter */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-2" />
          {['All', 'High', 'Moderate', 'Low'].map((sev) => (
            <button
              key={sev}
              onClick={() => setFilterSeverity(sev)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                filterSeverity === sev ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* ALERTS FEED */}
      <div className="space-y-4">
        {filteredAlerts.length === 0 ? (
          <div className="glass-panel rounded-3xl p-12 text-center space-y-3 border border-slate-800">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Active Alerts</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Your field micro-climate parameters are currently stable.
            </p>
          </div>
        ) : (
          filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`glass-panel rounded-3xl p-6 border transition-all ${
                alert.severity === 'High' ? 'border-rose-500/40 bg-rose-950/20' :
                alert.severity === 'Moderate' ? 'border-amber-500/40 bg-amber-950/20' :
                'border-slate-800 bg-slate-900/60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      alert.severity === 'High' ? 'bg-rose-500 text-white' :
                      alert.severity === 'Moderate' ? 'bg-amber-500 text-slate-950' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {alert.severity} Severity
                    </span>
                    <span className="text-xs font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {alert.category}
                    </span>
                    <span className="text-xs text-slate-500">{alert.time}</span>
                  </div>

                  <h3 className="font-bold text-lg text-white">{alert.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{alert.message}</p>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 space-y-1">
                    <span className="font-semibold text-emerald-400 block">Suggested Mitigation:</span>
                    <p>{alert.actionableAdvice}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDismiss(alert.id)}
                  className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-slate-900 transition-colors shrink-0"
                  title="Dismiss Alert"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
