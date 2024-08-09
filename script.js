function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice');
    humanChoice = humanChoice ? humanChoice.trim().toLowerCase() : "";
    const validChoices = ['rock', 'paper', 'scissors'];
    if (validChoices.includes(humanChoice)) {
        return humanChoice;
    } else {
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const result = {"rock": {"rock": "draw", "paper": "lose", "scissors": "win"},
                    "paper": {"rock": "win", "paper": "draw", "scissors": "lose"},
                    "scissors": {"rock": "lose", "paper": "win", "scissors": "draw"}}

    if (result[humanChoice][computerChoice] === 'win') {
        console.log(`You win, ${humanChoice} beats ${computerChoice}. `);
        humanScore++;
    } else if (result[humanChoice][computerChoice] === 'draw') {
        console.log(`You draw, you both chosen ${humanChoice}. `);
        humanScore++;
        computerScore++;
    } else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log(`Scores: You: [${humanScore}] vs Computer: [${computerScore}]`);
}



for (let i=0; i < 6; i++) {
    console.log(`-------Game round ${i}------`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}