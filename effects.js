/*
current issues/features to be added
- maybe add character limit to prevent lag
- text that is typed in the div after conversion doesnt get converted to spans; not sure if feature should be added or typing be disabled
- make the change in text gradual i.e. the text is more normal at the beginning and gets more wraped towards the end 

features to add before thursday
- insert question marks randomly within the text and make it flash through different fonts
- redact some letters with symbols like ?/#!@$%^&*()
- (DONE) make some letters constantly flick through different typefaces
- (DONE) dynamically add the css blue filter so theres dynamic delay
*/

let convertbtn = document.getElementById("convert");
let text = document.getElementById("editableDiv");
let placeholdertext = document.getElementById("placeholder");

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
      const randomSize = Math.floor(Math.random() * 45) + 20;
      e.style.fontSize = randomSize + "px";
      e.style.transition = "font-size 0.3s ease"; //make that shit smoooooth
  });
}

//value of random spacing
function randomSpace(e){
  return Math.floor(Math.random()* 5);
}

//frequency of adding spaces
function addSpacing() {
  return randomSpace() < 0.2;
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
  // console.log(span.style.fontFamily);
}

function flickThroughFonts() {
  const spans = document.querySelectorAll('#editableDiv span');
  const spansArray = Array.from(spans);
  const randomSubset = getRandomSubset(spansArray, 0.35); //apply to 20% of spans
  // console.log(randomSubset.length);
  // console.log(spansArray.length);
  setInterval(() => {
    randomSubset.forEach(span => { //iterate random subset
      applyRandomFont(span);
    });
  }, 1000);
}

function getRandomSubset(array, ratio) {
  const subsetSize = Math.ceil(array.length * ratio);
  const shuffled = array.slice().sort(() => 0.2 - Math.random()); 
  return shuffled.slice(0, subsetSize);
}

// flickThroughFonts();

//adding blur dynamically
function randomBlur(span) {
  const delay = Math.random() * 10; //random delay
  setTimeout(() => {
      const randomAnimationStart = Math.random() * 10; //random animation start time
      span.style.animationDelay = `-${randomAnimationStart}%`; 
      span.classList.add('typing'); 
  }, delay * 1000);
}

convertbtn.addEventListener("click", function(){
  const splitText = textSplit(text.textContent); //array of single letters
  text.textContent = ''; //remove typed text to prevent duplication
  splitText.forEach(letter => {
      const span = document.createElement('span'); //create span element for each letter
      span.textContent = letter;
      text.appendChild(span);
      
      if (addSpacing()) { // Randomly decide whether to add spacing between letters
        const spaceCount = Math.floor(Math.random() * 5); 
        const space = document.createTextNode('\u00A0'.repeat(spaceCount)); // Add non-breaking spaces
        text.appendChild(space);
    }
      randomSize(span);
      randomBlur(span);
  });
  flickThroughFonts();
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