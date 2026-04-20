<?php

// connection config
$host = "localhost";
$username = "root"; 
$password = "1234";
$db_name =  "nikhil_wd6m";


$conn = mysqli_connect($host, $username, $password, $db_name) ;

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
