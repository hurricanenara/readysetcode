

// found it to be similar to Num of Islands

// var exist = function(board, word) {
    
//     let found = false;
    
//     function search(i, j, k) {
//         if (!found) {
//             if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
//             if (board[i][j] !== word[k]) return;
//             if (k === word.length - 1) {
//                 found = true;
//                 return;
//             }
            
//             board[i][j] = null;
//             search(i + 1, j, k + 1); // search bottom
//             search(i - 1, j, k + 1); // search up
//             search(i, j + 1, k + 1); // search right
//             search(i, j - 1, k + 1); // search left
            
//             board[i][j] = word[k];
//         }
//     }
    
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if (board[i][j] === word[0]) {
//                 search(i, j, 0);
//                 if (found) return found;
//             }
//         }
//     }
//     return found;
// };

var exist = function(board, word) {
    
    let found = false;
    
    function search(i, j, k) {
        if (!found) {
            if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
            if (board[i][j] !== word[k]) return;
            if (k === word.length - 1) {
                found = true;
                return;
            }
            
            board[i][j] = null;
            if (search(i + 1, j, k + 1) ||
            search(i - 1, j, k + 1) ||
            search(i, j + 1, k + 1) ||
            search(i, j - 1, k + 1)) return true;
            
            board[i][j] = word[k];
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                search(i, j, 0);
                if (found) return found;
            }
        }
    }
    return found;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let found = false;
    
    function search(i, j, k) {
        if (!found) {
            if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
            if (board[i][j] !== word[k]) return;
            if (k === word.length - 1) {
                found = true;
                return;
            }
            
            board[i][j] = null;
            search(i + 1, j, k + 1);
            search(i - 1, j, k + 1);
            search(i, j + 1, k + 1);
            search(i, j - 1, k + 1);
            
            board[i][j] = word[k];
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                search(i, j, 0);
                if (found) return found;
            }
        }
    }
    return found;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));