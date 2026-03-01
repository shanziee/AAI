// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efek untuk mengubah background navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll mulus ke bagian tertentu berdasarkan ID
  const scrollToSection = (id) => {
    setMenuOpen(false); // Tutup menu mobile saat link diklik
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Kiri: Logo */}
        <div
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="logo-highlight">AAI</span> Nutricare
        </div>

        {/* Tengah: Menu Navigasi Utama */}
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </li>
            <li onClick={() => scrollToSection("info-features")}>Layanan</li>
            {/* Nantinya Anda bisa menambahkan id="about-section" dan id="faq-section" di LandingPage */}
            <li onClick={() => scrollToSection("about-section")}>Tentang</li>
            <li onClick={() => scrollToSection("faq-section")}>FAQ</li>
          </ul>

          {/* Kanan: Tombol Call to Action */}
          <div className="nav-buttons">
            <Link to="/login" className="btn-nav-login">
              Masuk
            </Link>
            <Link to="/register" className="btn-nav-register">
              Daftar
            </Link>
          </div>
        </div>

        {/* Ikon Hamburger untuk Layar HP */}
        <div
          className={`hamburger ${menuOpen ? "toggle" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
