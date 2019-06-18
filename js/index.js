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
