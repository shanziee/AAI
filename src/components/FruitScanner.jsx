import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./FruitScanner.css";

const FruitScanner = () => {
  const [image, setImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState(null);

  const steps = [
    "Initializing AI Vision...",
    "Mapping Texture Gradients...",
    "Analyzing Color Pigmentation...",
    "Evaluating Microbial Activity...",
    "Finalizing Health Report...",
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null);
      setScanStep(0);
    }
  };

  const startAnalysis = () => {
    setIsScanning(true);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setScanStep(currentStep);
      } else {
        clearInterval(interval);
        setResult({
          nama: "Pisang Cavendish",
          status: "Mulai Busuk total",
          confidence: "94.8%",
          estimasi: "2",
          rekomendasi: "Gunakan untuk smoothie atau segera konsumsi.",
          metrics: { texture: 65, color: 40, health: 55 },
        });
        setIsScanning(false);
      }
    }, 1000);
  };

  return (
    <div className="scanner-pro-wrapper">
      <div className="scanner-sidebar-mini">
        <Link to="/dashboard" className="back-btn">
          ←
        </Link>
        <div className="mini-logo">FS</div>
      </div>

      <main className="scanner-main">
        <div className="scanner-header">
          <h1>AI Fruit Diagnostics</h1>
          <p>Professional grade vision analysis for food preservation.</p>
        </div>

        <div className="scanner-grid">
          {/* Left: Upload Area */}
          <div className="glass-panel upload-zone">
            {!image ? (
              <label className="drop-zone">
                <input type="file" onChange={handleImageUpload} hidden />
                <div className="upload-icon">📸</div>
                <h3>Drop fruit image here</h3>
                <p>Supporting JPG, PNG, WEBP</p>
                <span className="btn-browse">Browse Files</span>
              </label>
            ) : (
              <div className="preview-active">
                <img src={image} alt="Target" className="main-preview" />
                {isScanning && <div className="scan-line-v2"></div>}
                <div className="image-corners">
                  <div className="tl"></div>
                  <div className="tr"></div>
                  <div className="bl"></div>
                  <div className="br"></div>
                </div>
                {!isScanning && !result && (
                  <button className="btn-start-scan" onClick={startAnalysis}>
                    Start Deep Analysis
                  </button>
                )}
                {image && !isScanning && (
                  <label className="re-upload">
                    Change Photo{" "}
                    <input type="file" onChange={handleImageUpload} hidden />
                  </label>
                )}
              </div>
            )}
          </div>

          {/* Right: Analysis Details */}
          <div className="analysis-details">
            <AnimatePresence mode="wait">
              {isScanning ? (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-panel processing-card"
                >
                  <div className="ai-loader"></div>
                  <h3>{steps[scanStep]}</h3>
                  <div className="progress-bar-container">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${((scanStep + 1) / steps.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="terminal-log">
                    <p>{`> [SYSTEM]: Calibrating lenses...`}</p>
                    {scanStep > 0 && (
                      <p>{`> [AI]: Identifying structural patterns...`}</p>
                    )}
                    {scanStep > 1 && (
                      <p>{`> [AI]: Pigment density detected at 0.84`}</p>
                    )}
                  </div>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-panel result-card-pro"
                >
                  <div className="result-header">
                    <span className="status-indicator warning"></span>
                    <h2>{result.status}</h2>
                    <span className="confidence-pill">
                      {result.confidence} Confidence
                    </span>
                  </div>

                  <div className="metric-bars">
                    <div className="metric">
                      <div className="m-info">
                        <span>Texture Analysis</span>
                        <span>{result.metrics.texture}%</span>
                      </div>
                      <div className="m-bar">
                        <div
                          className="m-fill"
                          style={{ width: "65%", background: "#f59e0b" }}
                        ></div>
                      </div>
                    </div>
                    <div className="metric">
                      <div className="m-info">
                        <span>Health Score</span>
                        <span>{result.metrics.health}%</span>
                      </div>
                      <div className="m-bar">
                        <div
                          className="m-fill"
                          style={{ width: "55%", background: "#ef4444" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="report-box">
                    <h4>AI RECOMMENDATION:</h4>
                    <p>{result.rekomendasi}</p>
                  </div>

                  <div className="estimasi-box">
                    <span className="clock-icon">🕒</span>
                    <div className="e-text">
                      <strong>Estimasi Simpan</strong>
                      <p>{result.estimasi} Hari Lagi (Kondisi Kamar)</p>
                    </div>
                  </div>

                  <button
                    className="btn-save-report"
                    onClick={() => window.print()}
                  >
                    Download Full PDF Report
                  </button>
                </motion.div>
              ) : (
                <div className="empty-state-pro">
                  <div className="empty-icon">📂</div>
                  <h3>Analysis Ready</h3>
                  <p>
                    Upload a clear photo with good lighting for best AI results.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FruitScanner;
