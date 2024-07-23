let Div = document.getElementsByClassName("backtogame");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    Div[0].style.display = "block";
  } else {
    Div[0].style.display = "none";
  }
}

function backtogame() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}