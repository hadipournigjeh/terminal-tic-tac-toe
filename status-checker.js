import { checkIfNoMovesLeft } from './board-printer.js';

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/
function checkRow(board, player, rowNumber) {
    return board[rowNumber].every(element => element === player);
}
// TESTS FOR checkRow
// let boardTest1 = [
//     ['_', '_', '_'],
//     ['_', '_', '_'],
//     ['O', 'O', 'O']
// ];
// console.log(checkRow(boardTest1, "O", 2));
// true
// console.log(checkRow(boardTest1, "O", 1));
// false

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false
*/
function checkColumn(board, player, columnNumber) {
    // 0,0 1,0 2,0 -- far left column indices
    // 0,1 1,1 2,1 -- middle column indices
    // 0,2 1,2 2,2 -- right column indices
    for (let row in board) {
        if (board[row][columnNumber] !== player) {
            return false;
        }
    }
    return true;
}
// TESTS FOR checkColumn
// let boardTest2 = [
//     ['_', '_', 'O'],
//     ['_', '_', 'O'],
//     ['_', '_', 'O']
// ];
// console.log(checkColumn(boardTest2, "O", 2));
// true
// console.log(checkColumn(boardTest2, "O", 1));
// false

/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false
*/
function checkDiagonal(board, player) {
    // It may be easier to use an if statement than a loop here

    // 0,0 1,1 2,2 -- top left to bottom right diagonal indices
    // 0,2 1,1 2,0 -- top right to bottom left diagonal indices
    if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player ||
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
        return true;
    } else {
        return false;
    }
    // ^ lets try to solve this with a loop... challenging...
}
// TESTS FOR checkColumn
// let boardTest3 = [
//     ['O', '_', '_'],
//     ['_', 'O', '_'],
//     ['_', '_', 'O']
// ];
// let boardTest4 = [
//     ['_', '_', 'O'],
//     ['_', 'O', '_'],
//     ['O', '_', '_']
// ];
// let boardTest5 = [
//     ['O', '_', 'O'],
//     ['_', '_', '_'],
//     ['O', '_', 'O']
// ];
// console.log(checkDiagonal(boardTest3, "O"));
// true
// console.log(checkDiagonal(boardTest4, "O"));
// true
// console.log(checkDiagonal(boardTest5, "O"));
// false

/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
    for(let i = 0; i <= 2; i++) {
        if(checkRow(board, player, i) || checkColumn(board, player, i)) {
            return true;
        }
    }

    if(checkDiagonal(board, player)) {
        return true;
    }

    return false;
}

export function isGameOver(board) {
    if(checkIfPlayerWon(board, 'X')) {
        console.log('X has won the game!\n');
        return true;
    }

    if(checkIfPlayerWon(board, 'O')) {
        console.log('O has won the game!\n');
        return true;
    }

    if(checkIfNoMovesLeft(board)) {
        console.log('Game Over - It\s a tie!\n');
        return true;
    }

    return false;
}
