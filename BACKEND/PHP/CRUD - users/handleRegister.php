<?php
include "connection.php";

// request body
// name, email, password
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// insert into database (CREATE)
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

if(mysqli_query($conn, $sql)) {
    echo "User registered successfully";
    header("Location: index.php"); // redirect to index.php after update

} else {
    echo "Error: " . mysqli_error($conn);
}