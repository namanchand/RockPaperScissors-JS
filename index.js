// // Declaring score variables and
// let humanScore = 0;
// let cpuScore = 0;
// let tie = 0;
// let roundCount = 0;

// //Welcome Message
// console.log("Welcome To The Rock, Paper, Scissors Game");

// // Function to get random number from CPU and converting it into a string of choice
// function getComputerChoice() {
//   let choice = Math.random();
//   //dividing 0-1 in 3 parts and equalizing it to a string variable
//   if (choice <= 1 / 3) {
//     choice = "rock";
//   } else if (choice <= 2 / 3 && choice > 1 / 3) {
//     choice = "paper";
//   } else if (choice > 2 / 3) {
//     choice = "scissors";
//   }
//   return choice;
// }

// //Function to prompt user for input. resticted to only input of rock, paper and scissors but case-insensitive

// function getHumanChoice() {
//   input = prompt("Enter either 'rock', 'paper' or 'scissors'");
//   if (
//     input.toLowerCase() !== "rock" &&
//     input.toLowerCase() !== "paper" &&
//     input.toLowerCase() !== "scissors"
//   ) {
//     return getHumanChoice();
//   } else return input.toLowerCase();
// }

// //Function to play a single round of RPS
// function playRound(humanChoice, cpuChoice) {
//   humanChoice = getHumanChoice();
//   cpuChoice = getComputerChoice();
//   let result = "";
//   //comparing result from both parties
//   if (
//     (humanChoice === "rock" && cpuChoice === "scissors") ||
//     (humanChoice === "paper" && cpuChoice === "rock") ||
//     (humanChoice === "scissors" && cpuChoice === "paper")
//   ) {
//     humanScore++;
//     result = "You won the Round!";
//   } else if (humanChoice === cpuChoice) {
//     tie++;
//     result = "Round Tie!";
//   } else {
//     cpuScore++;
//     result = "CPU won the Round!";
//   }
//   //logging the result of the round in a statement
//   console.log(`You chose ${humanChoice} and CPU chose ${cpuChoice}. ${result}`);

//   return result;
// }
// //function to play game. input the rounds you want to play
// function playGame(round = 5) {
//   let result = "";
//   for (let i = 0; i < round; i++) {
//     console.log(`Round ${i + 1}`);
//     roundCount++;
//     playRound();
//   }
//   //game result conditions
//   if (cpuScore > humanScore) {
//     result = "CPU Won the Game";
//   } else if (cpuScore < humanScore) {
//     result = "Human Won the Game";
//   } else {
//     result = "The Game is Draw";
//   }

//   //final game results
//   return console.log(
//     `Humans scored ${humanScore} and CPU scored ${cpuScore} out of ${round} rounds. ${result}!!!`
//   );
// }

//Invoke playGame function
// playGame();

/*New Algo
// create player game wins variable
// create cpu game wins variable
// create func to playRound
// loop on value created click on roundOption as parameter
// create variable for round as playerWins, cpuWins, Ties
// also create variable to store playerchoice and cpuChoice
// activate choice buttons and generate choices on click of a button and store it in choice variables
// compare choice variables and declare result on scoreboard
// declare player choices
// increase round score variables and declare it under round score element
// once loop is over show the game result in scoreboard. update game wins counter on final result
// update player choices to congrats or better luck next time message.

// put play round function as parameter to playgame function mapped to play button.
// on click reset player round wins element
// update scoreboard with lets begin message
// update player choice element to pick one
*/

//-------------------------------------------------------------------Code refresh------------------------------------------//
//---------- Storing all the elements to a variable -------//

const welcomeElement = document.querySelector("#section-welcome");
let gameWinsHumanElement = document.querySelector(".game-wins-human");
let gameWinsCpuElement = document.querySelector(".game-wins-cpu");
let resultElement = document.querySelector('#section-result')
let startGameDivEl = document.querySelector(".start-button-div-on")
let startGameButtonEl = document.querySelector(".start-button-div-on button")
let inputButtonDiv = document.querySelector(".option-div-off")
let inputButton = document.querySelectorAll(".option-div-off button")
let humanChoiceElement = document.querySelector('.human-name')
let humanScoreElement = document.querySelector('.human-score')
let tieScoreElement = document.querySelector('.tie-counter')
let cpuChoiceElement = document.querySelector('.cpu-name')
let cpuScoreElement = document.querySelector('.cpu-score')

//--------Setting score variables----------//
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let userGameWins = 0;
let cpuGameWins = 0;
let userChoice = "";
let cpuChoice = "";
let switchEl = "";

