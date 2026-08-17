<?php

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $student_id = $_POST["student_id"];
    $department = $_POST["department"];
    $event = $_POST["event"];

    if ($name == "" || $email == "" || $student_id == "" ||
        $department == "" || $event == "") {

        $message = "Please fill all fields.";

    } else {
        $message = "Registration successful!";
    }
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Event Registration</title>
</head>

<style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f2f4f7;
    margin: 0;
    padding: 40px;
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 25px;
}

form {
    background-color: white;
    width: 400px;
    margin: auto;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #444;
}

input[type="text"],
input[type="email"],
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 14px;
}

input[type="text"]:focus,
input[type="email"]:focus,
select:focus {
    border-color: #007bff;
    outline: none;
}

input[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}

p {
    width: 400px;
    margin: 0 auto 20px auto;
    padding: 12px;
    text-align: center;
    background-color: #d4edda;
    color: #155724;
    border-radius: 5px;
}
</style>

<body>

<h2>Student Event Registration Form</h2>

<?php
if ($message != "") {
    echo "<p>$message</p>";
}
?>

<form method="POST">

    <label>Student Name:</label>
    <input type="text" name="name">
    <br><br>

    <label>Email:</label>
    <input type="email" name="email">
    <br><br>

    <label>Student ID:</label>
    <input type="text" name="student_id">
    <br><br>

    <label>Department:</label>
    <select name="department">
        <option value="">Select Department</option>
        <option value="Computer Science">Computer Science</option>
        <option value="IT">Information Technology</option>
        <option value="Engineering">Engineering</option>
        <option value="Business">Business</option>
    </select>
    <br><br>

    <label>Event:</label>
    <select name="event">
        <option value="">Select Event</option>
        <option value="Programming Workshop">Programming Workshop</option>
        <option value="Sports Day">Sports Day</option>
        <option value="Science Exhibition">Science Exhibition</option>
        <option value="Cultural Festival">Cultural Festival</option>
    </select>
    <br><br>

    <input type="submit" value="Register">

</form>

</body>
</html>
