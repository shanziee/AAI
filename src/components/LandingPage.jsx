import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax Effect Simple
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <div className="super-landing-wrapper">
        {/* --- 1. ULTRA HERO SECTION --- */}
        <section className="ultra-hero">
          <div className="hero-bg-gradient"></div>
          
          <div className="ultra-container">
            <div className="hero-content-left">
              <div className="status-pill">
                <span className="dot-pulse"></span>
                <span>AI Vision V2.0 Online</span>
              </div>
              
              <h1 className="ultra-title">
                Selamatkan <br />
                <span className="text-outline">Makanan.</span> <br />
                <span className="text-gradient">Dompet.</span> <br />
                <span className="text-outline">Bumi.</span>
              </h1>
              
              <p className="ultra-desc">
                Teknologi deteksi buah berbasis AI yang mengubah kamera HP Anda 
                menjadi laboratorium kesegaran instan. Akurasi 98% dalam hitungan detik.
              </p>

              <div className="hero-btns">
                <Link to="/scan" className="btn-super-primary">
                  <span>Coba Scan Sekarang</span>
                  <div className="icon-arrow">→</div>
                </Link>
                <div className="user-avatars">
                  <div className="avatar-stack">
                    <img src="https://i.pravatar.cc/100?img=1" alt="User" />
                    <img src="https://i.pravatar.cc/100?img=5" alt="User" />
                    <img src="https://i.pravatar.cc/100?img=8" alt="User" />
                  </div>
                  <span>10k+ Pengguna</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-right">
              {/* 3D Floating Phone Mockup */}
              <div 
                className="phone-3d-container"
                style={{ transform: `translateY(${offsetY * 0.1}px)` }}
              >
                <div className="phone-bezel">
                  <div className="phone-screen">
                    <img src="/preview-mobile.jpeg" alt="App Interface" className="screen-img" />
                    <div className="scanner-overlay">
                      <div className="scan-laser"></div>
                      <div className="scan-data-box">
                        <span className="scan-label">Pisang Cavendish</span>
                        <div className="scan-bar"><div className="fill-90"></div></div>
                        <span className="scan-status">Segar (91%)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements behind phone */}
                <div className="float-bubble bubble-1">
                  <span>🍌</span>
                </div>
                <div className="float-bubble bubble-2">
                  <span>🍎</span>
                </div>
                <div className="float-bubble bubble-3">
                  <span>🥑</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. INFINITE MARQUEE --- */}
        <div className="marquee-strip">
          <div className="marquee-content">
            <span>STOP FOOD WASTE • AI POWERED • HEALTHY LIFESTYLE • SMART DETECTION • SAVE MONEY • STOP FOOD WASTE • AI POWERED • HEALTHY LIFESTYLE • SMART DETECTION • SAVE MONEY •</span>
          </div>
        </div>

        {/* --- 3. BENTO GRID FEATURES --- */}
        <section className="bento-section">
          <div className="ultra-container">
            <h2 className="section-title-center">
              Kecerdasan Buatan <br />
              <span className="highlight-green">Dalam Genggaman</span>
            </h2>

            <div className="bento-grid">
              {/* Box 1: AI Accuracy (Large) */}
              <div className="bento-box box-large glowing-border">
                <div className="bento-content">
                  <div className="icon-circle">🧠</div>
                  <h3>Deep Learning Core</h3>
                  <p>Model AI kami dilatih dengan jutaan dataset buah untuk membedakan lebam kecil vs busuk berbahaya.</p>
                  <div className="ai-visualizer">
                    <div className="bar b1"></div>
                    <div className="bar b2"></div>
                    <div className="bar b3"></div>
                    <div className="bar b4"></div>
                    <div className="bar b5"></div>
                  </div>
                </div>
              </div>

              {/* Box 2: Speed (Tall) */}
              <div className="bento-box box-tall dark-mode">
                <div className="bento-content">
                  <div className="speed-meter">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" className="bg-ring" />
                      <circle cx="50" cy="50" r="45" className="progress-ring" />
                    </svg>
                    <div className="speed-text">
                      <span className="number">0.8s</span>
                      <span className="label">Scan Time</span>
                    </div>
                  </div>
                  <h3>Instan.</h3>
                  <p>Tidak perlu menunggu. Hasil analisis muncul real-time.</p>
                </div>
              </div>

              {/* Box 3: Food Waste (Wide) */}
              <div className="bento-box box-wide image-bg">
                <div className="overlay-dark"></div>
                <div className="bento-content relative">
                  <h3>Kurangi Limbah, Hemat Rupiah</h3>
                  <p>Rata-rata pengguna menghemat Rp 500rb/bulan dengan manajemen stok buah yang lebih baik.</p>
                  <div className="stats-row">
                    <div className="stat">
                      <strong>12.5kg</strong>
                      <span>Diselamatkan</span>
                    </div>
                    <div className="stat">
                      <strong>Rp 1.2M</strong>
                      <span>Total Hemat</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4: Pedagang */}
              <div className="bento-box box-small">
                <div className="bento-content">
                  <div className="icon-circle">🏪</div>
                  <h3>Untuk Pedagang</h3>
                  <p>Sortir stok busuk otomatis.</p>
                </div>
              </div>

              {/* Box 5: Konsumen */}
              <div className="bento-box box-small">
                <div className="bento-content">
                  <div className="icon-circle">🏠</div>
                  <h3>Untuk Keluarga</h3>
                  <p>Pastikan gizi terbaik.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. CTA / DOWNLOAD --- */}
        <section className="super-cta">
          <div className="ultra-container">
            <div className="cta-card-glass">
              <div className="cta-text">
                <h2>Siap Mengubah Cara Anda <br />Mengkonsumsi Buah?</h2>
                <p>Bergabunglah dengan revolusi FruitScan AI hari ini.</p>
                <Link to="/scan" className="btn-white-pulse">
                  Mulai Deteksi Gratis
                </Link>
              </div>
              <div className="cta-shapes">
                <div className="shape-circle"></div>
                <div className="shape-triangle"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="super-footer">
          <div className="ultra-container footer-flex">
            <div className="footer-brand">
              <h3>FruitScan.AI</h3>
              <p>2026 © Solusi Pangan Masa Depan</p>
            </div>
            <div className="footer-nav">
              <Link to="/scan">Scan</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
