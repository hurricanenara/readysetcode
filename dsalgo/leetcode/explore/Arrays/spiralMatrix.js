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


// X but understood fully
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder());