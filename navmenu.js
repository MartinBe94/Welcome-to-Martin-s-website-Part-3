// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }



// let closeBtn = document.getElementById('closeBtn');
// let openBtn = document.getElementById('openBtn');
// let navbarLinks = document.getElementById('myLinks');
// let showIcons = document.getElementsByClassName('icon');

// openBtn.addEventListener('click', () => {
//     navbarLinks.style.display = "block"; // Show links
//     openBtn.style.display = "none"; // Hide open button
//     closeBtn.style.display = "block"; // Show close button
// });

// closeBtn.addEventListener('click', () => {
//     navbarLinks.style.display = "none"; // Hide links
//     closeBtn.style.display = "none"; // Hide close button
//     openBtn.style.display = "block"; // Show open button
// });


let closeBtn = document.getElementById('closeBtn');
let openBtn = document.getElementById('openBtn');
let navbarLinks = document.getElementById('myLinks');

function adjustNavbar() {
    if (window.innerWidth >= 610) {
        // Reset navbar to its default state on desktop
        navbarLinks.style.height = "auto"; // Show all links
        openBtn.style.display = "none"; // Hide open button
        closeBtn.style.display = "none"; // Hide close button
    } else {
        // If on mobile and links are not displayed, set to default
        navbarLinks.style.height = "0px"; // Hide links
        openBtn.style.display = "block"; // Show open button
        closeBtn.style.display = "none"; // Hide close button
    }
}

openBtn.addEventListener('click', () => {
    navbarLinks.style.height = "240px"; // Show links
    openBtn.style.display = "none"; // Hide open button
    closeBtn.style.display = "block"; // Show close button
});

closeBtn.addEventListener('click', () => {
    navbarLinks.style.height = "0px"; // Hide links
    closeBtn.style.display = "none"; // Hide close button
    openBtn.style.display = "block"; // Show open button
});

// Call the adjustNavbar function on load and resize
window.addEventListener('load', adjustNavbar);
window.addEventListener('resize', adjustNavbar);


function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

// openBtn.addEventListener('click', () => {
//     navbarLinks.classList.add('show'); // Add class to show links
//     openBtn.style.display = "none"; // Hide open button
//     closeBtn.style.display = "block"; // Show close button
// });

// closeBtn.addEventListener('click', () => {
//     navbarLinks.classList.remove('show'); // Remove class to hide links
//     closeBtn.style.display = "none"; // Hide close button
//     openBtn.style.display = "block"; // Show open button
// });