const option = [`ROCK`, `PAPER`, `SCISSOR`];

//------------ Default Initializers---------//
function defaultElements() {
  gameWinsHumanElement.textContent = `Press Start`
  gameWinsCpuElement.textContent = `Press Start`
  humanChoiceElement.textContent = `Your Score`
  cpuChoiceElement.textContent = `CPU Score`
  humanScoreElement.textContent = 0
  cpuScoreElement.textContent = 0
  tieScoreElement.textContent = 0
  userScore = 0
  cpuScore = 0
  tieScore = 0
}

defaultElements()


//-------------function reset DOM elements and scores------------//
function resetElements() {
  humanScoreElement.textContent = 0
  cpuScoreElement.textContent = 0
  tieScoreElement.textContent = 0
  humanChoiceElement.textContent = `Your Score`
  cpuChoiceElement.textContent = `CPU Score`
  gameWinsHumanElement.textContent = `Your Won ${userGameWins} Games`
  gameWinsCpuElement.textContent = `CPU Won ${cpuGameWins} Games`
  userScore = 0
  cpuScore = 0
  tieScore = 0
}

// while (userScore >= 5 || cpuScore >= 5) {

//---------- function that generate random number and convert it to string -----------//
function getCpuChoice() {

  let choice = Math.trunc(Math.random() * 3 + 1);
  if (choice === 1) {
    choice = "ROCK";
  } else if (choice === 2) {
    choice = "PAPER";
  } else if (choice === 3) {
    choice = "SCISSOR";
  }
  return choice;
}

//----------------------GameLogic------------------//
function gameLogic() {

  if (inputButtonDiv.className === 'option-div-on') {

    if (userChoice === 'ROCK' && cpuChoice === 'SCISSOR' ||
      userChoice === 'PAPER' && cpuChoice === 'ROCK' ||
      userChoice === 'SCISSOR' && cpuChoice === 'PAPER') {
      userScore++
      resultElement.textContent = `You Won this round!!! ${String.fromCodePoint(0x1F642)}`
      resultElement.style.backgroundColor = "#2ee866"
      humanScoreElement.textContent = userScore

      console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);

    } else if (userChoice === cpuChoice) {
      tieScore++
      resultElement.textContent = `Nobody Wins. It's a Tie!!! ${String.fromCodePoint(0x1F610)}`
      resultElement.style.backgroundColor = "#fcba03"
      tieScoreElement.textContent = tieScore

      console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);

    } else {
      cpuScore++
      resultElement.textContent = `You Lost this round!!! ${String.fromCodePoint(0x1F641)}`
      resultElement.style.backgroundColor = "#ed4e4e"
      cpuScoreElement.textContent = cpuScore

      console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);

    }

    if (userScore / 5 === 1) {
      userGameWins++
      resultElement.textContent = `You Won the Game! Congratulation!!! ${String.fromCodePoint(0x1F3C6)}`
      resultElement.style.backgroundColor = "#039900"
      gameWinsHumanElement.textContent = `Your Won ${userGameWins} Games`


      inputButtonDiv.classList.replace('option-div-on', 'option-div-off')

      console.log(inputButtonDiv.className);

      resetElements()
      console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);

    } else if (cpuScore / 5 === 1) {
      cpuGameWins++
      resultElement.textContent = `CPU Won the Game! Try Again!!! ${String.fromCodePoint(0x1F494)}`
      resultElement.style.backgroundColor = "#cf0000"
      gameWinsCpuElement.textContent = `CPU Won ${cpuGameWins} Games`

      inputButtonDiv.classList.replace('option-div-on', 'option-div-off')

      console.log(inputButtonDiv.className);


      resetElements()
      console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);
    }
  } else return defaultElements()
}

//--------------Generate Choices-----------------//
const playRound = function () {

  for (let i = 0; i < inputButton.length; i++) {
    inputButton[i].addEventListener('click', function () {

      userChoice = option[i]
      cpuChoice = getCpuChoice()

      console.log(inputButtonDiv.className);

      gameWinsHumanElement.textContent = `You Chose ${userChoice}`
      gameWinsCpuElement.textContent = `CPU Chose ${cpuChoice}`

      gameLogic()
      console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);

    })
  }
}

startGameButtonEl.addEventListener('click', () => {

  resetElements()

  inputButtonDiv.classList.replace('option-div-off', 'option-div-on')
  // switchEl = document.querySelectorAll(".option-div-on button")

  console.log(inputButtonDiv.className);

  playRound()
  console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);
})

console.log(userChoice, cpuChoice, userScore, tieScore, cpuScore, userGameWins, cpuGameWins);