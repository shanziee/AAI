import React from "react";
import Navbar from "./Navbar";
import "./Artikel.css";
import { motion } from "framer-motion";

const Artikel = () => {
  const articles = [
    {
      id: 1,
      tag: "Storage",
      title: "Rahasia Menyimpan Pisang Agar Tidak Cepat Hitam",
      desc: "Pelajari teknik membungkus batang pisang dengan plastik untuk memperlambat pelepasan gas etilen.",
      icon: "🍌",
      color: "#fef3c7"
    },
    {
      id: 2,
      tag: "Health",
      title: "Bahaya Jamur Mikotoksin Pada Buah Yang Hampir Busuk",
      desc: "Mengapa memotong bagian busuk saja tidak cukup untuk beberapa jenis buah tertentu.",
      icon: "🏥",
      color: "#fee2e2"
    },
    {
      id: 3,
      tag: "Science",
      title: "Gas Etilen: Teman Sekaligus Lawan di Dapur Anda",
      desc: "Daftar buah yang mengeluarkan gas etilen tinggi dan tidak boleh disimpan berdekatan.",
      icon: "🧪",
      color: "#e0f2fe"
    },
    {
      id: 4,
      tag: "Zero Waste",
      title: "5 Resep Lezat Dari Buah Yang Sudah Terlalu Matang",
      desc: "Jangan dibuang! Ubah pisang lembek atau apel layu menjadi hidangan bintang lima.",
      icon: "♻️",
      color: "#dcfce7"
    }
  ];

  return (
    <div className="artikel-page-wrapper">
      <Navbar />
      
      <main className="artikel-container">
        <header className="artikel-hero">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
          >
            🍎 Fruit Education
          </motion.div>
          <h1>Pusat Edukasi & <br /><span className="text-highlight">Kesehatan Buah</span></h1>
          <p>Pelajari cara menjaga kesegaran stok Anda, kurangi limbah, dan tingkatkan kesehatan keluarga dengan tips ahli kami.</p>
        </header>

        <section className="artikel-grid">
          {articles.map((art, i) => (
            <motion.div 
              key={art.id} 
              className="article-card-v2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="art-icon-box" style={{ background: art.color }}>{art.icon}</div>
              <div className="art-content">
                <span className="art-tag">{art.tag}</span>
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
                <button className="read-more">Baca Selengkapnya →</button>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="featured-tips-glass">
          <div className="tips-text">
            <h2>💡 Quick Tip: Hindari 'Overcrowding'</h2>
            <p>Menumpuk buah terlalu padat dalam satu wadah akan mempercepat proses pembusukan karena sirkulasi udara yang buruk dan penumpukan gas etilen.</p>
          </div>
          <div className="tips-visual">🌬️</div>
        </section>
      </main>

      <footer className="simple-footer">
        <p>© 2026 FruitScan AI Education. Helping you save the planet, one fruit at a time.</p>
      </footer>
    </div>
  );
};

export default Artikel;
