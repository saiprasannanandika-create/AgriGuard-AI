import React, { useState } from 'react';
import { 
  Upload, 
  Scan, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  CloudSun, 
  Sparkles, 
  Bot, 
  History, 
  Info, 
  ArrowRight,
  Leaf,
  FileText
} from 'lucide-react';
import { DEMO_SAMPLES } from '../data/diseaseDatabase';
import { analyzeCropImage } from '../services/aiService';
import ScanningAnimation from '../components/scanner/ScanningAnimation';

export default function ScannerPage({ weather, setActiveTab, onSaveScan, setSelectedScanForChat }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedPresetId, setSelectedPresetId] = useState('sample-1');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Preset Sample click
  const handleSelectPreset = (preset) => {
    setSelectedPresetId(preset.id);
    setSelectedFile(null);
    setImagePreview(preset.imageUrl);
    setScanResult(null);
    setErrorMessage('');
  };

  // Handle Drag & Drop / File Select
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setErrorMessage('Please upload a valid image format (JPG, PNG, or WebP).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File size exceeds 10MB limit. Please choose a smaller image.');
      return;
    }

    setErrorMessage('');
    setSelectedFile(file);
    setSelectedPresetId(null);
    setImagePreview(URL.createObjectURL(file));
    setScanResult(null);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setSelectedPresetId(null);
    setScanResult(null);
    setErrorMessage('');
  };

  // Execute Analysis
  const handleRunAnalysis = async () => {
    if (!imagePreview) {
      setErrorMessage('Please select a preset sample photo or upload a crop leaf image.');
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    try {
      const result = await analyzeCropImage(imagePreview, selectedPresetId, weather);
      setScanResult(result);
      if (onSaveScan) {
        onSaveScan(result);
      }
    } catch (err) {
      console.error('Scan error:', err);
      setErrorMessage('Failed to complete AI analysis. Please try again.');
    } finally {
      setIsScanning(false);
    }
  };

  const handleDiscussWithAI = () => {
    if (scanResult && setSelectedScanForChat) {
      setSelectedScanForChat(scanResult);
    }
    setActiveTab('assistant');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* PAGE HEADER */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> AI Leaf Vision Engine
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">AI Crop Health Scanner</h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Upload a photo of a diseased or stressed leaf blade, or pick from pre-loaded agronomic samples for instant AI diagnostics.
        </p>
      </div>

      {/* ERROR BANNER */}
      {errorMessage && (
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <button onClick={() => setErrorMessage('')} className="text-rose-400 font-bold hover:text-white">✕</button>
        </div>
      )}

      {/* SCANNER CONTROLS SECTION */}
      {!isScanning && !scanResult && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Drag and Drop Upload Area */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-emerald-400" />
                <span>Upload Leaf Image</span>
              </h2>
              {imagePreview && (
                <button
                  onClick={handleRemoveImage}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 p-1 rounded-lg hover:bg-slate-900"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove Image
                </button>
              )}
            </div>

            {/* Dropzone Box */}
            <div className="relative border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-2xl p-6 sm:p-10 text-center transition-colors bg-slate-900/40 group">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              {imagePreview ? (
                <div className="space-y-4">
                  <div className="relative w-full h-64 sm:h-72 mx-auto rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                    <img src={imagePreview} alt="Crop Preview" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-emerald-400">
                      Image Loaded & Validated
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">Click or drag another file to replace</p>
                </div>
              ) : (
                <div className="space-y-4 py-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Drag and drop leaf image here</p>
                    <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, WebP up to 10MB</p>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors pointer-events-none">
                    Browse Local Storage
                  </button>
                </div>
              )}
            </div>

            {/* Analyze CTA Button */}
            <button
              onClick={handleRunAnalysis}
              disabled={!imagePreview}
              className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 ${
                imagePreview
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-600/30 border border-emerald-400/40 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-800'
              }`}
            >
              <Scan className="w-5 h-5 animate-pulse" />
              <span>Analyze Leaf Health & Climate Risks</span>
            </button>
          </div>

          {/* Right Column: Demo Sample Presets for Instant Testing */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-base text-white">Demo Sample Gallery</h3>
              </div>
              <p className="text-xs text-slate-400">
                Pick a pre-loaded sample photo for instant evaluation:
              </p>
            </div>

            <div className="space-y-3">
              {DEMO_SAMPLES.map((sample) => {
                const isSelected = selectedPresetId === sample.id;
                return (
                  <div
                    key={sample.id}
                    onClick={() => handleSelectPreset(sample)}
                    className={`p-3 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <img 
                      src={sample.imageUrl} 
                      alt={sample.name}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-700 shrink-0" 
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white truncate">{sample.name}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          sample.riskLevel === 'High' ? 'bg-rose-500/20 text-rose-300' :
                          sample.riskLevel === 'Moderate' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {sample.riskLevel}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{sample.crop}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300 block">💡 Hackathon Judge Tip:</span>
              Clicking any preset automatically loads the leaf image into the AI Vision Pipeline.
            </div>
          </div>

        </div>
      )}

      {/* SCANNING LOADING STATE */}
      {isScanning && (
        <ScanningAnimation imagePreview={imagePreview} />
      )}

      {/* ANALYSIS RESULT REPORT */}
      {scanResult && !isScanning && (
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8 animate-in fade-in duration-300">
          
          {/* Report Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                AI Crop Assessment Completed
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">{scanResult.crop}</h2>
              <p className="text-xs text-slate-400">Analyzed at {new Date(scanResult.analyzedAt).toLocaleString()}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Risk Level Pill */}
              <div className={`px-4 py-2 rounded-2xl border text-sm font-bold flex items-center gap-2 ${
                scanResult.riskLevel === 'High' ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' :
                scanResult.riskLevel === 'Moderate' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              }`}>
                <AlertTriangle className="w-4 h-4" />
                <span>{scanResult.riskLevel} Risk</span>
              </div>

              {/* Confidence Pill */}
              <div className="px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{scanResult.confidence}% AI Confidence</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Image & Assessment Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Scanned Leaf Thumbnail & Disease Identification */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-64 sm:h-72">
                <img src={scanResult.imageUrl} alt={scanResult.disease} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
                  <span className="text-slate-400 block text-[10px]">Identified Possible Issue:</span>
                  <span className="font-bold text-amber-300 text-sm">{scanResult.disease}</span>
                </div>
              </div>

              {/* Safety & Expert Consult Disclaimer Notice */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs space-y-1.5">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Agronomic Safety Standard Compliance</span>
                </div>
                <p className="text-[11px] leading-relaxed text-amber-200/90">
                  {scanResult.disclaimer} Always consult a local agricultural extension expert and product label guidelines before executing chemical treatments.
                </p>
              </div>
            </div>

            {/* Diagnostic Details & Next Steps */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Observed Indicators */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-white uppercase tracking-wider text-xs flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  Observed Leaf Indicators
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {scanResult.observedIndicators.map((indicator, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{indicator}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Next Steps */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-white uppercase tracking-wider text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Recommended Next Steps (Farmer-Friendly Action)
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {scanResult.recommendedSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weather & Climate Timing Consideration */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/30 text-xs space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <CloudSun className="w-4 h-4 text-cyan-400" />
                  <span>Micro-Climate Timing Consideration</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {scanResult.weatherConsiderations}
                </p>
              </div>

            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                setScanResult(null);
                setImagePreview(null);
                setSelectedPresetId(null);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              Scan Another Crop
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('history')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
              >
                <History className="w-4 h-4" />
                <span>View Scan History</span>
              </button>

              <button
                onClick={handleDiscussWithAI}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/20 transition-transform hover:scale-105"
              >
                <Bot className="w-4 h-4" />
                <span>Discuss with AI Assistant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
