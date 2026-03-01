import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  // Simulasi State Interaktif
  const [waterGlasses, setWaterGlasses] = useState(3);
  const targetWater = 8;

  // --- STATE UNTUK NAMA DAN BMI DINAMIS ---
  const [userName, setUserName] = useState("Sang Juara");
  const [bmiData, setBmiData] = useState({
    score: "0.0",
    status: "Belum ada data",
    markerPosition: "50%" // Posisi tengah secara default
  });

  // Data kalori (sementara masih simulasi)
  const caloriesTarget = 2200;
  const caloriesConsumed = 1450;
  const caloriesLeft = caloriesTarget - caloriesConsumed;
  const caloriePercent = (caloriesConsumed / caloriesTarget) * 100;

  // --- LOGIKA MENGAMBIL DATA DARI LOCAL STORAGE ---
  useEffect(() => {
    // Ambil Nama
    const storedUser = localStorage.getItem("aai_user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
    }

    // Ambil Data Fisik & Hitung BMI
    const storedFisik = localStorage.getItem("aai_data_fisik");
    if (storedFisik) {
      const parsedFisik = JSON.parse(storedFisik);
      const tinggiMeter = parseFloat(parsedFisik.tinggi) / 100;
      const beratKilo = parseFloat(parsedFisik.berat);

      if (tinggiMeter > 0 && beratKilo > 0) {
        const hitungBmi = beratKilo / (tinggiMeter * tinggiMeter);
        let statusBmi = "";
        
        // Logika untuk menggeser marker di bar BMI (Perkiraan rentang BMI 15 sampai 35)
        let mappedPercent = ((hitungBmi - 15) / 20) * 100;
        if (mappedPercent < 5) mappedPercent = 5; // Batas kiri mentok
        if (mappedPercent > 95) mappedPercent = 95; // Batas kanan mentok

        if (hitungBmi < 18.5) {
          statusBmi = "Kurus";
        } else if (hitungBmi >= 18.5 && hitungBmi <= 24.9) {
          statusBmi = "Normal";
        } else if (hitungBmi >= 25 && hitungBmi <= 29.9) {
          statusBmi = "Overweight";
        } else {
          statusBmi = "Obesitas";
        }

        setBmiData({
          score: hitungBmi.toFixed(1),
          status: statusBmi,
          markerPosition: `${mappedPercent}%`
        });
      }
    }
  }, []);

  // Animasi Framer
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

  const handleDrinkWater = () => {
    if (waterGlasses < targetWater) setWaterGlasses(waterGlasses + 1);
  };

  return (
    <div className="dash-wrapper">
      {/* --- PREMIUM TOP BAR --- */}
      <header className="dash-topbar">
        <div className="dash-greeting">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Siap menjadi lebih sehat hari ini?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Halo, {userName}! 👋
          </motion.h2>
        </div>
        <div className="dash-actions">
          <button className="icon-btn-glass">
            🔔<span className="badge-dot"></span>
          </button>
          <Link to="/profil-target">
            <img
              src={`https://ui-avatars.com/api/?name=${userName}&background=fff&color=10b981`}
              alt="Profile"
              className="dash-avatar"
            />
          </Link>
        </div>
      </header>

      <motion.main
        className="dash-main"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- HERO RING (KALORI) --- */}
        <motion.div
          className="card-glass hero-cal-card"
          variants={itemVariants}
        >
          <div className="hero-cal-info">
            <h3>Sisa Kalori Hari Ini</h3>
            <p>Jaga asupanmu agar tetap dalam target.</p>
            <Link to="/jurnal" className="btn-primary-glow">
              <span>➕</span> Tambah Makan
            </Link>
          </div>

          <div className="cal-ring-container">
            <div
              className="cal-ring"
              style={{
                background: `conic-gradient(#10b981 ${caloriePercent}%, rgba(255,255,255,0.2) ${caloriePercent}%)`,
              }}
            >
              <div className="cal-ring-inner">
                <h2>{caloriesLeft}</h2>
                <span>kcal</span>
              </div>
            </div>
            <div className="cal-labels">
              <div>
                <span className="dot green"></span> Masuk:{" "}
                {caloriesConsumed}
              </div>
              <div>
                <span className="dot gray"></span> Target:{" "}
                {caloriesTarget}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- GRID HIGHLIGHTS --- */}
        <div className="dash-grid-2">
          {/* Status BMI */}
          <motion.div className="card-solid bmi-card" variants={itemVariants}>
            <div className="card-header-icon">
              <h4>⚖️ Indeks Massa Tubuh</h4>
              <Link to="/profil-target" className="link-text">
                Ubah
              </Link>
            </div>
            <div className="bmi-flex">
              <h1 className="bmi-score">{bmiData.score}</h1>
              <div className={`bmi-status ${bmiData.status.toLowerCase()}`}>
                {bmiData.status}
              </div>
            </div>
            <div className="bmi-bar">
              {/* Posisi marker sekarang dinamis mengikuti angka BMI */}
              <motion.div 
                className="bmi-marker" 
                initial={{ left: "0%" }}
                animate={{ left: bmiData.markerPosition }}
                transition={{ duration: 1, type: "spring" }}
              ></motion.div>
            </div>
            <div className="bmi-legend">
              <span>Kurus</span>
              <span>Normal</span>
              <span>Gemuk</span>
            </div>
          </motion.div>

          {/* Water Tracker Interaktif */}
          <motion.div className="card-solid water-card" variants={itemVariants}>
            <div className="card-header-icon">
              <h4>💧 Hidrasi</h4>
              <span className="water-count">
                {waterGlasses}/{targetWater} Gelas
              </span>
            </div>
            <div className="water-visual">
              {Array.from({ length: targetWater }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`water-glass ${i < waterGlasses ? "filled" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDrinkWater}
                >
                  {i < waterGlasses ? "🥛" : "🥤"}
                </motion.div>
              ))}
            </div>
            <p className="water-hint">Klik gelas untuk menambah minum</p>
          </motion.div>
        </div>

        {/* --- NAVIGASI CEPAT BAWAH --- */}
        <motion.div className="quick-nav-section" variants={itemVariants}>
          <h3>Eksplorasi AAI-nutricare</h3>
          <div className="quick-nav-grid">
            <Link to="/database-makanan" className="nav-box food-db">
              <span className="nav-icon">🍎</span>
              <h4>Database Makanan</h4>
              <p>Cari kalori bahan mentah</p>
            </Link>
            <Link to="/progres-laporan" className="nav-box progress-db">
              <span className="nav-icon">📈</span>
              <h4>Laporan Progres</h4>
              <p>Grafik berat badanmu</p>
            </Link>
            <Link to="/scan-makanan" className="nav-box scan-db">
              <span className="nav-icon">📷</span>
              <h4>Scan Label</h4>
              <p>Fitur AI Cerdas</p>
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Dashboard;