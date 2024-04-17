<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $game_name = $_POST["game_name"];
    $game_link = $_POST["game_link"];
    
    // Create entry string
    $entry = "Game Name: $game_name\nGame Link: $game_link\n\n";
    
    // Save to file
    $file = 'submissions.txt';
    file_put_contents($file, $entry, FILE_APPEND | LOCK_EX);
    
    // Redirect to thank you page
    header("Location: thank-you.html");
    exit();
}
?>