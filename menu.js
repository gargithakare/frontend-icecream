function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
   //  tablinks = document.getElementsByClassName("tablink");
   //  for (i = 0; i < x.length; i++) {
   //     tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
   //  }
    document.getElementById(menuName).style.display = "block";
   //  evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();