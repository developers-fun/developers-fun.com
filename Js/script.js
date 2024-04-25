function openFullscreen() {
  var elem = document.getElementById("iframe");
  if (elem.requestFullscreen) {
      elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
  }

  // Show exit button on mobile devices
  if (is_mobile_device()) {
      document.getElementById("exitButton").style.display = "block";
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
  }

  // Hide exit button
  document.getElementById("exitButton").style.display = "none";
}
function is_mobile_device(){
	if (navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
}
function hideImgTextOnMobile() {
  if (is_mobile_device()) {
      var elements = document.getElementsByClassName("Imgtext");
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = "none";
      }
  }
}
function changeicon() {
    var elem1 = document.createElement("link")
    elem1.rel = "icon"
    elem1.href = "/favicon.ico"
    document.head.appendChild(elem1)
}

window.onload = changeicon()
window.onload = hideImgTextOnMobile();

function ShowIframe() {
    document.getElementsByClassName("iframe").style.display = "none"
}