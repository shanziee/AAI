// src/components/LandingPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./LandingPage.css";

// Komponen Pembantu untuk Item Makanan
const FoodItem = ({ image, name, portion, cal, color, fill }) => (
  <div className="food-item">
    <div className="food-icon-wrapper">
      <img src={image} alt={name} className="food-img-item" />
    </div>
    <div className="food-details">
      <h4>
        {name} <span className="food-portion">({portion})</span>
      </h4>
      <div className="calorie-bar">
        <div
          className="bar-fill"
          style={{ width: fill, background: color }}
        ></div>
      </div>
    </div>
    <div
      className="food-calorie-value"
      style={{
        color: color,
        background: `${color}15`, // Background transparan dari warna utama
      }}
    >
      {cal} kcal
    </div>
  </div>
);

const LandingPage = () => {
  const [quickHeight, setQuickHeight] = useState("");
  const [quickWeight, setQuickWeight] = useState("");
  const [quickResult, setQuickResult] = useState(null);

  // --- ENGINE ANIMASI SCROLL (INTERSECTION OBSERVER) ---
  useEffect(() => {
    // Pengaturan observer: Animasi jalan saat 15% elemen terlihat di layar
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    // Ambil semua elemen dengan class 'reveal-on-scroll'
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const calculateQuickBMI = (e) => {
    e.preventDefault();
    if (quickHeight && quickWeight) {
      const bmi = (quickWeight / Math.pow(quickHeight / 100, 2)).toFixed(1);
      let status = "Normal";
      if (bmi < 18.5) status = "Kurus";
      else if (bmi >= 25 && bmi < 30) status = "Overweight";
      else if (bmi >= 30) status = "Obesitas";
      setQuickResult({ bmi, status });
    }
  };

  const resetQuickBMI = () => {
    setQuickResult(null);
    setQuickHeight("");
    setQuickWeight("");
  };

  const scrollToFeatures = () => {
    const featuresArea = document.getElementById("info-features");
    if (featuresArea) {
      featuresArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <div className="landing-wrapper">
        {/* --- HERO SECTION --- */}
        <div className="hero-section">
          <div className="hero-glow glow-1"></div>
          <div className="hero-glow glow-2"></div>

          <div className="hero-container">
            <div className="hero-text-content">
              <div className="modern-badge">
                <span className="badge-icon">✨</span> Revolusi Gaya Hidup Sehat
              </div>

              <h1 className="hero-title">
                <span className="gradient-text">AAI</span> Nutricare
              </h1>

              <p className="hero-description">
                Pelacak Gizi & BMI Harian personal Anda. Pantau asupan kalori
                dengan mudah, capai target berat badan ideal, dan mulailah gaya
                hidup sehat dari sekarang.
              </p>

              <div className="hero-action-buttons">
                <Link to="/register" className="btn-modern-primary">
                  Mulai Sekarang
                </Link>
                <Link to="/login" className="btn-modern-secondary">
                  Masuk
                </Link>
              </div>
            </div>

            <div className="hero-visual-content">
              <div className="premium-image-frame">
                <img
                  src="/fotolandingpage.jpeg"
                  alt="Preview AAI Nutricare"
                  className="hero-image"
                />
                <div className="floating-tag tag-top">🥗 Gizi Terjaga</div>
                <div className="floating-tag tag-bottom">
                  🎯 Target Tercapai
                </div>
              </div>

              {/* QUICK BMI CALCULATOR */}
              <div className="quick-bmi-card">
                <div className="quick-bmi-header">
                  <h4>💡 Cek BMI Cepat</h4>
                  <p>Masukkan data untuk hasil instan</p>
                </div>
                <form onSubmit={calculateQuickBMI} className="quick-bmi-form">
                  <div className="quick-input-group">
                    <input
                      type="number"
                      placeholder="Tinggi (cm)"
                      value={quickHeight}
                      onChange={(e) => setQuickHeight(e.target.value)}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Berat (kg)"
                      value={quickWeight}
                      onChange={(e) => setQuickWeight(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-quick-calc">
                    Hitung
                  </button>
                </form>

                {quickResult && (
                  <div className="quick-result-overlay">
                    <div className="result-main">
                      <span className="res-bmi">{quickResult.bmi}</span>
                      <span
                        className={`res-status ${quickResult.status.toLowerCase()}`}
                      >
                        {quickResult.status}
                      </span>
                    </div>
                    <p className="res-cta">
                      Ingin menyimpan hasil ini dan memantau progres harianmu?
                      <Link to="/register"> Daftar Sekarang!</Link>
                    </p>
                    <button onClick={resetQuickBMI} className="btn-reset-quick">
                      Hitung Ulang ↺
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- FITUR / INFO SECTION --- */}
        <div id="info-features" className="features-section">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>

          {/* Animasi Fade Up pada Judul */}
          <div className="features-header reveal-on-scroll fade-up">
            <h2>
              Kenapa Memilih{" "}
              <span className="text-highlight">AAI Nutricare?</span>
            </h2>
            <p>
              Semua alat yang Anda butuhkan untuk mencapai tubuh ideal, dalam
              satu tempat.
            </p>
          </div>

          <div id="about-section" className="about-wrapper">
            {/* Animasi Masuk dari Kiri */}
            <div className="about-text-content reveal-on-scroll fade-left">
              <h3 className="about-title">Asisten Kesehatan Pribadimu</h3>
              <p>
                <strong>AAI Nutricare</strong> bukan sekadar aplikasi pencatat
                kalori biasa. Kami mengerti bahwa setiap tubuh memiliki
                kebutuhan unik.
                <br />
                <br />
                Melalui antarmuka yang cerdas, kami mempermudah Anda melacak
                gizi harian, menganalisis status BMI secara <em>real-time</em>,
                dan merancang perjalanan menuju berat badan idaman. Fokus pada
                tujuan Anda, biarkan kami yang mengurus perhitungannya.
              </p>
              <ul className="about-checkmarks">
                <li>✅ Analisis kalori otomatis</li>
                <li>✅ Panduan BMI yang disesuaikan</li>
                <li>✅ Evaluasi progres setiap saat</li>
              </ul>
            </div>

            {/* Animasi Masuk dari Kanan */}
            <div className="about-visual-content">
              <div className="reveal-on-scroll fly-in-right delay-100">
                <div className="floating-stat-card card-1 interactive-card">
                  <span className="stat-icon">🔥</span>
                  <div>
                    <h4>500 kcal</h4>
                    <p>Kalori Terbakar</p>
                  </div>
                </div>
              </div>

              <div className="reveal-on-scroll fly-in-right delay-300">
                <div className="floating-stat-card card-2 interactive-card">
                  <span className="stat-icon">🎯</span>
                  <div>
                    <h4>65 kg</h4>
                    <p>Target Ideal</p>
                  </div>
                </div>
              </div>

              <div className="reveal-on-scroll fly-in-right delay-500">
                <div className="floating-stat-card card-3 interactive-card">
                  <span className="stat-icon">🥗</span>
                  <div>
                    <h4>Seimbang</h4>
                    <p>Status Gizi Hari Ini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="unggulan-header reveal-on-scroll fade-up">
            <h3>
              <span className="text-highlight">Fitur Unggulan</span> Kami
            </h3>
            <p>
              Jelajahi alat canggih yang siap membantu perjalanan sehat Anda
              sehari-hari.
            </p>
          </div>

          <div className="features-grid">
            {/* Animasi Staggered Zoom In (Bergantian) */}
            <div className="reveal-on-scroll zoom-in delay-100">
              <div className="feature-card">
                <div className="feature-icon glass-icon float-hover">⚖️</div>
                <h3>BMI Cerdas</h3>
                <p>
                  Ketahui persis di mana posisi kesehatanmu. Sistem kami
                  menghitung Indeks Massa Tubuh secara instan dan memberikan
                  panduan status idealmu.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll zoom-in delay-200">
              <div className="feature-card">
                <div className="feature-icon glass-icon float-hover">🥗</div>
                <h3>Jurnal Kalori</h3>
                <p>
                  Catat setiap makanan dengan mudah. Kontrol batas asupan kalori
                  harianmu agar tetap seimbang tanpa harus merasa kelaparan.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll zoom-in delay-300">
              <div className="feature-card">
                <div className="feature-icon glass-icon float-hover">🎯</div>
                <h3>Target Akurat</h3>
                <p>
                  Tetapkan tujuanmu! Ingin menurunkan atau menaikkan berat
                  badan? Pantau histori harianmu dan jadikan evaluasi yang
                  memotivasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- CARA KERJA SECTION (3 LANGKAH MUDAH) --- */}
        <div className="how-it-works-section">
          <div className="section-header-centered reveal-on-scroll fade-up">
            <div className="modern-badge">
              <span className="badge-icon">🚀</span> Langkah Mudah
            </div>
            <h2>
              Cara Kerja <span className="text-highlight">AAI Nutricare</span>
            </h2>
            <p>
              Mulai perjalanan sehatmu dalam hitungan menit. Tanpa ribet, tanpa
              pusing.
            </p>
          </div>

          <div className="steps-container">
            <div className="reveal-on-scroll fade-up delay-100 step-wrapper">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon-big floating-icon">📝</div>
                <h3>Input Data</h3>
                <p>
                  Masukkan tinggi, berat, dan target berat badan idealmu di
                  profil pengguna.
                </p>
              </div>
            </div>

            <div className="step-arrow reveal-on-scroll zoom-in delay-200 arrow-bounce">
              ➔
            </div>

            <div className="reveal-on-scroll fade-up delay-300 step-wrapper">
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon-big floating-icon">📸</div>
                <h3>Catat Konsumsi</h3>
                <p>
                  Pilih makanan dari database kami yang lengkap atau catat
                  asupan harianmu.
                </p>
              </div>
            </div>

            <div className="step-arrow reveal-on-scroll zoom-in delay-400 arrow-bounce">
              ➔
            </div>

            <div className="reveal-on-scroll fade-up delay-500 step-wrapper">
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon-big floating-icon">📊</div>
                <h3>Lihat Hasil</h3>
                <p>
                  Pantau grafik kemajuanmu setiap minggu dan capai target
                  sehatmu lebih cepat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- ARTIKEL EDUKASI KALORI SECTION --- */}
        <div className="article-section">
          <div className="article-container">
            <div className="article-text-content reveal-on-scroll fade-left">
              <div
                className="modern-badge"
                style={{
                  marginBottom: "15px",
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "#10b981",
                  border: "none",
                }}
              >
                <span className="badge-icon">📚</span> Edukasi Gizi
              </div>
              <h2 className="article-title">
                Memahami <span className="text-highlight">Kalori</span> dalam
                Piring Anda
              </h2>
              <p className="article-description">
                Kalori adalah sumber energi utama. Namun, kalori berlebih yang
                tidak terbakar akan disimpan sebagai lemak tubuh. Mengetahui
                estimasi kalori dari makanan sehari-hari adalah langkah cerdas
                menuju berat badan ideal.
              </p>

              <div className="article-tips">
                <div className="tip-box interactive-card">
                  <div className="tip-icon">📉</div>
                  <div>
                    <h4>Defisit Kalori</h4>
                    <p>
                      Kunci diet: Konsumsi kalori lebih sedikit dari yang
                      dibakar tubuh.
                    </p>
                  </div>
                </div>
                <div className="tip-box interactive-card">
                  <div className="tip-icon">📈</div>
                  <div>
                    <h4>Surplus Kalori</h4>
                    <p>
                      Fokus menambah massa: Konsumsi lebih banyak protein
                      berkualitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="article-visual-content reveal-on-scroll fade-right delay-200">
              <div className="app-widget-card float-hover">
                <div className="widget-header">
                  <div>
                    <h4>Database Makanan Harian</h4>
                    <p>Estimasi rata-rata porsi normal</p>
                  </div>
                  <span className="badge-warning blink-soft">
                    Perhatikan Porsi!
                  </span>
                </div>

                <div className="food-list-container scrollable-food-list">
                  <div className="category-tag">Energi & Karbo</div>
                  {[
                    {
                      image: "/nasi-putih.jpeg",
                      name: "Nasi Putih",
                      portion: "1 Centong",
                      cal: 130,
                      color: "#3b82f6",
                      fill: "30%",
                    },
                    {
                      image: "/roti-gandum.jpeg",
                      name: "Roti Gandum",
                      portion: "1 Lembar",
                      cal: 67,
                      color: "#3b82f6",
                      fill: "15%",
                    },
                    {
                      image: "/mie-instan.jpeg",
                      name: "Mie Instan",
                      portion: "1 Bungkus",
                      cal: 380,
                      color: "#ef4444",
                      fill: "85%",
                    },
                    {
                      image: "/kentang-rebus.jpeg",
                      name: "Kentang Rebus",
                      portion: "100g",
                      cal: 87,
                      color: "#3b82f6",
                      fill: "20%",
                    },
                  ].map((f, i) => (
                    <FoodItem key={i} {...f} />
                  ))}

                  <div className="category-tag mt-4">Protein & Lauk</div>
                  {[
                    {
                      image: "/ayam-dada-bakar.jpeg",
                      name: "Dada Ayam Bakar",
                      portion: "100g",
                      cal: 165,
                      color: "#10b981",
                      fill: "40%",
                    },
                    {
                      image: "/telur-rebus.jpeg",
                      name: "Telur Rebus",
                      portion: "1 Butir",
                      cal: 78,
                      color: "#10b981",
                      fill: "18%",
                    },
                    {
                      image: "/ikan-bakar.jpeg",
                      name: "Ikan Bakar",
                      portion: "100g",
                      cal: 140,
                      color: "#10b981",
                      fill: "35%",
                    },
                    {
                      image: "/daging-sapi.jpeg",
                      name: "Daging Sapi",
                      portion: "100g",
                      cal: 250,
                      color: "#f59e0b",
                      fill: "60%",
                    },
                  ].map((f, i) => (
                    <FoodItem key={i} {...f} />
                  ))}

                  <div className="category-tag mt-4">Camilan & Buah</div>
                  {[
                    {
                      image: "/gorengan-bakwan.jpeg",
                      name: "Gorengan Bakwan",
                      portion: "1 Buah",
                      cal: 140,
                      color: "#ef4444",
                      fill: "35%",
                    },
                    {
                      image: "/pisang-ambon.jpeg",
                      name: "Pisang Ambon",
                      portion: "1 Buah",
                      cal: 105,
                      color: "#10b981",
                      fill: "25%",
                    },
                    {
                      image: "/apel-merah.jpeg",
                      name: "Apel Merah",
                      portion: "1 Buah",
                      cal: 52,
                      color: "#10b981",
                      fill: "12%",
                    },
                    {
                      image: "/alpukat.jpeg",
                      name: "Alpukat",
                      portion: "100g",
                      cal: 160,
                      color: "#f59e0b",
                      fill: "40%",
                    },
                  ].map((f, i) => (
                    <FoodItem key={i} {...f} />
                  ))}
                </div>
                <div className="widget-footer">
                  <p>Dan 500+ database lainnya di dalam aplikasi...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- APP DOWNLOAD SECTION --- */}
        <div className="app-download-section">
          <div className="app-download-wrapper reveal-on-scroll fade-up">
            <div className="download-bubble bubble-1"></div>
            <div className="download-bubble bubble-2"></div>

            <div className="floating-android pulse-glow">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24"
                width="24"
              >
                <path d="M17.523 15.3414C17.523 15.914 17.0602 16.3768 16.4875 16.3768C15.9149 16.3768 15.4521 15.914 15.4521 15.3414C15.4521 14.7687 15.9149 14.306 16.4875 14.306C17.0602 14.306 17.523 14.7687 17.523 15.3414ZM7.51246 16.3768C8.08511 16.3768 8.54789 15.914 8.54789 15.3414C8.54789 14.7687 8.08511 14.306 7.51246 14.306C6.93981 14.306 6.47703 14.7687 6.47703 15.3414C6.47703 15.914 6.93981 16.3768 7.51246 16.3768ZM17.9715 10.9701L19.8247 7.76022C19.9146 7.60447 19.8611 7.40539 19.7054 7.31557C19.5496 7.22576 19.3506 7.27926 19.2607 7.43501L17.3789 10.6946C15.7725 9.96766 13.9398 9.54395 12 9.54395C10.0602 9.54395 8.22748 9.96766 6.62111 10.6946L4.73926 7.43501C4.64945 7.27926 4.45037 7.22576 4.29462 7.31557C4.13887 7.40539 4.08537 7.60447 4.17518 7.76022L6.02846 10.9701C2.61051 12.8339 0.316867 16.3687 0 20.5361H24C23.6831 16.3687 21.3895 12.8339 17.9715 10.9701Z"></path>
              </svg>
            </div>

            <div className="app-dl-content">
              <div className="app-dl-badge">
                <span className="badge-icon">📱</span> Aplikasi Mobile
              </div>
              <h2 className="app-dl-title">
                Download Aplikasi
                <br />
                AAI Nutricare Sekarang!
              </h2>
              <p className="app-dl-desc">
                Akses semua fitur kesehatan langsung dari smartphone Anda.
                Pencatatan asupan makanan, kalkulator BMI cerdas, dan analisis
                gizi dalam genggaman.
              </p>
              <div className="app-dl-features">
                <span className="app-dl-feature-pill">
                  <span className="icon">📸</span> Scan Makanan
                </span>
                <span className="app-dl-feature-pill">
                  <span className="icon">📊</span> Jurnal Kalori
                </span>
                <span className="app-dl-feature-pill">
                  <span className="icon">📈</span> Pantau Progres
                </span>
              </div>
              <div
                className="btn-download-app disabled-btn"
                title="Segera Hadir!"
              >
                <div className="dl-btn-texts">
                  <span className="small">DOWNLOAD UNTUK</span>
                  <span className="big">Android</span>
                </div>
                <span className="dl-btn-arrow">🔒</span>
              </div>
              <p className="app-dl-note warning-text">
                <span className="info-icon">🚧</span> Aplikasi mobile sedang
                dalam tahap pembuatan
              </p>
            </div>

            <div className="app-dl-visual reveal-on-scroll zoom-in delay-200">
              <img
                src="/preview-mobile.jpeg"
                alt="AAI Nutricare Mobile App"
                className="phone-mockup float-hover"
              />
            </div>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div id="faq-section" className="faq-section">
          <div className="faq-header reveal-on-scroll fade-up">
            <h2>
              Pertanyaan <span className="text-highlight">Umum</span>
            </h2>
            <p>
              Temukan jawaban untuk pertanyaan yang paling sering diajukan
              seputar AAI Nutricare.
            </p>
          </div>

          <div className="faq-grid">
            {[
              {
                q: "Apakah AAI Nutricare gratis digunakan?",
                a: "Ya! Fitur utama seperti kalkulator BMI dan jurnal kalori harian dapat Anda gunakan sepenuhnya secara gratis.",
              },
              {
                q: "Bagaimana cara aplikasi ini menghitung kalori?",
                a: "Sistem kami akan mengurangi target kalori harian Anda secara otomatis setiap kali Anda menambahkan makanan ke dalam jurnal.",
              },
              {
                q: "Apakah data kesehatan saya aman?",
                a: "Keamanan privasi Anda adalah prioritas kami. Data berat badan dan riwayat asupan gizi hanya bisa diakses oleh Anda sendiri.",
              },
              {
                q: "Apakah cocok untuk menaikkan berat badan?",
                a: "Tentu saja! Sesuaikan target di profil Anda, dan sistem akan membantu memantau asupan kalori surplus Anda.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`reveal-on-scroll fade-up delay-${(index + 1) * 100}`}
              >
                <div className="faq-card interactive-card">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CALL TO ACTION (CTA) SECTION --- */}
        <div className="cta-section">
          <div className="reveal-on-scroll zoom-in delay-100">
            <div className="cta-box">
              <h2>Siap Menjaga Kesehatan Pribadi Anda?</h2>
              <p>
                Bergabunglah dengan ribuan pengguna yang telah mempercayai AAI
              </p>
              <Link
                to="/register"
                className="btn-modern-primary btn-cta shake-btn"
              >
                Mulai Sekarang - Gratis
              </Link>
            </div>
          </div>
        </div>

        {/* --- FOOTER SECTION --- */}
        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-brand">
                <h2 className="footer-logo">
                  <span className="text-highlight">AAI</span> Nutricare
                </h2>
                <p className="footer-brand-desc">
                  Solusi digital cerdas untuk memantau gizi dan kesehatan tubuh
                  Anda. Mulailah perjalanan hidup sehat bersama kami.
                </p>
                <div className="footer-socials">
                  <a href="#" className="social-icon">
                    FB
                  </a>
                  <a href="#" className="social-icon">
                    IG
                  </a>
                  <a href="#" className="social-icon">
                    TW
                  </a>
                  <a href="#" className="social-icon">
                    YT
                  </a>
                </div>
              </div>

              <div className="footer-links-group">
                <div className="footer-links-col">
                  <h4>Navigasi</h4>
                  <ul>
                    <li>
                      <Link to="/">Beranda</Link>
                    </li>
                    <li>
                      <a href="#info-features">Fitur</a>
                    </li>
                    <li>
                      <a href="#faq-section">FAQ</a>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-links-col">
                  <h4>Layanan</h4>
                  <ul>
                    <li>
                      <Link to="/jurnal">Jurnal Kalori</Link>
                    </li>
                    <li>
                      <Link to="/database-makanan">Database Makanan</Link>
                    </li>
                    <li>
                      <Link to="/progres-laporan">Progres Laporan</Link>
                    </li>
                    <li>
                      <Link to="/profil-target">Profil Target</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-links-col">
                  <h4>Dukungan</h4>
                  <ul>
                    <li>
                      <a href="#">Pusat Bantuan</a>
                    </li>
                    <li>
                      <a href="#">Kebijakan Privasi</a>
                    </li>
                    <li>
                      <a href="#">Syarat & Ketentuan</a>
                    </li>
                    <li>
                      <a href="#">Hubungi Kami</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                &copy; 2026{" "}
                <span className="text-highlight">AAI Nutricare</span>. All
                rights reserved.
              </p>
              <div className="footer-legal">
                <span>Dibuat dengan ❤️ untuk Indonesia Sehat</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
