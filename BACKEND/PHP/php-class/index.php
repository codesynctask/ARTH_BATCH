<?php

$students = [
    [
        "name" => "Deepak",
        "age" => 18,
        "marks" => 85,
        "result" => "Pass"
    ],
    [
        "name" => "Riya",
        "age" => 19,
        "marks" => 92,
        "result" => "Pass"
    ],
    [
        "name" => "Karan",
        "age" => 17,
        "marks" => 45,
        "result" => "Pass"
    ],
    [
        "name" => "Sneha",
        "age" => 18,
        "marks" => 33,
        "result" => "Pass"
    ],
    [
        "name" => "Vikas",
        "age" => 20,
        "marks" => 28,
        "result" => "Fail"
    ],
    [
        "name" => "Neha",
        "age" => 19,
        "marks" => 76,
        "result" => "Pass"
    ],
    [
        "name" => "Rahul",
        "age" => 18,
        "marks" => 55,
        "result" => "Pass"
    ],
    [
        "name" => "Pooja",
        "age" => 17,
        "marks" => 30,
        "result" => "Fail"
    ],
    [
        "name" => "Arjun",
        "age" => 21,
        "marks" => 88,
        "result" => "Pass"
    ],
    [
        "name" => "Meera",
        "age" => 18,
        "marks" => 67,
        "result" => "Pass"
    ]
];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="container">
    <h1>List of All Students</h1>

<table class="table table-striped container border">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Marks</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>21</td>
        <td>89</td>
        <td>Result</td>
    </tr>
    <?php
    foreach ($students as $student) {
        echo "<tr>";
        echo "<td>".$student["name"]."</td>";
        echo "<td>".$student["age"]."</td>";
        echo "<td>".$student["marks"]."</td>";
        echo "<td>".$student["result"]."</td>";
        echo "</tr>";
    }

?>
  
</table>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>