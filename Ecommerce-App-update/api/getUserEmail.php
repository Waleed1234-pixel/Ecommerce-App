<?php
session_start(); // Start the session

if (isset($_SESSION['user_email'])) {
    // The 'user_email' session variable is set, so the user is logged in
    $userEmail = $_SESSION['user_email'];

    // Log the user's email to the server's terminal
    error_log('User Email: ' . $userEmail);

    // Return the user's email as a JSON response
    echo json_encode(['email' => $userEmail]);
} else {
    // Handle the case where the user is not logged in
    echo json_encode(['error' => 'User not logged in']);
}
?>
