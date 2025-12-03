import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeartFill, Search, Person, BoxArrowRight } from "react-bootstrap-icons"; 
import logoTempoBox from './assets/Logo.svg';
import gudang1 from './assets/gudang.svg'; 
import profilDefault from './assets/profil_user.svg';

const DashboardCustomer = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("user");

        if (stored) {
            const parsed = JSON.parse(stored);
            setUserData(parsed);
        }
    }, []);

    const dummyGudang = [
        { id: 1, name: "Rumah Ibu Lenny", location: "Bandung", price: "Rp 2.000.000/bulan", status: "Tersedia", isFavorite: true },
        { id: 2, name: "Gudang Pak Budi", location: "Cimahi", price: "Rp 3.500.000/bulan", status: "Terisi", isFavorite: false },
        { id: 3, name: "Gudang Penyimpanan ABC", location: "Soreang", price: "Rp 1.800.000/bulan", status: "Tersedia", isFavorite: true },
        { id: 4, name: "Warehouse Jaya", location: "Padalarang", price: "Rp 4.000.000/bulan", status: "Tersedia", isFavorite: false },
    ];

    const handleLogout = () => {
        const isConfirmed = window.confirm("Anda yakin ingin keluar?");
        if (isConfirmed) {
            localStorage.removeItem("user");
            window.location.href = "/beranda"; 
        } 
    };

    const handleLihatDetail = (gudangId) => {
        window.location.href = `/detail_gudang`; 
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
                <div className="container-fluid">

                    {/* LOGO */}
                    <a className="navbar-brand fw-bold text-primary ms-4" href="/dashboard_customer">
                        <img src={logoTempoBox} alt="TempoBox logo" style={{ height: '32px' }} />
                    </a>

                    {/* MENU */}
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav align-items-center">

                            <li className="nav-item me-4">
                                <a className="nav-link text-decoration-none text-primary fw-semibold" href="/dashboard_customer">Beranda</a>
                            </li>

                            <li className="nav-item me-4">
                                <a className="nav-link text-decoration-none text-muted" href="/favorite_customer">
                                    <HeartFill className="me-1 text-muted" size={16} /> Gudang Favorite
                                </a>
                            </li>

                            {/* PROFILE DROPDOWN */}
                            <li className="nav-item dropdown me-4">
                                <a className="nav-link dropdown-toggle d-flex align-items-center p-0" href="#" data-bs-toggle="dropdown">

                                    {userData?.photo_profil ? (
                                        <img
                                            src={userData.photo_profil}
                                            alt="User Avatar"
                                            className="rounded-circle me-2"
                                            style={{ width: '35px', height: '35px', objectFit: "cover" }}
                                        />
                                    ) : (
                                        <i className="bi bi-person-circle fs-2 me-2 text-secondary" ></i>
                                    )}

                                </a>

                                <ul className="dropdown-menu dropdown-menu-end p-2 shadow-lg">
                                    <li>
                                        <a className="dropdown-item py-2 rounded" href="/profile_customer">
                                            <Person size={16} className="me-2 text-secondary" /> Profile
                                        </a>
                                    </li>

                                    <li>
                                        <button className="dropdown-item py-2 rounded text-white bg-danger mt-1 fw-medium" onClick={handleLogout}>
                                            <BoxArrowRight size={16} className="me-2" /> Keluar
                                        </button>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex-grow-1 p-4 d-flex flex-column align-items-center">

                <div className="text-center my-3">
                    <h1 className="fw-bold text-dark mb-2" style={{fontSize:'32px'}}>Temukan Gudang di Bandung</h1>
                    <p className="text-secondary fs-5" style={{fontSize:'20px'}}>Jelajahi berbagai gudang di Bandung, cek ketersediaan dan booking langsung!</p>
                </div>

                {/* Search Bar */}
                <div className="input-group mb-5" style={{ maxWidth: '700px', width: '100%' }}>
                    <span className="input-group-text bg-white border-end-0 rounded-start-pill py-2">
                        <Search className="text-muted ms-3" size={20} />
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0 rounded-end-pill py-2"
                        placeholder="Cari Gudang"
                        style={{ height: '50px' }}
                    />
                </div>

                {/* LIST GUDANG */}
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
                        {dummyGudang.map((gudang) => (
                            <div className="col" key={gudang.id}>
                                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">

                                    <div className="position-relative">
                                        <img src={gudang1} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />

                                        <button 
                                            className="btn btn-light rounded-circle p-1.5 position-absolute top-0 end-0 m-3 shadow-sm"
                                            onClick={() => alert(`Toggle favorit untuk ${gudang.name}`)}
                                        >
                                            <HeartFill size={16} className={gudang.isFavorite ? "text-danger" : "text-muted"} />
                                        </button>
                                    </div>

                                    <div className="card-body p-3">
                                        <h5 className="card-title fw-semibold">{gudang.name}</h5>
                                        <p className="text-muted small mb-1">Lokasi: {gudang.location}</p>
                                        <p className="text-muted small mb-1">Harga: {gudang.price}</p>
                                        <p className="text-muted small mb-3">
                                            Status: <span className={`fw-medium ${gudang.status === "Tersedia" ? "text-success" : "text-danger"}`}>{gudang.status}</span>
                                        </p>

                                        <button 
                                            className="btn btn-primary w-100 fw-medium"
                                            onClick={() => handleLihatDetail(gudang.id)}
                                            disabled={gudang.status === "Terisi"}
                                        >
                                            Lihat Detail
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
};

export default DashboardCustomer;