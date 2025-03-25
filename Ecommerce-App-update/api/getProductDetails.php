<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Function to fetch product details by product ID
function getProductDetails($productId, $conn) {
    $sql = "SELECT * FROM products WHERE product_id = $productId";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch the product details as an associative array
        $row = $result->fetch_assoc();
        return $row;
    } else {
        return null; // Product not found
    }
}

// Get the product ID from the request (e.g., from a query parameter)
$productId = isset($_GET['product_id']) ? $_GET['product_id'] : null;

if ($productId !== null) {
    // Fetch product details by product ID
    $product = getProductDetails($productId, $connection);

    if ($product !== null) {
        // Output the product details as JSON (you can customize the format)
        header('Content-Type: application/json');
        echo json_encode($product);
    } else {
        // Product not found
        echo "Product not found.";
    }
} else {
    // No product ID provided
    echo "Product ID is missing.";
}

// Close the database connection
mysqli_close($connection);
?>
