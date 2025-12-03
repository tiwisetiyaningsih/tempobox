export default function ModalDetailGudang({ show, onClose, data }) {
  if (!show || !data) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Detail Gudang</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {data.foto && (
              <img
                src={`http://localhost:3001/uploads/${data.foto}`}
                className="img-fluid rounded mb-3"
              />
            )}

            <p><b>Nama:</b> {data.nama}</p>
            <p><b>Lokasi:</b> {data.lokasi}</p>
            <p><b>Harga:</b> Rp {Number(data.harga).toLocaleString()}</p>
            <p><b>Per:</b> {data.per}</p>
            <p><b>Luas:</b> {data.luas}</p>
            <p><b>Fasilitas:</b> {data.fasilitas}</p>
            <p><b>Deskripsi:</b> {data.deskripsi}</p>
            <p><b>Status:</b> {data.status}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
