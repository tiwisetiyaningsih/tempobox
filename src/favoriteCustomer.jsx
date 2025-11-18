import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeartFill, Search, Person, BoxArrowRight } from "react-bootstrap-icons"; 
import logoTempoBox from './assets/Logo.svg';
import gudang1 from './assets/gudang.svg'; 
import profil_user from './assets/profil_user.svg';

const FavoriteCustomer = () => {
    
    // Data Dummy Gudang yang Anda berikan
    const allGudangData = [
        { id: 1, name: "Rumah Ibu Lenny", location: "Bandung", price: "Rp 2.000.000/bulan", status: "Tersedia", isFavorite: true },
        { id: 2, name: "Gudang Pak Budi", location: "Cimahi", price: "Rp 3.500.000/bulan", status: "Terisi", isFavorite: false },
        { id: 3, name: "Gudang Penyimpanan ABC", location: "Soreang", price: "Rp 1.800.000/bulan", status: "Tersedia", isFavorite: true },
        { id: 4, name: "Warehouse Jaya", location: "Padalarang", price: "Rp 4.000.000/bulan", status: "Tersedia", isFavorite: false },
    ];

    // Filter data untuk hanya menampilkan gudang yang favorite (isFavorite: true)
    const favoriteGudang = allGudangData.filter(gudang => gudang.isFavorite);


    const handleLogout = () => {
        const isConfirmed = window.confirm("Anda yakin ingin keluar?");
        if (isConfirmed) {
            window.location.href = "/beranda"; 
        } 
    };

    // Fungsi untuk mengarahkan ke halaman Detail Gudang
    const handleLihatDetail = (gudangId) => {
        // Mengarahkan ke path Detail Gudang. Contoh: /detail_gudang/1
        window.location.href = `/detail_gudang`; 
    };

    // Fungsi untuk menghapus dari Favorite (simulasi)
    const handleRemoveFavorite = (gudangName) => {
        alert(`Gudang ${gudangName} dihapus dari favorit!`);
        // Di aplikasi nyata, ini akan melibatkan state update/API call untuk menghapus dari list favorite
    };


    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            {/* Navbar / Header */}
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
                                {/* Gudang Favorite - Status AKTIF */}
                                <a className="nav-link text-decoration-none text-primary fw-semibold" href="/favorite_customer">
                                    <HeartFill className="me-1 text-primary" size={16} /> Gudang Favorite
                                </a>
                            </li>
                            {/* Dropdown Profil */}
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
                                    {/* Item Keluar */}
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

            {/* Main Content */}
            <main className="flex-grow-1 p-4 d-flex flex-column align-items-center justify-content-start">
                {/* Header Favorite */}
                <div className="text-center my-3">
                    <h1 className="fw-bold text-dark mb-2" style={{fontSize:'32px'}}>Gudang Favorite Kamu</h1>
                    <p className="text-secondary fs-5" style={{fontSize:'20px'}}>Favoritmu, Prioritasmu. Gudang yang sudah kamu simpan tampil di sini untuk akses cepat</p>
                </div>

                {/* Search Bar Favorite */}
                <div className="input-group mb-5" style={{ maxWidth: '700px', width: '100%' }}>
                    <span className="input-group-text bg-white border-end-0 pe-0 rounded-start-pill border py-2">
                        <Search className="text-muted ms-3" size={20} />
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0 ps-2 rounded-end-pill py-2 "
                        placeholder="Cari Favorite" 
                        aria-label="Cari Favorite"
                        style={{ height: '50px' }}
                    />
                </div>

                {/* Grid Kartu Gudang */}
                <div className="container-fluid">
                    {favoriteGudang.length > 0 ? (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
                            
                            {/* Loop data favoriteGudang */}
                            {favoriteGudang.map((gudang) => (
                                <div className="col" key={gudang.id}>
                                    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                                        
                                        {/* Placeholder Image */}
                                        <div className="position-relative">
                                            <img src={gudang1} className="card-img-top" alt={`Gudang ${gudang.name}`} style={{ height: '200px', objectFit: 'cover' }} />
                                            
                                            {/* Tombol Favorite - Merah */}
                                            <button 
                                                className="btn btn-light rounded-circle p-1.5 position-absolute top-0 end-0 m-3 shadow-sm"
                                                onClick={() => handleRemoveFavorite(gudang.name)}
                                            >
                                                <HeartFill size={16} className="text-danger" />
                                            </button>
                                        </div>
                                        
                                        {/* Card Body */}
                                        <div className="card-body p-3">
                                            <h5 className="card-title fw-semibold mb-1">{gudang.name}</h5>
                                            <p className="card-text text-muted mb-1 small">Lokasi: <span className="text-dark fw-medium">{gudang.location}</span></p>
                                            <p className="card-text text-muted mb-1 small">Harga: <span className="text-dark fw-medium">{gudang.price}</span></p>
                                            <p className="card-text text-muted mb-3 small">
                                                Status: 
                                                <span className={`fw-medium ${gudang.status === 'Tersedia' ? 'text-success' : 'text-danger'}`}> 
                                                    {gudang.status}
                                                </span>
                                            </p>
                                            
                                            {/* Button Lihat Detail */}
                                            <button 
                                                className="btn btn-primary w-100 fw-medium"
                                                onClick={() => handleLihatDetail(gudang.id)}
                                                // Menonaktifkan tombol jika status Terisi/Penuh
                                                disabled={gudang.status === 'Terisi' || gudang.status === 'Penuh'} 
                                            >
                                                Lihat Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    ) : (
                        // Pesan jika tidak ada gudang favorit
                        <div className="text-center mt-5">
                            <h4 className="text-muted">Anda belum menambahkan gudang ke favorit.</h4>
                            <p className="text-secondary">Cari gudang di halaman Beranda dan tekan ikon hati untuk menyimpannya di sini.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default FavoriteCustomer;