import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DashboardAdmin.css'; 
import logoTempoBox from './assets/Logo.svg';


function DashboardAdmin() {
  const navigate = useNavigate();

  const [adminInfo, setAdminInfo] = useState({ name: '', email: '' });
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [gudang, setGudang] = useState([]);
  const [iklan, setIklan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.role !== "admin") navigate("/login");
      setAdminInfo({ name: userData.name, email: userData.email });
    } else {
      navigate("/login");
    }

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar?");
    if (!confirmLogout) {
      return; // Tetap di halaman jika Cancel
    }

    localStorage.removeItem("user"); 
    navigate('/beranda');
  };

  const fetchData = async () => {
    try {
      const [gudangRes, iklanRes] = await Promise.all([
        axios.get("http://localhost:3001/gudang"),
        axios.get("http://localhost:3001/iklan")
      ]);
      setGudang(gudangRes.data);
      setIklan(iklanRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTambahIklan = async (idGudang) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      await axios.post("http://localhost:3001/iklan", {
        id_admin: storedUser.id,
        id_gudang: idGudang
      });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleHapusIklan = async (idIklan) => {
    try {
      await axios.delete(`http://localhost:3001/iklan/${idIklan}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const jumlahIklan = iklan.length;
  const jumlahTersedia = gudang.filter(g => g.status === "Tersedia").length;
  const jumlahTerisi = gudang.filter(g => g.status === "Terisi").length;

  const filteredGudang = gudang.filter(g => g.nama.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className="d-flex admin-dashboard-container vh-100">
      
      {/* SIDEBAR */}
      <div className="sidebar bg-white border-end d-flex flex-column p-3">
        <div className="sidebar-header mb-4 text-start">
          <img src={logoTempoBox} className="logoTempoBox" alt="TempoBox logo" style={{ height: '35px', margin:'5px 0px' }} />
        </div>

        <nav className="nav flex-column flex-grow-1">
          <Link 
            to="#" 
            className={`nav-link text-dark py-2 d-flex align-items-center gap-2 ${activeMenu === 'Dashboard' ? 'active-menu' : ''}`}
            onClick={() => setActiveMenu('Dashboard')}
          >
            <i className="bi bi-grid-fill"></i> Dashboard
          </Link>

          <Link 
            to="#" 
            className={`nav-link text-dark py-2 d-flex align-items-center gap-2 ${activeMenu === 'Kelola Gudang' ? 'active-menu' : ''}`}
            onClick={() => setActiveMenu('Kelola Gudang')}
          >
            <i className="bi bi-archive-fill"></i> Kelola Gudang
          </Link>

          <Link 
            to="/kelola_users" 
            className={`nav-link text-dark py-2 d-flex align-items-center gap-2 ${activeMenu === 'Kelola User' ? 'active-menu' : ''}`}
            onClick={() => setActiveMenu('Kelola User')}
          >
            <i className="bi bi-people-fill"></i> Kelola User
          </Link>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content flex-grow-1 d-flex flex-column">

        {/* TOP NAVBAR */}
        <nav className="navbar navbar-light bg-white border-bottom p-3">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Dashboard Admin</span>

            <div className="d-flex align-items-center">
              <div className="text-end me-3">
                <div className="small text-muted">{adminInfo.name}</div>
                <div className="fw-semibold">{adminInfo.email}</div>
              </div>

              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-1"></i> Keluar
              </button>
            </div>
          </div>
        </nav>

        {/* CONTENT AREA */}
        <div className="content-area p-4 flex-grow-1">
          <div>
            <h3>Selamat Datang, {adminInfo.name}</h3>
            <p>Ini adalah area ringkasan untuk administrator TempoBox.</p>
          </div>

          {/* KOTAK JUMLAH IKLAN, JUMLAH GUDANG TERSEDIA, JUMLAH GUDANG TERISI*/}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card text-center bg-primary text-white p-3">
                <h5>Jumlah Iklan</h5>
                <h3>{jumlahIklan}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center bg-success text-white p-3">
                <h5>Gudang Tersedia</h5>
                <h3>{jumlahTersedia}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center bg-danger text-white p-3">
                <h5>Gudang Terisi</h5>
                <h3>{jumlahTerisi}</h3>
              </div>
            </div>
          </div>

          {/* FILTER / SEARCH BY NAMA GUDANG */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cari nama gudang..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* TABEL DAFTAR GUDANG YANG BISA DITAMBAHKAN JADI IKLAN */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Gudang</th>
                  <th>Lokasi</th>
                  <th>Harga</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredGudang.map((g, index) => {
                  const iklanData = iklan.find(i => i.id_gudang === g.id);
                  return (
                    <tr key={g.id}>
                      <td>{index + 1}</td>
                      <td>{g.nama}</td>
                      <td>{g.lokasi}</td>
                      <td>{g.harga}</td>
                      <td style={{ color: g.status==='Tersedia'?'green':'red' }}>{g.status}</td>
                      <td>
                        {iklanData ? (
                          <button className="btn btn-danger btn-sm" onClick={()=>handleHapusIklan(iklanData.id)}>Hapus Iklan</button>
                        ) : (
                          <button className="btn btn-primary btn-sm" onClick={()=>handleTambahIklan(g.id)}>Tambah Iklan</button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardAdmin;
