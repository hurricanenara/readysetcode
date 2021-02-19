// Runtime: 72 ms, faster than 90.20% of JavaScript online submissions for Spiral Matrix.
// Memory Usage: 38.6 MB, less than 15.38% of JavaScript online submissions for Spiral Matrix.

var spiralOrder = function(matrix) {
    const spiraled = [];
    while (matrix.length) {
       const first = matrix.shift();
       spiraled.push(...first);
       for (let sub of matrix) {
           let val = sub.pop();
           if (val) {
               spiraled.push(val);
               sub.reverse();
           }
       }
       matrix.reverse();
    }
    return spiraled;
};

// another way to solve
var spiralOrder = function(matrix) {
    const result = []; // Declare constant variable result initialzie to an empty array.
    
    let startRow = 0, 
        endRow = matrix.length - 1; 
    let startCol = 0, 
        endCol = matrix[0].length - 1; 
    
    while (startCol <= endCol && startRow <= endRow) {
        // top row 
        for (let col = startCol; col <= endCol; col++) {
            result.push(matrix[startRow][col]); 
        }
        // right row minus top column
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(matrix[row][endCol]); 
        }
        // bottom row minus last column
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break; 
            result.push(matrix[endRow][col]); 
        }
        // remaining cols
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break; 
            result.push(matrix[row][startCol]);
        }
        startRow++; 
        endRow--;
        startCol++; 
        endCol--;
    }
    return result;// Return result
};


// X but understood fully
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder());