<?php
// db.php
$host = "localhost";
$user = "root";     // default XAMPP
$pass = "";         // default XAMPP biasanya kosong
$db   = "tempobox";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "DB connection failed: " . $conn->connect_error]);
    exit;
}
$conn->set_charset("utf8mb4");
?>
