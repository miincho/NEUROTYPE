/*
current issues/features to be added
- maybe add character limit to prevent lag
- text that is typed in the div after conversion doesnt get converted to spans; not sure if feature should be added or typing be disabled
- make the change in text gradual i.e. the text is more normal at the beginning and gets more wraped towards the end 

features to add before thursday
- (DONE) phase 2 split by words insteaed of by letters 
- repeat specific groups of words until its flowing off the page an then remove them from DOM/ text nodes??
- change text alignment/make it flash in different parts of the screen

- maybe make them have boxes around the word, center align and slowly spread to the edges of the screen
- make text wider and more narrow like spotify wrapped
- make it condensed
- array of new text being added
- auditory sound library whenever something new is being added
- add specific glitch colors
- make the colors flash back and forth for certain words 


Phase 2.1 specific features
- (DONE) random letter flickering
- slight rotation of letters (after flickering is over)
- randomized font-stretch
- randomized font-weight

*/ 
 
let convertbtn = document.getElementById("convert");
let text = document.getElementById("editableDiv");
let placeholdertext = document.getElementById("placeholder");
let glitch_colors = ["#ffffff", "#f9fb00", "#02feff", "#01ff00", "#fd00fb", "#fb0102", "#0301fc", "#000000"];

/*css*/
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function setRandomValues() {
  // Random values for font size, color, scaling, and positioning
  const randomFontSize = getRandomNumber(0, 5);
  const randomColorIndex = Math.floor(Math.random() * glitch_colors.length);
  const randomColor = glitch_colors[randomColorIndex];
  const randomScaleX = getRandomNumber(0, 1);
  const randomScaleY = getRandomNumber(0, 1);
  const randomPadding = getRandomNumber(-50, 50);


  // Apply random values to CSS variables
  document.documentElement.style.setProperty('--random', randomFontSize);
  document.documentElement.style.setProperty('--random-color', randomColor);
  document.documentElement.style.setProperty('--random-scale-x', randomScaleX);
  document.documentElement.style.setProperty('--random-scale-y', randomScaleY);
  document.documentElement.style.setProperty('--random-scale-x', randomScaleX);
  document.documentElement.style.setProperty('--random-scale-y', randomScaleY);
  document.documentElement.style.setProperty('--random-padding', randomPadding);

}

// Call setRandomValues initially and then at intervals
setRandomValues()
setInterval(setRandomValues, 1000); //random value every second

//clears placeholder text
text.addEventListener("click", function() {
  placeholdertext.textContent = ''; 
});

function firstGlitchEffect(span) {
  const delay = Math.random() * 10; //random delay
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; //random animation start time
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('play-animation'); 
  }, delay * 1000);
}

function positionEffect(span) {
  const delay = Math.random() * 10; //random delay
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; //random animation start time
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('play-animation2'); 
  }, delay * 1000);
}

function padding(span) {
  const delay = Math.random() * 10; //random delay
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; //random animation start time
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('play-animation3'); 
  }, delay * 1000);
}



function randomTranslate(span) {
  const randomX = getRandomNumber(-5, 5); 
  const randomY = getRandomNumber(-5, 5); 

  span.style.setProperty('--random-x', randomX);
  span.style.setProperty('--random-y', randomY);
}

function convergingTranslate() {
  const randomX = Math.random();
  const randomY = getRandomNumber(-5, 5);

  document.documentElement.style.setProperty('--random-x', randomX);
  document.documentElement.style.setProperty('--random-y', randomY);
}

// function convergingTranslate(span) {
//   const randomX = Math.random();
//   const randomY = getRandomNumber(-5, 5);

//   span.style.setProperty('--random-x', randomX);
//   span.style.setProperty('--random-y', randomY);
// }




// function createSpans(textContent) {
//   const splitText = textSplit(textContent);
//   text.textContent = ''; // Remove typed text to prevent duplication
//   text.dataset.value = text.textContent; // Store original text

//   splitText.forEach(letter => {
//     const span = document.createElement('span');
//     span.textContent = letter;
//     text.appendChild(span);
//   });
//   console.log("Spans created:", text.querySelectorAll('span').length);
// }

function textSplit(textContent){
  let splitText= textContent.split(' ');
  // console.log(splitText);
  return splitText;
}

function createSpans(textContent) {
  const splitText = textSplit(textContent);
  splitText.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    text.appendChild(span);
  });
  console.log("Spans created:", splitText.length);
}

// Clear the existing text content and set the dataset value
text.textContent = ''; // Remove typed text to prevent duplication
text.dataset.value = text.textContent; // Store original text

