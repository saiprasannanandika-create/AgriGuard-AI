import React from 'react';
import { 
  Scan, 
  LayoutDashboard, 
  CloudSun, 
  Bot, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Thermometer, 
  Droplets, 
  Wind, 
  Activity, 
  Leaf,
  Layers,
  Zap
} from 'lucide-react';

export default function LandingPage({ setActiveTab }) {
  return (
    <div className="space-y-20 py-8">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left relative z-10">
            
            {/* Badges */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-500/5">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>AI-Powered Crop Health & Climate Resilience Assistant</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-outfit">
              From crop image to <br />
              <span className="emerald-text-gradient">climate-smart action.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              AgriPulse AI combines computer vision crop leaf diagnostics, hyperlocal weather data, and climate risk modeling to deliver instant, actionable guidance directly to farmers.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" /> AI Leaf Vision
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                <CloudSun className="w-3.5 h-3.5 text-cyan-400" /> Micro-Climate Weather
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Actionable Spraying Windows
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setActiveTab('scanner')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-xl shadow-emerald-600/30 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95 text-base"
              >
                <Scan className="w-5 h-5 animate-pulse" />
                <span>Scan My Crop</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('dashboard')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all duration-300 hover:scale-105 text-base"
              >
                <LayoutDashboard className="w-5 h-5 text-emerald-400" />
                <span>Explore Dashboard</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Animated Visual */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-emerald-500/30 via-slate-800 to-cyan-500/30 shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-6 space-y-6 overflow-hidden">
                
                {/* Mock Card Top: Leaf Scanning Visual */}
                <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden h-56 flex items-center justify-center group">
                  <img 
                    src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19657?auto=format&fit=crop&q=80&w=600" 
                    alt="Tomato Early Blight"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Scanner Line */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-scan-beam" />
                  
                  {/* Floating AI Diagnostic Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    AI Vision Match: 92%
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold">
                    Moderate Risk
                  </div>
                </div>

                {/* Weather & Climate Fusion Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
                    <Thermometer className="w-4 h-4 text-amber-400 mx-auto" />
                    <div className="text-xs text-slate-400">Temp</div>
                    <div className="font-bold text-sm text-white">26.5°C</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
                    <Droplets className="w-4 h-4 text-cyan-400 mx-auto" />
                    <div className="text-xs text-slate-400">Humidity</div>
                    <div className="font-bold text-sm text-white">78%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
                    <Wind className="w-4 h-4 text-emerald-400 mx-auto" />
                    <div className="text-xs text-slate-400">Rain Prob</div>
                    <div className="font-bold text-sm text-white">35%</div>
                  </div>
                </div>

                {/* Instant Climate Smart Action Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/30 text-xs space-y-2">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Climate-Smart Action
                    </span>
                    <span className="text-[10px] text-slate-400">Updated Just Now</span>
                  </div>
                  <p className="text-slate-200 leading-snug">
                    Postpone spraying until tomorrow 06:00 AM window due to afternoon dew & humidity incubation.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" /> 4-Step Agronomic Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">How AgriPulse AI Works</h2>
          <p className="text-slate-400 text-sm">
            Bridging raw field symptoms with real-time micro-climate intelligence to protect crops and maximize yield.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl font-bold font-outfit">
              01
            </div>
            <h3 className="font-bold text-lg text-white">Upload Crop Photo</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Farmer takes a photo of a diseased or stressed leaf blade using smartphone camera or uploads an existing crop image.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 relative">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl font-bold font-outfit">
              02
            </div>
            <h3 className="font-bold text-lg text-white">AI Vision Analysis</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Computer vision algorithms scan leaf lesion geometries, discoloration halos, and pustule structures to identify possible issues.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl font-bold font-outfit">
              03
            </div>
            <h3 className="font-bold text-lg text-white">Weather Fusion</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Combines location coordinates, humidity metrics, rain forecast, and dew point to calculate fungal pressure and spray drift risks.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl font-bold font-outfit">
              04
            </div>
            <h3 className="font-bold text-lg text-white">Climate-Smart Action</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Delivers simple, clear next steps, ideal treatment timing windows, and prevention advice while respecting agricultural safety standards.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURE HIGHLIGHT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">Command-Center Features</h2>
          <p className="text-slate-400 text-sm">
            Everything a farmer needs to diagnose, monitor, and protect crops against weather and pest threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => setActiveTab('scanner')}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Scan className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">AI Crop Scanner</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant AI computer vision diagnosis with confidence scoring, observed symptoms list, and farmer-friendly steps.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('climate')}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <CloudSun className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">Climate Risk Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              24-hour and 3-day weather timelines calculating rain wash-off, heat stress, and fungal germination risks.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('assistant')}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">Ask AgriGuard Assistant</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              24/7 interactive farmer assistant chat ready to answer questions about spray timing, crop care, and disease prevention.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('dashboard')}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">Crop Health Score</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dynamic 0-100 crop health score index evaluating field plot vulnerability and environmental resilience.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('alerts')}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white group-hover:text-rose-400 transition-colors">Weather & Pest Alert Center</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Severe weather notifications, rain wash-off warnings, and fungal outbreak alerts categorized by severity.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('history')}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border border-slate-800 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white group-hover:text-teal-400 transition-colors">Scan History Log</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Archive of historical crop scans to track crop recovery, treatment efficacy, and field health progression over time.
            </p>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 border border-emerald-500/30 text-center space-y-6 shadow-2xl">
          <div className="absolute inset-0 bg-radial from-emerald-500/10 to-transparent pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit relative z-10">
            Ready to scan your crop?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto relative z-10 leading-relaxed">
            Test the AI scanner right now using preset sample leaf photos or upload your own leaf image.
          </p>

          <div className="pt-2 relative z-10">
            <button
              onClick={() => setActiveTab('scanner')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold shadow-xl shadow-emerald-500/20 transition-transform hover:scale-105 active:scale-95 text-base"
            >
              <Scan className="w-5 h-5" />
              <span>Launch AI Crop Scanner</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
