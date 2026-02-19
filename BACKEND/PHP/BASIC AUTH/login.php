<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <form method="post" action="./handlers/handleLogin.php" class="card">
    <h2>Login</h2>

    <div class="input-group">
        <label>Email</label>
        <input name="email" type="email" placeholder="Enter email">
    </div>

    <div class="input-group">
        <label>Password</label>
        <input name="pass" type="password" placeholder="Enter password">
    </div>



    <button class="btn">Login</button>

    <div class="link-text">
        Don't have account? <a href="#">Register</a>
    </div>
</form>


</body>
</html>
