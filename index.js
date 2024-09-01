//------------Declaring element variables--------------//

let resultSectionEl = document.querySelector('#section-result')
let optionDivEl = document.querySelectorAll('.option-div button')
let userChoiceEl = document.querySelector('.user-choice')
let cpuChoiceEl = document.querySelector('.cpu-choice')
let userScoreEl = document.querySelector('.user-score')
let cpuScoreEl = document.querySelector('.cpu-score')
let tieScoreEl = document.querySelector('.tie-counter')
let userGameWinsEl = document.querySelector('.user-game-wins')
let cpuGameWinsEl = document.querySelector('.cpu-game-wins')
let startButtonEl = document.querySelector('.start-button-div button')

//------------Declaring Score variables---------------//

let userScore = 0
let cpuScore = 0
let tieScore = 0
let userGameWins = 0
let cpuGameWins = 0
const option = [`ROCK`, `PAPER`, `SCISSOR`];
let userChoice = ""
let cpuChoice = ""
let gameSwitch = 'off'

//-----------Game reset variables and elements-------------//
function resetGame() {
  userScore = 0
  cpuScore = 0
  tieScore = 0
  userScoreEl.textContent = '0';
  cpuScoreEl.textContent = '0';
  tieScoreEl.textContent = '0';
  resultSectionEl.textContent = 'Let the Game Begin!';
  resultSectionEl.style.backgroundColor = '#000';
  userGameWinsEl.textContent = `Choose One`
  cpuGameWinsEl.textContent = `Choose One`

}

//---------------Function to generate cpu choice-------------//

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


//----------------game rule logic function---------------//

function gameLogic() {

  //---------rule for user winning-----------//
  if (userChoice === 'ROCK' && cpuChoice === 'SCISSOR' ||
    userChoice === 'PAPER' && cpuChoice === 'ROCK' ||
    userChoice === 'SCISSOR' && cpuChoice === 'PAPER') {
    userScore++
    resultSectionEl.textContent = `You Won this round!!! ${String.fromCodePoint(0x1F642)}`
    resultSectionEl.style.backgroundColor = "#2ee866"
    userScoreEl.textContent = userScore
    //---------------rule for tie score-------------//
  } else if (userChoice === cpuChoice) {
    tieScore++
    resultSectionEl.textContent = `Nobody Wins. It's a Tie!!! ${String.fromCodePoint(0x1F610)}`
    resultSectionEl.style.backgroundColor = "#fcba03"
    tieScoreEl.textContent = tieScore
    //-------------rule for cpu score------------//
  } else {
    cpuScore++
    resultSectionEl.textContent = `You Lost this round!!! ${String.fromCodePoint(0x1F641)}`
    resultSectionEl.style.backgroundColor = "#ed4e4e"
    cpuScoreEl.textContent = cpuScore
  }
  //---------------Rule for ending the game when either user or cpu score reaches 5-------//

  if (userScore / 5 === 1) {
    userGameWins++
    userScore = 0
    cpuScore = 0

    resultSectionEl.textContent = `You Won the Game! Congratulation!!! ${String.fromCodePoint(0x1F3C6)}`
    resultSectionEl.style.backgroundColor = "#039900"
    userGameWinsEl.textContent = `Your Won ${userGameWins} Games`
    cpuGameWinsEl.textContent = `CPU Won ${cpuGameWins} Games`
    gameSwitch = 'off'
    deactivateOptionButtons()
    console.log(gameSwitch);

  } else if (cpuScore / 5 === 1) {
    cpuGameWins++
    resultSectionEl.textContent = `CPU Won the Game! Try Again!!! ${String.fromCodePoint(0x1F494)}`
    resultSectionEl.style.backgroundColor = "#cf0000"
    userGameWinsEl.textContent = `Your Won ${userGameWins} Games`
    cpuGameWinsEl.textContent = `CPU Won ${cpuGameWins} Games`
    gameSwitch = 'off'
    deactivateOptionButtons()
    console.log(gameSwitch);
  }
}

//-------Function to play a round by generating choices and storing it in choice variables--------//
function choiceCreator(event) {

  if (gameSwitch === 'on') {    //make sure the game switch is on
    let userOption = Array.from(optionDivEl).indexOf(event.currentTarget)
    // convert option buttons into array and assigning the value to userChoice by mapping the index from available options //
    userChoice = option[userOption]
    cpuChoice = getCpuChoice()
    // initializing display elements
    userGameWinsEl.textContent = `Choose One`
    cpuGameWinsEl.textContent = `Choose One`
    userChoiceEl.textContent = `You Chose ${userChoice}`
    cpuChoiceEl.textContent = `CPU Chose ${cpuChoice}`

    gameLogic()

  }
}

//----------------function to activate option buttons events-------------//
function activateOptionButtons() {
  optionDivEl.forEach(button => {
    button.addEventListener("click", choiceCreator)
  });
}

//--------------function to deactivate option buttons events------------//
function deactivateOptionButtons() {
  optionDivEl.forEach(button => {
    button.removeEventListener('click', choiceCreator);
  });
}

//---------start game function----------------//

startButtonEl.addEventListener('click', () => {
  resetGame()  // reset the game if clicked again
  gameSwitch = 'on' //turn on the game switch
  deactivateOptionButtons() //remove any event listener active
  activateOptionButtons() //reactivate event listeners for new inputs
})