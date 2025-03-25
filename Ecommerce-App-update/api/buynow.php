<?php
$connection = mysqli_connect("localhost", "root", ""); // Update with your database credentials
$database = mysqli_select_db($connection, "ecommerce"); // Update with your database name

$data = json_decode(file_get_contents("php://input"));

$Address = $data->address;
$City = $data->city;
$Country = $data->country;
$PhoneNumber = $data->phoneNumber;
$PostalCode = $data->postalCode;

// Get the user's email from the session (assuming it's stored in a session)
session_start();
if (isset($_SESSION['user_email'])) {
    $UserEmail = $_SESSION['user_email'];

    // Insert user information into the 'details' table
    $sql = "INSERT INTO details (userid, Address, City, Country, PhoneNumber, PostalCode) VALUES ('$UserEmail', '$Address', '$City', '$Country', '$PhoneNumber', '$PostalCode')";
    $result = mysqli_query($connection, $sql);

    if ($result) {
        echo "User information saved successfully!";
    } else {
        echo "Error saving user information: " . mysqli_error($connection);
    }
} else {
    echo "User not logged in.";
}

mysqli_close($connection);
?>
