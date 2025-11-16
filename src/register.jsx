import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
// Pastikan Bootstrap Icons sudah terinstal/termasuk di proyek Anda

function Register() {
  // 1. Tambahkan state untuk semua field, termasuk konfirmasi sandi
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", // State untuk Konfirmasi Kata Sandi
  });

  // State untuk mengontrol tampilan kata sandi pada kedua field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi sederhana: pastikan Kata Sandi dan Konfirmasi Kata Sandi sama
    if (form.password !== form.confirmPassword) {
      alert("Kata Sandi dan Konfirmasi Kata Sandi tidak cocok!");
      return;
    }

    try {
      // NOTE: Endpoint/Logic diubah menjadi register, bukan login
      const res = await fetch("http://localhost:3001/register", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
      
      if (res.ok) { // Jika registrasi berhasil (status 200-299)
        // Setelah berhasil daftar, arahkan ke halaman login
        navigate("/login"); 
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Terjadi kesalahan saat pendaftaran.");
    }
  };

  // Fungsi untuk mengubah state showPassword (berdasarkan nama field)
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  
  // Komponen Helper untuk Input Sandi (agar kode lebih rapi dan reusable)
  const PasswordInput = ({ label, name, value, isShown, toggleHandler, placeholder }) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label fw-medium">
        {label}
      </label>
      <div className="input-group border border-secondary rounded">
        <input
          type={isShown ? "text" : "password"}
          className="form-control border-0 shadow-none" // Hapus border bawaan dari form-control
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
        <button
          className="btn btn-white border-white"
          type="button"
          onClick={() => toggleHandler(name)}
          title={isShown ? "Sembunyikan Kata Sandi" : "Lihat Kata Sandi"}
        >
          <i className={`bi ${isShown ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
        </button>
      </div>
    </div>
  );


  return (
    <div className="d-flex vh-100 login-page-split">

      {/* Kolom Kiri: Background Image & Quote */}
      <div className="col-lg-5 col-md-5 d-none d-md-flex flex-column justify-content-center p-5 text-white login-left-col">
        <h4 className="fw-light fst-italic ms-5">
          "Solusi menemukan gudang terpercaya"
        </h4>
      </div>

      {/* Kolom Kanan: Form Register */}
      <div className="col-12 col-md-7 d-flex flex-column justify-content-start align-items-start p-4 p-md-5 login-right-col">
        <div className="login-form-container ms-5" style={{ width: '100%', maxWidth: '80%' }}>

          {/* Header & Link Kembali */}
          <div className="mb-5">
            <Link
              to="/beranda"
              className="d-flex align-items-center gap-2 mb-3 fw-semibold text-decoration-none text-muted"
            >
              <i className="bi bi-chevron-left"></i>
              Kembali ke Beranda
            </Link>

            {/* Judul Utama */}
            <div className="justify-content-center">
              <h3 className="fw-bold text-primary mb-2 mt-2 text-center">
                Daftar Akun TempoBox
              </h3>
              <p className="text-muted text-center">
                Silahkan isi data diri Anda untuk masuk ke Tempobox dan mulai mengelola gudang atau menyimpan daftar favorit.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            
            {/* 1. Input Nama Lengkap */}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label fw-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control border border-secondary"
                name="fullName"
                placeholder="Masukkan nama lengkap"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* 2. Input Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">
                Email
              </label>
              <input
                type="email"
                className="form-control border border-secondary"
                name="email"
                placeholder="Masukkan email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* 3. Input No Telepon */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-medium">
                No Telepon
              </label>
              <input
                type="tel" // Menggunakan type="tel"
                className="form-control border border-secondary"
                name="phone"
                placeholder="Masukkan nomor telepon"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* 4. Input Kata Sandi dengan Show/Hide */}
            <PasswordInput
                label="Kata Sandi"
                name="password"
                value={form.password}
                isShown={showPassword}
                toggleHandler={togglePasswordVisibility}
                placeholder="Masukkan Kata Sandi"
            />
            
            {/* 5. Input Konfirmasi Kata Sandi dengan Show/Hide */}
            <PasswordInput
                label="Konfirmasi Kata Sandi"
                name="confirmPassword"
                value={form.confirmPassword}
                isShown={showConfirmPassword}
                toggleHandler={togglePasswordVisibility}
                placeholder="Masukkan Konfirmasi Kata Sandi"
            />

            <button
              type="submit"
              className="btn btn-primary w-100 fw-medium mt-4"
            >
              Daftar
            </button>
          </form>

          {/* Footer Link Masuk */}
          <p className="text-center mt-3 mb-0">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-primary fw-semibold text-decoration-none">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;