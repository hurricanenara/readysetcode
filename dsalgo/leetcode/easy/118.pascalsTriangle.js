// https://leetcode.com/problems/pascals-triangle/
// Runtime: 72 ms, faster than 90.92% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 38.4 MB, less than 73.18% of JavaScript online submissions for Pascal's Triangle.

var generate = function(numRows) {
    const pascal = [];
    for (let i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i -  1][j];
        }
        pascal[i][i] = 1;
    }
    return pascal;
};