var is_fullscreen = false

function openFullscreen() {
    let gamearea = document.getElementById('game-area');
    let iframe = document.getElementById('iframe');
    let mobilebackbutton = document.getElementById("mobile-back-button");

    if (!is_fullscreen) {
        if (is_mobile_device()) {
            // Request fullscreen on the gamearea for mobile
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.borderRadius = '0';
            iframe.style.marginTop = '0';
            iframe.style.marginLeft = '0';
            
            if (gamearea.requestFullscreen) {
                gamearea.requestFullscreen();
            } else if (gamearea.mozRequestFullScreen) {
                gamearea.mozRequestFullScreen();
            } else if (gamearea.webkitRequestFullscreen) {
                gamearea.webkitRequestFullscreen();
            } else if (gamearea.msRequestFullscreen) {
                gamearea.msRequestFullscreen();
            }
            mobilebackbutton.style.display = 'flex';
        } else {
            // Request fullscreen on the iframe for other devices
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
        is_fullscreen = true;
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        // Reset styles
        iframe.style.width = '';
        iframe.style.height = '';
        iframe.style.borderRadius = '';
        iframe.style.marginTop = '';
        iframe.style.marginLeft = '';
        mobilebackbutton.style.display = 'none';
        is_fullscreen = false;
        console.log('Exited fullscreen');
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

