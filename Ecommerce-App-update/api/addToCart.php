<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Invalid request method for adding to cart, return an error
    echo json_encode(["error" => "Invalid request method"]);
} else {
    // Check if the route parameters userId and productId are provided
    if (isset($_GET["userId"]) && isset($_GET["productId"])) {
        // Get the userId and productId from the route parameters
        $user = $_GET["userId"];
        $product = $_GET["productId"];

        // Perform the SQL insertion into the Has table
        $sql = "INSERT INTO has (user_id, product_id) VALUES ('$user', '$product')";

        // Execute the SQL query
        if (mysqli_query($connection, $sql)) {
            // Insertion was successful
            echo json_encode(["message" => "Item added to cart successfully!"]);
        } else {
            // Insertion failed
            echo json_encode(["error" => "Error adding to cart: " . mysqli_error($connection)]);
        }

        // Close the database connection
        mysqli_close($connection);
    } else {
        // Required parameters are missing
        echo json_encode(["error" => "Missing parameters"]);
    }
}
?>
