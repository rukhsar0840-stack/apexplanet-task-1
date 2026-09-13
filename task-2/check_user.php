<?php

header("Content-Type: application/json");

$email = $_GET["email"] ?? "";

$email = strtolower(trim($email));

$existingEmails = [
    "test@gmail.com",
    "admin@gmail.com"
];

if (in_array($email, $existingEmails)) {
    echo json_encode([
        "exists" => true,
        "message" => "Email already exists!"
    ]);

} else {

    echo json_encode([
        "exists" => false,
        "message" => "Email is available!"
    ]);
}

?>