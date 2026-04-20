<?php
include "connection.php";

// request body
// email    
$email = $_POST['email'];

// insert into database (CREATE)
$sql = "delete from users where email='$email'";

if(mysqli_query($conn, $sql)) {
    echo "User deleted successfully";
    header("Location: index.php"); // redirect to index.php after update
} else {
    echo "Error: " . mysqli_error($conn);
}

// todo: check first if user email is exist in DB, if not exist show error message "User not found"