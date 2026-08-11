import React from 'react';
import { ShieldCheck, Heart, Code2, ExternalLink, Leaf, CloudSun, Bot, Cpu } from 'lucide-react';


export default function Footer({ setActiveTab }) {
  return (
    <footer className="w-full glass-panel border-t border-slate-800/80 bg-slate-950/90 mt-20 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <img src="/leaf-logo.svg" alt="AgriGuard" className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white font-outfit">AgriPulse AI</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              "From crop image to climate-smart action." Real-time AI bridge connecting field crop conditions, micro-climate weather metrics, and agronomic guidance.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Agronomic Safety Standard Compliance</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase text-xs">Core Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('dashboard')} className="hover:text-emerald-400 transition-colors">
                  Farmer Dashboard Command Center
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('scanner')} className="hover:text-emerald-400 transition-colors">
                  AI Crop Leaf Scanner
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('climate')} className="hover:text-emerald-400 transition-colors">
                  Hyperlocal Climate Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('assistant')} className="hover:text-emerald-400 transition-colors">
                  Ask AgriGuard Assistant
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Architecture */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase text-xs">AI & Weather Intelligence</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Computer Vision Neural Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <CloudSun className="w-4 h-4 text-amber-400" />
                <span>Micro-Climate Risk Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" />
                <span>Context-Aware Agronomy Assistant</span>
              </div>
            </div>
          </div>

          {/* Col 4: Safety & Expert Advisory */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase text-xs">Agronomic Safety Notice</h4>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] leading-relaxed text-slate-400">
              AgriPulse AI provides <strong>AI-assisted preliminary assessments</strong>. Outputs do not guarantee diagnosis or chemical prescriptions. Always verify with local agricultural extension officers and read official product label safety sheets.
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} AgriPulse AI. AI-Powered Crop Health & Climate Resilience Assistant.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              Solo Hackathon Project
            </span>
            <button onClick={() => setActiveTab('about')} className="hover:text-emerald-400 transition-colors">
              Documentation & Architecture
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
