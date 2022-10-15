let possibleSelections = ["rock", "paper", "scissors"],
    computerI = "", //Computer Index,
    playerSelection,
    lastRoundError = false;

function computerPlay() {
    computerI = Math.floor(Math.random() * 3);
    return possibleSelections[computerI];
}

function playRound() {
    if (lastRoundError) {
        playerSelection = prompt("That is not a valid option, please try again!").toLowerCase();
        lastRoundError = false;
    } else {
        playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    }

    if (!possibleSelections.includes(playerSelection)) return "That is not a valid option, please try again!";

    let playerI = possibleSelections.indexOf(playerSelection), //Player Index
        computerSelection = computerPlay();

    if (playerSelection == computerSelection) return `The game is a tie!`;

    if (computerI == (playerI - 1) || computerI == (possibleSelections.length - 1) && playerI == 0) {
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
            console.log("Try again!");
            lastRoundError = true;
        }
    }

    if (playerScore > computerScore) {
        alert("You won the game!");
    } else if (computerScore > playerScore) {
        alert("You lost the game!");
    } else if (
        tieScore > computerScore && tieScore > playerScore ||
        computerScore == playerScore
    ) {
        alert("The game resulted in a tie!");
    }
}