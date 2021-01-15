// var isToeplitzMatrix = function(matrix) {
//     debugger
//     for (var i = matrix.length - 1; i>0; i--) {
//         debugger
//         if(matrix[i].slice(1, matrix[i].length).join('') !== matrix[i - 1].slice(0, matrix[i].length - 1).join('')) {
//             debugger
//             return false;
//         }
//     }
//     return true;
// };


// Runtime: 100 ms, faster than 25.09% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 40.7 MB, less than 34.28% of JavaScript online submissions for Toeplitz Matri
var isToeplitzMatrix = function(matrix) {
    for (let i = matrix.length - 1; i > 0; i--) {
        const bottomRow = matrix[i].slice(1, matrix[i].length).join("");
        const diagRowAbove = matrix[i - 1].slice(0, matrix[i].length - 1).join("");
        if (bottomRow !== diagRowAbove) {
            return false;
        }
    }
    return true;
};

//top-left neighbor approach
// Runtime: 96 ms, faster than 42.05% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 40.2 MB, less than 68.55% of JavaScript online submissions for Toeplitz Matrix.

var isToeplitzMatrix = function(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (r > 0 && c > 0 && matrix[r][c] !== matrix[r - 1][c - 1]) { //matrix[r - 1][c - 1] is the top left neighbor
                return false;
            }
        }
    }
    return true;
};


console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]));
// console.log(isToeplitzMatrix([[1,2],[2,2]]));