<?php
// api.php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

$data = [
    "message" => "Hello from PHP API"
];

    echo json_encode($data);
?>
