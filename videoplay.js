// Get references to the video element and the button
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

// Function to toggle play/pause for the video
function myFunction() {
    // Check if the video is currently paused
    if (video.paused) {
        // Send a message to the video iframe to play the video
        video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        // Update button text to indicate the video is playing
        btn.innerHTML = "Pause";
    } else {
        // Send a message to the video iframe to pause the video
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        // Update button text to indicate the video is paused
        btn.innerHTML = "Play";
    }
}
