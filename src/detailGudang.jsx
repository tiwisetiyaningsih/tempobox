import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeartFill, Person, BoxArrowRight, ChevronLeft, ChevronRight } from "react-bootstrap-icons"; 
import gudang1 from './assets/gudang.svg'; 
import gudang2 from './assets/gudang-bg.svg'; 

 

const DetailGudang = () => {
    
    // Data dummy yang digunakan untuk halaman detail
    const gudangData = {
        id: 1, 
        name: "Rumah Ibu Lenny", 
        description: "Selamat datang di Rumah Ibu Lenny, gudang dengan lokasi strategis di Bandung Timur. Cocok untuk penyimpanan barang rumah tangga atau inventaris usaha kecil. Akses mudah dan keamanan terjamin. Bla..bla..bla...", 
        details: [
            { keterangan: "Lokasi", detail: "Jl. Cilengkrang 1 No.2c, RW.01, Cisurupan, Kec. Cibiru, Kota Bandung, Jawa Barat 40614, komplek haji daan, KAB. BANDUNG, CILENGKRANG, JAWA BARAT, ID, 40616" }, 
            { keterangan: "Luas", detail: "2x2 meter" }, 
            { keterangan: "Fasilitas", detail: "Meja, Kursi, Rak Penyimpanan Tertutup, Akses 24 Jam" }, 
            { keterangan: "Status", detail: "Tersedia" } 
        ],
        // Menambahkan beberapa gambar dummy agar carousel berfungsi
        images: [
            gudang1, // Gambar 1
            gudang2, // Gambar 2
            gudang1  // Gambar 3
        ]
    };

    // Handler untuk Logout
    const handleLogout = () => {
        const isConfirmed = window.confirm("Anda yakin ingin keluar?");
        if (isConfirmed) {
            window.location.href = "/beranda"; 
        } 
    };

    // Handler untuk membuat link WhatsApp (Pesan)
    const handlePesan = () => {
        const phoneNumber = '6281225351055'; // Nomor kontak
        
        const gudangName = gudangData.name;
        // Mencari detail Luas dan Lokasi dari data details
        const sizeDetail = gudangData.details.find(d => d.keterangan === 'Luas')?.detail || "Tidak Diketahui";
        const locationDetail = gudangData.details.find(d => d.keterangan === 'Lokasi')?.detail || "Tidak Diketahui";

        // Asumsi nama pengguna
        const userName = "Diana Putri Nabila"; 

        const messageTemplate = 
            `Permisi ka\n` +
            `Saya ${userName} mau berminat untuk pesan gudang ${gudangName} ` +
            `dengan yang ukurannya ${sizeDetail} ` +
            `yang berlokasi di ${locationDetail}`;

        const encodedMessage = encodeURIComponent(messageTemplate);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#F8F9FA' }}> 
            
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
                <div className="container-fluid ms-5">
                    <a href="/dashboard_customer" className="d-flex align-items-center text-decoration-none text-muted fw-medium">
                        <ChevronLeft size={20} className="me-1" /> Kembali ke Beranda
                    </a>
                </div>
            </nav>
            {/* --- */}
            
            {/* 2. Main Content - Detail Gudang */}
            <main className="flex-grow-1 p-4 d-flex justify-content-center">
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    
                    {/* Area Gambar (Carousel) */}
                    <div id="gudangCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                        <div className="carousel-inner rounded-3" style={{ height: '350px', backgroundColor: '#e9ecef' }}>
                            {gudangData.images.map((img, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img 
                                        src={img} 
                                        className="d-block w-100" 
                                        alt={`Gambar ${index + 1}`} 
                                        style={{ height: '350px', objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Tombol Next/Prev (Muncul hanya jika ada > 1 gambar) */}
                        {gudangData.images.length > 1 && (
                            <>
                                <button className="carousel-control-prev" type="button" data-bs-target="#gudangCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#gudangCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </>
                        )}
                    </div>

                    {/* --- */}

                    {/* Judul dan Deskripsi */}
                    <div className="bg-white p-4 rounded-3 shadow-sm border mb-4">
                        <h3 className="fw-bold mb-3">{gudangData.name}</h3> 
                        
                        <h4 className="fw-medium text-dark" style={{ fontSize: '18px' }}>Deskripsi</h4> 
                        <p className="text-secondary">{gudangData.description}</p> 
                    </div>

                    {/* Detail Informasi (Tabel) */}
                    <div className="bg-white p-4 rounded-3 shadow-sm border mb-4">
                        <h4 className="fw-medium text-dark mb-3" style={{ fontSize: '18px' }}>Detail Informasi</h4> 
                        
                        <table className="table table-bordered mb-0">
                            <tbody>
                                {/* Header Baris */}
                                <tr className="table-primary">
                                    <th className="bg-primary text-white" style={{ width: '30%' }}>Keterangan</th> 
                                    <th className="bg-primary text-white">Detail</th> 
                                </tr>
                                
                                {/* Isi Detail */}
                                {gudangData.details.map((item, index) => (
                                    <tr key={index}>
                                        <td className="fw-medium">{item.keterangan}</td>
                                        <td>
                                            {/* Highlight status Tersedia */}
                                            {item.keterangan === 'Status' && item.detail === 'Tersedia' ? (
                                                <span className="text-success fw-bold">{item.detail}</span> 
                                            ) : (
                                                item.detail
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tombol Pesan */}
                    <button 
                        className="btn btn-primary w-100 fw-medium py-3 mb-2" 
                        style={{ fontSize: '18px' }} 
                        onClick={handlePesan} 
                    >
                        Pesan 
                    </button>
                    
                </div>
            </main>
        </div>
    );
};

export default DetailGudang;