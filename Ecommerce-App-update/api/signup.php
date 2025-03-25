<?php
$connection = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($connection, "ecommerce");

$data = json_decode(file_get_contents("php://input"));

$Name = $data->Name;
$Email = $data->Email;
$Password = $data->Password;

$sql = "INSERT INTO user (Name, Email, Password) VALUES ('$Name', '$Email', '$Password')";

$result = mysqli_query($connection, $sql);

if ($result) {
    echo "Sign-up successful!";
} else {
    echo "Error: " . mysqli_error($connection);
}

mysqli_close($connection);
?>
