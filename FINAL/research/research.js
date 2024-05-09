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


function splitText(element) {
  let words = element.textContent.split(" ");
  element.innerHTML = ""; // Clear current text
  words.forEach(word => {
      let span = document.createElement("span");
      span.textContent = word + " "; // Maintain spaces between words
      element.appendChild(span);
  });
}
document.addEventListener("DOMContentLoaded", function() {
  let glitchColors = ["#ffffff", "#f9fb00", "#02feff", "#01ff00", "#fd00fb", "#fb0102", "#0301fc", "#000000"];
  const expandRect = document.getElementById("expand3");

  expandRect.addEventListener("click", function() {
      this.classList.toggle("clicked");
      if (this.classList.contains("clicked")) {
          applyGlitchEffect(document.getElementById('info-effect3'), glitchColors);
      }
  });
});

function applyGlitchEffect(element, colors) {
  let words = element.textContent.split(" ");
  element.innerHTML = "";  // Clear current text
  let delay = 0;  // Start with no delay and increase for each word

  words.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      element.appendChild(span);

      setTimeout(() => {
          applyRandomGlitch(span, colors);
      }, delay);

      delay += 1000;  // Increase delay for each subsequent word
  });
}

function applyRandomGlitch(span, colors) {
  span.className = 'glitch-word';

  // Assign random color and scale
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomScaleX = Math.random() * 0.5;  // Up to 0.5 scale
  const randomScaleY = Math.random() * 0.5;  // Up to 0.5 scale

  span.style.setProperty('--random-color', colors[randomColorIndex]);
  span.style.setProperty('--random-scale-x', randomScaleX);
  span.style.setProperty('--random-scale-y', randomScaleY);
}

function applyEffects(element, fontList) {
  // Split text into spans
  splitText(element);

  // Apply random blur to random words after 5 seconds
  setTimeout(() => {
      randomBlur(element);
  }, 5000);

  // Apply random font size to random words after another 5 seconds
  setTimeout(() => {
      randomSize(element);
  }, 10000);

  // Apply random font family to random words after another 5 seconds
  setTimeout(() => {
      applyRandomFont(element, fontList);
  }, 15000);
}

function randomBlur(element) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => {
      if (Math.random() < 0.5) { // 50% chance to apply blur
          const blurAmount = Math.random() * 5;
          span.style.filter = `blur(${blurAmount}px)`;
          span.style.transition = "filter 0.3s ease";
      }
  });
}

function randomSize(element) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => {
      if (Math.random() < 0.5) { // 50% chance to change size
          const randomSize = Math.floor(Math.random() * 35) + 55;
          span.style.fontSize = randomSize + "px";
          span.style.transition = "font-size 0.3s ease";
      }
  });
}

function applyRandomFont(element, fontList) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => {
      if (Math.random() < 0.5) { // 50% chance to change font
          const randomIndex = Math.floor(Math.random() * fontList.length);
          span.style.fontFamily = fontList[randomIndex];
          span.style.transition = "font-family 0.3s ease";
      }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var expandRect = document.getElementById("expand2");
  expandRect.addEventListener("click", function() {
      this.classList.toggle("clicked");
      if (this.classList.contains("clicked")) {
          var titleEffect = this.querySelector('#title-effect2');
          var infoEffect = this.querySelector('#info-effect2');
          prepareText(titleEffect);
          prepareText(infoEffect);
          applyReverseEffects(titleEffect, ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
          applyReverseEffects(infoEffect, ['synt', 'editorial', 'pixel', 'montreal', 'Helvetica']);
      }
  });
});

function prepareText(element) {
  let words = element.textContent.trim().split(" ");
  element.innerHTML = ""; // Clear current text
  words.forEach(word => {
      let span = document.createElement("span");
      span.textContent = word + " "; // Maintain spaces between words
      element.appendChild(span);
  });
}

function applyReverseEffects(element, fontList) {
  fullApplyEffects(element, fontList); // Apply all effects immediately

  setTimeout(() => removeBlur(element), 5000);
  setTimeout(() => normalizeSize(element), 10000);
  setTimeout(() => resetFont(element), 15000);
}

function fullApplyEffects(element, fontList) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => {
      const randomSize = Math.floor(Math.random() * 20) + 30; // More noticeable size
      const randomIndex = Math.floor(Math.random() * fontList.length);
      const blurAmount = Math.random() * 10; // More noticeable blur

      span.style.fontSize = randomSize + "px";
      span.style.fontFamily = fontList[randomIndex];
      span.style.filter = `blur(${blurAmount}px)`;
      span.style.transition = "all 0.3s ease";
      console.log("Effects applied to:", span.textContent); // Log applied effects
  });
}

function removeBlur(element) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => span.style.filter = "blur(0px)");
}

function normalizeSize(element) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => span.style.fontSize = "5vw");
}

function resetFont(element) {
  const spans = element.querySelectorAll('span');
  spans.forEach(span => span.style.fontFamily = "Helvetica");
}



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

