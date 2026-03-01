import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  const [userName, setUserName] = useState("Pro Merchant");
  
  useEffect(() => {
    const storedUser = localStorage.getItem("aai_user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.name) {
          setUserName(parsedUser.name);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pro-dashboard-wrapper">
      {/* --- SIDEBAR NAV --- */}
      <aside className="pro-sidebar">
        <div className="sidebar-logo">
          <span className="logo-dot"></span> FruitScan.AI
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item active">📊 Dashboard</Link>
          <Link to="/scan" className="nav-item">📷 AI Scanner</Link>
          <Link to="/inventory" className="nav-item">📦 Inventory</Link>
          <Link to="/report" className="nav-item">📈 Analytics</Link>
          <div className="nav-divider"></div>
          <Link to="/profil-target" className="nav-item">⚙️ Settings</Link>
        </nav>
        <div className="sidebar-user">
          <img src={`https://ui-avatars.com/api/?name=${userName}&background=10b981&color=fff`} alt="User" />
          <div className="user-info">
            <p className="name">{userName}</p>
            <p className="role">Premium Plan</p>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="pro-main">
        <header className="pro-header">
          <div className="header-text">
            <h1>Command Center</h1>
            <p>Welcome back, here's your fruit health overview.</p>
          </div>
          <div className="header-actions">
            <button className="btn-icon">🔔</button>
            <Link to="/scan" className="btn-pro-primary">New Scan +</Link>
          </div>
        </header>

        <motion.div 
          className="pro-bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Stat: Impact */}
          <div className="bento-item main-impact">
            <div className="impact-bg-shape"></div>
            <span className="badge">Sustainability Impact</span>
            <h2>128.5 <small>kg</small></h2>
            <p>Food saved from being wasted this month</p>
            <div className="impact-chart-mock">
              <div className="bar" style={{height: '40%'}}></div>
              <div className="bar" style={{height: '70%'}}></div>
              <div className="bar" style={{height: '50%'}}></div>
              <div className="bar" style={{height: '90%'}}></div>
              <div className="bar" style={{height: '60%'}}></div>
            </div>
          </div>

          {/* Stat 2: Accuracy */}
          <div className="bento-item stat-mini">
            <div className="icon-box">🎯</div>
            <div className="text">
              <h3>98.2%</h3>
              <p>Scan Accuracy</p>
            </div>
          </div>

          {/* Stat 3: Speed */}
          <div className="bento-item stat-mini">
            <div className="icon-box">⚡</div>
            <div className="text">
              <h3>0.8s</h3>
              <p>Avg. Scan Speed</p>
            </div>
          </div>

          {/* Inventory Health Ring */}
          <div className="bento-item health-ring-card">
            <h3>Inventory Health</h3>
            <div className="ring-container">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="bg" />
                <circle cx="50" cy="50" r="40" className="progress" />
              </svg>
              <div className="ring-text">
                <strong>85%</strong>
                <span>Fresh</span>
              </div>
            </div>
            <div className="ring-labels">
              <p><span className="dot fresh"></span> 42 Fresh</p>
              <p><span className="dot warning"></span> 8 Expiring</p>
            </div>
          </div>

          {/* Recent Scans Feed */}
          <div className="bento-item recent-scans">
            <div className="card-header">
              <h3>Recent Analysis</h3>
              <button className="text-btn">View All</button>
            </div>
            <div className="scan-list">
              {[
                { name: 'Banana Cavendish', status: 'Fresh', time: '2m ago', color: '#10b981' },
                { name: 'Red Apple', status: 'Expiring', time: '1h ago', color: '#f59e0b' },
                { name: 'Avocado', status: 'Critical', time: '3h ago', color: '#ef4444' },
              ].map((item, i) => (
                <div key={i} className="scan-item">
                  <div className="item-img">🍎</div>
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-time">{item.time}</p>
                  </div>
                  <div className="item-status" style={{ color: item.color, background: `${item.color}15` }}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
