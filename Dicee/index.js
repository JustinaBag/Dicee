var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/decel1.png - decel6.png
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/decel1.png - decel6.png
document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);

//if Player 1 is wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 win!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 win!🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
