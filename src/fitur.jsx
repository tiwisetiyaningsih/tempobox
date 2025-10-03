import React from "react";
import smartlock from "./assets/smartlock.svg";
import waktu from "./assets/waktu.svg";
import cctv from "./assets/cctv.svg";

function fitur() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold">Kenapa Pilih TempoBox?</h2>
        <p className="text-muted">
          Fitur unggulan untuk keamanan dan kenyamanan Anda
        </p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-4 border-0">
              <img
                src={smartlock}
                alt="Smart Lock"
                className="mx-auto mb-3"
                style={{ height: "100px" }}
              />
              <h5>Smart Lock</h5>
              <p className="text-muted">
                Sistem kunci pintar untuk akses yang aman dan mudah
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4 border-0">
              <img
                src={cctv}
                alt="24/7 CCTV"
                className="mx-auto mb-3"
                style={{ height: "100px" }}
              />
              <h5>24/7 CCTV</h5>
              <p className="text-muted">
                Monitoring keamanan 24 jam untuk menjaga barang Anda
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4  border-0" >
              <img
                src={waktu}
                alt="Durasi Fleksibel"
                className="mx-auto mb-3"
                style={{ height: "100px" }}
              />
              <h5>Durasi Fleksibel</h5>
              <p className="text-muted">
                Durasi penyimpanan fleksibel sesuai kebutuhan Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default fitur;
