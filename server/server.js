const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); 
const db = require('./db'); 

const app = express();
const port = 3001; 

app.use(cors());
app.use(bodyParser.json());

// -------------------------------------------------------------------
// Endpoint Register (Ditambahkan Logging Ringan)
// -------------------------------------------------------------------
app.post('/register', async (req, res) => {
    console.log('--- ATTEMPT: REGISTER ---');
    const { name, email, phone, password } = req.body;

    try {
        const [rows] = await db.execute('SELECT email FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(409).json({ message: 'Email sudah terdaftar.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users (name, email, phone, password, role, photo_profil)
            VALUES (?, ?, ?, ?, 'user', NULL)
        `;
        await db.execute(sql, [name, email, phone, hashedPassword]);

        res.status(201).json({ message: 'Pendaftaran berhasil! Silakan masuk.' });

    } catch (error) {
        console.error("REGISTER ERROR:", error);
        res.status(500).json({ message: 'Terjadi kesalahan server saat pendaftaran.' });
    }
});


// -------------------------------------------------------------------
// Endpoint Login (Dengan Logging Ekstrem)
// -------------------------------------------------------------------
app.post('/login', async (req, res) => {
    console.log('--- ATTEMPT: LOGIN RECEIVED ---');
    const { email, password } = req.body;

    try {
        // Tambahkan role dan photo_profil
        const [rows] = await db.execute(
            'SELECT id, name, email, password, phone, role, photo_profil FROM users WHERE email = ?',
            [email]
        );
        
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Email atau kata sandi salah.' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Email atau kata sandi salah.' });
        }

        const safeUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,               // <-- DITAMBAHKAN
            photo_profil: user.photo_profil // <-- DITAMBAHKAN
        };
        
        res.status(200).json({
            message: 'Login berhasil',
            user: safeUser,
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({ message: 'Terjadi kesalahan server saat login.' });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});