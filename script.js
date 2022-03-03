var video = document.querySelector(".video");
var progress = document.querySelector(".progress");
var btn = document.getElementById("btn");
video.onclick = function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
video.addEventListener("timeupdate", function () {
  var progressPos = video.currentTime / video.duration;
  progress.style.transform =
    "translateX(" + progressPos * 100 - progress.style.width + "%);";
  progress.style.transition = "all .1s";
  progress.style.width = progressPos * 100 + "%";
});
