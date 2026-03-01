import React, { useEffect, useState } from "react";
import "./Beranda.css";

const Beranda = () => {
  const [animateChart, setAnimateChart] = useState(false);
  
  // 1. State untuk Nama dan Data BMI
  const [namaPengguna, setNamaPengguna] = useState("Sang Juara");
  const [bmiInfo, setBmiInfo] = useState({ nilai: "0.0", status: "Belum ada data", emoji: "⚖️" });

  useEffect(() => {
    setTimeout(() => setAnimateChart(true), 300); // Trigger animasi setelah 300ms

    // --- LOGIKA MENGAMBIL NAMA PENGGUNA ---
    const storedUser = localStorage.getItem("aai_user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setNamaPengguna(parsedUser.name); // Mengubah nama sesuai akun yang login
    }

    // --- LOGIKA KALKULATOR BMI OTOMATIS ---
    const storedFisik = localStorage.getItem("aai_data_fisik");
    if (storedFisik) {
      const parsedFisik = JSON.parse(storedFisik);
      
      // Rumus BMI: Berat (kg) / (Tinggi (m) * Tinggi (m))
      const tinggiMeter = parseFloat(parsedFisik.tinggi) / 100;
      const beratKilo = parseFloat(parsedFisik.berat);

      if (tinggiMeter > 0 && beratKilo > 0) {
        const hitungBmi = beratKilo / (tinggiMeter * tinggiMeter);
        let statusBmi = "";
        let emojiBmi = "";

        // Penentuan Status Kesehatan
        if (hitungBmi < 18.5) {
          statusBmi = "Kurus (Underweight)";
          emojiBmi = "🧊";
        } else if (hitungBmi >= 18.5 && hitungBmi <= 24.9) {
          statusBmi = "Normal (Ideal)";
          emojiBmi = "✅";
        } else if (hitungBmi >= 25 && hitungBmi <= 29.9) {
          statusBmi = "Kelebihan (Overweight)";
          emojiBmi = "⚠️";
        } else {
          statusBmi = "Obesitas";
          emojiBmi = "🚨";
        }

        // Menyimpan hasil hitungan ke dalam state
        setBmiInfo({
          nilai: hitungBmi.toFixed(1), // Ambil 1 angka di belakang koma
          status: statusBmi,
          emoji: emojiBmi
        });
      }
    }
  }, []);

  return (
    <div className="beranda-wow-container">
      {/* HEADER BANNER - Nama sudah menjadi dinamis */}
      <div className="welcome-banner glass-panel slide-up">
        <div className="banner-text">
          <h1>Selamat Pagi, {namaPengguna}! ☀️</h1>
          <p>
            Anda sudah mencapai <strong>45%</strong> dari target kalori hari
            ini. Terus semangat!
          </p>
        </div>
        <div className="banner-illustration">🚀</div>
      </div>

      <div className="wow-grid">
        {/* SVG ANIMATED DONUT CHART */}
        <div className="glass-panel main-stat-card slide-up delay-1">
          <h3>Ringkasan Kalori</h3>
          <div className="donut-chart-container">
            <svg viewBox="0 0 200 200" className="wow-donut">
              <circle cx="100" cy="100" r="80" className="donut-bg" />
              <circle
                cx="100"
                cy="100"
                r="80"
                className={`donut-progress ${animateChart ? "fill-animation" : ""}`}
                strokeDasharray="502"
                strokeDashoffset={animateChart ? "276" : "502"}
              />
            </svg>
            <div className="donut-center-text">
              <span className="cal-number">1,100</span>
              <span className="cal-label">Kkal Tersisa</span>
            </div>
          </div>
          <div className="stat-details">
            <div className="stat-box">
              <span className="dot target"></span> Target: 2000
            </div>
            <div className="stat-box">
              <span className="dot eaten"></span> Terpakai: 900
            </div>
          </div>
        </div>

        {/* MACRO PROGRESS BARS */}
        <div className="glass-panel macro-card slide-up delay-2">
          <h3>Gizi Makro (Gram)</h3>

          <div className="macro-wow-item">
            <div className="macro-labels">
              <span className="m-name">🍞 Karbohidrat</span>
              <span className="m-value">120 / 250g</span>
            </div>
            <div className="macro-bar-bg">
              <div className={`macro-bar-fill blue ${animateChart ? "fill-48" : ""}`}></div>
            </div>
          </div>

          <div className="macro-wow-item">
            <div className="macro-labels">
              <span className="m-name">🍗 Protein</span>
              <span className="m-value">80 / 120g</span>
            </div>
            <div className="macro-bar-bg">
              <div className={`macro-bar-fill green ${animateChart ? "fill-66" : ""}`}></div>
            </div>
          </div>

          <div className="macro-wow-item">
            <div className="macro-labels">
              <span className="m-name">🥑 Lemak</span>
              <span className="m-value">30 / 60g</span>
            </div>
            <div className="macro-bar-bg">
              <div className={`macro-bar-fill orange ${animateChart ? "fill-50" : ""}`}></div>
            </div>
          </div>
        </div>

        {/* --- TAMBAHAN BARU: KARTU STATUS BMI --- */}
        <div className="glass-panel main-stat-card slide-up delay-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3>Status BMI Kamu</h3>
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <span style={{ fontSize: "4rem", fontWeight: "800", color: "#10b981", display: "block", marginBottom: "15px" }}>
              {bmiInfo.nilai}
            </span>
            <span style={{ fontSize: "1.05rem", fontWeight: "600", padding: "10px 20px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid #10b981", borderRadius: "30px", color: "#059669" }}>
              {bmiInfo.emoji} {bmiInfo.status}
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#64748b", textAlign: "center", marginTop: "auto" }}>
            *Berdasarkan tinggi & berat badanmu
          </p>
        </div>

      </div>
    </div>
  );
};

export default Beranda;