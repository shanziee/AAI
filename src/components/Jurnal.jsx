import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Jurnal.css";

const JurnalKalori = () => {
  const navigate = useNavigate();
  const [mealType, setMealType] = useState("Makan Siang");
  const [selectedFoods, setSelectedFoods] = useState([]);

  // --- LOGIKA 1: AMBIL DATA DARI LOCAL STORAGE SAAT HALAMAN DIBUKA ---
  useEffect(() => {
    const savedJournal = JSON.parse(localStorage.getItem("aai_jurnal")) || [];
    setSelectedFoods(savedJournal);
  }, []);

  // --- LOGIKA 2: HAPUS MAKANAN DARI JURNAL ---
  const removeFood = (entryId) => {
    const updatedJournal = selectedFoods.filter((item) => item.entryId !== entryId);
    setSelectedFoods(updatedJournal);
    // Update juga memori browser
    localStorage.setItem("aai_jurnal", JSON.stringify(updatedJournal));
  };

  // --- LOGIKA 3: HITUNG TOTAL KALORI ---
  const totalCalories = selectedFoods.reduce(
    (total, item) => total + item.cal,
    0,
  );

  const handleFinalSave = () => {
    alert(`Berhasil menyimpan total ${totalCalories} kcal ke database harian Anda!`);
    navigate("/dashboard");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="jurnal-layout">
      {/* --- TOP BAR --- */}
      <header className="top-bar-jurnal">
        <Link to="/dashboard" className="btn-back">
          <span>←</span> Kembali
        </Link>
        <div className="jurnal-header-title">
          <h3>Jurnal Makanan</h3>
          <p>Daftar asupanmu hari ini</p>
        </div>
        <div style={{ width: "80px" }}></div>
      </header>

      <main className="jurnal-content">
        {/* --- PILIH WAKTU MAKAN --- */}
        <motion.div
          className="meal-type-selector"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {["Sarapan", "Makan Siang", "Makan Malam", "Cemilan"].map((type) => (
            <button
              key={type}
              className={`meal-pill ${mealType === type ? "active" : ""}`}
              onClick={() => setMealType(type)}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* --- DAFTAR MAKANAN YANG SUDAH DICATAT --- */}
        <div className="food-list-grid">
          <h4 style={{ margin: "10px 20px", color: "#64748b" }}>Makanan yang dicatat:</h4>
          <AnimatePresence>
            {selectedFoods.length > 0 ? (
              selectedFoods.map((food, index) => (
                <motion.div
                  key={food.entryId}
                  className="food-item-card selected"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="food-item-info">
                    <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 'bold' }}>{food.jam}</span>
                    <h4>{food.name}</h4>
                    <p>{food.portion} • {food.category}</p>
                  </div>
                  <div className="food-item-action">
                    <span className="food-cal">{food.cal} kcal</span>
                    <button 
                      className="btn-select-food active" 
                      onClick={() => removeFood(food.entryId)}
                      style={{ background: '#ff4d4d' }}
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div className="empty-search" variants={fadeUp} initial="hidden" animate="visible">
                <span className="empty-icon">📝</span>
                <p>Belum ada makanan di jurnal.</p>
                <Link to="/database-makanan" className="btn-tambah-manual" style={{ textDecoration: 'none' }}>
                  Cari di Database
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* --- FLOATING BOTTOM BAR --- */}
      <AnimatePresence>
        {selectedFoods.length > 0 && (
          <motion.div
            className="floating-summary-bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <div className="summary-info">
              <p>{selectedFoods.length} Item terdaftar</p>
              <h3>
                {totalCalories} <span>kcal</span>
              </h3>
            </div>
            <button className="btn-simpan-jurnal" onClick={handleFinalSave}>
              Simpan & Selesai
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JurnalKalori;