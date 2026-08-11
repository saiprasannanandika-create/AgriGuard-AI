import React, { useState, useEffect } from 'react';
import { Cpu, Eye, CloudSun, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ScanningAnimation({ imagePreview }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Ingesting high-resolution leaf tensor pixels...', icon: Eye },
    { label: 'Scanning leaf cellular geometry & necrotic lesion spots...', icon: Cpu },
    { label: 'Cross-referencing local micro-climate dew & rain parameters...', icon: CloudSun },
    { label: 'Enforcing agronomy safety guardrails & generating advice...', icon: ShieldCheck },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 550);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-panel rounded-3xl p-8 border border-slate-800 text-center max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Image Container with Scanning Beam */}
      <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/10">
        <img src={imagePreview} alt="Scanning" className="w-full h-full object-cover" />
        
        {/* Animated Scanning Bar */}
        <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_#10b981] animate-scan-beam" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          ANALYZING PATHERN TENSOR...
        </div>
      </div>

      {/* Step Progress Checklist */}
      <div className="space-y-3 max-w-md mx-auto text-left">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div 
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-xl border text-xs transition-all duration-300 ${
                isCurrent 
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-medium scale-[1.02]' 
                  : isDone
                  ? 'bg-slate-900/60 border-slate-800 text-slate-400 opacity-80'
                  : 'bg-slate-950/40 border-slate-900 text-slate-600'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : isCurrent ? (
                <Icon className="w-4 h-4 text-emerald-400 shrink-0 animate-spin" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0" />
              )}
              <span className="truncate">{step.label}</span>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-slate-400 italic">
        AgriGuard AI is processing vision layers and local micro-climate risk...
      </div>

    </div>
  );
}
