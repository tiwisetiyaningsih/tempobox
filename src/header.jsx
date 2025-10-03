import React from "react";
import ilustrasi from './assets/ilustrasi.svg';

function header() {
  return (
    <section style={{paddingTop:'10px', paddingBottom: '10px'}}>
      <div className="container d-flex flex-lg-row flex-column align-items-center">
        {/* Text */}
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="fw-bold display-5">
            Simpan Barang <br />
            <span className="text-primary">Aman & Fleksibel</span>
          </h1>
          <p className="text-muted mt-3">
            TempoBox adalah solusi penyimpanan sementara yang aman dan
            terpercaya. Cocok untuk mahasiswa, renovasi rumah, dan usaha kecil.
          </p>
          <button className="btn btn-primary mt-3">Sewa Sekarang</button>
        </div>

        {/* Image */}
        <div className="text-center" style={{minWidth:'104vh'}}>
          <img
            src={ilustrasi}
            alt="Illustration"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default header;
