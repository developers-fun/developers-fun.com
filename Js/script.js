var is_fullscreen = false;

function openFullscreen() {
    let game = document.getElementById("iframe");
    let Button = document.getElementById('mobile-back-button');

    // Check if the document is in fullscreen mode
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // Exit fullscreen
        if (is_mobile_device()) {
            Button.style.display = "none";
        }
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari, and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
        is_fullscreen = false; // Update the fullscreen state
    } else {
        // Enter fullscreen
        if (is_mobile_device()) {
            Button.style.display = "flex";
        }
        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.mozRequestFullScreen) { /* Firefox */
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) { /* Chrome, Safari, and Opera */
            game.webkitRequestFullscreen();
        } else if (game.msRequestFullscreen) { /* IE/Edge */
            game.msRequestFullscreen();
        }
        is_fullscreen = true; // Update the fullscreen state
    }
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
      var elements = document.getElementsByClassName("imgtext");
      var elements2 = document.getElementsByClassName("CreatorText");
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = "none";
          elements2[i].style.display = "none";
      }
  }
}
function changeicon() {
    var elem1 = document.createElement("link")
    elem1.rel = "icon"
    elem1.href = "/favicon.png"
    document.head.appendChild(elem1)
}

function HideIframe() {
    document.getElementById("iframe").style.display = "none"
    document.getElementsByClassName("")
}
function URLChecker() {
    var URL = "developers-fun"
    var loco = window.location.href;
    if (loco == URL, "/Games/Files") {
    loco = "/index.html"
}
}
function createCookie() {
    document.cookie = "Restricted=True";
}
function getCookie(Name) {
    const name = Name + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }
  function Redirect() {
        window.location.href = "https://www.google.com/";
  }

  if (getCookie(Name = "Restricted") === "True") {
    Redirect()
  }

onload = URLChecker()
window.onload = changeicon()
window.onload = hideImgTextOnMobile();

