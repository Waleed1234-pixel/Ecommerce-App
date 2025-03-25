<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get user ID and product ID from the request body
    $data = json_decode(file_get_contents("php://input"));

    if (isset($data->userId) && isset($data->productId)) {
        // Sanitize and validate the data (add more validation as needed)
        $userId = intval($data->userId);
        $productId = intval($data->productId);


        // Modify SQL query to insert user ID and product ID as foreign keys into a new table (replace 'your_new_table' with the actual table name)
        $sql = "INSERT INTO your_new_table (user_id, product_id) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);

        if ($stmt->execute([$userId, $productId])) {
            // Data inserted successfully
            http_response_code(200);
            echo json_encode(array("message" => "Data inserted successfully."));
        } else {
            // Error inserting data
            http_response_code(500);
            echo json_encode(array("message" => "Error inserting data."));
        }
    } else {
        // Invalid request data
        http_response_code(400);
        echo json_encode(array("message" => "Invalid request data."));
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(array("message" => "Invalid request method."));
}
?>