// Call the createSpans function initially to create spans for the existing text content
createSpans(text.dataset.value);

function toggleTranslation() {
  createSpans(text.textContent); // Call the function to create spans

  const spans = text.querySelectorAll('span');

  spans.forEach(span => {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      randomTranslate(span);
      console.log("random");
    } else {
      convergingTranslate(span);
      console.log("converging");
    }

    // Apply glitch effect and position effect for each span
    firstGlitchEffect(span);
    positionEffect(span);
    padding(span);
  });
}

convertbtn.addEventListener("click", function(){
  toggleTranslation();

  // Set interval to call toggleTranslation function with random timeout
  setInterval(toggleTranslation, Math.random() * 9000 + 5000); // Random timeout between 1 to 6 seconds
  console.log("text toggled");
});

/*phase information drop down*/
let palidromal = document.getElementById("palidromal");
let active = document.getElementById("active");
let remission = document.getElementById("remission");
let desc_1 = document.getElementById("phase1_desc");
let desc_2 = document.getElementById("phase2_desc");
let desc_3 = document.getElementById("phase3_desc");
let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");

palidromal.addEventListener("click", function(){
  if(desc_1.style.display === "none") {
    desc_1.style.display = "block";
    desc_1.classList.add("fade-in")
    plus1.style.transform = "rotate(90deg)";
  } else {
    desc_1.style.display = "none";
    plus1.style.transform = "rotate(0deg)";
  }
});

active.addEventListener("click", function(){
  if(desc_2.style.display === "none") {
    desc_2.style.display = "block";
    desc_2.classList.add("fade-in")
    plus2.style.transform = "rotate(90deg)";
  } else {
    desc_2.style.display = "none";
    plus2.style.transform = "rotate(0deg)";
  }
});

remission.addEventListener("click", function(){
  if(desc_3.style.display === "none") {
    desc_3.style.display = "block";
    desc_3.classList.add("fade-in")
    plus3.style.transform = "rotate(90deg)";
  } else {
    desc_3.style.display = "none";
    plus3.style.transform = "rotate(0deg)";
  }
});


//text scrambler
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let interval = null;

// function startScrambling() {
//   let iteration = 0;
//   clearInterval(interval);

//   interval = setInterval(() => {
//     text.textContent = text.textContent
//       .split("")
//       .map((letter, index) => {
//         if (index < iteration) {
//           return text.dataset.value[index];
//         }
//         return letters[Math.floor(Math.random() * letters.length)];
//       })
//       .join("");

//       // text.style.transform = `scaleX(${Math.random() * 1.5 + 0.5})`; //TEXT STRETCHING

//     if (iteration >= text.dataset.value.length) {
//       clearInterval(interval);
//     }

//     iteration += 1/3; // Gradually reveal the original text
//   }, 30);
// }


/*
let glitch_colors = ["#ffffff", "#f9fb00", "#02feff", "#01ff00", "#fd00fb", "#fb0102", "#0301fc", "#000000"];
let text_alignments = ["left","right","center","justify"];

const fontStretchValues = [
  "normal",
  "ultra-condensed",
  "extra-condensed",
  "condensed",
  "semi-condensed",
  "semi-expanded",
  "expanded",
  "extra-expanded",
  "ultra-expanded",
  "50%",
  "100%",
  "200%"
];
const fontWeightValues = [
  "normal", 
  "bold",   
  "100",    
  "200",   
  "300",   
  "400",    
  "500",    
  "600",    
  "700",    
  "800",    
  "900"     
];

let hallucination_phrases = [
  "They're watching you, you know.",
  "He's worthless, why bother?",
  "She's onto us, we need to stop her.",
  "You'll never be good enough.",
  "Just give up, it's not worth it.",
  "They can hear everything you're thinking.",
  "Why are you even trying?",
  "They're laughing at you behind your back.",
  "Nobody likes you.",
  "He's coming for you.",
  "You're a failure.",
  "We know what you did.",
  "They're plotting against you.",
  "Just end it all.",
  "You're all alone in this.",
  "She's lying to you.",
  "It's all your fault.",
  "Nobody cares about you.",
  "You'll never escape.",
  "They're going to hurt you.",
  "She's just pretending to be your friend.",
  "You can't trust anyone.",
  "They're going to leave you.",
  "You're going crazy.",
  "He's going to kill you.",
  "She's going to ruin your life.",
  "You're better off dead.",
  "Nobody understands you.",
  "You're worthless.",
  "They're going to take everything from you.",
  "You're just a burden to everyone.",
  "You're not safe here.",
  "Nobody will believe you.",
  "She's going to betray you.",
  "You're going to lose everything.",
  "They're going to find you.",
  "You're a mistake.",
  "You're such a disappointment.",
  "You're going to regret this.",
  "They're going to make you suffer.",
  "You're never going to make it.",
  "You're just a pawn in their game.",
  "They're trying to control you.",
  "You'll never escape this nightmare.",
  "She's going to destroy you.",
  "You're going to die alone.",
  "Nobody wants you around.",
  "You're just a joke to them.",
  "They're out to get you.",
  "You'll never be happy.",
  "You're just a burden.",
  "They're going to break you.",
  "She's going to ruin everything.",
  "You're doomed to fail.",
  "Nobody will miss you when you're gone.",
  "You're nothing without them.",
  "They're going to crush you.",
  "You're just wasting your time.",
  "She's going to tear you apart.",
  "You'll never be able to escape.",
  "You're just a nuisance.",
  "They're going to ruin your life.",
  "You're powerless against them.",
  "You're just a pawn in their game.",
  "They're going to destroy you.",
  "You're going to die alone.",
  "Nobody wants you around.",
  "You're just a joke to them.",
  "They're out to get you.",
  "You'll never be happy.",
  "You're just a burden.",
  "They're going to break you.",
  "She's going to ruin everything.",
  "You're doomed to fail.",
  "Nobody will miss you when you're gone.",
  "You're nothing without them.",
  "They're going to crush you.",
  "You're just wasting your time.",
  "She's going to tear you apart.",
  "You'll never be able to escape.",
  "You're just a nuisance.",
  "They're going to ruin your life.",
  "You're powerless against them."
];
*/


