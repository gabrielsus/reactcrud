import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BusquedaAdmin from './pages/BusquedaAdmin.jsx'
import GenerarReporte from './pages/GenerarReporte.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusquedaAdmin />} />
        <Route path="/generar-reporte" element={<GenerarReporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
