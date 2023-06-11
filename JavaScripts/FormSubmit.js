const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;

    // Get the form data
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // TODO: Add validation and error handling here

    // Send the data using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit-form.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            // Redirect the user to a thank-you page
            window.location.href = 'index.html';
        } else {
            // Display an error message
            alert('There was an error submitting the form. Please try again later.');
        }
    };
    xhr.send(`name=${name}&email=${email}&message=${message}`);
});