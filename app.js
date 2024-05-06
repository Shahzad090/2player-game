let target = 0;
let score1 = 0;
let score2 = 0;

function increaseScore(player) {
  if (target === 0) {
    alert("Please set target first!");
    return;
  }
  
  if (player === 1) {
    score1++;
    document.getElementById("score1").innerText = score1;
    if (score1 >= target) {
      alert("Player 1 wins!");
      resetGame();
    }
  } else {
    score2++;
    document.getElementById("score2").innerText = score2;
    if (score2 >= target) {
      alert("Player 2 wins!");
      resetGame();
    }
  }
}

function setTarget() {
  target = parseInt(document.getElementById("targetInput").value);
  if (isNaN(target) || target < 1) {
    alert("Please enter a valid target!");
    return;
  }
}

function resetGame() {
  target = 0;
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  document.getElementById("targetInput").value = "";
}

