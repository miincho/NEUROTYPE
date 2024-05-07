let convertbtn = document.getElementById("start");
let text = document.getElementById("editableDiv");
let placeholdertext = document.getElementById("placeholder");
let glitch_colors = ["#ffffff", "#f9fb00", "#02feff", "#01ff00", "#fd00fb", "#fb0102", "#0301fc", "#000000"];
let grey = ["#C9C9C9", "#3C3C3C", "#7D7D7D", "#EFEFEF", "#9F9F9F"];
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
];

//clears placeholder text
text.addEventListener("click", function() {
  placeholdertext.textContent = ''; 
});


//split the text into an array 
function textSplit(textContent){
  let splitText= textContent.split('');
  return splitText;
}

//change to random font size on hover
function randomSize(e) {
  e.addEventListener("mouseover", function(){
      const randomSize = Math.floor(Math.random() * 85) +40;
      e.style.fontSize = randomSize + "px";
      e.style.transition = "font-size 0.3s ease"; 
  });
}

//value of random spacing
function randomSpace(){
  return Math.floor(Math.random()* 5);
}

//frequency of adding spaces
function addSpacing() {
  return randomSpace() < 0.5;
}

//randomly select font family
const fonts = ["synt", "editorial", "pixel", "montreal", "Helvetica"];
function randomFont() {
  const randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
}

//apply a random font family to a span
function applyRandomFont(span) {
  const font = randomFont();
  span.style.transition = "font-family 0.3s ease";
  span.style.fontFamily = font;
}

function flickThroughFonts() {
  const spans = document.querySelectorAll('#editableDiv span');
  const spansArray = Array.from(spans);
  const randomSubset = getRandomSubset(spansArray, 0.60);
  setInterval(() => {
    randomSubset.forEach(span => { //iterate random subset
      applyRandomFont(span);
    });
  }, 5000);
}

function getRandomSubset(array, ratio) {
  const subsetSize = Math.ceil(array.length * ratio);
  const shuffled = array.slice().sort(() => 0.2 - Math.random()); 
  return shuffled.slice(0, subsetSize);
}

//adding blur dynamically
function randomBlur(span) {
  const delay = Math.random() * 10; 
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; 
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('typing'); 
  }, delay * 1000);
}

//adding wobble dynamically
function randomWob(span) {
  const delay = Math.random() * 10; 
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; 
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('wobble'); 
  }, delay * 1000);
}

///////////////////////////////////////////////////////////////////////////*active phase*/ 

/*css randomizer*/
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function setRandomValues() {
  const randomFontSize = getRandomNumber(0, 5);
  const randomScaleX = getRandomNumber(-1, 5);
  const randomScaleY = getRandomNumber(0, 5);
  const randomPadding = getRandomNumber(-50, 50);

  document.documentElement.style.setProperty('--random', randomFontSize);
  document.documentElement.style.setProperty('--random-scale-x', randomScaleX);
  document.documentElement.style.setProperty('--random-scale-y', randomScaleY);
  document.documentElement.style.setProperty('--random-padding', randomPadding);

}
// setRandomValues()
// setInterval(setRandomValues, 1000); 

function randomColor() {
  const randomColorIndex = Math.floor(Math.random() * glitch_colors.length);
  const randomColor = glitch_colors[randomColorIndex];
  document.documentElement.style.setProperty('--random-color', randomColor);
}
randomColor()
setInterval(randomColor, 100); 

//adding css animations
function firstGlitchEffect(span) {
  const delay = Math.random() * 10;
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; 
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('play-animation'); 
  }, delay * 1000);
}

function positionEffect(span) {
  const delay = Math.random() * 10;
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10;
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('play-animation2'); 
  }, delay * 1000);
}

function padding(span) {
  const delay = Math.random() * 10; 
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; 
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('play-animation3'); 
  }, delay * 1000);
}

// function wobble(span) {
//   const delay = Math.random() * 10; 
//   setTimeout(() => {
//       const randomAnimationStart = Math.random() * 10; 
//       span.style.animationDelay = `-${randomAnimationStart}%`; 
//       span.classList.add('play-animation4'); 
//   }, delay * 1000);
// }

