<?php
// register.php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Sesuaikan origin React dev: kalau pake vite default 5174
$allowedOrigin = "http://localhost:5174";

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // untuk preflight CORS
    http_response_code(200);
    exit;
}

include "db.php";

$input = json_decode(file_get_contents("php://input"), true);
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$password = $input['password'] ?? '';
$confirm = $input['confirmPassword'] ?? '';

if (!$name || !$email || !$phone || !$password || !$confirm) {
    http_response_code(400);
    echo json_encode(["status"=>"error","message"=>"Semua field wajib diisi"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status"=>"error","message"=>"Email tidak valid"]);
    exit;
}

if ($password !== $confirm) {
    http_response_code(400);
    echo json_encode(["status"=>"error","message"=>"Konfirmasi password tidak cocok"]);
    exit;
}

// Cek email sudah ada
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$res = $stmt->get_result();
if ($res && $res->num_rows > 0) {
    http_response_code(409);
    echo json_encode(["status"=>"error","message"=>"Email sudah terdaftar"]);
    exit;
}
$stmt->close();

// Hash password & simpan
$hash = password_hash($password, PASSWORD_BCRYPT);
$insert = $conn->prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
$insert->bind_param("ssss", $name, $email, $phone, $hash);

if ($insert->execute()) {
    http_response_code(201);
    echo json_encode(["status"=>"success","message"=>"Registrasi berhasil"]);
} else {
    http_response_code(500);
    echo json_encode(["status"=>"error","message"=>"Gagal registrasi: " . $conn->error]);
}
$insert->close();
$conn->close();
