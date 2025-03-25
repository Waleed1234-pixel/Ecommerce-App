<?php
// Database connection
$connection = mysqli_connect("localhost", "root", "", "ecommerce");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Check if 'email' parameter is set in the URL
if (isset($_GET['email'])) {
    $email = $_GET['email'];

    // Modify the SQL query to use the email parameter
    $sql = "SELECT * FROM user WHERE Email = '$email'"; // Use the correct field name 'Email' with a capital 'E'
    $result = mysqli_query($connection, $sql);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            // User found, fetch user details
            $row = mysqli_fetch_assoc($result);
            $userDetails = [
                'email' => $row['Email'], // Field name with a capital 'E'
                'name' => $row['Name'],
                'password' => $row['Password'],
                // Add more user details as needed
            ];
            
            // Return user details as JSON response
            echo json_encode($userDetails);
        } else {
            // User not found
            echo json_encode(['error' => 'User not found']);
        }
    } else {
        // Error in the SQL query
        echo json_encode(['error' => 'SQL query error']);
    }
} else {
    // 'email' parameter not set in the URL
    echo json_encode(['error' => 'Email parameter missing']);
}

mysqli_close($connection);
?>
