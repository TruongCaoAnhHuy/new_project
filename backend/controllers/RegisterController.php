<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

require '../configs/config.php';
require '../models/UserModel.php';

// Xử lý yêu cầu preflight (OPTIONS)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents("php://input"), true);

    // Xử lý dữ liệu tại đây
    // Ví dụ: Lưu vào cơ sở dữ liệu

    if ($input && isset($input['userName']) && isset($input['pass']) && isset($input['cf_pass'])) {
        $name = $input['userName'];
        $pass = $input['pass'];
        $cf_pass = $input['cf_pass'];
        echo json_encode(["status" => "success", "message" => "Data received", "name" => $name, "pass" => $pass, "cf_pass" => $cf_pass]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
