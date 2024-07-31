function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

let humanScore = 0, computerScore = 0;

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

