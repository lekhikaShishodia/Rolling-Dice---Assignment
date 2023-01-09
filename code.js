//declaring array of images
var array = ["Dice1.png", "Dice2.png", "Dice3.png", "Dice4.png", "Dice5.png", "Dice6.png"];
var t; //variable to store state of setInterval method
var stopped = true; //variable to store state of dice
function start() {
    var num = Math.floor(Math.random() * 6); //fetching a random number (0-6) to display respective image
    console.log(num);
    document.getElementById("showDice").style.backgroundImage = "url(" + array[num] + ")"; //displaying a particular dice image for a particular number
}

//eventlistener to check if dice is clicked 
var clicked = document.getElementById("showDice")
clicked.addEventListener("click", attempt); //call attempt function if dice is clicked

function attempt() {

    switch (stopped) {
        //case if dice is stopped
        case true:
            t = setInterval(start, 100);
            stopped = false;
            break;

        //case if dice is started
        case false:
            clearInterval(t);
            stopped = true;
            break;
    }
}
window.onload = attempt;




