let neurotype = document.getElementById("landing-page");
let tabs = document.getElementById("homepage");
let typepage = document.getElementById("typesetting-page");
let goalpage = document.getElementById("goal-page");
let start = document.getElementById("start");
let aboutStart = document.getElementById("aboutStart");

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
  
//click to reveal about page
  aboutStart.addEventListener("click", function() {
    tabs.style.opacity = "0";
    neurotype.classList.add("fade-out");
    goalpage.style.opacity = "1";
  });
});




//title effects
document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("title-effect");

    // Clear placeholder text
    title.addEventListener("click", function() {
        title.textContent = '';
    });

    // Split the text into spans
    function splitText(text) {
        title.innerHTML = ""; // Clear current text
        let chars = text.split("");
        chars.forEach(char => {
            let span = document.createElement("span");
            span.textContent = char;
            title.appendChild(span);
            randomSize(span);
            randomBlur(span);
        });
        flickThroughFonts();
    }

    // Change to random font size on hover
    function randomSize(span) {
        span.addEventListener("mouseover", function() {
            const randomSize = Math.floor(Math.random() * 45) + 150;
            span.style.fontSize = randomSize + "px";
            span.style.transition = "font-size 0.3s ease";
        });
    }

    // Apply a random font family to a span
    function applyRandomFont(span) {
        const fonts = ["synt", "editorial", "pixel", "montreal", "Helvetica"];
        const randomIndex = Math.floor(Math.random() * fonts.length);
        span.style.fontFamily = fonts[randomIndex];
        span.style.transition = "font-family 0.3s ease";
    }

    // Flick through fonts
    function flickThroughFonts() {
        setInterval(() => {
            document.querySelectorAll('#title-effect span').forEach(span => {
                applyRandomFont(span);
            });
        }, 1000);
    }

    // Adding blur dynamically
    function randomBlur(span) {
        const delay = Math.random() * 10; // Random delay
        setTimeout(() => {
            span.classList.add('typing');
        }, delay * 1000);
    }

    splitText(title.textContent);
});



