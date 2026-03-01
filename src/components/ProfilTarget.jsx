import React, { useState } from "react";
import "./ProfilTarget.css";
import { motion } from "framer-motion";

const AccountPreferences = () => {
  const [mode, setMode] = useState("Merchant");

  return (
    <div className="settings-page-wrapper">
      <header className="settings-header">
        <h1>⚙️ Account Settings</h1>
        <p>Sesuaikan bagaimana AI FruitScan bekerja untuk kebutuhan spesifik Anda.</p>
      </header>

      <div className="settings-container-glass">
        <section className="settings-section">
          <h3>Operational Mode</h3>
          <p className="section-desc">Pilih mode yang paling sesuai dengan profil penggunaan Anda.</p>
          
          <div className="mode-selector-grid">
            <motion.div 
              className={`mode-card ${mode === "Merchant" ? "active" : ""}`}
              onClick={() => setMode("Merchant")}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mode-icon">🏪</div>
              <h4>Professional Merchant</h4>
              <p>Fokus pada optimasi stok, strategi harga diskon, dan analisis inventaris besar.</p>
            </motion.div>

            <motion.div 
              className={`mode-card ${mode === "Consumer" ? "active" : ""}`}
              onClick={() => setMode("Consumer")}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mode-icon">🏠</div>
              <h4>Home Consumer</h4>
              <p>Fokus pada rekomendasi konsumsi keluarga, resep masakan, dan pencegahan limbah harian.</p>
            </motion.div>
          </div>
        </section>

        <section className="settings-section">
          <h3>AI Smart Notifications</h3>
          <div className="toggle-list">
            <div className="toggle-item">
              <div className="toggle-info">
                <strong>Critical Alerts</strong>
                <p>Notifikasi saat stok buah akan busuk dalam 48 jam.</p>
              </div>
              <input type="checkbox" className="ios-toggle" defaultChecked />
            </div>
            <div className="toggle-item">
              <div className="toggle-info">
                <strong>Sustainability Report</strong>
                <p>Terima ringkasan mingguan dampak lingkungan Anda.</p>
              </div>
              <input type="checkbox" className="ios-toggle" defaultChecked />
            </div>
          </div>
        </section>

        <div className="settings-actions">
          <button className="btn-save-settings">Save All Changes</button>
          <button className="btn-logout-alt">Logout Account</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPreferences;
