<?php


// import
// require "../db/userdata.php";
session_start();
// print_r($_SESSION["users"]);

// checking credentials
$userEmail = $_POST["email"];
$userPass = $_POST["pass"];



// login flag
$isAuthUser = FALSE;

for ($i=0; $i < count($_SESSION["users"]) ; $i++) { 
    if(($_SESSION["users"][$i]["email"]==$userEmail) && ($_SESSION["users"][$i]["pass"]==$userPass)){
        $isAuthUser = TRUE;
    }
}



if($isAuthUser){
    $_SESSION["payload"]=[
        "email"=>$userEmail,
        "pass"=>$userPass,
    ];

    echo "User is valid : make him to see profile page";

}else{
    echo "Invalid Credentials";
}


