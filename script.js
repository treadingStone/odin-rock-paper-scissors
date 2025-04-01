let computerScore = 0;
let humanScore = 0;

console.log("Welcome to rock, paper, scissors!");
console.log("This is a best of 5 game. Will you win, or will you lose!? Let's find out!");

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

function playRound(humanChoice, computerChoice) {
    console.log(`Player chose ${humanChoice}!`);
    console.log(`Computer chose ${computerChoice}!`);
    const lcHumanChoice = humanChoice.toLowerCase();
    if (lcHumanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (lcHumanChoice === "rock") {
        if (computerChoice === "scissors") {
            playerScore += 1;
            console.log("Player wins this round!");
        }
         else if (computerChoice === "paper") {
            computerScore += 1;
            console.log("Computer wins this round!");
        }
    } else if (lcHumanChoice === "paper") {
        if (computerChoice === "rock") {
            playerScore += 1;
            console.log("Player wins this round!");
        }
         else if (computerChoice === "scissors") {
            computerScore += 1;
            console.log("Computer wins this round!");
        }     
    } else if (lcHumanChoice === "scissors") {
        if (computerChoice === "paper") {
            playerScore += 1;
            console.log("Player wins this round!");
        }
         else if (computerChoice === "rock") {
            computerScore += 1;
            console.log("Computer wins this round!");
        };   
    };
    console.log(`Current score: Player - ${playerScore}, Computer - ${computerScore}`)
};