//2 modes switch btwn random & converge
function randomTranslate(span) {
  const randomX = getRandomNumber(-5, 5); 
  const randomY = getRandomNumber(-5, 5); 
  span.style.setProperty('--random-x', randomX);
  span.style.setProperty('--random-y', randomY);
}

function convergingTranslate() {
  const randomX = getRandomNumber(-5, 5);
  const randomY = getRandomNumber(-5, 5);
  document.documentElement.style.setProperty('--random-x', randomX);
  document.documentElement.style.setProperty('--random-y', randomY);
}

//split the text
function textSplit(textContent){
  let splitText= textContent.trim().split(' ');
  return splitText;
}

//a span per word
function createSpans(textContent) {
  text.textContent = ''; 
  const splitText = textSplit(textContent);
  splitText.forEach(word => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    text.appendChild(span);
  });
  console.log("Spans created:", splitText.length);
}

//toggles btwn 2 modes
function toggleTranslation() {
  createSpans(text.textContent); 

  const spans = text.querySelectorAll('span');
  spans.forEach(span => {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      randomTranslate(span);
      console.log("random");
    } else {
      convergingTranslate();
      console.log("converging");
    }

    firstGlitchEffect(span);
    positionEffect(span);
    padding(span);
    // wobble(span);
  });
}

/*random hallucination phrase*/
function getRandomPhrase() {
  return hallucination_phrases[Math.floor(Math.random() * hallucination_phrases.length)];
}

function displayHallucination() {
  let div = document.createElement("div");
  div.textContent = getRandomPhrase();
  div.classList.add("hallucination");

  const randomColorIndex = Math.floor(Math.random() * glitch_colors.length);
  const randomColor = glitch_colors[randomColorIndex];
  div.style.backgroundColor = randomColor;

  const randomScaleX = getRandomNumber(-3, 3);
  const randomScaleY = getRandomNumber(-3, 3);

  div.style.fontSize = "1em";
  div.style.position = "absolute";
  div.style.textAlign = "center";
  div.style.transform = `scale(${randomScaleX}, ${randomScaleY})`;

  //position randomly within the viewport
  div.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  div.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 400);
}

//display hallucination phrases until the viewport is filled
function fillViewportWithHallucinations() {
  const viewportArea = window.innerWidth * window.innerHeight;
  const phraseArea = 200 * 50; 
  const numPhrases = Math.ceil(viewportArea / phraseArea);
  //make phrases appear one by one
  for (let i = 0; i < numPhrases; i++) {
    setTimeout(displayHallucination, i * 150); 
  }
}

/////////////////////////////////////////////////////////*timing the effects*/ 

let effect1Timer;
let effect2Timer;
let effect3Timer;

function effect1() {
  const splitText = textSplit(text.textContent);
  text.textContent = '';

  splitText.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter + ' ';
    text.appendChild(span);

    // Create and style random spaces
    if (addSpacing() && index < splitText.length - 1) {
      const spaceCount = Math.floor(Math.random() * 8) + 1;
      const space = document.createElement('span');
      space.textContent = '  '.repeat(spaceCount); // non-breaking spaces
      space.style.display = 'inline-block';
      space.style.width = '0';
      space.style.height = '0';
      space.style.overflow = 'hidden';
      space.style.animation = 'expandSpace 10s linear infinite';

      // Generate a new random max-width for each space span
      const maxSpaceWidth = Math.floor(Math.random() * 20) + 5;
      space.style.setProperty('--max-width', `${maxSpaceWidth}px`);

      text.appendChild(space);
    }

    randomSize(span);
    randomBlur(span);
  });

  flickThroughFonts();

  // Clear effect2Timer before running effect1
  clearInterval(effect2Timer);

  // Run effect1 for 15 seconds
  effect1Timer = setInterval(() => {
    console.log("Running effect1...");
  }, 1000);

  // Disable effect1 after 15 seconds
  setTimeout(() => {
    clearInterval(effect1Timer);
    console.log("Effect1 disabled after 15 seconds.");
  }, 15000);
}

