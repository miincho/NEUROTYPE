/*
current issues/features to be added
- audio API/library
- collapsable nav bar 
- playground mode
*/ 
 
let convertbtn = document.getElementById("convert");
let text = document.getElementById("editableDiv");
let placeholdertext = document.getElementById("placeholder");
let glitch_colors = ["#ffffff", "#f9fb00", "#02feff", "#01ff00", "#fd00fb", "#fb0102", "#0301fc", "#000000"];
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

/*css randomizer*/
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function setRandomValues() {
  const randomFontSize = getRandomNumber(0, 5);
  const randomColorIndex = Math.floor(Math.random() * glitch_colors.length);
  const randomColor = glitch_colors[randomColorIndex];
  const randomScaleX = getRandomNumber(-1, 5);
  const randomScaleY = getRandomNumber(0, 5);
  const randomPadding = getRandomNumber(-50, 50);

  document.documentElement.style.setProperty('--random', randomFontSize);
  document.documentElement.style.setProperty('--random-color', randomColor);
  document.documentElement.style.setProperty('--random-scale-x', randomScaleX);
  document.documentElement.style.setProperty('--random-scale-y', randomScaleY);
  document.documentElement.style.setProperty('--random-padding', randomPadding);

}
setRandomValues()
setInterval(setRandomValues, 1000); 

//clear placeholder text
text.addEventListener("click", function() {
  placeholdertext.textContent = ''; 
});

//add css animations w delay
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
  let splitText= textContent.split(' ');
  // console.log(splitText);
  return splitText;
}

//a span per word
function createSpans(textContent) {
  const splitText = textSplit(textContent);
  splitText.forEach(word => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    text.appendChild(span);
  });
  console.log("Spans created:", splitText.length);
}
text.textContent = ''; //doesnt work
text.dataset.value = text.textContent; //store original text
createSpans(text.dataset.value);

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
  });


  //remove duplicated spans to prevent crashing but this doesnt work
    const totalSpans = spans.length;
    console.log("Total spans:", totalSpans);
    const threshold = 50; 
    if (totalSpans > threshold) {
        //percentage of spans to clear
        const percentageToClear = 0.5; 
        const spansToClear = Math.floor(totalSpans * percentageToClear);
        console.log("Spans to clear:", spansToClear);
        //random spans to clear
        let removedCount = 0;
        for (let i = 0; i < spansToClear; i++) {
            const randomIndex = Math.floor(Math.random() * spans.length);
            spans[randomIndex].remove();
            removedCount++;
            console.log("Removed span at index:", randomIndex);
        }
        console.log("Total spans removed:", removedCount);
    }
}

/*hallucination phrase*/
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

  div.style.fontSize = "3em";
  div.style.position = "absolute";
  div.style.textAlign = "center";

  //position randomly within the viewport
  div.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  div.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  document.body.appendChild(div);

  //random timeout
  // const animationDuration = Math.random() * 2000 + 100; 
  setTimeout(() => {
    div.remove();
  }, 500);
}

//display hallucination phrases until the viewport is filled
function fillViewportWithHallucinations() {
  const viewportArea = window.innerWidth * window.innerHeight;
  const phraseArea = 200 * 50; 
  const numPhrases = Math.ceil(viewportArea / phraseArea);
  //make phrases appear one by one
  for (let i = 0; i < numPhrases; i++) {
    setTimeout(displayHallucination, i * 100); 
  }
}

convertbtn.addEventListener("click", function(){
  toggleTranslation();

  //random timing of toggle
  setInterval(toggleTranslation, Math.random() * 9000 + 5000); 

  setTimeout(() => {
    setInterval(fillViewportWithHallucinations, Math.random() * 9000 + 5000); 
  }, 3000); 

  console.log("text toggled");
});

/*information drop down*/
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