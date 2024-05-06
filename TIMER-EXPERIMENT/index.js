let neurotype = document.getElementById("landing-page");
let tabs = document.getElementById("homepage");
let typepage = document.getElementById("typesetting-page");
let start = document.getElementById("start");

document.addEventListener("DOMContentLoaded", function() {
  //delay fade in effect
  setTimeout(function() {
    neurotype.style.opacity = "1";
    tabs.style.opacity = "1";
  }, 1000);
  
  //click to reveal typesetting
  start.addEventListener("click", function() {
    tabs.style.opacity = "0";
    neurotype.classList.add("fade-out");
    typepage.style.opacity = "1";
  });
});


