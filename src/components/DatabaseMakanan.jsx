import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import { motion, AnimatePresence } from "framer-motion";
import "./DatabaseMakanan.css";

// Dataset Makanan Lengkap dengan Badge Pintar
const foodDB = [
  {
    id: 1,
    name: "Nasi Putih",
    portion: "100g",
    cal: 130,
    p: 2.7,
    f: 0.3,
    c: 28,
    category: "Karbohidrat",
    badge: "Energi Cepat",
  },
  {
    id: 2,
    name: "Dada Ayam Bakar",
    portion: "100g",
    cal: 165,
    p: 31,
    f: 3.6,
    c: 0,
    category: "Protein",
    badge: "Tinggi Protein",
  },
  {
    id: 3,
    name: "Telur Rebus",
    portion: "1 Butir",
    cal: 78,
    p: 6,
    f: 5,
    c: 0.6,
    category: "Protein",
    badge: "Kaya Lemak Baik",
  },
  {
    id: 4,
    name: "Tempe Goreng",
    portion: "50g",
    cal: 118,
    p: 10,
    f: 8,
    c: 5,
    category: "Nabati",
    badge: "Kaya Serat",
  },
  {
    id: 5,
    name: "Pisang Ambon",
    portion: "1 Buah",
    cal: 105,
    p: 1.3,
    f: 0.3,
    c: 27,
    category: "Buah",
    badge: "Tinggi Kalium",
  },
  {
    id: 6,
    name: "Indomie Goreng",
    portion: "1 Bungkus",
    cal: 380,
    p: 8,
    f: 14,
    c: 54,
    category: "Cepat Saji",
    badge: "Tinggi Kalori",
  },
  {
    id: 7,
    name: "Alpukat",
    portion: "100g",
    cal: 160,
    p: 2,
    f: 15,
    c: 9,
    category: "Buah",
    badge: "Lemak Super",
  },
  {
    id: 8,
    name: "Oatmeal",
    portion: "40g",
    cal: 150,
    p: 5,
    f: 2.5,
    c: 27,
    category: "Karbohidrat",
    badge: "Karbo Kompleks",
  },
];

const DatabaseMakanan = () => {
  const navigate = useNavigate(); // Inisialisasi navigasi
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedFood, setSelectedFood] = useState(null);

  const categories = [
    "Semua",
    "Karbohidrat",
    "Protein",
    "Nabati",
    "Buah",
    "Cepat Saji",
  ];

  const filteredFoods = foodDB.filter((food) => {
    const matchSearch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      activeCategory === "Semua" || food.category === activeCategory;
    return matchSearch && matchCategory;
  });

  if (selectedFood) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  // --- LOGIKA MENAMBAH KE JURNAL ---
  const handleAddToJournal = () => {
    // 1. Ambil data jurnal yang mungkin sudah ada sebelumnya (jika kosong, buat array baru [])
    const existingJournal = JSON.parse(localStorage.getItem("aai_jurnal")) || [];

    // 2. Buat entri makanan baru, tambahkan ID unik (waktu klik) agar tidak bentrok jika makan makanan yang sama 2 kali
    const newEntry = {
      ...selectedFood,
      entryId: Date.now(), 
      jam: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Menyimpan jam makan
    };

    // 3. Gabungkan makanan lama dengan yang baru
    const updatedJournal = [...existingJournal, newEntry];

    // 4. Simpan ke localStorage
    localStorage.setItem("aai_jurnal", JSON.stringify(updatedJournal));

    // 5. Tutup Pop-up dan pindah ke halaman Jurnal
    setSelectedFood(null);
    navigate("/jurnal");
  };

  return (
    <div className="db-wrapper">
      {/* --- TOP BAR --- */}
      <header className="db-topbar">
        <div className="db-header-content">
          <Link to="/dashboard" className="btn-back-glass">
            <span>←</span> Kembali
          </Link>
          <div className="db-title-area">
            <h2>🍎 Database Nutrisi</h2>
            <p>Eksplorasi kandungan gizi ribuan makanan</p>
          </div>
        </div>

        <div className="db-search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Cari makanan apa hari ini? (ex: Telur, Tempe...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchTerm("")}
            >
              ✖
            </button>
          )}
        </div>
      </header>

      <main className="db-main">
        {/* --- KATEGORI FILTER --- */}
        <div className="db-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GRID MAKANAN --- */}
        <div className="db-grid">
          <AnimatePresence>
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <motion.div
                  key={food.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="food-macro-card"
                  onClick={() => setSelectedFood(food)} 
                >
                  <div className="macro-header">
                    <div>
                      <span className="smart-badge">{food.badge}</span>
                      <h4>{food.name}</h4>
                      <p>Porsi: {food.portion}</p>
                    </div>
                    <div className="macro-cal">
                      <span>{food.cal}</span> kcal
                    </div>
                  </div>

                  <div className="macro-details">
                    <div className="macro-item protein">
                      <span className="macro-dot"></span>
                      <p>Pro</p>
                      <h5>{food.p}g</h5>
                    </div>
                    <div className="macro-item fat">
                      <span className="macro-dot"></span>
                      <p>Lem</p>
                      <h5>{food.f}g</h5>
                    </div>
                    <div className="macro-item carbs">
                      <span className="macro-dot"></span>
                      <p>Kar</p>
                      <h5>{food.c}g</h5>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="db-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span>🍽️</span>
                <h3>Makanan tidak ditemukan</h3>
                <p>Coba gunakan kata kunci lain.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* --- POP-UP MODAL (DETAIL MAKANAN) --- */}
      <AnimatePresence>
        {selectedFood && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFood(null)}
            ></motion.div>
            <motion.div
              className="modal-content"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                className="btn-close-modal"
                onClick={() => setSelectedFood(null)}
              >
                ✕
              </button>

              <div className="modal-header">
                <span className="smart-badge large">{selectedFood.badge}</span>
                <h2>{selectedFood.name}</h2>
                <p>
                  Takaran Porsi: <strong>{selectedFood.portion}</strong>
                </p>
              </div>

              <div className="modal-cal-huge">
                <h1>{selectedFood.cal}</h1>
                <span>Kalori (kcal)</span>
              </div>

              <div className="modal-macro-grid">
                <div className="modal-macro-box blue">
                  <p>Protein</p>
                  <h3>{selectedFood.p}g</h3>
                </div>
                <div className="modal-macro-box orange">
                  <p>Lemak</p>
                  <h3>{selectedFood.f}g</h3>
                </div>
                <div className="modal-macro-box green">
                  <p>Karbohidrat</p>
                  <h3>{selectedFood.c}g</h3>
                </div>
              </div>

              <div className="modal-actions">
                {/* --- MENGGANTI LINK MENJADI BUTTON DENGAN FUNGSI SIMPAN --- */}
                <button onClick={handleAddToJournal} className="btn-add-to-journal" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: 'none', background: '#10b981', color: 'white', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                  ➕ Tambah ke Jurnal Hari Ini
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatabaseMakanan;