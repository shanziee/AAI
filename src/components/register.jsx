import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
// Kita import login.css agar desainnya seragam 100% dengan halaman Login
import "./login.css"; 

const Register = () => {
  const navigate = useNavigate();

  // State untuk menyimpan inputan pengguna
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // --- LOGIKA REGISTRASI ---
  const handleRegister = (e) => {
    e.preventDefault();
    
    // 1. Cek apakah password dan konfirmasi password sama
    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    // 2. Siapkan data user baru
    const newUser = {
      name: nama,
      email: email, // Email tetap kita simpan sebagai data profil tambahan
      password: password 
    };

    // 3. Simpan data user ke localStorage
    localStorage.setItem("aai_user", JSON.stringify(newUser));

    alert("Registrasi berhasil! Silakan masuk dengan akun Anda.");
    
    // 4. Arahkan pengguna ke halaman Login
    navigate("/login");
  };

  // Animasi dari framer-motion
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
              Buat <span className="text-highlight">Akun</span>
            </h1>
            <p className="login-subtitle">Daftar untuk memulai perjalanan sehatmu</p>
          </div>
          
          <form onSubmit={handleRegister} className="login-form">
            
            {/* --- BAGIAN INPUT NAMA --- */}
            <div className="input-group">
              <label>
                <span style={{ marginRight: "8px", fontSize: "1.1rem" }}>👤</span>
                Nama Pengguna
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Contoh: Arvan"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  style={{ paddingLeft: "15px" }}
                />
              </div>
            </div>

            {/* --- BAGIAN INPUT EMAIL --- */}
            <div className="input-group">
              <label>
                <span style={{ marginRight: "8px", fontSize: "1.1rem" }}>✉️</span>
                Email
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Masukkan Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ paddingLeft: "15px" }}
                />
              </div>
            </div>

            {/* --- BAGIAN INPUT PASSWORD --- */}
            <div className="input-group">
              <label>
                <span style={{ marginRight: "8px", fontSize: "1.1rem" }}>🔒</span>
                Password
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Buat Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ paddingLeft: "15px" }}
                />
              </div>
            </div>

            {/* --- BAGIAN INPUT KONFIRMASI PASSWORD --- */}
            <div className="input-group">
              <label>
                <span style={{ marginRight: "8px", fontSize: "1.1rem" }}>🔐</span>
                Konfirmasi Password
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Ulangi Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{ paddingLeft: "15px" }}
                />
              </div>
            </div>

            <button type="submit" className="btn-login" style={{ marginTop: "20px" }}>
              Daftar Sekarang
            </button>
          </form>

          <div className="login-footer">
            <p>Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;