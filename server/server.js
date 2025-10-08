const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tempobox'
});

db.connect(err => {
  if (err) throw err;
  console.log('Terhubung ke database tempobox');
});

app.post('/register', async (req, res) => {
  const { fullName, email, phone, password } = req.body;

  try {
    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (nama, email, phone, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [fullName, email, phone, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.json({ message: 'Email sudah terdaftar' });
        }
        return res.status(500).json({ message: 'Gagal mendaftar' });
      }
      res.json({ message: 'Registrasi berhasil' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengenkripsi password' });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Terjadi kesalahan server' });
    if (results.length === 0) return res.json({ message: 'Email tidak ditemukan' });

    const user = results[0];

    console.log("Login attempt:", email);
    console.log("Password input:", password);
    console.log("Password in DB:", user.password);


    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: 'Password salah' });

    res.json({ message: 'Login berhasil', user: { id: user.id, nama: user.nama, email: user.email } });
  });
});


app.listen(3001, () => {
  console.log('Server berjalan di port 3001');
});
