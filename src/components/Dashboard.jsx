import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  const [userName, setUserName] = useState("Pengguna Cerdas");
  
  // Simulasi Data Statistik Buah
  const stats = {
    totalScan: 48,
    savedFood: "12.5 kg",
    healthAlerts: 3
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("aai_user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="dash-wrapper">
      <header className="dash-topbar">
        <div className="dash-greeting">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            Pantau kesehatan buah & stok Anda hari ini
          </motion.p>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            Halo, {userName}! 👋
          </motion.h2>
        </div>
        <div className="dash-actions">
          <button className="icon-btn-glass">
            🔔<span className="badge-dot"></span>
          </button>
          <Link to="/scan">
            <img
              src={`https://ui-avatars.com/api/?name=${userName}&background=10b981&color=fff`}
              alt="Profile"
              className="dash-avatar"
            />
          </Link>
        </div>
      </header>

      <motion.main className="dash-main" variants={containerVariants} initial="hidden" animate="visible">
        {/* --- HERO SCAN CARD --- */}
        <motion.div className="card-glass hero-cal-card" variants={itemVariants}>
          <div className="hero-cal-info">
            <h3>Deteksi Buah Baru</h3>
            <p>Ambil foto buah untuk mengetahui tingkat kesegarannya secara instan.</p>
            <Link to="/scan" className="btn-primary-glow">
              <span>📷</span> Mulai Scan AI
            </Link>
          </div>

          <div className="cal-ring-container">
            <div className="cal-ring" style={{ background: `conic-gradient(#10b981 75%, rgba(255,255,255,0.2) 25%)` }}>
              <div className="cal-ring-inner">
                <h2>{stats.totalScan}</h2>
                <span>Total Scan</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="dash-grid-2">
          {/* Food Waste Impact */}
          <motion.div className="card-solid bmi-card" variants={itemVariants}>
            <div className="card-header-icon">
              <h4>♻️ Dampak Lingkungan</h4>
            </div>
            <div className="bmi-flex" style={{ margin: '20px 0' }}>
              <h1 className="bmi-score" style={{ color: '#10b981' }}>{stats.savedFood}</h1>
              <div className="bmi-status normal">Food Saved</div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Anda telah membantu mencegah pembuangan makanan setara dengan {stats.savedFood} melalui deteksi dini.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div className="card-solid water-card" variants={itemVariants}>
            <div className="card-header-icon">
              <h4>📊 Ringkasan Stok</h4>
            </div>
            <div className="stats-list" style={{ marginTop: '15px' }}>
              <div className="stat-item-simple">
                <span>🟢 Segar (Layak)</span>
                <span style={{ fontWeight: '700' }}>85%</span>
              </div>
              <div className="stat-item-simple">
                <span>🟡 Perlu Segera Jual</span>
                <span style={{ fontWeight: '700' }}>10%</span>
              </div>
              <div className="stat-item-simple">
                <span>🔴 Tidak Layak</span>
                <span style={{ fontWeight: '700' }}>5%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- RECENT SCANS --- */}
        <motion.div className="quick-nav-section" variants={itemVariants}>
          <h3>Riwayat Deteksi Terakhir</h3>
          <div className="quick-nav-grid">
            <div className="nav-box food-db">
              <span className="nav-icon">🍌</span>
              <h4>Pisang Ambon</h4>
              <p>Status: Mulai Busuk (2 hari)</p>
            </div>
            <div className="nav-box progress-db">
              <span className="nav-icon">🍎</span>
              <h4>Apel Merah</h4>
              <p>Status: Segar (12 hari)</p>
            </div>
            <div className="nav-box scan-db">
              <span className="nav-icon">🍊</span>
              <h4>Jeruk Mandarin</h4>
              <p>Status: Segar (5 hari)</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Dashboard;
