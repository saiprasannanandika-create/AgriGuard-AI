import React, { useState } from 'react';
import { Info, X, Zap, Key } from 'lucide-react';

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 border-b border-emerald-500/20 px-4 py-2.5 text-xs sm:text-sm text-emerald-200 flex items-center justify-between shadow-md relative z-40">
        <div className="flex items-center gap-2 max-w-4xl mx-auto text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30 text-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> Demo Mode Active
          </span>
          <span className="text-slate-300">
            Running out-of-the-box with realistic mock agronomy vision & micro-climate data.
          </span>
          <button
            onClick={() => setShowKeyModal(true)}
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-2 font-medium transition-colors"
          >
            <Key className="w-3 h-3" /> API Keys Info
          </button>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-slate-200 p-1 rounded-lg transition-colors"
          title="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowKeyModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Environment Configuration</h3>
                <p className="text-xs text-slate-400">AgriGuard AI API Integration</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              AgriGuard AI is designed to run seamlessly in <strong>Demo Mode</strong> without any external configuration. To connect live services, create a <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300">.env</code> file in the project root:
            </p>

            <div className="bg-slate-950 p-3 rounded-xl font-mono text-xs text-slate-300 border border-slate-800 space-y-1 mb-4">
              <div><span className="text-emerald-400">VITE_WEATHER_API_KEY</span>=your_openweather_key</div>
              <div><span className="text-cyan-400">VITE_OPENAI_API_KEY</span>=your_openai_key</div>
              <div><span className="text-purple-400">VITE_GEMINI_API_KEY</span>=your_gemini_key</div>
            </div>

            <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-200 text-xs mb-5">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>No API key? No problem! The hackathon presentation demo flow is 100% functional out-of-the-box.</span>
            </div>

            <button
              onClick={() => setShowKeyModal(false)}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors text-sm"
            >
              Continue in Demo Mode
            </button>
          </div>
        </div>
      )}
    </>
  );
}
