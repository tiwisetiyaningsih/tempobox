import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./register.jsx";
import Login from "./login.jsx";
import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Fitur from './fitur.jsx'
import Layanan from './layanan.jsx'
import About from './about.jsx'
import Kontak from './kontak.jsx'
import DashboardCustomer from "./dashboard_customer.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Navigate to="/beranda" />} />
          <Route
            path="/beranda"
            element={
              <div className="flex-column" style={{display: 'flex'}}>
                <div className="flex-column" style={{background:"linear-gradient(1deg, rgba(31, 194, 149, 0.2), rgba(37, 128, 213, 0.1)", display: 'flex', paddingLeft: '100px', paddingRight: '100px', paddingTop: '10px'}}>
                  <Navbar></Navbar>
                  {/* Section Header */}
                  <section id="header">
                      <Header></Header>
                  </section>
                </div>
                  {/* Section Layanan */}
                  <section id="fitur">
                    <Fitur></Fitur>
                  </section>

                  {/* Section Layanan */}
                  <section id="layanan" style={{paddingTop: '20px'}}>
                    <Layanan></Layanan>
                  </section>

                  {/* Section About */}
                  <section id="about" style={{marginBottom: '50px'}}>
                    <About></About>
                  </section>

                  {/* Section Kontak */}
                  <section id="kontak">
                      <Kontak></Kontak>
                  </section>
                
              </div>
            }
          />
          {/* Halaman login dan register */}  
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard_customer" element={<DashboardCustomer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App