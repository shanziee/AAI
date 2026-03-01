import React, { useState } from "react";
import "./FruitScanner.css";

const FruitScanner = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const simulateScan = () => {
    setLoading(true);
    // Simulasi proses AI selama 2 detik
    setTimeout(() => {
      setResult({
        nama: "Pisang",
        status: "Mulai Busuk",
        confidence: "91%",
        estimasi: "2",
        rekomendasi: "Sebaiknya Segera dikonsumsi",
        warnaStatus: "#f59e0b" // Orange untuk peringatan
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="fruit-scanner-container">
      <div className="glass-panel scanner-card">
        <h2>🍎 Scan Kesehatan Buah</h2>
        <p>Unggah foto buah untuk menganalisis tingkat kesegaran dan kelayakan konsumsi.</p>

        <div className="upload-section">
          <label htmlFor="file-upload" className="custom-upload-btn">
            {image ? "Ganti Foto" : "Pilih Foto Buah"}
          </label>
          <input 
            id="file-upload" 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{ display: 'none' }}
          />
        </div>

        {image && (
          <div className="preview-container">
            <img src={image} alt="Preview Buah" className="fruit-preview" />
            {!result && !loading && (
              <button className="scan-button" onClick={simulateScan}>
                Mulai Deteksi AI 🚀
              </button>
            )}
          </div>
        )}

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Menganalisis tekstur dan warna...</p>
          </div>
        )}

        {result && (
          <div className="result-card slide-up">
            <h3>Hasil Analisis:</h3>
            <div className="result-grid">
              <div className="result-item">
                <span className="label">Nama Buah</span>
                <span className="value">: {result.nama}</span>
              </div>
              <div className="result-item">
                <span className="label">Status</span>
                <span className="value" style={{ color: result.warnaStatus, fontWeight: 'bold' }}>
                  : {result.status}
                </span>
              </div>
              <div className="result-item">
                <span className="label">Confidence status</span>
                <span className="value">: {result.confidence}</span>
              </div>
              <div className="result-item">
                <span className="label">Estimasi Simpan</span>
                <span className="value">: {result.estimasi} hari lagi</span>
              </div>
              <div className="result-item recommendation">
                <span className="label">Rekomendasi</span>
                <span className="value">: {result.rekomendasi}</span>
              </div>
            </div>
            
            <div className="problem-solve-badge">
              <span>💡 Membantu mengurangi food waste</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FruitScanner;
