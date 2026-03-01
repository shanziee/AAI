import React from "react";
import Navbar from "./Navbar";
import "./Impact.css";
import { motion } from "framer-motion";

const Impact = () => {
  return (
    <div className="impact-page-wrapper">
      <Navbar />
      
      <main className="impact-container">
        <header className="impact-hero">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Misi Kami: <span className="text-highlight">Nol Limbah</span> Pangan
          </motion.h1>
          <p>FruitScan AI bukan sekadar alat, ini adalah gerakan untuk masa depan yang lebih hijau dan efisien.</p>
        </header>

        <section className="impact-bento">
          <div className="bento-card large-v2">
            <div className="card-content">
              <span className="icon">🌍</span>
              <h2>Dampak Ekologis</h2>
              <p>Setiap kilogram buah yang diselamatkan setara dengan penghematan 700 liter air tanah yang digunakan dalam proses pertanian.</p>
              <div className="eco-stats">
                <div className="stat"><strong>-2.5 Ton</strong><span>CO2 Yearly</span></div>
                <div className="stat"><strong>50k Liters</strong><span>Water Saved</span></div>
              </div>
            </div>
          </div>

          <div className="bento-card small-v2 dark">
            <span className="icon">📈</span>
            <h3>Efisiensi Ekonomi</h3>
            <p>Mengurangi kerugian pedagang hingga 40% melalui sistem deteksi dini.</p>
          </div>

          <div className="bento-card small-v2 green">
            <span className="icon">🏥</span>
            <h3>Keamanan Pangan</h3>
            <p>Mencegah risiko keracunan makanan akibat jamur mikotoksin yang kasat mata.</p>
          </div>
        </section>

        <section className="impact-story">
          <h2>Mengapa Ini Penting?</h2>
          <div className="story-grid">
            <div className="story-item">
              <h4>Masalah Dunia</h4>
              <p>1/3 makanan dunia terbuang setiap tahun. Buah dan sayur adalah penyumbang limbah terbesar karena sifatnya yang cepat rusak.</p>
            </div>
            <div className="story-item">
              <h4>Solusi Kami</h4>
              <p>Dengan AI, kita memberikan "suara" pada buah untuk memberitahu kapan mereka harus segera dikonsumsi atau dijual.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="simple-footer">
        <p>© 2026 FruitScan AI. Making every fruit count.</p>
      </footer>
    </div>
  );
};

export default Impact;
