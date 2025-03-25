<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Function to fetch two random products
function getRandomProducts($conn, $count = 2) {
    $sql = "SELECT * FROM products ORDER BY RAND() LIMIT $count";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch the random products and store them in an array
        $products = [];
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        return $products;
    } else {
        return null; // No products found
    }
}

// Fetch two random products
$randomProducts = getRandomProducts($connection, 2);

if ($randomProducts !== null) {
    // Output the random products details as JSON
    header('Content-Type: application/json');
    echo json_encode($randomProducts);
} else {
    // No products found
    echo "No products found.";
}

?>
