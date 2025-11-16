import React from "react";
import gudang1 from './assets/gudang.svg';
import gudang2 from './assets/gudang.svg';
import gudang3 from './assets/gudang.svg';
import gudang4 from './assets/gudang.svg';

const handleFavoriteClick = (namaGudang) => {
  console.log(`Favorite clicked for: ${namaGudang}`);
};

export default function DaftarGudang() {
  const data = [
    { nama: "Rumah Ibu Lenny", lokasi: "-", harga: "-", status: "-", image: gudang1 },
    { nama: "Rumah Ibu Lenny", lokasi: "-", harga: "-", status: "-", image: gudang2 },
    { nama: "GUDANG Rumah Ibu Lenny BANDUNG", lokasi: "-", harga: "-", status: "-", image: gudang3 },
    { nama: "Rumah Ibu Lenny", lokasi: "-", harga: "-", status: "-", image: gudang4 },
  ];

  return (
    <section className="py-5 text-center" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 className="fw-bold mb-5" style={{fontSize:'42px'}}>Beberapa Daftar Gudang</h2>
      
      <div className="container">
        <div className="row justify-content-center g-4">
          {data.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 d-flex">
              <div className="card shadow-sm border-0 h-100 w-100">
                
                <div 
                  className="position-relative" 
                  style={{ 
                    aspectRatio: '16/9',
                    backgroundColor: '#e9ecef',
                    borderTopLeftRadius: '0.375rem',
                    borderTopRightRadius: '0.375rem',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="w-100 h-100 object-fit-cover"
                  />
                  
                  <button 
                    className="btn btn-sm position-absolute top-0 end-0 m-2 bg-white text-muted"
                    style={{ borderRadius: '50%' }}
                    onClick={() => handleFavoriteClick(item.nama)}
                    aria-label={`Toggle favorite for ${item.nama}`}
                  >
                    <i className="bi bi-heart"></i> 
                  </button>
                </div>

                <div className="card-body text-start d-flex flex-column p-3">
                  <p className="fw-bold mb-2" style={{fontSize:'12px'}}>{item.nama}</p>
                  
                  <div className="small mb-3">
                    <p className="mb-1 text-muted" style={{fontSize:'12px'}}>Lokasi : <span className="text-dark" style={{fontSize:'12px'}}>{item.lokasi}</span></p>
                    <p className="mb-1 text-muted" style={{fontSize:'12px'}}>Harga : <span className="text-dark" style={{fontSize:'12px'}}>{item.harga}</span></p>
                    <p className="mb-2 text-muted" style={{fontSize:'12px'}}>Status : <span className="text-dark" style={{fontSize:'12px'}}>{item.status}</span></p>
                  </div>
                  
                  <div className="d-grid mt-auto">
                    <a 
                      href="#"
                      className="btn btn-primary btn-sm" style={{fontSize:'12px'}}
                    >
                      Lihat Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}