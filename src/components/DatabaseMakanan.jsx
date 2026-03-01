import React, { useState } from "react";
import "./DatabaseMakanan.css";
import { motion } from "framer-motion";

const FruitInventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Pisang Ambon", status: "Mulai Busuk", daysLeft: 2, confidence: "91%", color: "#f59e0b", icon: "🍌" },
    { id: 2, name: "Apel Merah", status: "Segar", daysLeft: 12, confidence: "98%", color: "#10b981", icon: "🍎" },
    { id: 3, name: "Jeruk Mandarin", status: "Segar", daysLeft: 5, confidence: "95%", color: "#10b981", icon: "🍊" },
    { id: 4, name: "Alpukat Mentega", status: "Busuk Parah", daysLeft: 0, confidence: "99%", color: "#ef4444", icon: "🥑" },
  ]);

  const removeHandle = (id) => setInventory(inventory.filter(item => item.id !== id));

  return (
    <div className="inventory-page-wrapper">
      <header className="inventory-header">
        <div className="header-content">
          <h1>📦 Fruit Inventory</h1>
          <p>Kelola stok buah Anda dan cegah pembuangan makanan secara proaktif.</p>
        </div>
        <div className="inventory-stats-mini">
          <div className="i-stat"><strong>{inventory.length}</strong><span>Items</span></div>
          <div className="i-stat"><strong>{inventory.filter(i => i.daysLeft < 3).length}</strong><span>Urgent</span></div>
        </div>
      </header>

      <div className="inventory-grid">
        {inventory.map((item) => (
          <motion.div 
            key={item.id} 
            className="inventory-card-glass"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="card-top-row">
              <span className="fruit-emoji">{item.icon}</span>
              <span className="status-pill-v2" style={{ background: `${item.color}15`, color: item.color }}>
                {item.status}
              </span>
            </div>
            <h3>{item.name}</h3>
            
            <div className="inventory-metrics">
              <div className="metric-box">
                <span>AI Confidence</span>
                <strong>{item.confidence}</strong>
              </div>
              <div className="metric-box">
                <span>Sisa Simpan</span>
                <strong style={{ color: item.daysLeft < 3 ? '#ef4444' : '#10b981' }}>
                  {item.daysLeft} Hari
                </strong>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn-details">Detail Laporan</button>
              <button className="btn-remove" onClick={() => removeHandle(item.id)}>Hapus</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FruitInventory;
