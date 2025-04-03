const body = document.querySelector("body");
const info = document.querySelector("header p");

let coolPrintStringQueue = [];
let coolPrintStringPrinting = false;

let computerScore = 0;
let humanScore = 0;
let round = 1;

coolPrintStringQueue.push(["Welcome to rock, paper, scissors!", info]);
coolPrintStringQueue.push(["This is a best of 5 game. Will you win, or will you lose!? Let's find out!", info]);
coolPrintStringQueue.push(["Make a selection to begin playing.", info]);

setInterval(() => {
    if (coolPrintStringQueue.length > 0 && !coolPrintStringPrinting) {
        coolPrintString(coolPrintStringQueue[0][0], coolPrintStringQueue[0][1]);
    };
}, 100);

async function coolPrintString(string, node) {
    coolPrintStringPrinting = true;
    node.textContent = "";
    const splitString = string.split('');
    function append(i, final) {
        const newTextNode = document.createTextNode(i);
        node.appendChild(newTextNode);
        if (final) {
            setTimeout(() => {
                coolPrintStringPrinting = false;
            }, 500);
        }
    }
    for (let i = 0; i < splitString.length; i++) {
        if (i === (splitString.length - 1)) {
            setTimeout(append, ((i + 1) * 50), splitString[i], true);
            coolPrintStringQueue.shift();
        } else {
            setTimeout(append, ((i + 1) * 50), splitString[i], false);
        };
    };
};

function updateScoreUI() {
    const playerScoreElement = document.querySelector(".player.score p:nth-child(2)");
    const computerScoreElement = document.querySelector(".computer.score p:nth-child(2)");
    playerScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
};

function handleClick(e) {
    if (round >= 5) {
        if (e.target.classList.contains("rock")) {
            playRound("rock", getComputerChoice());
        } else if (e.target.classList.contains("paper")) {
            playRound("paper", getComputerChoice());
        } else if (e.target.classList.contains("scissors")) {
            playRound("scissors", getComputerChoice());
        };
    }
};

body.addEventListener("click", handleClick);

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

function playRound(humanChoice, computerChoice) {
    coolPrintStringQueue.push([`Round ${round}. Player chose ${humanChoice}! Computer chose ${computerChoice}!`, info]);
    const lcHumanChoice = humanChoice.toLowerCase();
    if (lcHumanChoice === computerChoice) {
        coolPrintStringQueue.push(["It's a draw!", info]);
    } else if (lcHumanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1;
            coolPrintStringQueue.push(["Player wins this round!", info]);
        }
         else if (computerChoice === "paper") {
            computerScore += 1;
            coolPrintStringQueue.push(["Computer wins this round!", info]);
        };
    } else if (lcHumanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            coolPrintStringQueue.push(["Player wins this round!", info]);
        }
         else if (computerChoice === "scissors") {
            computerScore += 1;
            coolPrintStringQueue.push(["Computer wins this round!", info]);
        }; 
    } else if (lcHumanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1;
            coolPrintStringQueue.push(["Player wins this round!", info]);
        }
         else if (computerChoice === "rock") {
            computerScore += 1;
            coolPrintStringQueue.push(["Computer wins this round!", info]);
        };   
    };
    checkGameState();
    updateScoreUI();
};

function checkGameState() {
    if (round === 5 || humanScore === 3 || computerScore === 3) {
        endGame();
    } else {
        round += 1;
    }
}

function endGame() {
    coolPrintStringQueue.push(["Game over!", info])
    if (humanScore > computerScore) {
        coolPrintStringQueue.push(["Player wins! Congratulations!", info]);
    } else if (computerScore > humanScore) {
        coolPrintStringQueue.push(["Computer wins. Better luck next time!", info]);
    } else {
        coolPrintStringQueue.push(["Nobody wins! Congratu...lations?"]);
    };
    console.log("Refresh the page to play again.");
};