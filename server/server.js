const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); 
const db = require('./db'); 
const multer = require("multer");
const path = require("path");


const app = express();
const port = 3001; 

app.use(cors());
app.use(bodyParser.json());


// serve folder uploads
app.use("/uploads", express.static("uploads"));

// ========================
// MULTER SETUP (UPLOAD FOTO)
// ========================
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


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

// ===========================
// GET USER BY ID
// ===========================
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.execute(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "User tidak ditemukan." });
        }

        res.json(rows[0]);

    } catch (error) {
        console.error("GET USER ERROR:", error);
        res.status(500).json({ message: "Gagal mengambil data user." });
    }
});


// =============================
// UPDATE USER + UPLOAD FOTO
// =============================
app.put('/users/:id', upload.single("photo_profil"), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, password } = req.body;

        // PERHATIKAN: removePhoto HARUS dicek pakai req.body TANPA strict compare
        const removePhoto = req.body.removePhoto;

        let newPhotoUrl = null;

        // Jika upload foto baru
        if (req.file) {
            newPhotoUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
        }

        // Ambil data user lama
        const [oldUserRows] = await db.execute(
            'SELECT password, photo_profil FROM users WHERE id = ?',
            [id]
        );
        if (oldUserRows.length === 0) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        const oldUser = oldUserRows[0];

        // Password
        let finalPassword = oldUser.password;
        if (password && password.trim() !== "") {
            finalPassword = await bcrypt.hash(password, 10);
        }

        // Foto profil
        let finalPhoto = oldUser.photo_profil;

        // ---- PRIORITY: hapus foto ----
        if (removePhoto == "true") {       // pakai == biar fleksibel
            finalPhoto = null;
        }

        // ---- Upload foto baru override hapus ----
        if (newPhotoUrl) {
            finalPhoto = newPhotoUrl;
        }

        // Update DB
        await db.execute(
            `UPDATE users 
             SET name=?, email=?, phone=?, password=?, photo_profil=?
             WHERE id=?`,
            [name, email, phone, finalPassword, finalPhoto, id]
        );

        res.json({ message: "Profile berhasil diupdate." });

    } catch (error) {
        console.error("UPDATE PROFILE ERROR:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat update profile." });
    }
});




// =====================================================
// ================ CRUD GUDANG =========================
// =====================================================

// ----------- GET ALL GUDANG ------------
app.get('/gudang', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM gudang ORDER BY id DESC');
        res.json(rows);
    } catch (error) {
        console.error("GET GUDANG ERROR:", error);
        res.status(500).json({ message: 'Gagal mengambil data gudang.' });
    }
});

// ----------- GET GUDANG BY ID ----------
app.get('/gudang/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM gudang WHERE id = ?', [req.params.id]);
        res.json(rows[0]);
    } catch (error) {
        console.error("GET GUDANG BY ID ERROR:", error);
        res.status(500).json({ message: 'Gagal mengambil data gudang.' });
    }
});

// ----------- CREATE GUDANG -------------
app.post('/gudang', async (req, res) => {
    try {
        const data = req.body;

        const sql = `
            INSERT INTO gudang 
            (gambar_1, gambar_2, gambar_3, nama, deskripsi, lokasi, harga, per, luas, fasilitas, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            data.gambar_1,
            data.gambar_2,
            data.gambar_3,
            data.nama,
            data.deskripsi,
            data.lokasi,
            data.harga,
            data.per,
            data.luas,
            data.fasilitas,
            data.status
        ];

        const [result] = await db.execute(sql, values);
        res.status(201).json({ message: 'Data gudang berhasil ditambahkan.', id: result.insertId });

    } catch (error) {
        console.error("CREATE GUDANG ERROR:", error);
        res.status(500).json({ message: 'Gagal menambahkan data gudang.' });
    }
});

// ----------- UPDATE GUDANG -------------
app.put('/gudang/:id', async (req, res) => {
    try {
        const data = req.body;

        const sql = `
            UPDATE gudang SET
                gambar_1 = ?, gambar_2 = ?, gambar_3 = ?,
                nama = ?, deskripsi = ?, lokasi = ?,
                harga = ?, per = ?, luas = ?, fasilitas = ?, status = ?
            WHERE id = ?
        `;

        const values = [
            data.gambar_1,
            data.gambar_2,
            data.gambar_3,
            data.nama,
            data.deskripsi,
            data.lokasi,
            data.harga,
            data.per,
            data.luas,
            data.fasilitas,
            data.status,
            req.params.id
        ];

        await db.execute(sql, values);

        res.json({ message: 'Data gudang berhasil diperbarui.' });

    } catch (error) {
        console.error("UPDATE GUDANG ERROR:", error);
        res.status(500).json({ message: 'Gagal memperbarui data gudang.' });
    }
});

// ----------- DELETE GUDANG -------------
app.delete('/gudang/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM gudang WHERE id = ?', [req.params.id]);
        res.json({ message: 'Data gudang berhasil dihapus.' });
    } catch (error) {
        console.error("DELETE GUDANG ERROR:", error);
        res.status(500).json({ message: 'Gagal menghapus data gudang.' });
    }
});


// =====================================================
// ================ CRUD FAVORITE =======================
// =====================================================

// GET LIST FAVORITE BY USER
app.get('/favorite/:id_user', async (req, res) => {
    try {
        const { id_user } = req.params;

        const [rows] = await db.execute(
            `SELECT id_gudang FROM favorite WHERE id_user = ?`,
            [id_user]
        );

        res.json(rows);

    } catch (error) {
        console.error("GET FAVORITE ERROR:", error);
        res.status(500).json({ message: 'Gagal mengambil data favorite.' });
    }
});

// CEK APAKAH GUDANG SUDAH DIFAVORITKAN
app.get('/favorite/check/:id_user/:id_gudang', async (req, res) => {
    try {
        const { id_user, id_gudang } = req.params;

        const [rows] = await db.execute(
            `SELECT id FROM favorite WHERE id_user = ? AND id_gudang = ?`,
            [id_user, id_gudang]
        );

        res.json({ isFavorite: rows.length > 0 });

    } catch (error) {
        console.error("CHECK FAVORITE ERROR:", error);
        res.status(500).json({ message: 'Gagal mengecek status favorite.' });
    }
});

// TAMBAH FAVORITE
app.post('/favorite', async (req, res) => {
    try {
        const { id_user, id_gudang } = req.body;

        const [result] = await db.execute(
            `INSERT INTO favorite (id_user, id_gudang, created_at, updated_at)
             VALUES (?, ?, NOW(), NOW())`,
            [id_user, id_gudang]
        );

        res.json({ message: "Favorite ditambahkan.", id: result.insertId });

    } catch (error) {
        console.error("ADD FAVORITE ERROR:", error);
        res.status(500).json({ message: 'Gagal menambah favorite.' });
    }
});

// HAPUS FAVORITE
app.delete('/favorite/:id_user/:id_gudang', async (req, res) => {
    try {
        const { id_user, id_gudang } = req.params;

        await db.execute(
            `DELETE FROM favorite WHERE id_user = ? AND id_gudang = ?`,
            [id_user, id_gudang]
        );

        res.json({ message: "Favorite dihapus." });

    } catch (error) {
        console.error("DELETE FAVORITE ERROR:", error);
        res.status(500).json({ message: 'Gagal menghapus favorite.' });
    }
});



app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});