function effect2() {
  setRandomValues();
  const randomValuesInterval = setInterval(setRandomValues, 1000);
    
  toggleTranslation();
  const toggleTranslationInterval = setInterval(toggleTranslation, Math.random() * 9000 + 3000);

  setTimeout(() => {
    fillViewportWithHallucinations();
    const hallucinationsInterval = setInterval(fillViewportWithHallucinations, Math.random() * 9000 + 5000);
    
    setTimeout(() => {
      clearInterval(toggleTranslationInterval);
      clearInterval(hallucinationsInterval);
      clearInterval(randomValuesInterval);
      // text.textContent = ''; 
      console.log("everything disabled after 30 seconds.");
    }, 30000);

  }, 3000);

  console.log("text toggled");
}


function effect3(splitText) {
  clearInterval(effect2Timer); // Clear any running timers from effect2
  console.log("Effect 3 started");

  // Clear existing content of the text element
  text.classList.remove(".play-animation");
  // text.classList.remove(".play-animation2");
  // text.classList.remove(".play-animation3");
  // text.classList.remove(".play-animation4");
  text.textContent = '';
  

  // Append spans and apply effects to each word in splitText
  splitText.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word + ' '; // Include a space after each word
    text.appendChild(span);

    span.classList.remove(".play-animation");
    // span.classList.remove(".play-animation2");
    // span.classList.remove(".play-animation3");
    // span.classList.remove(".play-animation4");

    span.style.position= "static";
    // Apply styles to the span element
    // span.style.position = "static"; // Example style
    // span.style.zIndex = "1000";
    // span.style.color = "white";

    // Create and style random spaces between words
    if (addSpacing() && index < splitText.length - 1) {
      const spaceCount = Math.floor(Math.random() * 8) + 1;
      const space = document.createElement('span');
      space.textContent = '  '.repeat(spaceCount); // Create non-breaking spaces
      space.style.display = 'inline-block';
      space.style.width = '0';
      space.style.height = '0';
      space.style.overflow = 'hidden';
      space.style.animation = 'expandSpace 10s linear infinite';
      const maxSpaceWidth = Math.floor(Math.random() * 20) + 5;
      space.style.setProperty('--max-width', `${maxSpaceWidth}px`);
      text.appendChild(space);
    }

    // Apply blur effect to each word
    randomBlur(span);
  });
}

let timer = document.getElementById("timer");
let startSpan = document.getElementById("start");
let buttonClicked = false;

// Event listener on button click
convertbtn.addEventListener("click", () => {
    if (buttonClicked) {
      return; // Exit early if button is already disabled
  }

  // Disable the button to prevent further clicks
  convertbtn.disabled = true;
  buttonClicked = true; // Update buttonClicked flag

  //1 minute timer
  let timeLeft = 60;
  // Update timer display every second
  const countdownInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      // Format seconds to always have two digits (e.g., 05, 10, 59)
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      // Update timer text content
      timer.textContent = `${minutes}:${formattedSeconds}`;

      // Decrease timeLeft by 1 second
      timeLeft--;

      // If countdown reaches zero, stop the interval
      if (timeLeft < 0) {
          clearInterval(countdownInterval);
          timer.textContent = "0:00"; // Optionally show 0:00 when countdown ends
      }
  }, 1000); // Update timer every second

  effect1(); 
  startSpan.textContent = "PHASE 1: PRODROMAL";

  setTimeout(() => {
    effect2();
    startSpan.textContent = "PHASE 2: ACTIVE";

    setTimeout(() => {
      const originalTextContent = text.textContent.trim(); 
      const splitText = textSplit(originalTextContent);
      startSpan.textContent = "PHASE 3: REMISSION";
      // Clear text content and reinsert original text split into spans with effect3
      text.textContent = ''; 
      effect3(splitText);

    }, 30000); //phase 2 is 30 seconds

  }, 15000);  //phase 2 begins after 15 seconds
});


const reset = document.getElementById("reset");
reset.addEventListener("click", ()=>{
  text.textContent = " ";
  text.textContent = placeholdertext;
  buttonClicked = false;
})