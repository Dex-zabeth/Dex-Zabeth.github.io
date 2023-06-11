?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message

    // Send the email
    $to = 'Joshua.Michalik@triosstudent.com';
    $subject = 'New message from ' . $name;
    $body = "From: $name\n\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    mail($to, $subject, $body, $headers);

    exit;
}
