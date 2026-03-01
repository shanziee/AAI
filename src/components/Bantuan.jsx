import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Bantuan.css";
import { motion, AnimatePresence } from "framer-motion";

const Bantuan = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Bagaimana cara mendapatkan akurasi scan terbaik?",
      a: "Pastikan buah berada di bawah cahaya terang yang merata. Hindari bayangan tajam dan gunakan latar belakang polos jika memungkinkan untuk hasil diagnosa yang lebih presisi."
    },
    {
      q: "Apakah aplikasi ini mendukung semua jenis buah?",
      a: "Saat ini kami mendukung 20+ jenis buah populer termasuk Pisang, Apel, Jeruk, dan Alpukat. Kami terus memperbarui model AI kami setiap minggu."
    },
    {
      q: "Apakah data stok saya aman?",
      a: "Ya, kami menggunakan enkripsi tingkat tinggi untuk melindungi data inventaris Anda. Data Anda hanya digunakan untuk memberikan rekomendasi terbaik bagi Anda."
    },
    {
      q: "Dapatkah saya menggunakan aplikasi tanpa koneksi internet?",
      a: "Pemindaian AI memerlukan koneksi internet untuk memproses gambar melalui server cloud kami yang kuat guna memberikan akurasi maksimal."
    }
  ];

  return (
    <div className="bantuan-page-wrapper">
      <Navbar />
      
      <main className="bantuan-container">
        <header className="bantuan-hero">
          <h1>Pusat Bantuan <br /><span className="text-highlight">FruitScan AI</span></h1>
          <p>Cari jawaban untuk pertanyaan Anda atau hubungi tim dukungan kami.</p>
          <div className="search-box-mock">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Cari bantuan..." />
          </div>
        </header>

        <section className="faq-section-pro">
          <h2>Pertanyaan Populer</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="toggle-icon">{activeIndex === i ? '−' : '+'}</span>
                </div>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-answer"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-support-card">
          <div className="contact-text">
            <h2>Masih butuh bantuan?</h2>
            <p>Tim spesialis kami siap membantu Anda menyelesaikan masalah teknis atau pertanyaan lainnya.</p>
            <button className="btn-contact">Hubungi Support</button>
          </div>
          <div className="contact-visual">🎧</div>
        </section>
      </main>

      <footer className="simple-footer">
        <p>© 2026 FruitScan AI Support Center.</p>
      </footer>
    </div>
  );
};

export default Bantuan;
