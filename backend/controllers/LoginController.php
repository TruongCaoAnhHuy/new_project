<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require '../configs/config.php';
require '../models/UserModel.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userModel = get_user();
    $collection = get_collection(get_database('Users'), 'users');

    $input = json_decode(file_get_contents("php://input"), true);
    $name = $input['userName'];
    $pass = $input['pass'];

    if (isset($input['userName']) && isset($input['pass'])) {

        $userFinded = $collection->findOne(['username' => $name]);

        if($userFinded) {
            if($pass === $userFinded['password']) {
                echo json_encode(["status" => "success", "message" => "Login success...", "name" => $name]);
            } else {
                echo json_encode(["status" => "error", "message" => "Incorrect password. Please try again."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect username. Please try again."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
