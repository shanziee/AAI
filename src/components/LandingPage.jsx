import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./LandingPage.css";
import "./AppDownloadV2.css";

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
                menjadi laboratorium kesegaran instan. Akurasi 98% dalam
                hitungan detik.
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
                    <img
                      src="/preview-mobile.jpeg"
                      alt="App Interface"
                      className="screen-img"
                    />
                    <div className="scanner-overlay">
                      <div className="scan-laser"></div>
                      <div className="scan-data-box">
                        <span className="scan-label">Pisang Cavendish</span>
                        <div className="scan-bar">
                          <div className="fill-90"></div>
                        </div>
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
            <span>
              STOP FOOD WASTE • AI POWERED • HEALTHY LIFESTYLE • SMART DETECTION
              • SAVE MONEY • STOP FOOD WASTE • AI POWERED • HEALTHY LIFESTYLE •
              SMART DETECTION • SAVE MONEY •
            </span>
          </div>
        </div>

        {/* --- 3. IMPACT BENTO GRID --- */}
        <section id="problem-section" className="bento-section">
          <div className="ultra-container">
            <h2 className="section-title-center">
              Dampak Nyata <br />
              <span className="highlight-green">Untuk Masa Depan</span>
            </h2>

            <div className="bento-grid">
              {/* Box 1: AI Accuracy (Large) */}
              <div className="bento-box box-large glowing-border">
                <div className="bento-content">
                  <div className="icon-circle">🔬</div>
                  <h3>Presisi Tanpa Kompromi</h3>
                  <p>
                    AI kami mendeteksi degradasi seluler buah sebelum mata
                    manusia dapat melihatnya, mencegah Anda mengonsumsi toksin
                    jamur yang berbahaya.
                  </p>
                  <div className="ai-visualizer">
                    <div className="bar b1"></div>
                    <div className="bar b2"></div>
                    <div className="bar b3"></div>
                    <div className="bar b4"></div>
                    <div className="bar b5"></div>
                  </div>
                </div>
              </div>

              {/* Box 2: Environmental (Tall) */}
              <div className="bento-box box-tall dark-mode">
                <div className="bento-content">
                  <div className="speed-meter">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" className="bg-ring" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="progress-ring"
                        style={{ strokeDashoffset: 30 }}
                      />
                    </svg>
                    <div className="speed-text">
                      <span className="number">30%</span>
                      <span className="label">Less Waste</span>
                    </div>
                  </div>
                  <h3>Misi Hijau.</h3>
                  <p>
                    Setiap buah yang tidak terbuang berarti pengurangan gas
                    metana di TPA dan penghematan air tanah yang signifikan.
                  </p>
                </div>
              </div>

              {/* Box 3: Economy (Wide) */}
              <div className="bento-box box-wide image-bg">
                <div className="overlay-dark"></div>
                <div className="bento-content relative">
                  <h3>Efisiensi Ekonomi Pedagang</h3>
                  <p>
                    Hindari kerugian total. Sistem kami memberi tahu kapan harus
                    melakukan diskon cepat sebelum buah kehilangan nilai
                    jualnya.
                  </p>
                  <div className="stats-row">
                    <div className="stat">
                      <strong>Rp 5jt+</strong>
                      <span>Potensi Hemat/Bln</span>
                    </div>
                    <div className="stat">
                      <strong>98%</strong>
                      <span>Kepuasan Pedagang</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4: Kesehatan */}
              <div className="bento-box box-small">
                <div className="bento-content">
                  <div className="icon-circle">🛡️</div>
                  <h3>Proteksi Keluarga</h3>
                  <p>Pastikan gizi maksimal untuk buah hati Anda.</p>
                </div>
              </div>

              {/* Box 5: Komunitas */}
              <div className="bento-box box-small">
                <div className="bento-content">
                  <div className="icon-circle">🤝</div>
                  <h3>Donasi Cerdas</h3>
                  <p>Salurkan buah layak ke komunitas yang membutuhkan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. MOBILE APP DOWNLOAD SECTION --- */}
        <section id="faq-section" className="app-download-section-v2">
          <div className="ultra-container">
            <div className="app-flex-container">
              <div className="app-content-v2">
                <div className="app-badge-v2">📱 Aplikasi Mobile</div>
                <h2 className="app-title-v2">
                  Download Aplikasi <br />
                  <span className="highlight-green">FruitScan AI</span> Sekarang!
                </h2>
                <p className="app-desc-v2">
                  Akses semua fitur kesehatan buah langsung dari smartphone Anda. 
                  Deteksi AI, riwayat inventaris, dan tips edukasi dalam satu genggaman.
                </p>

                <div className="app-features-list-v2">
                  <div className="app-feature-v2">
                    <span className="check-icon">✓</span>
                    <span>Scan Buah AI</span>
                  </div>
                  <div className="app-feature-v2">
                    <span className="check-icon">✓</span>
                    <span>Notifikasi Stok 24/7</span>
                  </div>
                  <div className="app-feature-v2">
                    <span className="check-icon">✓</span>
                    <span>Riwayat Deteksi</span>
                  </div>
                </div>

                <a href="#" className="btn-android-v2">
                  <div className="android-icon">🤖</div>
                  <div className="btn-text">
                    <span>DOWNLOAD UNTUK</span>
                    <strong>Android</strong>
                  </div>
                </a>
              </div>

              <div className="app-visual-v2">
                <div className="phone-mockup-v2">
                  <img src="/preview-mobile.jpeg" alt="Mobile App" />
                  <div className="floating-notif">
                    <span className="notif-icon">⚠️</span>
                    <div className="notif-text">
                      <strong>Stok Kritis!</strong>
                      <p>Pisang Anda akan busuk dalam 2 hari.</p>
                    </div>
                  </div>
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
                <h2>
                  Siap Mengubah Cara Anda <br />
                  Mengkonsumsi Buah?
                </h2>
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
