let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let humanGuess;
let computerGuess;
let targetNumber;

// Write your code below:
// Create a random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
};
const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
};
// Determine who is the closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetNumber) =>
    getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber) ? true : false;

const check = humanGuess => {
    if (humanGuess < 0 || humanGuess > 9) { window.alert('Your number is out of range! Please select a number between 0 and 9.') }
}
let winner = compareGuesses(humanGuess, computerGuess, targetNumber) ? 'human' : 'computer';

// Increase the winner's score by 1
const updateScore = winner =>
    winner === 'human' ?
    humanScore++ : computerScore++;
// Update the round number after each round
const advanceRound = () => {
    currentRoundNumber++;
};
// Need to fix it, but now I have no energy for it...