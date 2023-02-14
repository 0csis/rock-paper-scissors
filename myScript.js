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