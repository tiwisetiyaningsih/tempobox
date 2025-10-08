// src/components/ContactSection.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPhone } from 'react-icons/bi';
import { BiLogoWhatsapp, BiLogoGmail } from 'react-icons/bi';

function Coba() {
  return (
    <div className="container py-5">
      <h4 className="text-center fw-bold mb-4" style={{ fontSize: '22px', color: '#212121' }}>
        Dapatkan Bantuan Instan
      </h4>

      <div className="row justify-content-center g-4">
        {/* WhatsApp */}
        <div className="col-md-4">
          <div
            className="d-flex align-items-center p-3 rounded"
            style={{
              backgroundColor: 'rgba(19, 207, 143, 0.15)',
              color: 'white',
              border: '2px solid #13CF8F',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <BiLogoWhatsapp 
             size={60} className="me-2" 
             style={{
                color: '#25D366',
                fontSize: '24px',
                fontWeight: 'bold', // efek tebal (walau terbatas karena ikon berbasis font)
              }}
            />
            <div>
              <div className="fw-semibold" style={{color: '#424242'}}>Chat WhatsApp</div>
              <small style={{color: '#838383'}}>Dapatkan tanggapan instan</small>
            </div>
          </div>
        </div>

        {/* Telepon */}
        <div className="col-md-4">
          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: '#E0E0E0', color: '#212121' }}>
            <BiPhone size={24} className="me-2" />
            <div>
              <div className="fw-semibold">Nomor Telephone</div>
              <small>+6281252575055</small>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4">
          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: '#EA4335', color: 'white' }}>
            <BiLogoGmail size={24} className="me-2" />
            <div>
              <div className="fw-semibold">Email Kami</div>
              <small>tempoboy@gmail.com</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coba;
