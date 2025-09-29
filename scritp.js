const gameScreen = document.querySelector(".game-screen");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerScore = document.querySelector(".computer-score");
const humanScore = document.querySelector(".human-score");

const gameArray = ["Rock", "Paper", "Scissors"];
computerScore.innerText = 0;
humanScore.innerText = 0;

const game_play = (playerChoice) => {
    let randomValue = Math.floor(Math.random() * gameArray.length);
    const computer = gameArray[randomValue];

    if (computer == "Rock" && playerChoice == "Rock") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie \n\nYou chosed: Rock`;
    }
    if (computer == "Paper" && playerChoice == "Rock") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins! \n\nYou chosed: Rock`;
        computerScore.innerText++;
    }
    if (computer == "Scissors" && playerChoice == "Rock") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win! \n\nYou chosed: Rock`;
        humanScore.innerText++;
    }

    if (computer == "Rock" && playerChoice == "Paper") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win! \n\nYou chosed: Paper`;
        humanScore.innerText++;
    }
    if (computer == "Paper" && playerChoice == "Paper") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie \n\nYou chosed: Paper`;

    }
    if (computer == "Scissors" && playerChoice == "Paper") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins! \n\nYou chosed: Paper`;
        computerScore.innerText++;
    }

    if (computer == "Rock" && playerChoice == "Scissors") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins! \n\nYou chosed: Scissors`;
        computerScore.innerText++;
    }
    if (computer == "Paper" && playerChoice == "Scissors") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win! \n\nYou chosed: Scissors`;
        humanScore.innerText++;
    }
    if (computer == "Scissors" && playerChoice == "Scissors") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie \n\nYou chosed: Scissors`;
    }

}

rock.addEventListener("click", () => {
    game_play("Rock")

})

paper.addEventListener("click", () => {
    game_play("Paper");

})

scissors.addEventListener("click", () => {
    game_play("Scissors");
})