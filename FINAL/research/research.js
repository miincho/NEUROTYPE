const one =document.getElementById("expand")

document.getElementById("expand").addEventListener("click", function() {
  this.classList.toggle("clicked");
});

document.getElementById("expand2").addEventListener("click", function() {
  this.classList.toggle("clicked");
});

document.getElementById("expand3").addEventListener("click", function() {
  this.classList.toggle("clicked");
});

document.getElementById("expand4").addEventListener("click", function() {
  this.classList.toggle("clicked");
});
document.getElementById("expand5").addEventListener("click", function() {
  this.classList.toggle("clicked");
});


document.addEventListener("DOMContentLoaded", function() {
  var title = document.querySelector('.title');
  var container = document.querySelector('.container');

  // Listen for the end of the animation on the title
  title.addEventListener('animationend', function() {
    container.classList.add('visible'); // Make the container visible
  });
});


document.addEventListener("mouseover", function() {
    let title = document.getElementById("title-effect");

    // Split the text into spans
    function splitText(text) {
        title.innerHTML = ""; // Clear current text
        let chars = text.split("");
        chars.forEach(char => {
            let span = document.createElement("span");
            span.textContent = char;
            title.appendChild(span);
            randomBlur(span); // Apply blur immediately
        });
        animateSpans();
    }

    // Animate spans by changing font size, font family, and blur at intervals
    function animateSpans() {
        setInterval(() => {
            document.querySelectorAll('#title-effect span').forEach(span => {
                applyRandomFont(span);
                randomSize(span);
                randomBlur(span); // Ensure blur is also changed dynamically
            });
        }, 1000); // Changes every second
    }

    // Change to random font size
    function randomSize(span) {
        const randomSize = Math.floor(Math.random() * 45) + 95;
        span.style.fontSize = randomSize + "px";
        span.style.transition = "font-size 0.3s ease";
    }

    // Apply a random font family to a span
    function applyRandomFont(span) {
        const fonts = ["Georgia", "Times", "Helvetica"];
        const randomIndex = Math.floor(Math.random() * fonts.length);
        span.style.fontFamily = fonts[randomIndex];
        span.style.transition = "font-family 0.3s ease";
    }

    // Adding blur dynamically
    function randomBlur(span) {
        const blurAmount = Math.random() * 5; // Random blur amount, up to 5px
        span.style.filter = `blur(${blurAmount}px)`;
        span.style.transition = "filter 0.3s ease";
    }

    splitText(title.textContent);
  
});
