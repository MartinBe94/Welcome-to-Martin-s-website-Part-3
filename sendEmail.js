(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("zy9nUmyRUv3KJsSX9"); // Replace with your EmailJS user ID
})();

// Function to send email when the form is submitted
function SendMail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather parameters from the form inputs
    var params = {
        from_name: document.getElementById("fullName").value, // Get the full name input
        email_id: document.getElementById("email").value, // Get the email input
        message: document.getElementById("message").value // Get the message input
    };

    // Send the email using EmailJS
    emailjs.send('service_5haudyd', 'template_q4jtget', params)
    .then(function() {
        // Show custom success message upon successful email send
        var successMessage = document.getElementById("success-message");
        successMessage.textContent = 'Email sent successfully!'; // Set success message text
        successMessage.style.display = 'block'; // Display the success message

        // Reset form fields to clear after submission
        document.getElementById("contact-form").reset();
    }, function(error) {
        // Handle error if the email fails to send
        alert('Failed to send email: ' + JSON.stringify(error)); // Show error alert
    });
}
