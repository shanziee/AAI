import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Komponen Utama
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard";
import FruitScanner from "./components/FruitScanner";
import Artikel from "./components/Artikel";
import Impact from "./components/Impact";
import Bantuan from "./components/Bantuan";
import ScrollToTop from "./components/ScrollToTop";

// Komponen Pendukung
import ProfilTarget from "./components/ProfilTarget";
import ProgresLaporan from "./components/ProgresLaporan";
import DatabaseMakanan from "./components/DatabaseMakanan";

import "./App.css";

export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<FruitScanner />} />
        <Route path="/inventory" element={<DatabaseMakanan />} />
        <Route path="/report" element={<ProgresLaporan />} />
        <Route path="/settings" element={<ProfilTarget />} />
        <Route path="/profil-target" element={<ProfilTarget />} />

        <Route path="/jurnal" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
