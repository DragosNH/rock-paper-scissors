const gameScreen = document.querySelector(".game-screen");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const gameArray = ["Rock", "Paper", "Scissors"];
let randomValue = Math.floor(Math.random() * 3);

gameScreen.innerText = gameArray[randomValue];
