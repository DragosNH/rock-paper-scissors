const gameScreen = document.querySelector(".game-screen");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const gameArray = ["Rock", "Paper", "Scissors"];


const game_play = (playerChoice) => {
    let randomValue = Math.floor(Math.random() * gameArray.length);
    const computer = gameArray[randomValue];
    if (computer == "Rock" &&  playerChoice == "Rock") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie \n\nYou chosed: Rock`;
    }
    if (computer == "Paper" && playerChoice == "Rock") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins! \n\nYou chosed: Rock`;
    }
    if (computer == "Scissors" && playerChoice == "Rock") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win! \n\nYou chosed: Rock`;
    }

    if (computer == "Rock" && playerChoice == "Paper") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win! \n\nYou chosed: Paper`;
    }
    if (computer == "Paper" && playerChoice == "Paper") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nTie \n\nYou chosed: Paper`;

    }
    if (computer == "Scissors" && playerChoice == "Paper") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins! \n\nYou chosed: Paper`;
    }

    if (computer == "Rock" && playerChoice == "Scissors") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nComputer wins! \n\nYou chosed: Scissors`;
    }
    if (computer == "Paper" && playerChoice == "Scissors") {
        gameScreen.innerText = `Computer choosed: ${computer} \n\nYou Win! \n\nYou chosed: Scissors`;
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