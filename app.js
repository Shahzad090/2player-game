let scores = {
    player1: 0,
    player2: 0
};
const targetScore = 10;

const scoreDisplay = document.getElementById('score');
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');

player1Btn.addEventListener('click', () => {
    updateScore('player1');
});

player2Btn.addEventListener('click', () => {
    updateScore('player2');
});

function updateScore(player) {
    scores.player++;
    scoreDisplay.textContent = Player 1: scores.player1 || Player 2: scores.player2;

    if (scores[player] === targetScore) {
        alert(player wins!);
        resetGame();
    }
}

function resetGame() {
    scores.player1 = 0;
    scores.player2 = 0;
    scoreDisplay.textContent = Player 1: scores.player1 || Player 2: scores.player2;
}