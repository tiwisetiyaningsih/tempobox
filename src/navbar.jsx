import React from "react";
import logoTempoBox from './assets/Logo.svg'
import header from "./header";
import layanan from "./layanan";
import about from "./about";
import kontak from "./kontak";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#header">
          <img src={logoTempoBox} className="logoTempoBox" alt="TempoBox logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#header">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#layanan">Layanan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Tentang Kami</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kontak">Kontak</a>
            </li>
          </ul>
          <a href="#" className="btn btn-primary ms-3">Masuk</a>
        </div>
      </div>
    </nav>
  );
}

export default navbar;