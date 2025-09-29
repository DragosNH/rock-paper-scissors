const gameScreen = document.querySelector(".game-screen");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const gameArray = ["Rock", "Paper", "Scissors"];
let randomValue = Math.floor(Math.random() * gameArray.length);
const computer = gameArray[randomValue];

const game_play = () => {
    if (computer == "Rock" && rock) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie`;
    }
    if (computer == "Paper" && rock) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins!`;
    }
    if (computer == "Scissors" && rock) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win!`;
    }

    if (computer == "Rock" && paper) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win!`;
    }
    if (computer == "Paper" && paper) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie`;

    }
    if (computer == "Scissors" && paper) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins!`;
    }

    if (computer == "Rock" && scissors) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins!`;
    }
    if (computer == "Paper" && scissors) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win!`;
    }
    if (computer == "Scissors" && scissors) {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie`;
    }

}

rock.addEventListener("click", () => {
    gameArray[0];
    game_play()

})

paper.addEventListener("click", () => {
    gameArray[1];
    game_play();

})

scissors.addEventListener("click", () => {
    gameArray[2];
    game_play()
})
