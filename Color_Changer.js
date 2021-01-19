//changing header coloro

// picking the header

var myHeader = document.querySelector("h1");

function randomColor () {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

//creating a function for clarity

function dynamicHeaderColor () {
  colorInput = randomColor()
  myHeader.style.color = colorInput;
}

//adding a timer

setInterval("dynamicHeaderColor()",500);

//now changing part of the background

var listBackground = document.querySelector(".textBlock");

function dynamicBackgroundColor () {
  colorInput = randomColor()
  listBackground.style.background = colorInput;
}

setInterval("dynamicBackgroundColor()",500);
