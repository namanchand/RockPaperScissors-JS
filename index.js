function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 1 / 3) {
    choice = "rock";
  } else if (choice <= 2 / 3 && choice > 1 / 3) {
    choice = "paper";
  } else if (choice > 2 / 3) {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  input = prompt("Please Select 'rock', 'paper' or 'scissors'");
  if (
    input.toLowerCase() !== "rock" &&
    input.toLowerCase() !== "paper" &&
    input.toLowerCase() !== "scissors"
  ) {
    return getHumanChoice();
  } else return input.toLowerCase();
}

function playRound(humanChoice, cpuChoice) {
  humanChoice = getHumanChoice();
  cpuChoice = getComputerChoice();
  let result = "";

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

  console.log(`You chose ${humanChoice} and CPU chose ${cpuChoice}. ${result}`);

  return result;
}
let cpuScore = 0;
let tie = 0;
let humanScore = 0;
let roundCount = 0;

function playGame(round = 5) {
  let result = "";
  for (let i = 0; i < round; i++) {
    playRound();
    roundCount++;
  }

  if (cpuScore > humanScore) {
    result = "CPU Won the Game";
  } else if (cpuScore < humanScore) {
    result = "Human Won the Game";
  } else {
    result = "The Game is Draw";
  }
  return console.log(
    `Humans scored ${humanScore} and CPU scored ${cpuScore} out of ${round} rounds. ${result}!!!`
  );
}

// playGame();
