function drawPlayer(){
    const players = ['X', 'O'];
    const drawnPlayer = players[Math.floor(Math.random() * players.length)];
    return drawnPlayer;
}

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

let scoreX = 0;
let scoreO = 0;

function checkWinner(gameBoard) {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return {winner : gameBoard[a], combination : [a, b, c]};
        }
    }
    return null;
};

function startGame() {

    let currentPlayer = drawPlayer();
    let gameOver = false;
    let gameBoard = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];

    document.getElementById('board').innerHTML = '';
    document.getElementById('title-o').classList.remove('win');
    document.getElementById('title-x').classList.remove('win');
    document.getElementById('turno').innerText = `O Jogador ${currentPlayer} começa!`;

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        document.getElementById('board').appendChild(cell);

        cell.addEventListener('click', () => {
            if (gameOver) return;
            if (gameBoard[i] !== '') return;

            gameBoard[i] = currentPlayer;

            cell.innerText = currentPlayer;

            const result = checkWinner(gameBoard);

            if (result) {
                const winner = result.winner;
                const combination = result.combination;

                if (winner === 'X') {
                    scoreX++;
                    document.getElementById('score-x').innerText = scoreX;
                    document.getElementById('title-x').classList.add('win');
                }
                else {
                    scoreO++;
                    document.getElementById('score-o').innerText = scoreO;
                    document.getElementById('title-o').classList.add('win');
                }

                const cells = document.querySelectorAll('.cell');

                console.log(`Jogador ${winner} venceu!`);
                gameOver = true;
                document.getElementById('turno').innerText = `Jogador ${winner} venceu!`;
                
                combination.forEach((index) => {
                    cells[index].classList.add('winner');
                });

                return;
            }
            else if (!gameBoard.includes('')) {
                console.log('Empate!');
                gameOver = true;
                document.getElementById('turno').innerText = `Empate!`;
                return;
            }
            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            document.getElementById('turno').innerText = `Vez do Jogador ${currentPlayer}`;
        });
    }
};

const buttonRestart = document.getElementById('btn-restart-game');
buttonRestart.addEventListener('click', () => {
    startGame();
});

startGame();
