import React from "react";
import gudang from "./assets/gudang.svg";

const layanan = () => {
  return (
    <div>
      <h2 className="text-center fw-bold">Layanan Kami</h2>

      {/* Durasi Sewa */}
      <section className="container">
        <h4 className="text-primary mt-3">Durasi Sewa</h4>
        <div className="row g-3 mt-1">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 border-0" style={{ background: "#E8F0FF" }}>
              <h5>Sewa Harian</h5>
              <p>Penyimpanan harian untuk kebutuhan singkat, cocok saat bepergian atau transit.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 border-0" style={{ background: "#E8FFE8" }}>
              <h5>Sewa Mingguan</h5>
              <p>Solusi penyimpanan mingguan, ideal untuk mahasiswa saat liburan pendek.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 border-0" style={{ background: "#FFF7E0"}}>
              <h5>Sewa Bulanan</h5>
              <p>Penyimpanan jangka menengah, pas untuk renovasi rumah atau pindahan.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 border-0" style={{ background: "#FFE8E8" }}>
              <h5>Sewa Tahunan</h5>
              <p>Pilihan fleksibel sesuai kebutuhan Anda, baik untuk individu maupun bisnis kecil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ukuran Ruangan */}
      <h4 className="text-primary mt-5 container">Ukuran Ruangan</h4>
      <div className="table-responsive mt-3 container" style={{textAlign:'center'}}>
        <table className="table table-hover table-bordered" >
          <thead >
            <tr>
              <th>Jenis Ruangan</th>
              <th>Ukuran</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Compact Storage</td>
              <td>2x2 Meter</td>
            </tr>
            <tr>
              <td>Standard Storage</td>
              <td>3x3 Meter</td>
            </tr>
            <tr>
              <td>Premium Storage</td>
              <td>4x4 Meter</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      {/* Cara Kerjanya */}
        <div 
        style={{ 
            width: "100%", 
            background: "rgba(161, 236, 210, 0.45)",
            padding: "25px 45px 25px 113px", 
            borderRadius: "0px", // biar full width rata
            marginTop: "40px" 
        }}
        >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "20px", margin: "0 auto" }}>
            {/* Text */}
            <div style={{ flex: 1, minWidth: "300px", color: "white" }}>
            <h4 className="text-primary" style={{ marginBottom: "20px"}}>Bagaimana Cara Kerjanya?</h4>
            <h5 style={{paddingRight:'20px', color: '#424242'}}>Kami membuat proses penyimpanan menjadi sederhana dan transparan:</h5>
            <ol style={{ lineHeight: "1.2" }}>
                
                <li style={{fontWeight:'bold',color: '#424242'}}>Pilih Lokasi Gudang</li>
                <p style={{color:'#838383'}}>Temukan gudang TempoBox terdekat </p>
                <li style={{fontWeight:'bold',color: '#424242'}}>Tentukan ukuran & durasi</li>
                <p style={{color:'#838383'}}>Sesuaikan pilihan ruangan (compact, Standard, Premium) dan durasi sewa (harian, mingguan, bulanan, hingga tahunan) sesuai kebutuhan Anda.</p>
                <li style={{fontWeight:'bold',color: '#424242'}}>Booking & Pembayaran Online</li>
                <p style={{color:'#838383'}}>Lakukan pemesanan dengan proses cepat, metode pembayaran aman, dan tanpa biaya tersembunyi.</p>
                <li style={{fontWeight:'bolder',color: '#424242'}}>Simpan barang Anda</li>
                <p style={{color:'#838383'}}>Barang Anda aman dengan pemantauan 24/7 dan smart locks</p>
            </ol>
            </div>

            {/* Gambar */}
            <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
            <img 
                src={gudang} 
                alt="Gudang" 
                style={{ width: "80%", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }} 
            />
            </div>
        </div>
        </div>
    </div>
  );
};

export default layanan;