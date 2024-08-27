// Declaring score variables and
let humanScore = 0;
let cpuScore = 0;
let tie = 0;
let roundCount = 0;

//Welcome Message
console.log("Welcome To The Rock, Paper, Scissors Game");

// Function to get random number from CPU and converting it into a string of choice
function getComputerChoice() {
  let choice = Math.random();
  //dividing 0-1 in 3 parts and equalizing it to a string variable
  if (choice <= 1 / 3) {
    choice = "rock";
  } else if (choice <= 2 / 3 && choice > 1 / 3) {
    choice = "paper";
  } else if (choice > 2 / 3) {
    choice = "scissors";
  }
  return choice;
}

//Function to prompt user for input. resticted to only input of rock, paper and scissors but case-insensitive

function getHumanChoice() {
  input = prompt("Enter either 'rock', 'paper' or 'scissors'");
  if (
    input.toLowerCase() !== "rock" &&
    input.toLowerCase() !== "paper" &&
    input.toLowerCase() !== "scissors"
  ) {
    return getHumanChoice();
  } else return input.toLowerCase();
}

//Function to play a single round of RPS
function playRound(humanChoice, cpuChoice) {
  humanChoice = getHumanChoice();
  cpuChoice = getComputerChoice();
  let result = "";
  //comparing result from both parties
  if (
    (humanChoice === "rock" && cpuChoice === "scissors") ||
    (humanChoice === "paper" && cpuChoice === "rock") ||
    (humanChoice === "scissors" && cpuChoice === "paper")
  ) {
    humanScore++;
    result = "You won the Round!";
  } else if (humanChoice === cpuChoice) {
    tie++;
    result = "Round Tie!";
  } else {
    cpuScore++;
    result = "CPU won the Round!";
  }
  //logging the result of the round in a statement
  console.log(`You chose ${humanChoice} and CPU chose ${cpuChoice}. ${result}`);

  return result;
}
//function to play game. input the rounds you want to play
function playGame(round = 5) {
  let result = "";
  for (let i = 0; i < round; i++) {
    console.log(`Round ${i + 1}`);
    roundCount++;
    playRound();
  }
  //game result conditions
  if (cpuScore > humanScore) {
    result = "CPU Won the Game";
  } else if (cpuScore < humanScore) {
    result = "Human Won the Game";
  } else {
    result = "The Game is Draw";
  }

  //final game results
  return console.log(
    `Humans scored ${humanScore} and CPU scored ${cpuScore} out of ${round} rounds. ${result}!!!`
  );
}

//Invoke playGame function
playGame();
