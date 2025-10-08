import React from "react";
import email from "./assets/email.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

const kontak = () => {
  const cardStyleBase = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '15px 25px',
    borderRadius: '8px',
    height: '100%',
  };

  const kontakList = [
    {
      title: "Chat WhatsApp",
      subtitle: "Dapatkan tanggapan instan",
      icon: <i className="bi bi-whatsapp" style={{ color: '#25D366', fontSize: '35px' }}></i>,
      style: {
        background: 'rgba(19, 207, 144, 0.15)',
        border: '1px solid #25D366',
      },
    },
    {
      title: "Nomor Telepon",
      subtitle: "+6281225351055",
      icon: <i className="bi bi-telephone-fill" style={{ color: '#000000', fontSize: '35px' }}></i>,
      style: {
        background: 'rgba(131, 131, 131, 0.15)',
        border: '1px solid #0000007f',
      },
    },
    {
      title: "Email Kami",
      subtitle: "tempobox@gmail.com",
      icon: <img src={email} alt="email icon" style={{ width: '35px', height: '35px' }} />,
      style: {
        background: 'rgba(255, 162, 162, 0.15)',
        border: '1px solid #ff0000b9',
      },
    },
  ];

  return (
    <div>
      {/* Bantuan Instan */}
      <div className="container my-2">
        <div className="card shadow-sm p-4">
          <h3 className="text-center mb-4" style={{ paddingTop: '20px' }}>Dapatkan Bantuan Instan</h3>
          <div className="row text-center" style={{ paddingBottom: '25px', paddingTop: '10px' }}>
            {kontakList.map((item, i) => (
              <div key={i} className="col-12 col-md-4 mb-3">
                <div style={{ ...cardStyleBase, ...item.style }}>
                  <div style={{ paddingLeft: '10px' }}>{item.icon}</div>
                  <div style={{ marginLeft: '15px', textAlign: 'left' }}>
                    <h6 className="mb-1">{item.title}</h6>
                    <h6 className="text-muted mb-0">{item.subtitle}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4" style={{ borderTop: "1px solid #ddd", marginTop: '100px' }}>
        <div className="container">
          <div className="row">
            {/* Kolom Kiri */}
            <div className="col-12 col-md-6 mb-3">
              <h5 style={{ color: "#197Aff", fontWeight: "bold" }}>TempoBox</h5>
              <p>
                Solusi penyimpanan barang sementara yang aman, fleksibel, dan terpercaya
                untuk segala kebutuhan Anda.
              </p>
            </div>

            {/* Kolom Kanan */}
            <div className="col-12 col-md-6 mb-3 ps-md-5">
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
