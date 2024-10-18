var is_fullscreen = false;
function open_fullscreen() {
	let game = document.getElementById("game-area");
	if(is_fullscreen){
		// Exit fullscreen
		is_fullscreen = false;
		if(is_mobile_device()){
			game.style.position = "absolute";
			document.getElementById("mobile-back-button").style.display = "none";
			document.getElementById("game-player").style.display = "none";
		} else {
			if (game.requestFullscreen) {
				game.requestFullscreen();
			} else if (game.mozRequestFullScreen) { /* Firefox */
				game.mozRequestFullScreen();
			} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				game.webkitRequestFullscreen();
			} else if (game.msRequestFullscreen) { /* IE/Edge */
				game.msRequestFullscreen();
			}
		}
	} else {
		// Enter fullscreen
		is_fullscreen = true;
		if(is_mobile_device()){
			document.getElementById("game-player").style.display = "block";
			game.style.position = "fixed";
			document.getElementById("mobile-back-button").style.display = "flex";
		} else {
			if (game.requestFullscreen) {
				game.requestFullscreen();
			} else if (game.mozRequestFullScreen) { /* Firefox */
				game.mozRequestFullScreen();
			} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				game.webkitRequestFullscreen();
			} else if (game.msRequestFullscreen) { /* IE/Edge */
				game.msRequestFullscreen();
			}
		}
	}
};
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

