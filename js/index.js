// Your code goes here

//  the FUN BUS logo heading changes color with mouse over

let logoChange = document.querySelector(".logo-heading");
console.log(logoChange);
logoChange.addEventListener(
  "mouseover",
  function(event) {
    event.target.style.color = "red";
    setTimeout(function() {
      event.target.style.color = "blue";
    }, 500);
  },
  false
);

//[] `keydown
//On the Web page if CTRL key is pressed an alert will populate:"The ctrl  key has been preesed"
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  if (key.keyCode == "17") {
    alert("The ctrl  key has been preesed");
  }
}

//* []`wheel`
//when the mouse is wheeled is over the funBus img, it will shrink it

wheelImg = document.querySelector(".img");

wheelImg.addEventListener(
  "wheel",
  function() {
    wheelImg.style.padding = "200px";

    wheelImg.addEventListener(
      "wheel",
      function() {
        wheelImg.style.padding = "15px";
      },
      false
    );
  },
  false
);

//Load Event

const myImage = document.querySelector(".img-content img");
myImage.addEventListener("load", function() {
  alert("image  picture has loaded");
});

//Resize
//The nav bar background color changes as the screen rezies
const mainNav = document.querySelector(".main-navigation");

window.addEventListener("resize", function() {
  mainNav.style.backgroundColor = "grey";
});

//Drag
// As you drag the picture, the surrounding border grows larger
let borderLarge = 0;

const advtImage = document.querySelector("section img");
advtImage.addEventListener("drag", event => {
  console.log(event);
  advtImage.style.border = `${borderLarge}px solid red`;
  borderLarge++;
});

advtImage.addEventListener("dragend", event => {
  console.log(event);
  advtImage.style.border = "";
  borderLarge = 0;
});
//Scroll Event
//Alerts you when reach bottom of page
window.addEventListener("scroll", () => {
  const sHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === sHeight) {
    alert("You have reached the bottom of the page");
  }
});

//DB Click  enlarges h2 when you double click

const dbClick = document.querySelector(".intro h2");

let size = 10;
let FontSize = size + "px";
dbClick.addEventListener(
  "dblclick",
  function() {
    size = size * 4;
    dbClick.style["font-size"] = "120px";
  },
  false
);

// Select, Focus and Blurr.

const textArea = document.createElement("input");
textArea.type = "text";
textArea.value = " Select Your Destination!";
textArea.style.fontSize = "15px";
let selectedDestination = document.querySelector(".content-destination h2");
selectedDestination.appendChild(textArea);

let destinImg = document.querySelector(".content-destination img");
textArea.addEventListener("select", function() {
  destinImg.src = "http://source.unsplash.com/random/600x200";
});

textArea.addEventListener(
  "focus",
  function(e) {
    e.target.style.background = "red";
    event.preventDefault();
  },
  true
);
textArea.addEventListener(
  "blur",
  function(e) {
    e.target.preventPropagation;
    e.target.style.background = "grey";
  },
  true
);
