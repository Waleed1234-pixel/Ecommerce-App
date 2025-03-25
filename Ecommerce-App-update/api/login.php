<?php
$connection = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($connection, "ecommerce");

$data = json_decode(file_get_contents("php://input"));

$Email = $data->Email;
$Password = $data->Password;

$sql = "SELECT * FROM user WHERE Email='$Email' AND Password='$Password'";
$result = mysqli_query($connection, $sql);

if (mysqli_num_rows($result) > 0) {
    // Login successful
    session_start(); // Start the session
    $_SESSION['user_email'] = $Email; // Set the session variable 'user_email'
    echo "Login successful!";
} else {
    // Authentication failed
    echo "Login failed. Invalid email or password.";
}

mysqli_close($connection);

?>
