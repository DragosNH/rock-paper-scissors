const gameScreen = document.querySelector(".game-screen");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const gameArray = ["Rock", "Paper", "Scissors"];
let randomValue = Math.floor(Math.random() * 3);


gameScreen.innerText = `Computer choosed: ${gameArray[randomValue]}`;

const game_play = () =>{

}

rock.addEventListener("click", () => {
    gameArray[0];
})

paper.addEventListener("click", () => {
    gameArray[1];
})

scissors.addEventListener("click", () => {
    gameArray[2];
})