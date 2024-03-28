<?php
// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = "Gokul@3005"; // Replace with your MySQL password
$dbname = "dummy"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$dept = $_POST['dept'];
$password = $_POST['password'];

// Prepare SQL statement
$sql = "INSERT INTO student (name, mobile, dept, password) VALUES ('$name', '$mobile', '$dept', '$password')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();

