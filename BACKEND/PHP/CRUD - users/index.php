<?php
include "connection.php";
// read all users from database (READ)
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Register Form</h1>
        <!-- create new user-->
     <form action="handleRegister.php" method="post">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Register</button>
     </form>


     <hr>

    <h1>All Users</h1>
        <!-- show all users in a table -->
    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
        </tr>

        <?php
            while($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>" . $row['password'] . "</td>";
                echo "</tr>";
            }
        ?>


    </table>


    <hr>

    <h1>Update user name based on email</h1>
    <form action="handleUpdateName.php" method="post">
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" name="new_name" placeholder="New_Name" required>
        <button type="submit">Update</button>
     </form>

     <hr>
    <h1>delete user  based on email</h1>
    <form action="handleDeleteUser.php" method="post">
        <input type="email" name="email" placeholder="Email" required>
        <button type="submit">Delete</button>
     </form>

</body>
</html>