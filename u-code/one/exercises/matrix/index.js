// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let grid = new Array(n).fill(null).map(el => new Array(n).fill(null));
    const moves = ["goRight", "goDown", "goLeft", "goUp"];
    let i = 0;
    let j = 0;
    let num =  1;
    let outOfRange = undefined;
    let turns = 0;

    while (typeof grid[i][j] !== 'number') {

        grid[i][j] = num;
        if ((turns % moves.length) === 0 && (grid[j + 1] !== outOfRange) && (turns % moves.length) === 0 && (grid[i][j + 1]) === null) {
            j++;
        } else if ((turns % moves.length) === 1 && (grid[i + 1] !== outOfRange) && (turns % moves.length) === 1 && (grid[i + 1][j]) === null) {
            i++;
        } else if ((turns % moves.length) === 2 && (grid[j - 1] !== outOfRange) && (turns % moves.length) === 2 && (grid[i][j - 1]) === null) {
            j--;
        } else if ((turns % moves.length) === 3 && (grid[i - 1] !== outOfRange) && (turns % moves.length) === 3 && (grid[i - 1][j]) === null) {
            i--;
        } else {
            turns ++;
            if (turns % moves.length === 0) {
                j++;
            } else if (turns % moves.length === 1) {
                i++;
            } else if (turns % moves.length === 2) {
                j--;
            } else {
                i--;
            }
        }
        num++;
    }
    return grid;
}

console.log(matrix(4));

module.exports = matrix;
