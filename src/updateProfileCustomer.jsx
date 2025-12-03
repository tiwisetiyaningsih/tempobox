import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Menggunakan EyeSlash dan Eye untuk fitur lihat/sembunyikan password
import { HeartFill, Person, BoxArrowRight, ChevronLeft, Eye, EyeSlash, PersonFill } from "react-bootstrap-icons"; 
import logoTempoBox from './assets/Logo.svg';
import profil_user from './assets/profil_user.svg'; // Gambar placeholder default/ikon
import photo_profile from './assets/photo_profile.svg' // Gambar profil yang sedang digunakan (Diana)

const UpdateProfileCustomer = () => {
    
    // State untuk data form
    const [formData, setFormData] = useState({
        name: "Diana Putri Nabila",
        email: "dianapn@gmail.com",
        phone: "08999999999",
        password: "password123", 
        currentPhoto: photo_profile // Awalnya menggunakan foto profil
    });

    const [showPassword, setShowPassword] = useState(false);
    const fileInputRef = useRef(null);

    // Variabel untuk mengecek apakah foto saat ini adalah placeholder
    const isPlaceholder = formData.currentPhoto === profil_user;

    // --- Handlers Navigasi & Form (Tidak Berubah) ---

    const handleLogout = () => {
        const isConfirmed = window.confirm("Anda yakin ingin keluar?");
        if (isConfirmed) {
            window.location.href = "/beranda"; 
        } 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveData = (e) => {
        e.preventDefault();
        alert("Data berhasil disimpan!");
        window.location.href = "/profile_customer"; 
    };

    const handleBatal = (e) => {
        e.preventDefault();
        alert("Data gagal disimpan!");
        window.location.href = "/profile_customer"; 
    };

    // --- Handlers Foto ---
    
    // Handler untuk Upload Foto: Memicu klik pada input file tersembunyi
    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    // Handler saat file dipilih
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Set foto baru sebagai URL data
                setFormData(prev => ({ ...prev, currentPhoto: reader.result }));
                alert(`Foto baru '${file.name}' berhasil diunggah!`);
            };
            reader.readAsDataURL(file);
        }
    };
    
    // Handler untuk Hapus Foto: Mengganti foto dengan placeholder ikon
    const handleDeletePhoto = () => {
        // Hanya hapus jika foto saat ini bukan placeholder
        if (!isPlaceholder) {
            setFormData(prev => ({ ...prev, currentPhoto: profil_user })); // Ganti dengan placeholder
            alert("Foto berhasil dihapus! Menggunakan placeholder.");
        } else {
            alert("Tidak ada foto yang bisa dihapus.");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#F8F9FA' }}> 
            
            {/* 1. Navbar / Header */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
                <div className="container-fluid">
                <a className="navbar-brand fw-bold text-primary ms-4" href="/dashboard_customer">
                    <img src={logoTempoBox} className="logoTempoBox" alt="TempoBox logo" style={{ height: '32px' }} />
                </a>

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
                    <li className="nav-item dropdown me-4">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={profil_user} alt="User Avatar" className="rounded-circle me-2" style={{ width: '35px', height: '35px' }} />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end p-2 shadow-lg" aria-labelledby="navbarDropdown" style={{ border: 'none' }}>
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

            {/* --- */}
            
            {/* 2. Main Content - Form Update Profile */}
            <main className="flex-grow-1 p-4 d-flex justify-content-center">
                <div className="mt-4" style={{ maxWidth: '800px', width: '100%' }}>
                    {/* Kotak Form Utama */}
                    <form onSubmit={handleSaveData} className="bg-white p-5 rounded-3 shadow-sm border">
                        <div className="d-flex flex-wrap">
                            
                            {/* KIRI: Foto Profil dan Tombol Aksi */}
                            <div className="me-5 mb-4 text-center d-flex flex-column align-items-start" style={{ width: '180px' }}>
                                
                                {/* Foto Profil / Placeholder Area */}
                                <div className="mb-3 d-flex justify-content-center align-items-center rounded-3" 
                                    style={{ 
                                        width: '150px', 
                                        height: '200px', 
                                        backgroundColor: isPlaceholder ? '#e9ecef' : 'transparent', // Background abu-abu jika placeholder
                                        border: isPlaceholder ? '1px solid #ced4da' : 'none',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {isPlaceholder ? (
                                        // Jika placeholder, tampilkan ikon PersonFill yang lebih besar
                                        <PersonFill size={80} className="text-muted" />
                                    ) : (
                                        // Jika ada foto, tampilkan foto
                                        <img 
                                            src={formData.currentPhoto}
                                            alt="Profile Picture" 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    )}
                                </div>
                                
                                {/* Input file tersembunyi (digunakan oleh useRef) */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                />

                                {/* Tombol Upload Foto (Biru) */}
                                <button 
                                    type="button" 
                                    className="btn btn-primary w-100 mb-2 py-2 fw-medium" 
                                    onClick={handleUploadButtonClick} 
                                >
                                    Upload Foto
                                </button>
                                
                                {/* Tombol Hapus Foto (Merah) */}
                                <button 
                                    type="button" 
                                    className="btn btn-danger w-100 py-2 fw-medium" 
                                    onClick={handleDeletePhoto}
                                    // Menonaktifkan tombol jika foto yang ditampilkan sudah menjadi placeholder
                                    disabled={isPlaceholder} 
                                >
                                    Hapus Foto
                                </button>
                            </div>

                            {/* KANAN: Input Form */}
                            <div className="flex-grow-1">
                                
                                {/* Nama Lengkap */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-muted small mb-0">Nama Lengkap</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required 
                                        style={{ height: '50px' }}
                                    />
                                </div>
                                
                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-muted small mb-0">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required 
                                        style={{ height: '50px' }}
                                    />
                                </div>
                                
                                {/* No Telepon */}
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label text-muted small mb-0">No Telepon</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        id="phone" 
                                        name="phone" 
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required 
                                        style={{ height: '50px' }}
                                    />
                                </div>
                                
                                {/* Password dengan tombol lihat */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-muted small mb-0">Password</label>
                                    <div className="input-group">
                                        <input 
                                            // Tipe input berubah berdasarkan state showPassword
                                            type={showPassword ? "text" : "password"} 
                                            className="form-control" 
                                            id="password" 
                                            name="password" 
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            style={{ height: '50px' }}
                                        />
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            onClick={() => setShowPassword(prev => !prev)}
                                            style={{ height: '50px' }}
                                        >
                                            {/* Ikon mata terbuka atau tertutup */}
                                            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tombol Simpan Data */}
                        <div className="d-flex justify-content-between gap-3 mt-4">
                            {/* Tombol Batal (Merah, di Kiri) */}
                            <button 
                                type="button" 
                                className="btn btn-outline-danger flex-fill py-3 fw-medium" 
                                style={{ fontSize: '18px' }} 
                                onClick={handleBatal} 
                            >
                                Batal
                            </button>
                            
                            {/* Tombol Simpan Data (Biru, di Kanan) */}
                            <button 
                                type="submit" 
                                className="btn btn-primary flex-fill py-3 fw-medium" 
                                style={{ fontSize: '18px' }} 
                            >
                                Simpan Data
                            </button>
                        </div>
                    </form>
                    
                </div>
            </main>
        </div>
    );
};

export default UpdateProfileCustomer;