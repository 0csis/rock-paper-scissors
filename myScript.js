function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;

  switch (number) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissors';
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1,);

  if (playerSelection == 'Rock') {
    if (computerSelection == 'Scissors') {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection == 'Paper') {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return "This is a draw";
    }
  }

  else if (playerSelection == 'Paper') {
    if (computerSelection == 'Scissors') {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection == 'Rock') {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return "This is a draw";
    }
  }

  else if (playerSelection == 'Scissors') {
    if (computerSelection == 'Rock') {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection == 'Paper') {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return "This is a draw";
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let result;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose your weapon (Rock, Paper or Scissors): ");
    result = playRound(playerSelection, getComputerChoice());
    console.log(result);

    if (result[4] == 'L') {
      computerScore++;
    } else if (result[4] == 'W') {
      playerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('Congratulations, you win!')
  } else if (playerScore < computerScore) {
    console.log('Better luck next time! You lose.')
  } else {
    console.log('It\'s a draw.')
  }
}