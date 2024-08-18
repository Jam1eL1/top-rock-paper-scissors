function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;
const resultDiv =  document.querySelector('.results');
const resultPara = document.createElement('p');
const scorePara = document.createElement('p');

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = {"rock": {"rock": "draw", "paper": "lose", "scissors": "win"},
                    "paper": {"rock": "win", "paper": "draw", "scissors": "lose"},
                    "scissors": {"rock": "lose", "paper": "win", "scissors": "draw"}}
  
    if (result[humanChoice][computerChoice] === 'win') {
        resultPara.textContent = `You win, ${humanChoice} beats ${computerChoice}. `;
        humanScore++;
    } else if (result[humanChoice][computerChoice] === 'draw') {
        resultPara.textContent = `It's a draw, ${humanChoice} and ${computerChoice}. `;
        humanScore++;
        computerScore++;
    } else {
        resultPara.textContent = `You lose, ${humanChoice} can't beat ${computerChoice}. `;
        computerScore++;
    }
    scorePara.textContent =  `You: [${humanScore}] vs Computer: [${computerScore}]`;
    resultDiv.appendChild(resultPara);
    resultDiv.appendChild(scorePara);

    if (humanScore >= 5 || computerScore >= 5) {
        const finalResultPara = document.createElement('p');
        if (humanScore >= 5) {
            finalResultPara.textContent = "Game over! You win";
        } else {
            finalResultPara.textContent = "Game over! Computer wins!";
        }
        resultDiv.appendChild(finalResultPara);

        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
    }
}

const rockBtn = document.querySelector('#rock');
const scissorsBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');

rockBtn.addEventListener("click", () => playRound("rock"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
paperBtn.addEventListener("click", () => playRound("paper"));