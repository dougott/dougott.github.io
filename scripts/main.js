var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/logo-simple.jpeg") {
        myImage.setAttribute("src", "images/handshake.png");
    } else {
        myImage.setAttribute("src", "images/logo-simple.jpeg");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to FCIM, " + myName;
}

myButton.onclick = function() {
    setUserName();
}

// Initialization
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to FCIM, " + storedName;
}