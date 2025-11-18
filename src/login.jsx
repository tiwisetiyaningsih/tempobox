import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// Pastikan Anda sudah mengimpor Bootstrap Icons (misalnya di index.html atau setup proyek Anda)

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // State baru untuk mengontrol tampilan kata sandi
  const [showPassword, setShowPassword] = useState(false);

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
        navigate("/dashboard_customer");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Terjadi kesalahan saat login.");
    }
  };

  // Fungsi untuk mengubah state showPassword
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoToPage = () => {
    console.log("Login Berhasil...");
    navigate("/dashboard_customer");
  };

  return (
    <div className="d-flex vh-100 login-page-split">

      {/* Kolom Kiri: Background Image & Quote */}
      <div className="col-lg-5 col-md-5 d-none d-md-flex flex-column justify-content-center p-5 text-white login-left-col">
        {/* Konten kolom kiri (seperti di gambar) */}
        <h4 className="fw-light fst-italic ms-5">
          "Solusi menemukan gudang terpercaya"
        </h4>
      </div>

      {/* Kolom Kanan: Form Login */}
      <div className="col-12 col-md-7 d-flex flex-column justify-content-start align-items-start p-4 p-md-5 login-right-col">
        <div className="login-form-container ms-5" style={{ width: '100%', maxWidth: '80%' }}>

          {/* Header & Link Kembali */}
          <div className="mb-5">
            <Link
              to="/beranda"
              className="d-flex align-items-center gap-2 mb-4 fw-semibold text-decoration-none text-muted"
            >
              <i className="bi bi-chevron-left"></i>
              Kembali ke Beranda
            </Link>

            {/* Judul Utama */}
            <div className="justify-content-center">
              <h3 className="fw-bold text-primary mb-2 text-center mt-5">
                Selamat Datang di TempoBox
              </h3>
              <p className="text-muted text-center">
                Silakan masukkan email dan kata sandi untuk mulai menggunakan
                layanan penyimpanan TempoBox.
              </p>
            </div>
          </div>

          {/* Form */}
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <div className="mb-3 ">
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

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="password" className="form-label fw-medium mb-1">
                  Kata Sandi
                </label>
                {/* Link Lupa Kata Sandi */}
                <Link to="/forgot-password" className="small text-decoration-none">
                  Lupa Kata Sandi?
                </Link>
              </div>

              {/* Tambahkan div 'input-group' untuk tombol show/hide */}
              <div className="input-group border border-secondary rounded">
                <input
                  // Menggunakan showPassword untuk menentukan tipe input (password atau text)
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  placeholder="Masukkan kata sandi"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                {/* Tombol Show/Hide Password */}
                <button
                  className="btn btn-white border-white"
                  type="button"
                  onClick={togglePasswordVisibility}
                  title={showPassword ? "Sembunyikan Kata Sandi" : "Lihat Kata Sandi"}
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-medium mt-4"
              onClick={handleGoToPage}
            >
              Masuk
            </button>
          </form>

          {/* Footer Link Daftar */}
          <p className="text-center mt-3 mb-0">
            Belum Punya Akun?{" "}
            <Link to="/register" className="text-primary fw-semibold text-decoration-none">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;