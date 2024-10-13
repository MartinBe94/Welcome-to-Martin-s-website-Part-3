var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
    if (video.paused) {
      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      btn.innerHTML = "Pause";
    } else {
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      btn.innerHTML = "Play";
    }
  }