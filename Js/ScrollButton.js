let mybutton = document.getElementById("backtogame");
            window.onscroll = function() {scrollFunction()};
            
            function scrollFunction() {
              if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                mybutton.style.display = "block";
              } else {
                mybutton.style.display = "none";
              }
            }
            function backtogame() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }