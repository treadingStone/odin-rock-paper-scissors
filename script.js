function getComputerChoice() {
    const getRandomInt = Math.floor(Math.random() * 3);
    if (getRandomInt === 0) {
        return "rock";
    } else if (getRandomInt === 1) {
        return "paper";
    } else if (getRandomInt === 2) {
        return "scissors";
    };
};

function getHumanChoice() {
    const humanChoice = prompt('Enter your choice of "rock", "paper", or "scissors".');
    return humanChoice;
};

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let round = 1;

    console.log("Welcome to rock, paper, scissors!");
    console.log("This is a best of 5 game. Will you win, or will you lose!? Let's find out!");

    function playRound(humanChoice, computerChoice) {
        console.log(`Round ${round}.`);
        console.log(`Player chose ${humanChoice}!`);
        console.log(`Computer chose ${computerChoice}!`);
        const lcHumanChoice = humanChoice.toLowerCase();
        if (lcHumanChoice === computerChoice) {
            console.log("It's a draw!");
        } else if (lcHumanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore += 1;
                console.log("Player wins this round!");
            }
             else if (computerChoice === "paper") {
                computerScore += 1;
                console.log("Computer wins this round!");
            }
        } else if (lcHumanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1;
                console.log("Player wins this round!");
            }
             else if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("Computer wins this round!");
            }     
        } else if (lcHumanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore += 1;
                console.log("Player wins this round!");
            }
             else if (computerChoice === "rock") {
                computerScore += 1;
                console.log("Computer wins this round!");
            };   
        };
        checkGameState();
    };

    function checkGameState() {
        if (round === 5 || humanScore === 3 || computerScore === 3) {
            endGame();
        } else {
            console.log(`Current score: Player - ${humanScore}, Computer - ${computerScore}`);
            round += 1;
            playRound(getHumanChoice(), getComputerChoice());
        }
    }

    function endGame() {
        console.log(`Final score: Player - ${humanScore}, Computer - ${computerScore}`);
        if (humanScore > computerScore) {
            console.log("Player wins! Congratulations!");
        } else if (computerScore > humanScore) {
            console.log("Computer wins. Better luck next time!");
        } else {
            console.log("Nobody wins! Congratu...lations?");
        }
        console.log("Refresh the page to play again.")
    }

    playRound(getHumanChoice(), getComputerChoice());
};

playGame();