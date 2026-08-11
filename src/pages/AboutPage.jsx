import React from 'react';
import { 
  HelpCircle, 
  Scan, 
  CloudSun, 
  Bot, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';

export default function AboutPage({ setActiveTab }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* HEADER */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
          <HelpCircle className="w-4 h-4" /> System Architecture & Agronomy Principles
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">About AgriPulse AI</h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          AI-Powered Crop Health & Climate Resilience Assistant designed for modern agriculture.
        </p>
      </div>

      {/* 5-STAGE PIPELINE ARCHITECTURE */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white font-outfit">The Agronomic Pipeline</h2>
          <p className="text-xs text-slate-400">How AgriPulse AI transforms raw leaf images into climate-smart field actions</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-xs text-white">Farmer Input</h3>
              <p className="text-[11px] text-slate-400">Photo upload or live camera scan of diseased crop foliage.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-xs text-white">AI Vision Analysis</h3>
              <p className="text-[11px] text-slate-400">Neural image filters detect chlorosis, pustules, and necrotic spots.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-xs text-white">Weather Intelligence</h3>
              <p className="text-[11px] text-slate-400">Hyperlocal rain probability, humidity & wind drift evaluation.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-xs text-white">Climate Risk Index</h3>
              <p className="text-[11px] text-slate-400">Calculates rain wash-off, fungal pressure, and heat stress indexes.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                05
              </div>
              <h3 className="font-bold text-xs text-white">Actionable Advisory</h3>
              <p className="text-[11px] text-slate-400">Simple next steps, spraying windows & safe prevention steps.</p>
            </div>

          </div>
        </div>
      </div>

      {/* SAFETY & GOVERNANCE COMMITMENT */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-outfit">Agronomic Safety Principles</h2>
            <p className="text-xs text-slate-400">Responsible AI deployment for agricultural decision support</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Non-Guaranteed AI Assessments
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              AgriPulse AI presents outputs as "AI-assisted preliminary assessments" rather than claiming 100% guaranteed diagnoses.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Zero Chemical Mixing Recipes
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To prevent accidental chemical toxicity or crop burning, the system never invents raw pesticide mixing ratios. Farmers are advised to consult product labels and local extension workers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Climate Timing Optimization
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Prevents costly chemical wash-off by matching treatment applications to rain-free and low-wind weather windows.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Local Agronomist Referral
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every diagnostic report contains clear instructions to consult certified agronomic specialists for localized confirmation.
            </p>
          </div>
        </div>
      </div>

      {/* TECH STACK & HACKATHON METADATA */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
        <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
          <Code2 className="w-5 h-5 text-purple-400" /> Technology Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[10px]">Frontend Framework</span>
            <span className="font-bold text-white">React 19 + Vite 8</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[10px]">Styling System</span>
            <span className="font-bold text-white">Tailwind CSS 4</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[10px]">Icon System</span>
            <span className="font-bold text-white">Lucide Icons</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[10px]">API Architecture</span>
            <span className="font-bold text-white">Env Keys + Demo Mode</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('scanner')}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-600/20 transition-transform hover:scale-105"
        >
          <Scan className="w-5 h-5" />
          <span>Launch AI Scanner</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
