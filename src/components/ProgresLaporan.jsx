import React from "react";
import "./ProgresLaporan.css";
import { motion } from "framer-motion";

const SustainabilityAnalytics = () => {
  const cards = [
    { label: "Food Saved", value: "142.8 kg", icon: "♻️", color: "#10b981", trend: "+12%" },
    { label: "Cost Saved", value: "Rp 2.45M", icon: "💰", color: "#3b82f6", trend: "+8%" },
    { label: "CO2 Reduction", value: "28.5 kg", icon: "🌍", color: "#059669", trend: "+15%" },
  ];

  return (
    <div className="analytics-page-wrapper">
      <header className="analytics-header">
        <h1>📈 Sustainability Analytics</h1>
        <p>Lacak kontribusi Anda dalam mengurangi sampah makanan dan emisi karbon.</p>
      </header>

      <div className="analytics-summary-grid">
        {cards.map((card, i) => (
          <motion.div 
            key={i} 
            className="summary-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="card-icon" style={{ background: `${card.color}15` }}>{card.icon}</div>
            <div className="card-data">
              <span className="label">{card.label}</span>
              <h2 style={{ color: card.color }}>{card.value}</h2>
              <span className="trend-up">{card.trend} from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="analytics-main-grid">
        <div className="chart-container-glass bento-main">
          <h3>Weekly Waste Reduction Trend</h3>
          <div className="visual-chart">
            {[65, 45, 85, 30, 95, 55, 75].map((h, i) => (
              <div key={i} className="bar-wrapper">
                <motion.div 
                  className="bar-fill-v2" 
                  initial={{ height: 0 }} 
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                ></motion.div>
                <span className="day-label">{['S','S','R','K','J','S','M'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-info-glass bento-side">
          <h3>Environmental Tips</h3>
          <div className="tip-item">
            <span className="tip-num">01</span>
            <p>Simpan apel terpisah dari pisang untuk mencegah pematangan prematur.</p>
          </div>
          <div className="tip-item">
            <span className="tip-num">02</span>
            <p>Buah yang hampir busuk sangat ideal untuk dijadikan smoothie sehat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityAnalytics;
