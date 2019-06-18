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
