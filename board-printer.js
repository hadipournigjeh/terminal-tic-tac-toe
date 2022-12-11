/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
    for (let rows of board) {
        console.log(`  ${rows[0] !== "_" ? rows[0] : " "}  |  ${rows[1] !== "_" ? rows[1] : " "}  |  ${rows[2] !== "_" ? rows[2] : " "}\n=================`)
    }
}
// TESTS FOR printBoard
// let board = [
//     ['X', '_', '_'],
//     ['_', 'X', '_'],
//     ['O', 'O', 'X']
// ];
// printBoard(board);

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "_") {
                return false;
            }
        }
    }
    return true;
}
// TESTS FOR checkIfNoMovesLeft
// let board1 =    [['X', '_', '_'],
//                 ['_', 'X', '_'],
//                 ['O', 'O', 'X']];
// let board2 =    [['X', 'X', 'X'],
//                 ['X', 'X', 'X'],
//                 ['O', 'O', 'X']];
// console.log(checkIfNoMovesLeft(board1));
// // false
// console.log(checkIfNoMovesLeft(board2));
// // true