import React from "react";

const ModalTambahGudang = ({ onSubmit, loading }) => {
  return (
    <div
      className="modal fade" id="modalTambahGudang" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-3">

          <div className="modal-header">
            <h5 className="modal-title">Tambah Data Gudang</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="modal-body">
              <div className="row g-2">

                <div className="col-md-6">
                  <label>Nama Gudang</label>
                  <input type="text" className="form-control form-control-sm" name="nama" required />
                </div>

                <div className="col-md-6">
                  <label>Lokasi</label>
                  <input type="text" className="form-control form-control-sm" name="lokasi" required />
                </div>

                <div className="col-md-6">
                  <label>Harga (Rp)</label>
                  <input type="number" className="form-control form-control-sm" name="harga" required />
                </div>

                <div className="col-md-6">
                  <label>Per</label>
                  <select className="form-select form-select-sm" name="per">
                    <option value="/hari">hari</option>
                    <option value="/bulan">bulan</option>
                    <option value="/tahun">tahun</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label>Luas (m²)</label>
                  <input type="number" className="form-control form-control-sm" name="luas" />
                </div>

                <div className="col-md-6">
                  <label>Foto Gudang</label>
                  <input type="file" className="form-control form-control-sm" name="foto" />
                </div>

                <div className="col-12">
                  <label>Fasilitas</label>
                  <input type="text" className="form-control form-control-sm" name="fasilitas" />
                </div>

                <div className="col-12">
                  <label>Deskripsi</label>
                  <textarea className="form-control form-control-sm" name="deskripsi"></textarea>
                </div>

              </div>
            </div>

            <div className="modal-footer py-2">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                Batal
              </button>
              <button type="submit" className="btn btn-primary btn-sm" disabled={loading}>
                {loading ? "Menyimpan..." : "Simpan"}
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ModalTambahGudang;
