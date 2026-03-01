import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = (e) => {
    e.preventDefault();
    
    const storedUserData = localStorage.getItem("aai_user");

    if (storedUserData) {
      const parsedUser = JSON.parse(storedUserData);

      if (parsedUser.name.toLowerCase() === nama.toLowerCase() && parsedUser.password === password) {
        localStorage.setItem("aai_isLoggedIn", "true");
        alert(`Selamat datang kembali, ${parsedUser.name}!`);
        
        // --- LOGIKA PENGECEKAN PROFIL BARU ---
        const cekDataFisik = localStorage.getItem("aai_data_fisik");
        if (cekDataFisik) {
          // Jika sudah pernah isi berat & tinggi, langsung ke Dashboard!
          navigate("/dashboard");
        } else {
          // Jika belum, arahkan ke halaman Profil Target
          navigate("/profil-target");
        }
        // ------------------------------------

      } else {
        alert("Nama atau password yang Anda masukkan salah!");
      }
    } else {
      alert("Akun tidak ditemukan. Silakan daftar terlebih dahulu.");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="login-page">
      {/* Ornamen Latar Belakang */}
      <div className="login-bg-glow glow-1"></div>
      <div className="login-bg-glow glow-2"></div>

      <motion.div 
        className="login-container"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="login-card">
          <Link to="/" className="back-link">
            ← Kembali
          </Link>

          <div className="login-header">
            <h1 className="login-logo">
              AAI <span className="text-highlight">NutriCare</span>
            </h1>
            <p className="login-subtitle">Silakan masuk ke akun Anda</p>
          </div>
          
          <form onSubmit={handleLogin} className="login-form">
            
            {/* --- BAGIAN INPUT NAMA --- */}
            <div className="input-group">
              {/* Emoji dipindah ke sisi kiri label Nama */}
              <label>
                <span style={{ marginRight: "8px", fontSize: "1.1rem" }}>👤</span>
                Nama Pengguna
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Contoh: burhan"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  style={{ paddingLeft: "15px" }} /* Menormalkan padding karena ikon di dalam kotak dihapus */
                />
              </div>
            </div>

            {/* --- BAGIAN INPUT PASSWORD --- */}
            <div className="input-group">
              {/* Emoji dipindah ke sisi kiri label Password */}
              <label>
                <span style={{ marginRight: "8px", fontSize: "1.1rem" }}>🔒</span>
                Password
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Masukkan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ paddingLeft: "15px" }} /* Menormalkan padding karena ikon di dalam kotak dihapus */
                />
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" /> Ingat Saya
              </label>
              <a href="#" className="forgot-password">Lupa Password?</a>
            </div>

            <button type="submit" className="btn-login">
              Masuk
            </button>
          </form>

          <div className="login-footer">
            <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;