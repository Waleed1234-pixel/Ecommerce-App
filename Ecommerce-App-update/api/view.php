<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Function to fetch product details by product ID and user ID
function view($product, $user, $conn) {
    $sql = "SELECT p.*
        FROM products p
        INNER JOIN has h ON p.product_id = h.product_id
        WHERE h.user_id = '$user' AND p.product_id = $product";
    
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch the product details as an associative array
        $row = $result->fetch_assoc();
        return $row;
    } else {
        return null; // Product not found
    }
}

// Check if a GET request with query parameters was received
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["userId"]) && isset($_GET["productId"])) {
    // Retrieve user ID and product ID from the query parameters
    $userId = $_GET["userId"];
    $productId = $_GET["productId"];

    // Fetch product details by product ID and user ID
    $product = view($productId, $userId, $connection);

    if ($product !== null) {
        // Set the response content type to JSON
        header('Content-Type: application/json');
        echo json_encode($product);
    } else {
        // Product not found
        echo "Product not found.";
    }
} else {
    // Invalid request method or missing parameters
    echo "Invalid request.";
}

// Close the database connection
mysqli_close($connection);
?>
