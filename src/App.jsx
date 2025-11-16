import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./register.jsx";
import Login from "./login.jsx";
import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Keunggulan from './keunggulan.jsx'
import DaftarGudang from './daftarGudang.jsx'
import CaraKerja from './caraKerja.jsx'
import TentangKami from './tentangKami.jsx'
import Footer from './footer.jsx';
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
                <div className="flex-column" style={{background:"#ffffff", display: 'flex', paddingLeft: '100px', paddingRight: '100px', paddingTop: '10px'}}>
                  <Navbar></Navbar>
                 
                </div>
                 {/* Section Header */}
                  <section id="header">
                      <Header></Header>
                  </section>
                  {/* Section Layanan */}
                  <section id="keunggulanKami">
                    <Keunggulan></Keunggulan>
                  </section>

                  {/* Section Layanan */}
                  <section id="daftarGudang" style={{paddingTop: '20px'}}>
                    <DaftarGudang></DaftarGudang>
                  </section>

                  {/* Section About */}
                  <section id="caraKerja" style={{marginBottom: '50px'}}>
                    <CaraKerja></CaraKerja>
                  </section>

                  {/* Section Kontak */}
                  <section id="tentangKami">
                      <TentangKami></TentangKami>
                  </section>

                  {/* Section Kontak */}
                  <section id="footer">
                      <Footer></Footer>
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