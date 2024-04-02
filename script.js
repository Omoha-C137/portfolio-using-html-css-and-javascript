function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    var ikon = document.getElementById("icon");

    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
        ikon.src= "assets/sun.png";
       }else{
            ikon.src= "assets/moon.png";
            
       }
      }
    }
  