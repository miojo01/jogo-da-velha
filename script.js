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

const winningCombinations = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function checkWinner() {
    winningCombinations.forEach((combination) => {
        const [a, b, c] = combination;

        if (gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            console.log(`Jogador ${currentPlayer} venceu!`);
        }
    });
};

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    document.getElementById('board').appendChild(cell);

    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (gameBoard[i] !== '') return;

        gameBoard[i] = currentPlayer;

        cell.innerText = currentPlayer;
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        document.getElementById('turno').innerText = `Vez do Jogador ${currentPlayer}`;
    });
}

