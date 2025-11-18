import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeartFill, Person, BoxArrowRight, ChevronDown } from "react-bootstrap-icons"; 
import logoTempoBox from './assets/Logo.svg';
import profil_user from './assets/profil_user.svg'; 
import photo_profile from './assets/photo_profile.svg'

const ProfileCustomer = () => {
    
    // Data Profile sesuai desain
    const profileData = {
        name: "Diana Putri Nabila",
        email: "dianapn@gmail.com",
        phone: "08999999999"
    };

    const handleUpdateProfile = () => {
        const isConfirmed = window.confirm("Anda yakin ingin update profil?");
        if (isConfirmed) {
            window.location.href = "/update_profile_customer"; 
        } 
    };

    const handleLogout = () => {
        const isConfirmed = window.confirm("Anda yakin ingin keluar?");
        if (isConfirmed) {
            window.location.href = "/beranda"; 
        } 
    };

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#F8F9FA' }}> {/* Menggunakan warna latar belakang yang lebih terang */}
            
            {/* 1. Navbar / Header */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
                <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand fw-bold text-primary ms-4" href="/dashboard_customer">
                    <img src={logoTempoBox} className="logoTempoBox" alt="TempoBox logo" style={{ height: '32px' }} />
                </a>

                {/* Navigasi Kanan */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                    <li className="nav-item me-4">
                        <a className="nav-link text-decoration-none text-muted" href="/dashboard_customer">Beranda</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link text-decoration-none text-muted" href="/favorite_customer">
                        <HeartFill className="me-1 text-muted" size={16} /> Gudang Favorite
                        </a>
                    </li>
                    {/* === BAGIAN INI YANG DIUBAH UNTUK DROP DOWN PROFIL === */}
                    <li className="nav-item dropdown me-4">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={profil_user} alt="User Avatar" className="rounded-circle me-2" style={{ width: '35px', height: '35px' }} />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end p-2 shadow-lg" aria-labelledby="navbarDropdown" style={{ border: 'none' }}>
                        {/* Item Profile */}
                        <li>
                            <a className="dropdown-item py-2 rounded" href="/profile_customer">
                            <Person size={16} className="me-2 text-secondary" /> Profile
                            </a>
                        </li>
                        {/* Item Keluar (Latar belakang merah) */}
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

            {/* 2. Main Content - Detail Profile */}
            <main className="flex-grow-1 p-4 d-flex justify-content-center">
                <div className="mt-4" style={{ maxWidth: '800px', width: '100%' }}>
                    
                    {/* Judul Halaman */}
                    <h2 className="fw-medium text-dark mb-4 ms-2" style={{ fontSize: '24px' }}>Detail Profile</h2> 

                    {/* Kotak Informasi Profile */}
                    <div className="bg-white p-4 rounded-3 border"> {/* Menggunakan border tipis sesuai desain */}
                        <div className="d-flex align-items-start">
                            {/* Foto Profile */}
                            <img 
                                src={photo_profile}
                                alt="Profile Picture" 
                                className="rounded-3 me-5" 
                                style={{ width: '120px', height: '160px', objectFit: 'cover' }} // Dimensi disesuaikan agar mirip dengan desain
                            />
                            
                            {/* Area Teks Detail */}
                            <div className="d-flex flex-column justify-content-start pt-1" style={{ fontSize: '16px' }}>
                                
                                {/* Nama Lengkap */}
                                <div className="mb-2">
                                    <span className="text-muted d-block small">Nama Lengkap</span>
                                    <span className="fw-semibold text-dark">{profileData.name}</span>
                                </div>
                                
                                {/* Email */}
                                <div className="mb-2">
                                    <span className="text-muted d-block small">Email</span>
                                    <span className="fw-semibold text-dark">{profileData.email}</span>
                                </div>
                                
                                {/* No Telepon */}
                                <div className="mb-2">
                                    <span className="text-muted d-block small">No Telepon</span>
                                    <span className="fw-semibold text-dark">{profileData.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tombol Ubah Data */}
                    <button 
                        className="btn btn-primary w-100 fw-medium mt-4 py-3" 
                        style={{ fontSize: '18px' }} 
                        onClick={handleUpdateProfile}
                    >
                        Ubah Data
                    </button>
                    
                </div>
            </main>
        </div>
    );
};

export default ProfileCustomer;