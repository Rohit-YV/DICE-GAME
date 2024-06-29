var randomnumber = Math.floor(Math.random()*6 + 1);
var randomDiceimage = "dice" + randomnumber + ".png";
var randomImages = "images/" + randomDiceimage;

var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src",randomImages);

var randomnumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceimage2 = "images/dice"+ randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);

if (randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomnumber2 > randomnumber) {
    document.querySelector("h1").innerHTML="player 2 wins";
}
else { 
    document.querySelector("h1").innerHTML="DRAW";
}