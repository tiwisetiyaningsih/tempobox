import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { House, Calendar2Check, ClockHistory, Person } from "react-bootstrap-icons";
import logoTempoBox from './assets/Logo.svg'

const DashboardCustomer = () => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <aside className="bg-white border-end shadow-sm" style={{ width: "300px" }}>
        {/* Logo */}

        <div className="d-flex align-items-center p-3 border-bottom">
          <a className="navbar-brand fw-bold text-primary" href="#header">
            <img src={logoTempoBox} className="logoTempoBox" alt="TempoBox logo"/>
          </a>
        </div>

        {/* Menu */}
        <nav className="nav flex-column p-2">
          <a
            href="#"
            className="nav-link d-flex align-items-center text-primary bg-light rounded px-3 py-2 mb-1 fw-medium"
            style={{borderColor:'blue', borderRadius: '16px', border: '1px'}}
          >
            <House className="me-2" size={16} />
            Dashboard
          </a>
          <a
            href="#"
            className="nav-link d-flex align-items-center text-dark px-3 py-2 mb-1 rounded hover-bg"
           
          >
            <Calendar2Check className="me-2" size={16} />
            Pesan Gudang
          </a>
          <a
            href="#"
            className="nav-link d-flex align-items-center text-dark px-3 py-2 mb-1 rounded hover-bg"
          >
            <ClockHistory className="me-2" size={16} />
            Riwayat Pesan
          </a>
          <a
            href="#"
            className="nav-link d-flex align-items-center text-dark px-3 py-2 mb-1 rounded hover-bg"
          >
            <Person className="me-2" size={16} />
            Profil Saya
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4">
        <h3 className="fw-semibold text-dark">Dashboard</h3>
        <p className="text-secondary">
          Selamat datang di TempoBox! Di sini Anda dapat mengelola pemesanan
          gudang, melihat riwayat transaksi, dan memperbarui profil Anda.
        </p>
      </main>
    </div>
  );
};

export default DashboardCustomer;
