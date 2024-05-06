let playerScores = [0, 0];
let targetScore = 0;

function increaseScore(player) {
  playerScores[player - 1]++;
  document.getElementById(`player${player}`).innerHTML = `Player ${player}: ${playerScores[player - 1]}`;
  
  if (playerScores[player - 1] === targetScore) {
    alert(`Player ${player} wins!`);
  }
}

function setTarget() {
  targetScore = parseInt(prompt('Enter the target score:'));
}

function resetGame() {
  playerScores = [0, 0];
  document.getElementById('player1').innerHTML = 'Player 1: 0';
  document.getElementById('player2').innerHTML = 'Player 2: 0';
  targetScore = 0;
}
