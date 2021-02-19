// Runtime: 120 ms, faster than 41.49% of JavaScript online submissions for Diagonal Traverse.
// Memory Usage: 46.4 MB, less than 22.73% of JavaScript online submissions for Diagonal Traverse.

//note - MAKE SURE to loop through only the num of els in subarray for nested for loop!
var findDiagonalOrder = function(matrix) {
    const traversed = [];
    const obj = {};
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            obj[i + j] ? obj[i + j].push(matrix[i][j]) : obj[i + j] = [matrix[i][j]];
        }
    }
    Object.keys(obj).forEach(key => {
        if (+key % 2 === 0) {
            traversed.push(...obj[key].reverse());
        } else {
            traversed.push(...obj[key]);
        }
    });
    return traversed;
}

console.log(findDiagonalOrder([
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]));
// [1,
//  2,4,
//  7,5,3,
//  6,8,
//  9]

console.log(findDiagonalOrder([[2,3]]))