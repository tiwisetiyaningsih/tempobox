// src/pages/login.jsx
import { useState } from "react";
import "./register.css"; // masih bisa pakai file yang sama
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
      if (data.message === "Login berhasil") {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="register-page">
      {/* Header */}
      <div className="register-container">
        <div className="mb-4">
          <a
            href="/beranda"
            className="d-flex align-items-center gap-2 mb-3 fw-semibold text-decoration-none back-link"
          >
            <i className="bi bi-chevron-left back-icon"></i>
            Kembali ke Beranda
          </a>

          <h2 className="fw-bold text-center brand-title">TempoBox</h2>

          <p className="text-center mb-4 brand-subtitle">
            Simpan Barang Aman & Fleksibel
          </p>
        </div>

        <div className="card shadow-sm p-5 register-card">
          {/* Subjudul */}
          <h5 className="text-primary fw-bold form-title">
            Selamat Datang di TempoBox
          </h5>
          <p className="text-muted form-subtitle">
            Silakan masukkan email dan kata sandi untuk mulai menggunakan
            layanan penyimpanan TempoBox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="form-label fw-medium">
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
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label fw-medium">
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
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-2 fw-medium"
            >
              Masuk
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-muted mt-3">
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
