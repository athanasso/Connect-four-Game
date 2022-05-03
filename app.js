import { winningArrays } from './winningArrays.js';

document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;

    function checkBoard() {
        for (let i = 0; i < winningArrays.length; i++) {
            const square1 = squares[winningArrays[i][0]];
            const square2 = squares[winningArrays[i][1]];
            const square3 = squares[winningArrays[i][2]];
            const square4 = squares[winningArrays[i][3]];

            // check those squares to see if they all have the class of player-one
            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
            )
            {
                result.innerHTML = 'Player One Wins!';
            }
            // check those squares to see if they all have the class of player-two
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')
            )
            {
                result.innerHTML = 'Player Two Wins!';
            }
        }
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            //if the square below your current square is taken, you can go ontop of it
            if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer == 2) {
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;     
                } 
            } else alert ("You can't select this block");
            checkBoard();
        }
    }

});