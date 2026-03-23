function drawPlayer(){
    const players = ['X', 'O'];
    const drawnPlayer = players[Math.floor(Math.random() * players.length)];
    return drawnPlayer;
}

let currentPlayer = drawPlayer();
let gameOver = false;
let gameBoard = [
    '', '', '',
    '', '', '',
    '', '', '',
];

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    document.getElementById('board').appendChild(cell);

    cell.addEventListener('click', () => {
        if (gameOver) return;
    });
}

