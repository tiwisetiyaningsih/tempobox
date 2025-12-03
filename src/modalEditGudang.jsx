import React, { useEffect, useState } from "react";

export default function ModalEditGudang({ data, onSuccess }) {
  const [form, setForm] = useState({});
  const [previewFoto, setPreviewFoto] = useState("");

  useEffect(() => {
    if (data) {
      setForm(data);
      setPreviewFoto(
        data.foto
          ? `http://localhost:3001/uploads/${data.foto}`
          : ""
      );
    }
  }, [data]);
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    // ✅ Kirim data text SAJA
    formData.append("nama", form.nama);
    formData.append("lokasi", form.lokasi);
    formData.append("harga", form.harga);
    formData.append("per", form.per);
    formData.append("luas", form.luas);
    formData.append("fasilitas", form.fasilitas);
    formData.append("deskripsi", form.deskripsi);
  
    // ✅ Jika upload foto BARU
    if (form.foto instanceof File) {
      formData.append("foto", form.foto);
    } else {
      // ✅ Jika tidak upload foto, kirim foto lama
      formData.append("foto_lama", data.foto);
    }
  
    try {
        const res = await fetch(`http://localhost:3001/gudang/${data.id}`, {
          method: "PUT",
          body: formData,
        });
      
        let result = {};
        try {
          result = await res.json();
        } catch (_) {}
      
        if (!res.ok) {
          alert(result.message || "Gagal mengedit data");
          return;
        }
      
        alert("Gudang berhasil diperbarui ✅");
      
        const closeBtn = document.querySelector(
            '#modalEditGudang [data-bs-dismiss="modal"]'
          );
          closeBtn?.click();          
      
        await onSuccess();   // ✅ AUTO REFRESH
      
      } catch (err) {
            console.error("EDIT ERROR:", err);
            alert("Terjadi kesalahan di sisi aplikasi");
      }      
  };
   

  if (!data) return null;

  return (
    <div className="modal fade" id="modalEditGudang" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <form onSubmit={handleSubmit} encType="multipart/form-data">

            <div className="modal-header">
              <h5>Edit Gudang</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body row g-2">

              <input type="hidden" name="id" value={form.id || ""} />

              <div className="col-6">
                <label>Nama</label>
                <input name="nama" className="form-control" value={form.nama || ""} onChange={handleChange} />
              </div>

              <div className="col-6">
                <label>Lokasi</label>
                <input name="lokasi" className="form-control" value={form.lokasi || ""} onChange={handleChange} />
              </div>

              <div className="col-6">
                <label>Harga</label>
                <input name="harga" className="form-control" value={form.harga || ""} onChange={handleChange} />
              </div>

              <div className="col-6">
                <label>Per</label>
                <select name="per" value={form.per || ""} onChange={handleChange} className="form-control">
                  <option value="/hari">/hari</option>
                  <option value="/bulan">/bulan</option>
                  <option value="/tahun">/tahun</option>
                </select>
              </div>

              <div className="col-6">
                <label>Luas</label>
                <input name="luas" className="form-control" value={form.luas || ""} onChange={handleChange} />
              </div>

              <div className="col-6">
                <label>Fasilitas</label>
                <input name="fasilitas" className="form-control" value={form.fasilitas || ""} onChange={handleChange} />
              </div>

              <div className="col-12">
                <label>Deskripsi</label>
                <textarea name="deskripsi" className="form-control" value={form.deskripsi || ""} onChange={handleChange} />
              </div>

              <div className="col-12">
                <label>Foto Gudang</label>
                    {previewFoto && (
                        <div className="mb-2">
                        <img
                            src={previewFoto}
                            alt="Preview Foto"
                            style={{ width: 120, borderRadius: 6 }}
                        />
                        </div>
                    )}

                <label className="mt-2">Ganti Foto (Opsional)</label>
                <input
                    type="file"
                    className="form-control form-control-sm"
                    name="foto"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        setForm({ ...form, foto: file });

                        if (file) {
                        setPreviewFoto(URL.createObjectURL(file));
                        }
                    }}
                />
                </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
              <button type="submit" className="btn btn-success">Simpan Perubahan</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
