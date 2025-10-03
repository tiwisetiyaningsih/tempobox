import React from "react";
import email from "./assets/email.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


const kontak = () => {
  return (
    <div>
      {/* Bantuan Instan */}
      <div className="container my-5">
        <div className="card shadow-sm p-4">
          <h3 className="text-center mb-4"style={{paddingTop: '20px'}}>Dapatkan Bantuan Instan</h3>
          <div className="row text-center" style={{paddingBottom: '25px', paddingTop: '10px'}}>
            <div className="col-12 col-md-4 mb-3" >
              <div className="d-flex flex-row p-3" style={{background:'rgba(19, 207, 144, 0.15)', border:'1px solid #25D366', borderRadius: '8px'}}>
                <i class="bi bi-whatsapp" style={{color:'#25D366', fontSize:'35px', paddingLeft:'35px'}}></i>
                <div style={{justifyItems:'flex-start', marginLeft:'15px'}}>
                    <h6>Chat WhatsApp</h6>
                    <h6 className="text-muted mb-0">Dapatkan tanggapan instan</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="d-flex flex-row p-3" style={{background:'rgba(131, 131, 131, 0.15)' ,border:'1px solid #0000007f', borderRadius: '8px'}}>
                <i class="bi bi-telephone-fill" style={{color:'3424242', fontSize:'35px', paddingLeft:'35px'}}></i>
                <div style={{justifyItems:'flex-start', marginLeft:'15px'}}>
                    <h6>Nomor Telephone</h6>
                    <h6 className="text-muted mb-0">+6281225351055</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="d-flex flex-row p-3" style={{background:'rgba(255, 162, 162, 0.15)' ,border:'1px solid #ff0000b9', borderRadius: '8px'}}>
                <img src={email} style={{paddingLeft:'35px'}}></img>
                <div style={{justifyItems:'flex-start', marginLeft:'15px'}}>
                    <h6>Email Kami</h6>
                    <h6 className="text-muted mb-0">tempobox@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4" style={{ borderTop: "1px solid #ddd", marginTop:'100px'}}>
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-6 mb-3">
              <h5 style={{ color: "#197Aff", fontWeight: "bold" }}>TempoBox</h5>
              <p>
                Solusi penyimpanan barang sementara yang aman, fleksibel, dan terpercaya
                untuk segala kebutuhan Anda.
              </p>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h5 style={{ color: "#197Aff", fontWeight: "bold" }}>Tautan Cepat</h5>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Home</li>
                <li>Layanan</li>
                <li>Tentang Kami</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-center text-muted mb-0">
            © 2024 TempoBox. Hak cipta dilindungi undang-undang. | Jam Operasional: 09.00 - 20.00 WIB
          </p>
        </div>
      </footer>
    </div>
  );
};

export default kontak;
