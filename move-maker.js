/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

// PLANNING:
// the move input we recieve is a string format separated by a comma
// each value needs to be reduced by -1 to reflect the indices
// ['X', '_', '_'],    1,1 1,2 1,3 ==> 0,0, 0,1 0,2
// ['_', 'X', '_'],    2,1 2,2 2,3 ==> 1,0 1,1 1,2
// ['O', 'O', 'X']     3,1 3,2 3,3 ==> 2,0 2,1 2,2

function userInputToIndices(move) {
    // we split the move string on the comma to separate the two numbers into an array of two strings
    // convert them to ints and reduce their value by 1
    // we return an array of the two values.
    let rowIndex = parseInt(move.split(",")[0]) - 1;
    let columnIndex = parseInt(move.split(",")[1]) - 1;
    return [rowIndex, columnIndex];
    // we should really be doing some user input validation here^ so anything other than 0-9,0-9 is rejected
}
// TESTS FOR userInputToIndices
// console.log(userInputToIndices("3,3"));
// [2,2]
// console.log(userInputToIndices("3,a"))
// [2, NaN]

function validateMove(move, board) {
    // Implement this at the end if you have time, otherwise you can help your teammates!
    const [rowIndex, columnIndex] = userInputToIndices(move);
    // ^ array destructuring, take the first value and store it as rowIndex, take the second value and store it as columnIndex
    // this is the same as:
    // const rowIndex = userInputToIndices(move)[0]
    // const columnIndex = userInputToIndices(move)[1]
    if (board[rowIndex][columnIndex] !== "_") {
        // console.log("Non Valid Move")
        console.log("Try again...")
        return false;
    } else {
        // console.log("Valid Move")
        return true;
    }
}
// TESTS FOR validateMove
// let testBoard1 = [['X', '_', '_'],
//                  ['_', 'X', '_'],
//                  ['O', 'O', 'X']];
// console.log(validateMove("1,2", testBoard1));
// true
// console.log(validateMove("2,2", testBoard1));
// Try again...
// false

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
    // if (!validateMove(move, board)) return false; <<< GUARD CONDITION STYLE
    if (validateMove(move, board) === false) {
        return false;
    } else {
        const [rowIndex, columnIndex] = userInputToIndices(move);
        board[rowIndex][columnIndex] = player;
        return true;
    }
}
// TESTS FOR makeMove
// let testBoard2 = [['X', '_', '_'],
//                  ['_', 'X', '_'],
//                  ['O', 'O', '_']];
// console.log(makeMove(testBoard2, "3,3", "O"));
// true
// console.log(makeMove(testBoard2, "2,2", "O"));
// Try again...
// false