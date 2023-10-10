const options = document.querySelectorAll('button');

let shift = 0;
const board = [];
let moves = 0; // Variable para contar los movimientos
let gameWon = false; // Variable para controlar si el juego se ganó
window.addEventListener('DOMContentLoaded', pressButton);

function pressButton() {
    options.forEach((item, idx) =>
        item.addEventListener('click', (event) => {
            if (!gameWon && !event.target.textContent) { // Verifica si no se ha ganado el juego y si el botón está vacío
                pressedButton(event, idx);
            }
        })
    );
}

function pressedButton(event, pos) {
    if (!gameWon) { // Verifica si el juego no se ha ganado
        let x = 'X';
        let o = 'O';
        let currentBtn = event.target;
        if (!currentBtn.textContent) { // Verifica nuevamente si el botón está vacío
            if (shift % 2 === 0) {
                currentBtn.style.color = '#008000';
                currentBtn.textContent = x;
                board[pos] = x;
                shift++;
            } else {
                currentBtn.style.color = '#0d58e4';
                currentBtn.textContent = o;
                board[pos] = o;
                shift++;
            }
            currentBtn.removeEventListener('click', () => {}); // Elimina el manejador de clic para este botón
            moves++; // Incrementa el contador de movimientos
            const winner = validateGame();
            if (winner) {
                gameWon = true; // El juego se ganó, por lo tanto, no permitir más clics
                Swal.fire({
                    title: 'Ganador: ' + winner,
                    width: 400,
                    padding: '3rem',
                    color: '#716add',
                });
            } else if (shift===9) {
                gameWon = true; // Todos los botones están llenos y no hay ganador
                Swal.fire({
                    title: 'Empate',
                    width: 400,
                    padding: '3rem',
                    color: '#716add',
                });
            }
        }
    }
}


function validateGame() {
    if (board[0]===board[1]&&board[0]===board[2]&&board[0]){
        return board[0];
    }else if  (board[3]===board[4]&&board[3]===board[5]&&board[3]){
        return board[3]
    }else if  (board[6]===board[7]&&board[6]===board[8]&&board[6]){
        return board[6]
    }else if  (board[0]===board[3]&&board[0]===board[6]&&board[0]){
        return board[0]
    }else if  (board[1]===board[4]&&board[1]===board[7]&&board[1]){
        return board[1]
    }else if  (board[2]===board[5]&&board[2]===board[8]&&board[2]){
        return board[2]
    }else if  (board[0]===board[4]&&board[0]===board[8]&&board[0]){
        return board[0]
    }else if  (board[2]===board[4]&&board[2]===board[6]&&board[2]){
        return board[2]
    }else return false 
}


const reload=document.getElementById('reload')
reload.addEventListener('click', reloadGame)

function reloadGame() {
    location.reload()
}