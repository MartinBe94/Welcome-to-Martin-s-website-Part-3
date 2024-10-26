// Get references to the button and navbar elements
let closeBtn = document.getElementById('closeBtn');
let openBtn = document.getElementById('openBtn');
let navbarLinks = document.getElementById('myLinks');

// Function to adjust the navbar based on window width
function adjustNavbar() {
    if (window.innerWidth >= 610) {
        // For desktop view
        navbarLinks.style.height = "auto"; // Show all links
        openBtn.style.display = "none"; // Hide the open button
        closeBtn.style.display = "none"; // Hide the close button
    } else {
        // For mobile view
        navbarLinks.style.height = "0px"; // Hide links
        openBtn.style.display = "block"; // Show the open button
        closeBtn.style.display = "none"; // Hide the close button
    }
}

// Event listener for opening the navbar
openBtn.addEventListener('click', () => {
    navbarLinks.style.height = "240px"; // Show links
    openBtn.style.display = "none"; // Hide the open button
    closeBtn.style.display = "block"; // Show the close button
});

// Event listener for closing the navbar
closeBtn.addEventListener('click', () => {
    navbarLinks.style.height = "0px"; // Hide links
    closeBtn.style.display = "none"; // Hide the close button
    openBtn.style.display = "block"; // Show the open button
});

// Call the adjustNavbar function on page load and when the window is resized
window.addEventListener('load', adjustNavbar);
window.addEventListener('resize', adjustNavbar);

// Functions to open and close the full-screen navigation overlay
function openNav() {
    document.getElementById("myNav").style.height = "100%"; // Expand the overlay
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%"; // Collapse the overlay
}
