# AgriPulse AI – AI-Powered Crop Health & Climate Resilience Assistant

> **Tagline:** "From crop image to climate-smart action."

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](#)

---

## 📌 Project Overview

**AgriPulse AI** is a complete, hackathon-ready agricultural technology web application designed to act as a real-time bridge between physical field conditions and expert agronomic guidance. By fusing computer vision leaf diagnostics, geolocation, micro-climate weather telemetry, and agronomic risk modeling, AgriPulse AI empowers farmers to make climate-smart decisions that protect crop yield and prevent waste.

---

## 🌾 Problem Statement

Smallholder farmers and growers face severe agricultural risks due to changing climate conditions, sudden pest outbreaks, and fungal disease acceleration. Traditional diagnosis is often delayed or inaccessible, leading to:
- Overuse or premature spraying of crop protection chemicals.
- High rain wash-off losses when chemicals are applied right before rain.
- Difficulty calculating fungal incubation pressure during high-humidity periods.
- Lack of immediate, reliable, and safe agronomic advice tailored to local micro-climates.

---

## 💡 The AgriGuard Solution

AgriPulse AI provides a seamless 5-stage agronomic pipeline:
1. **Farmer Input**: Upload a photo of a diseased crop leaf or pick pre-loaded sample foliage.
2. **AI Leaf Vision**: Computer vision algorithms identify leaf lesion geometries, chlorosis, and pustules.
3. **Weather Telemetry Integration**: Detects hyperlocal temperature, humidity, rain probability, wind drift, and dew point.
4. **Climate Risk Indexing**: Computes rain wash-off risk, heat stress index, and fungal pressure multipliers.
5. **Actionable Climate-Smart Advisory**: Recommends optimal spraying windows, simple farmer-friendly next steps, and safe preventive protocols.

---

## 🚀 Key Features

- **Hero Landing Page**: Engaging intro with animated visual pipeline, climate badges, 4-step workflow diagram, and direct CTAs.
- **Field Command-Center Dashboard**: Real-time status displaying overall Crop Health Score (0-100 radial gauge), Disease Pressure, Climate Risk Index, Live Weather Telemetry, Recent Scans Feed, and Active Alerts.
- **AI Crop Scanner**:
  - Drag-and-drop image uploader supporting JPG, PNG, WebP up to 10MB.
  - Pre-loaded Demo Leaf Gallery (Tomato Early Blight, Corn Common Rust, Potato Late Blight, Rice Bacterial Blight, Healthy Crop) for instant judge testing out-of-the-box.
  - Multi-stage scanning animation simulating vision tensor extraction and micro-climate cross-referencing.
  - Comprehensive AI diagnostic report: Confidence rating, Risk level, Observed indicators, Recommended next steps, Prevention advice, Weather timing window, and strict safety disclaimers.
- **Climate Intelligence Radar**:
  - 24-hour hourly weather timeline slider + 3-day extended outlook.
  - Micro-climate risk scores (Rain wash-off risk, Heat stress, Fungal incubation pressure, Wind drift).
  - Optimal Spraying Window recommendations (e.g. "Tomorrow 06:00 - 09:00 AM").
- **Ask AgriPulse AI Assistant**: Interactive conversational chat interface pre-seeded with farmer prompt chips ("Should I spray today?", "How to reduce fungal risk?"), context-aware scan integration, and safety disclaimers.
- **Alert Center**: Filterable high-priority notifications (Weather risk, Pest pressure, Monitoring reminders) categorized by severity (High, Moderate, Low).
- **Scan History Log**: Historical archive of previous crop leaf scans with detailed inspection modal.
- **About & Governance**: Detailed breakdown of system pipeline and agronomic safety principles.

---

## 🛡️ Agronomic Safety & Governance Standards

- **Non-Guaranteed AI Assessments**: Outputs are clearly labeled as *"AI-assisted preliminary assessments"* rather than claiming 100% guaranteed diagnoses.
- **Zero Chemical Mixing Recipes**: The platform never invents raw pesticide mixing ratios or dosage formulas to avoid crop burning or toxicity risks.
- **Expert Referral**: Every diagnostic report advises consulting local certified agricultural extension workers and official product label instructions.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 8
- **Styling**: Tailwind CSS 4, Custom CSS Glassmorphism & Emerald Gradients
- **Icons**: Lucide Icons
- **Animation**: CSS Keyframe Scanners, Canvas Confetti
- **Services**: Custom Weather & AI Service Modules with seamless Demo Mode fallback

---

## 📁 Repository Structure

```
AgriGuard-AI/
├── public/
│   ├── favicon.ico
│   ├── leaf-logo.svg
│   └── samples/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── common/       # DemoBanner, Toast, Badges
│   │   ├── dashboard/    # Telemetry widgets, Health Score Radial Gauge
│   │   ├── scanner/      # ScanningAnimation, ImageUploader, AnalysisReport
│   │   ├── climate/      # ClimateTimeline, RiskRadar
│   │   ├── assistant/    # ChatInterface, PromptChips
│   │   ├── alerts/       # AlertCard, AlertFilters
│   │   └── history/      # ScanHistoryGrid, DetailModal
│   ├── data/
│   │   └── diseaseDatabase.js  # Agronomic knowledge base & mock data
│   ├── services/
│   │   ├── locationService.js  # Geolocation API + Fallback
│   │   ├── weatherService.js   # OpenWeatherMap API + Demo Fallback
│   │   └── aiService.js        # AI Vision & Chat Assistant logic
│   ├── utils/
│   │   └── climateCalculator.js # Risk scoring & spray timing algorithm
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── ScannerPage.jsx
│   │   ├── ClimatePage.jsx
│   │   ├── AssistantPage.jsx
│   │   ├── AlertsPage.jsx
│   │   ├── HistoryPage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚡ How to Run Locally

### Prerequisites
- Node.js (v18+) & NPM

### Step 1: Clone & Install Dependencies
```bash
git clone https://github.com/your-username/AgriGuard-AI.git
cd AgriGuard-AI
npm install
```

### Step 2: Configure Environment Variables (Optional)
AgriPulse AI runs **100% out-of-the-box in Demo Mode** with realistic mock data. To connect live API services, create a `.env` file:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Step 3: Launch Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔮 Demo Mode

When external API keys are omitted, AgriPulse AI operates in **Demo Mode**:
1. Select pre-loaded sample crop photos (Tomato Early Blight, Corn Rust, Potato Late Blight, Healthy Wheat).
2. Watch the multi-phase vision scanner run in real time.
3. Review climate-smart risk scores, weather wash-off forecasts, and farmer advisory.
4. Interact with the Ask AgriPulse AI Chat Assistant.

---

## 🚀 Future Scope

- Multi-language voice translation for regional farmer dialects.
- Satellite multispectral NDVI vegetative index integration.
- Offline-first PWA caching for remote field connectivity.

---

## 👤 Team

- **Solo Hackathon Project**
