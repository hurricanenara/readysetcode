// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

// Runtime: 80 ms, faster than 64.29% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
// Memory Usage: 38.9 MB, less than 42.26% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.

var tictactoe = function(moves) {
    let grid = new Array(3).fill(null).map(() => [null, null ,null]);
    
    moves.forEach((move, i) => {
        if (i % 2 === 0) {
            grid[move[0]][move[1]] = "A";    
        } else {
            grid[move[0]][move[1]] = "B";    
        }
    });
    
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] !== null && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) return grid[i][0];
        if(grid[0][i] !== null & grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) return grid[0][i];
    }
    if (grid[0][0] !== null && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) return grid[0][0];
    if (grid[0][2] !== null && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) return grid[0][2];
    
    return moves.length === 9 ? "Draw" : "Pending";
};

// X Need to go over again

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); // "A"
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); // "B"
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); // "Draw"
console.log(tictactoe([[0,0],[1,1]])); // "Pending"

// this solution of poppinlp outlines the cases first

const tictactoe = moves => {
  const cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const grid = new Uint8Array(9);
  for (let i = 0; i < moves.length; ++i) {
    grid[moves[i][0] * 3 + moves[i][1]] = (i % 2) + 1;
  }
  for (let i = 0; i < cases.length; ++i) {
    const role = grid[cases[i][0]];
    if (role !== 0 && grid[cases[i][1]] === role && grid[cases[i][2]] === role) {
      return role === 1 ? 'A' : 'B';
    }
  }
  return moves.length === 9 ? 'Draw' : 'Pending';
};