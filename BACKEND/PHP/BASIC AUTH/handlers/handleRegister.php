<?php

// import
require "../db/userdata.php";


// register
$user_name = $_POST["full_name"];
$user_email = $_POST["email"];
$user_pass = $_POST["password"];


// creating new user data (based on input)
$newUser =     [
        "name" => $user_name,
        "email" => $user_email,
        "pass" => $user_pass
];

// inserting new user to userDB
array_push($_SESSION["users"],$newUser);


// viewing updated user
// print_r($users);
header("Location: ../login.php");

print_r($_SESSION["users"]);