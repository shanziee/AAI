import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ProgresLaporan.css";

// Mock Data Progres Berat Badan Mingguan
const weightData = [
  { minggu: "Minggu 1", berat: 70 },
  { minggu: "Minggu 2", berat: 69.2 },
  { minggu: "Minggu 3", berat: 68.5 },
  { minggu: "Minggu 4", berat: 68.0 }, // Target saat ini
];

const ProgresLaporan = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="progres-layout">
      {/* --- TOP BAR --- */}
      <header className="top-bar-progres">
        <Link to="/dashboard" className="btn-back">
          <span>←</span> Kembali
        </Link>
        <div className="progres-header-title">
          <h3>Laporan Progres</h3>
          <p>Pantau hasil kerja kerasmu</p>
        </div>
        <div style={{ width: "80px" }}></div>
      </header>

      <main className="progres-content">
        {/* Ringkasan Cepat */}
        <motion.div
          className="summary-cards"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="summary-card">
            <span className="summary-icon">📉</span>
            <div>
              <p>Total Penurunan</p>
              <h4>-2.0 kg</h4>
            </div>
          </div>
          <div className="summary-card">
            <span className="summary-icon">🔥</span>
            <div>
              <p>Rata-rata Kalori</p>
              <h4>1,950 kcal/hari</h4>
            </div>
          </div>
        </motion.div>

        {/* Grafik Interaktif dengan Recharts */}
        <motion.div
          className="chart-container"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div className="chart-header">
            <h4>Grafik Berat Badan</h4>
            <span className="badge-time">1 Bulan Terakhir</span>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={weightData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis
                  dataKey="minggu"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b" }}
                  dy={10}
                />
                <YAxis
                  domain={["dataMin - 1", "dataMax + 1"]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b" }}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                  labelStyle={{ fontWeight: "bold", color: "#1e293b" }}
                />
                <Line
                  type="monotone"
                  dataKey="berat"
                  stroke="#e53935"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#e53935",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 8, fill: "#10b981" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProgresLaporan;
