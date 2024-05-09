// document.getElementById("expand").addEventListener("click", function() {
//   this.classList.toggle("clicked");
// });

// document.getElementById("expand2").addEventListener("click", function() {
//   this.classList.toggle("clicked");
// });

// document.getElementById("expand3").addEventListener("click", function() {
//   this.classList.toggle("clicked");
// });

// document.getElementById("expand4").addEventListener("click", function() {
//   this.classList.toggle("clicked");
// });
// document.getElementById("expand5").addEventListener("click", function() {
//   this.classList.toggle("clicked");
// });
// document.getElementById("expand6").addEventListener("click", function() {
//   this.classList.toggle("clicked");
// });

// document.querySelectorAll(".expandable").forEach(function(element) {
//   element.addEventListener("click", function() {
//       this.classList.toggle("clicked");
//   });
// });


// document.getElementById("expand1").addEventListener("click", function() {
//   this.classList.toggle("clicked");
//   applyEffects(this); 
// });
// document.addEventListener("DOMContentLoaded", function() {
//   // Remove any initial calls to applyEffects here to prevent them from running on load
//   var expandRect = document.getElementById("expand1");
//   expandRect.addEventListener("click", function() {
//       // Make sure to toggle 'clicked' class and apply effects to the title and info elements
//       this.classList.toggle("clicked");

//       // Assuming that the 'title-effect' and 'info-effect' are inside the clicked rectangle
//       var titleEffect = this.querySelector('#title-effect');
//       var infoEffect = this.querySelector('#info-effect');

//       if (this.classList.contains("clicked")) {
//           applyEffects(titleEffect, ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
//           applyEffects(infoEffect, ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
//       } else {
//           // Optionally, reset the text back to normal if 'clicked' class is removed
//           resetText(titleEffect);
//           resetText(infoEffect);
//       }
//   });
// });
// function resetText(element) {
//   // Resets text to default state (example function, adjust as needed)
//   element.style.filter = "blur(0px)";
//   element.style.fontSize = "initial";
//   element.style.fontFamily = "initial";
// }

// document.addEventListener("DOMContentLoaded", function() {
//   applyEffects(document.getElementById("title-effect"), ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
//   applyEffects(document.getElementById("info-effect"), ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);  // Assuming the ID for the info text is 'info-text'
// });

document.addEventListener("DOMContentLoaded", function() {
  var title = document.querySelector('.title');
  var container = document.querySelector('.container');

  // Listen for the end of the animation on the title
  title.addEventListener('animationend', function() {
    container.classList.add('visible'); // Make the container visible
  });
});

document.querySelectorAll(".expandable").forEach(function(element) {
  element.addEventListener("click", function() {
      this.classList.toggle("clicked");
  });

  // Stop propagation for links inside the rectangles
  element.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevents the click from affecting the rectangle
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var expandRect = document.getElementById("expand1");
  expandRect.addEventListener("click", function() {
      this.classList.toggle("clicked");
      if (this.classList.contains("clicked")) {
          var titleEffect = this.querySelector('#title-effect');
          var infoEffect = this.querySelector('#info-effect');
          applyEffects(titleEffect, ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
          applyEffects(infoEffect, ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
      }
  });
});

// Revised applyEffects function
function applyEffects(element, fontList) {
  // Apply initial settings
  element.style.opacity = 1;
  element.style.filter = "blur(0px)";
  element.style.fontSize = "5vw";
  element.style.fontFamily = "helvetica";

  // Apply effects with delay
  setTimeout(() => {
      randomBlur(element);
  }, 5000);

  setTimeout(() => {
      applyRandomFont(element, fontList);
  }, 8000);

  setTimeout(() => {
      randomSize(element);
  }, 9000);
}

  function randomSize(span) {
      const randomSize = Math.floor(Math.random() * 35) + 55;
      span.style.fontSize = randomSize + "px";
      span.style.transition = "font-size 0.3s ease";
  }

  function applyRandomFont(span, fontList) {
      const randomIndex = Math.floor(Math.random() * fontList.length);
      span.style.fontFamily = fontList[randomIndex];
      span.style.transition = "font-family 0.3s ease";
  }

  function randomBlur(span) {
      const blurAmount = Math.random() * 5; // Random blur amount, up to 5px
      span.style.filter = `blur(${blurAmount}px)`;
      span.style.transition = "filter 0.3s ease";
  }

  splitText(element.textContent);


// document.addEventListener("DOMContentLoaded", function() {
//     let title = document.getElementById("title-effect");

//     // Split the text into spans
//     function splitText(text) {
//         title.innerHTML = ""; // Clear current text
//         let chars = text.split("");
//         chars.forEach(char => {
//             let span = document.createElement("span");
//             span.textContent = char;
//             title.appendChild(span);
//             randomBlur(span); // Apply blur immediately
//         });
//         animateSpans();
//     }

//     // Animate spans by changing font size, font family, and blur at intervals
//     function animateSpans() {
//         setInterval(() => {
//             document.querySelectorAll('#title-effect span').forEach(span => {
//                 applyRandomFont(span);
//                 randomSize(span);
//                 randomBlur(span); // Ensure blur is also changed dynamically
//             });
//         }, 1000); // Changes every second
//     }

//     // Change to random font size
//     function randomSize(span) {
//         const randomSize = Math.floor(Math.random() * 45) + 75;
//         span.style.fontSize = randomSize + "px";
//         span.style.transition = "font-size 0.3s ease";
//     }

//     // Apply a random font family to a span
//     function applyRandomFont(span) {
//         const fonts = ["synt", "editorial", "pixel", "montreal", "Helvetica"];
//         const randomIndex = Math.floor(Math.random() * fonts.length);
//         span.style.fontFamily = fonts[randomIndex];
//         span.style.transition = "font-family 0.3s ease";
//     }

//     // Adding blur dynamically
//     function randomBlur(span) {
//         const blurAmount = Math.random() * 5; // Random blur amount, up to 5px
//         span.style.filter = `blur(${blurAmount}px)`;
//         span.style.transition = "filter 0.3s ease";
//     }

//     splitText(title.textContent);
  
// });



  // function animateSpans() {
  //     setInterval(() => {
  //         element.querySelectorAll('span').forEach(span => {
  //             applyRandomFont(span, fontList);
  //             randomSize(span);
  //             randomBlur(span); // Ensure blur is also changed dynamically
  //         });
  //     }, 1000); // Changes every second
  // }

// function applyEffects(element, fontList) {
//   function splitText(text) {
//       element.innerHTML = ""; // Clear current text
//       let chars = text.split(" ");
//       chars.forEach(char => {
//           let span = document.createElement("span");
//           span.textContent = char+" ";
//           element.appendChild(span);
//           randomBlur(span); // Apply blur immediately
//       });
//       animateSpans();
//   }

