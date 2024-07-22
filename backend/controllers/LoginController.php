<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

require '../configs/config.php';
require '../models/UserModel.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    $name = $input['userName'];
    $pass = $input['pass'];

    // Xử lý dữ liệu tại đây
    // Ví dụ: Lưu vào cơ sở dữ liệu

    // get API user
    function checkUserCredentials($username, $password)
    {
        $users = json_decode(connect_api(get_user_url()), true);

        // Loop through the users to check credentials
        foreach ($users['users'] as $user) {
            if ($user['username'] === $username && $user['password'] === $password) {
                return true;
            }
        }

        return false;
    }

    if (checkUserCredentials($name, $pass)) {
        echo json_encode(["status" => "success", "message" => "Login success...", "name" => $name, "pass" => $pass]);
    } else {
        echo json_encode(["status" => "error", "message" => "Incorrect username or password. Please try again."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
