// src/pages/register.jsx
import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Konfirmasi password tidak sama!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mendaftar.");
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
          <h5 className="text-primary fw-bold form-title">Buat Akun Anda</h5>
          <p className="text-muted form-subtitle">
            Bergabunglah dengan TempoBox untuk solusi penyimpanan yang aman
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="fullName" className="form-label fw-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Masukkan nama lengkap"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
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
              <label htmlFor="phone" className="form-label fw-medium">
                Nomor Telepon
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Masukkan nomor telepon"
                value={form.phone}
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
            <div className="mb-2">
              <label
                htmlFor="confirmPassword"
                className="form-label fw-medium"
              >
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Konfirmasi kata sandi"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-2 fw-medium"
            >
              Daftarkan Akun
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-muted mt-3">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-primary fw-semibold">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;