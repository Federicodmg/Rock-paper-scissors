let possibleSelections = ["rock", "paper", "scissors"],
    errorMessage = "That is not a valid option, please try again!",
    computerI, //Computer Index
    lastRoundError = false;

function computerPlay() {
    computerI = Math.floor(Math.random() * 3);
    return possibleSelections[computerI];
}

function playRound() {
    let playerSelection;
    
    if (lastRoundError) {
        playerSelection = prompt(errorMessage).toLowerCase();
        lastRoundError = false;
    } else {
        playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    }

    if (!possibleSelections.includes(playerSelection)) return errorMessage;

    let playerI = possibleSelections.indexOf(playerSelection), //Player Index
        computerSelection = computerPlay();

    if (playerSelection == computerSelection) return `The game is a tie!`;

    if (computerI == (playerI - 1) || computerI == (playerI + 2)) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    let playerScore = 0,
        computerScore = 0,
        tieScore = 0;

    for (i = 0; i < 5;) {
        let result = playRound();

        if (result.includes("win")) {
            i += 1;
            playerScore += 1;
            console.log("You won this round!");
        } else if (result.includes("lose")) {
            i += 1;
            computerScore += 1;
            console.log("You lost this round!");
        } else if (result.includes("tie")) {
            i += 1;
            tieScore += 1;
            console.log("This round was a tie!");
        } else {
            console.log(errorMessage);
            lastRoundError = true;
        }
    }

    if (playerScore > computerScore) {
        alert("You won the game!");
    } else if (computerScore > playerScore) {
        alert("You lost the game!");
    } else {
        alert("The game resulted in a tie!");
    }
}