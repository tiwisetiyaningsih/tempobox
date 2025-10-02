// src/pages/login.jsx
import { useState } from "react";
import './register.css'
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validasi sederhana
    if (!form.email || !form.password) {
      alert("Email dan password wajib diisi!");
      return;
    }
  
    console.log("Data Login:", form);
    alert("Login berhasil!");
  };
  

  return (
    <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, rgba(25, 122, 255, 0.1), rgba(31, 194, 149, 0.2))',
            padding: '30px',
        }}
    >
        {/* Header */} 
        <div style={{ width: '562px' }}>
            <div className="mb-4">
                <a href="/" className="d-flex align-items-center gap-2 mb-3 fw-semibold text-decoration-none" style={{ fontSize: '16px', color: '#197AFF' }}>
                    <i
                        className="bi bi-chevron-left"
                        style={{
                            fontSize: '20px',
                            width: '20px',
                            height: '20px',
                            lineHeight: '20px',
                        }}
                    ></i>
                    Kembali ke Beranda
                </a>

                <h2 className="fw-bold text-center" style={{ fontSize: '22px', color: '#212121', marginTop: '20px' }}>
                    TempoBox
                </h2>

                <p className="text-center mb-4" style={{ fontSize: '16px', color: '#424242' }}>
                    Simpan Barang Aman & Fleksibel
                </p>
            </div>

            <div className="card shadow-sm p-5" style={{ borderRadius: "15px" }}>
                {/* Subjudul */}
                <h5 className="text-primary fw-bold" style={{ fontSize: "22px" }}>Selamat Datang di TempoBox</h5>
                <p className="text-muted" style={{ fontSize: "16px" }}>
                 Silakan masukkan email dan kata sandi untuk mulai menggunakan layanan penyimpanan TempoBox.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label fw-medium" style={{ fontSize: '16px', color: '#212121' }}>
                        Email
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Masukkan alamat email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ height: '48px' }}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="form-label fw-medium" style={{ fontSize: '16px', color: '#212121' }}>
                        Kata Sandi
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Masukkan kata sandi"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{ height: '48px' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-2 fw-medium" style={{ height: '48px' }}>
                    Masuk
                </button>
                </form>

                {/* Footer */}
                <p className="text-center text-muted mt-3" style={{ fontSize: '16px' }}>
                Belum punya akun?{" "}
                <Link to="/register" className="text-primary fw-semibold">
                    Daftar
                </Link>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login;
