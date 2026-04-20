<?php
include "connection.php";

// request body
// email, new_name
$email = $_POST['email'];
$new_name = $_POST['new_name'];

// insert into database (CREATE)
$sql = "UPDATE users SET name = '$new_name' WHERE email = '$email'";

if(mysqli_query($conn, $sql)) {
    echo "User name updated successfully";
    header("Location: index.php"); // redirect to index.php after update
} else {
    echo "Error: " . mysqli_error($conn);
}

// todo: check first if user email is exist in DB, if not exist show error message "User not found"