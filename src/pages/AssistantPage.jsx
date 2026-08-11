import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Leaf, 
  CloudSun, 
  RefreshCw,
  Info
} from 'lucide-react';
import { FARMER_FAQ_PROMPTS } from '../data/diseaseDatabase';
import { askFarmerAssistant } from '../services/aiService';

export default function AssistantPage({ selectedScanForChat, weather }) {
  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'ai',
      text: "Hello! I am AgriPulse AI, your climate resilience and agronomy assistant. How can I help you protect your crops today?",
      bulletPoints: [
        "Upload a crop leaf scan for diagnostic guidance",
        "Ask about optimal spraying timing based on weather forecasts",
        "Explore preventive practices to reduce disease pressure"
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      disclaimer: 'AgriPulse AI provides preliminary AI-assisted agronomic guidance. Always follow product label safety instructions and consult local agricultural experts.'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isThinking) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsThinking(true);

    try {
      const response = await askFarmerAssistant(query, selectedScanForChat, weather);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        bulletPoints: response.bulletPoints,
        timestamp: response.timestamp,
        disclaimer: response.disclaimer
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* HEADER */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
          <Bot className="w-4 h-4" /> 24/7 AI Agronomist Assistant
        </div>
        <h1 className="text-3xl font-extrabold text-white font-outfit">Ask AgriGuard</h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          Get simple, farmer-friendly advice on crop care, weather timing, and disease prevention.
        </p>
      </div>

      {/* CONTEXT BANNER (IF A RECENT SCAN IS LOADED) */}
      {selectedScanForChat && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <img src={selectedScanForChat.imageUrl} alt="Scan Context" className="w-10 h-10 rounded-xl object-cover border border-emerald-500/30" />
            <div>
              <span className="text-emerald-400 font-semibold block">Active Crop Context Loaded:</span>
              <span className="text-white font-medium">{selectedScanForChat.crop} - {selectedScanForChat.disease}</span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
            Scan Context Active
          </span>
        </div>
      )}

      {/* MAIN CHAT CONTAINER */}
      <div className="glass-panel rounded-3xl border border-slate-800 h-[520px] flex flex-col overflow-hidden shadow-2xl">
        
        {/* CHAT MESSAGES FEED */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar Icon */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white'
              }`}>
                {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm space-y-3 ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                <p className="leading-relaxed">{msg.text}</p>

                {/* Bullet points if available */}
                {msg.bulletPoints && msg.bulletPoints.length > 0 && (
                  <ul className="space-y-1.5 pt-1 border-t border-slate-800 text-slate-300 text-xs">
                    {msg.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Safety Disclaimer */}
                {msg.disclaimer && (
                  <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 italic">
                    {msg.disclaimer}
                  </div>
                )}

                <div className={`text-[10px] text-right ${msg.sender === 'user' ? 'text-emerald-200' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                <Bot className="w-5 h-5 animate-spin" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                AgriGuard is generating agricultural advice...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* SUGGESTED PROMPT CHIPS */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 shrink-0 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" /> Suggested:
          </span>
          {FARMER_FAQ_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-purple-500/10 hover:border-purple-500/30 border border-slate-800 text-slate-300 text-xs shrink-0 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* INPUT INPUT BOX */}
        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask AgriGuard about your crops, spray timing, or weather risks..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isThinking}
              className={`p-3 rounded-xl font-semibold transition-all ${
                inputQuery.trim() && !isThinking
                  ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md'
                  : 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
