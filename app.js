let player1Score = 0;
let player2Score = 0;
let targetScore = 0;

function rollDice(player) {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  
  if (player === 1) {
    player1Score += diceValue;
    document.getElementById('player1').innerHTML = `Player 1 Score: ${player1Score}`;
  } else {
    player2Score += diceValue;
    document.getElementById('player2').innerHTML = `Player 2 Score: ${player2Score}`;
  }
  
  checkWinner();
}

function setTarget() {
  targetScore = document.getElementById('targetScore').value;
  document.getElementById('targetScore').value = ''; // Clear input field
}

function checkWinner() {
  if (player1Score >= targetScore) {
    document.getElementById('winner').innerText = 'Player 1 wins!';
    // disableButtons();
  } else if (player2Score >= targetScore) {
    document.getElementById('winner').innerText = 'Player 2 wins!';
    // disableButtons();
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  targetScore = 0;
  document.getElementById('player1').innerHTML = `Player 1 Score: 0`;
  document.getElementById('player2').innerHTML = `Player 2 Score: 0`;
  document.getElementById('winner').innerText = '';
  enableButtons();
}

function disableButtons() {
  document.querySelectorAll('button').forEach(btn => {
    btn.disabled = true;
  });
}

function enableButtons() {
  document.querySelectorAll('button').forEach(btn => {
    btn.disabled = false;
  });
}



