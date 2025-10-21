import React from "react";
import member_1 from "./assets/member_1.svg";
import whatsapp from "./assets/whatsapp.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


const about = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginTop: '50px' }}>Tentang Kami</h2>

        {/* Cerita & Visi Misi */}
        <div 
        style={{ 
            display: "flex", 
            gap: "20px", 
            marginTop: "10px", 
            padding: "20px 5%", 
            flexWrap: "wrap",  // biar bisa turun ke bawah
            boxSizing: "border-box"
        }}
        >
        <div 
            className="card shadow-sm p-5 border-0" 
            style={{ 
            flex: 1, 
            borderRadius: "10px", 
            minWidth: "280px"  // biar gak kepotong di layar kecil
            }}
        >
            <div className="d-flex flex-row" style={{justifyContent:'center'}}>
            <h5 style={{color: '#13cf8f', paddingBottom:'10px'}}>Cerita</h5>
            <h5 style={{marginLeft: '5px', color: '#197Aff'}}>TempoBox</h5>
            </div>
            <div className="flex-row d-flex">
              <p className="mb-1" style={{ textAlign: 'justify' }}>
                <span className="fw-bold text-primary">TempoBox</span> hadir dari pengalaman pendiri yang kesulitan mencari tempat penyimpanan aman dan fleksibel saat pindah dari asrama ke kost baru yang belum siap ditempati. Dari situ, kami menyadari bahwa banyak orang membutuhkan solusi penyimpanan sementara yang praktis, terpercaya, dan mudah diakses. Dengan TempoBox, kami menghadirkan ruang penyimpanan pribadi yang terjaga keamanannya dan dapat disesuaikan dengan kebutuhan, sehingga Anda bisa merasa tenang di setiap masa transisi hidup.
              </p>
            </div>
        </div>

        <div 
            className="card shadow-sm p-5 border-0" 
            style={{ 
            flex: 1, 
            padding: "20px", 
            borderRadius: "10px", 
            minWidth: "280px"
            }}
        >
            <div className="d-flex flex-row" style={{justifyContent:'center'}}>
            <h5 style={{color: '#13cf8f' ,paddingBottom:'10px'}}>Visi & Misi</h5>
            <h5 style={{marginLeft: '5px', color: '#197Aff'}}>TempoBox</h5>
            </div>
            <b style={{color: '#197Aff'}}>Visi:</b>
            <p style={{fontSize: '16px', textAlign: 'justify'}}> 
            Menjadi penyedia solusi penyimpanan terpercaya dan inovatif di Indonesia, 
            dengan layanan yang aman, fleksibel, serta mendukung efisiensi dan kenyamanan pelanggan.
            </p>
            <p><b style={{color: '#197Aff'}}>Misi:</b></p>
            <ol>
            <li style={{fontSize: '16px', textAlign: 'justify'}}>Menyediakan layanan penyimpanan yang mudah diakses, aman, dan fleksibel sesuai kebutuhan pelanggan.</li>
            <li style={{fontSize: '16px', textAlign: 'justify'}}>Memberikan pengalaman penyimpanan yang sederhana, nyaman, dan bebas stres melalui sistem yang transparan dan modern.</li>
            <li style={{fontSize: '16px', textAlign: 'justify'}}>Menjaga standar keamanan tinggi serta kualitas layanan yang konsisten.</li>
            <li style={{fontSize: '16px', textAlign: 'justify'}}>Membangun kepercayaan jangka panjang dengan mengutamakan kepuasan dan kenyamanan pelanggan.</li>
            </ol>
        </div>
        </div>

      {/* Tim TempoBox */}
      <div style={{ background: "rgba(161, 236, 210, 0.45)", padding: "30px 20px", marginTop: '50px' }}>
        <h4 style={{ textAlign: "center", marginBottom: "30px" }}>
          <span style={{ color: "#1FC295" }}>Tim</span>{" "}
          <span style={{ color: "#197Aff" }}>TempoBox</span>
        </h4>
        <div className="row justify-content-center text-center">
          {[
            { nama: "M. Zhafran Dika N.", jabatan: "Chief Executive Officer", foto: member_1 },
            { nama: "Axel Naufal Putra", jabatan: "Chief Marketing Officer", foto: member_1 },
            { nama: "Dwi Fatima Azzahra", jabatan: "Chief Technology Officer", foto: member_1 },
            { nama: "Radhiyah Wafa A.", jabatan: "Chief Operating Officer", foto: member_1 },
            { nama: "Naila Rahma Fadhilah", jabatan: "Chief Financial Officer", foto: member_1 },
          ].map((member, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2 mb-4">
              <img
                src={member.foto}
                alt={member.nama}
                className="rounded-circle"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                }}
              />
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>{member.nama}</p>
              <p style={{ fontSize: "13px", color: "#197Aff" }}>{member.jabatan}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default about;