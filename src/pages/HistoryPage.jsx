import React, { useState } from 'react';
import { 
  History, 
  Scan, 
  Calendar, 
  CheckCircle2, 
  Bot, 
  Eye, 
  X, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function HistoryPage({ scanHistory, setActiveTab, setSelectedScanForChat }) {
  const [selectedScan, setSelectedScan] = useState(null);

  const handleOpenDetail = (scan) => {
    setSelectedScan(scan);
  };

  const handleSendToAssistant = (scan) => {
    if (setSelectedScanForChat) {
      setSelectedScanForChat(scan);
    }
    setActiveTab('assistant');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
            <History className="w-4 h-4 text-teal-400" /> Agronomic Telemetry Archives
          </div>
          <h1 className="text-3xl font-extrabold text-white font-outfit">Crop Scan History Log</h1>
          <p className="text-xs sm:text-sm text-slate-400">Historical AI computer vision assessments and crop recovery logs</p>
        </div>

        <button
          onClick={() => setActiveTab('scanner')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-transform hover:scale-105"
        >
          <Scan className="w-4 h-4" />
          <span>New Crop Scan</span>
        </button>
      </div>

      {/* HISTORY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scanHistory.map((scan) => (
          <div
            key={scan.id}
            className="glass-card glass-card-hover rounded-3xl p-5 border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Card Image */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-800">
                <img src={scan.imageUrl} alt={scan.crop} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-slate-300 border border-slate-700">
                  {scan.date}
                </div>
                <div className={`absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  scan.riskLevel === 'High' ? 'bg-rose-500 text-white' :
                  scan.riskLevel === 'Moderate' ? 'bg-amber-500 text-slate-950' :
                  'bg-emerald-500 text-slate-950'
                }`}>
                  {scan.riskLevel} Risk
                </div>
              </div>

              {/* Crop & Issue info */}
              <div>
                <h3 className="font-bold text-base text-white truncate">{scan.crop}</h3>
                <p className="text-xs text-amber-400 font-medium truncate mt-0.5">{scan.issue || scan.disease}</p>
                <div className="text-[11px] text-slate-400 mt-1">
                  Confidence: <span className="text-emerald-400 font-semibold">{scan.confidence}%</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button
                onClick={() => handleOpenDetail(scan)}
                className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" /> Inspect Report
              </button>

              <button
                onClick={() => handleSendToAssistant(scan)}
                className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                title="Ask AI Assistant about this scan"
              >
                <Bot className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INSPECT DETAIL MODAL */}
      {selectedScan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedScan(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-xl bg-slate-950"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Scan className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">{selectedScan.crop}</h3>
                <p className="text-xs text-slate-400">Scan ID: {selectedScan.id} • Scanned on {selectedScan.date}</p>
              </div>
            </div>

            <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800">
              <img src={selectedScan.imageUrl} alt={selectedScan.crop} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-400">Identified Possible Issue:</span>
                <span className="font-bold text-amber-300">{selectedScan.issue || selectedScan.disease}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-400">AI Confidence:</span>
                <span className="font-bold text-emerald-400">{selectedScan.confidence}%</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
              <strong>Agronomic Safety Disclaimer:</strong> Preliminary AI assessment. Always verify with local agricultural extension workers or official product label instructions.
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedScan(null)}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
              >
                Close Modal
              </button>
              <button
                onClick={() => {
                  handleSendToAssistant(selectedScan);
                  setSelectedScan(null);
                }}
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Bot className="w-4 h-4" /> Ask AI Assistant
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
