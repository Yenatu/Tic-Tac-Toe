let currentPlayer = 'X';
        let board = ['', '', '', '', '', '', '', '', ''];
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        function handleClick(index) {
            if (board[index] === '' && !checkWinner()) {
                board[index] = currentPlayer;
                document.getElementById('board').children[index].innerText = currentPlayer;
                document.getElementById('board').children[index].classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (checkWinner()) {
                    alert(`${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
                } else if (!board.includes('')) {
                    alert("It's a draw!");
                }
            }
        }

        function checkWinner() {
            return winningCombos.some(combo => {
                if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
                    combo.forEach(cell => {
                        document.getElementById('board').children[cell].classList.add('winning-cell');
                    });
                    return true;
                }
                return false;
            });
        }