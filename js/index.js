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
//On the Web page if CTRL key is presses an alert will populate:"The ctrl  key has been preesed"
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  if (key.keyCode == "17") {
    alert("The ctrl  key has been preesed");
  }
}

//* []`wheel`
//when the mouse wheel is hovered over the 2nd img, it will shrink it

wheelImg = document.getElementsByTagName("img");

wheelImg[1].addEventListener(
  "wheel",
  function() {
    wheelImg[1].style.padding = "85px";

    wheelImg[1].addEventListener(
      "wheel",
      function() {
        wheelImg[1].style.padding = "20px";
      },
      false
    );
  },
  false
);

// [ ] `drag / drop`

//Load Event

const myImage = document.querySelector(".img-content img");
myImage.addEventListener("load", function() {
  alert("image  picture has loaded");
});

// //Resize
// function displayWindowSize() {
//   let w = document.documentElement.clientWidth;
//   let h = document.documentElement.clientHeight;

//   document.getElementById("result").innerHTML =
//     "Width: " + w + ", " + "Height: " + h;
// }

// window.addEventListener("resize", displayWindowSize);

// displayWindowSize();

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
  },
  true
);
textArea.addEventListener(
  "blur",
  function(e) {
    e.target.style.background = "grey";
  },
  true
);
