<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Register Form</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <form class="card" action="./handlers/handleRegister.php" method="post">
        <h2>Create Account</h2>

        <div class="input-group">
            <label>Full Name</label>
            <input name="full_name" type="text">
        </div>

        <div class="input-group">
            <label>Email</label>
            <input name="email" type="email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input name="password" type="password">
        </div>

        <button class="btn">Register</button>

        <div class="link-text">
            Already have account? <a href="login.php">Login</a>
        </div>
    </form>


</body>

</html>