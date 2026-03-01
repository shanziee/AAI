// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Komponen Lama
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard";

// Import Komponen Baru (Disini kuncinya! Kita import dengan nama "Jurnal")
import Jurnal from "./components/Jurnal";
import ProfilTarget from "./components/ProfilTarget";
import ProgresLaporan from "./components/ProgresLaporan";
import DatabaseMakanan from "./components/DatabaseMakanan";
import FruitScanner from "./components/FruitScanner";

import "./App.css";

// --- ROUTER & GABUNGAN APLIKASI ---
export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Rute "/" HANYA menampilkan Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Rute Autentikasi */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rute "/dashboard" HANYA menampilkan Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* --- FITUR UTAMA: FRUIT SCANNER --- */}
        <Route path="/scan" element={<FruitScanner />} />
        
        {/* Rute Lama (Opsional: Bisa dihapus nanti) */}
        <Route path="/jurnal" element={<Jurnal />} />
        <Route path="/database-makanan" element={<DatabaseMakanan />} />

        {/* Rute Profil & Target */}
        <Route path="/profil-target" element={<ProfilTarget />} />

        {/* Rute Progres Laporan */}
        <Route path="/progres-laporan" element={<ProgresLaporan />} />
        <Route path="/progres" element={<ProgresLaporan />} />
      </Routes>
    </Router>
  );
}
