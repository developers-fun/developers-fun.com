function openFullscreen() {
	const iframe = document.getElementById('iframe');
	const mobileBackButton = document.getElementById('mobile-back-button');

	if (!document.fullscreenElement) {
		// Request fullscreen for the iframe
		if (iframe.requestFullscreen) {
			iframe.requestFullscreen();
		} else if (iframe.mozRequestFullScreen) { // Firefox
			iframe.mozRequestFullScreen();
		} else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
			iframe.webkitRequestFullscreen();
		} else if (iframe.msRequestFullscreen) { // IE/Edge
			iframe.msRequestFullscreen();
		}
		if (is_mobile_device()) {
			mobileBackButton.style.display = 'block'; // Show exit button on mobile
		}
	}
}

function exitFullscreen() {
	const mobileBackButton = document.getElementById('mobile-back-button');

	if (document.fullscreenElement) {
		// Exit fullscreen
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) { // Firefox
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) { // IE/Edge
			document.msExitFullscreen();
		}
		mobileBackButton.style.display = 'none'; // Hide exit button
	}
}

function mobileFullscreen() {
	
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
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  if (getCookie(Name = "Restricted") === "True") {
    Redirect()
  }

window.onload = changeicon()
window.onload = hideImgTextOnMobile();