// function toggleTranslation() {
//   const splitText = textSplit(text.textContent); //array of single letters
//   text.textContent = ''; //remove typed text to prevent duplication
//   text.dataset.value = text.textContent;  // Store original text
  
//   splitText.forEach(letter => {
//     const span = document.createElement('span'); // Create span element for each letter
//     span.textContent = letter;
//     text.appendChild(span);

//     // Generate a random number between 0 and 1
//     const randomNumber = Math.random();

//     // Randomly switch between randomTranslate and convergingTranslate
//     if (randomNumber < 0.5) {
//       randomTranslate(span);
//       console.log("random");
//     } else {
//       convergingTranslate(span);
//       console.log("converging");
//     }

//     // Apply glitch effect and position effect for each span
//     firstGlitchEffect(span);
//     positionEffect(span);
//   });  
// }


/*





/*function to switch btwn converging and random*/ 

// function randomTranslate(span) {
//   const randomX = Math.random(); 
//   const randomY = Math.random(); 

//   span.style.setProperty('--random-x', randomX);
//   span.style.setProperty('--random-y', randomY);
// }

// function convergingTranslate(span) {
//   const randomX = Math.random();
//   const randomY = getRandomNumber(0, 5);

//   span.style.setProperty('--random-x', randomX);
//   span.style.setProperty('--random-y', randomY);
// }

// function randomOrConverge(span) {
//   const randomNumber = Math.random(); // Generate a random number between 0 and 1

//   // If the random number is less than 0.5, apply randomTranslate, otherwise apply convergingTranslate
//   if (randomNumber < 0.5) {
//     randomTranslate(span);
//   } else {
//     convergingTranslate(span);
//   }

//   console.log(randomNumber);

// }*/

/*
function displayHallucination() {
  let div = document.createElement("div");
  div.textContent = getRandomPhrase();
  div.classList.add("hallucination");

  div.style.fontSize = "3em";
  div.style.position = "absolute";
  div.style.textAlign = "center";

  // Set the position of the div randomly within the viewport
  div.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  div.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  document.body.appendChild(div);

  // Set a random timeout for the animation to last
  const animationDuration = Math.random() * 3000 + 1000; // Random duration between 1000ms to 4000ms
  setTimeout(() => {
    div.remove();
  }, animationDuration);
}

// Function to continuously display hallucination phrases until the viewport is filled
function fillViewportWithHallucinations() {
  const viewportArea = window.innerWidth * window.innerHeight;
  const phraseArea = 200 * 50; 
  const numPhrases = Math.ceil(viewportArea / phraseArea);
  for (let i = 0; i < numPhrases; i++) {
    setTimeout(displayHallucination, i * 100); // Adjust delay here (1000ms = 1 second)
  }
}

convertbtn.addEventListener("click", function(){
  toggleTranslation();
  // fillViewportWithHallucinations(); 

  setTimeout(() => {
    setInterval(fillViewportWithHallucinations, Math.random() * 9000 + 5000); 
  }, 3000); 

  setInterval(selectedPhrase, Math.random() * 9000 + 1000);
});
*/