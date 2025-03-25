<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Construct the SQL query to fetch all products
$sql = "SELECT * FROM products";

// Execute the SQL query
$result = mysqli_query($connection, $sql);

if ($result) {
    $products = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $products[] = $row;
    }

    // Return the products as JSON response
    header('Content-Type: application/json');
    echo json_encode($products);
} else {
    // Handle the error if the query fails
    echo "Error fetching products: " . mysqli_error($connection);
}

// Close the database connection
mysqli_close($connection);
?>
