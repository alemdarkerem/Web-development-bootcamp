var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6 random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6 random number
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png"); // changing image depending on the randomNumber1
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png"); // changing image depending on the randomNumber2
if (randomNumber1 === randomNumber2){ // equal condition
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) { // randomNumber 1 bigger condition
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else { // randomNumber 2 bigger condition
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}