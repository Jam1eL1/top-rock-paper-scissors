# Rock-Paper-Scissors Game

This is a simple Rock-Paper-Scissors game implemented in JavaScript. You can play it directly in your browser's developer console. The game allows you to play multiple rounds and keeps track of the score for both the human player and the computer.

## How to Play

1. Open your web browser.
2. Open the Developer Tools: F12 or Ctrl+Shift+I on Windows/Linux, Cmd+Option+I on macOS
3. Go to the Console tab.
4. Copy and paste the code from the script.js file into the console.
5. Press Enter to run the code.

## Functions

1. getComputerChoice()
    Returns a random choice for the computer from the options: "rock", "paper", or "scissors".
2. getHumanChoice()
    Prompts the user to enter their choice.
    Validates the input to ensure it's one of the acceptable choices.
    Returns the user's choice or null if the input is invalid.
3. playRound(humanChoice, computerChoice)
    Takes in the choices of both the human player and the computer.
    Determines the outcome of the round based on the predefined rules.
    Updates and displays the score for both the human player and the computer.
4. Game Execution
    The game runs for 6 rounds.
    After each round, the result is displayed in the console along with the updated scores.

## License

This project is licensed under the MIT License. 