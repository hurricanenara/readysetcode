// https://leetcode.com/problems/duplicate-zeros/

// solution I like from submissions -- much faster than my solution

// Runtime: 96 ms, faster than 44.00% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 40.7 MB, less than 25.41% of JavaScript online submissions for Duplicate Zeros.

var duplicateZeros = function(arr) {
    let length = arr.length;
    let snake = [];
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) 
            snake.push(arr[i]);
        snake.push(arr[i])
        arr[i] = snake[i];
    };
};

// Runtime: 192 ms, faster than 5.19% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 40.5 MB, less than 35.09% of JavaScript online submissions for Duplicate Zeros.

// var duplicateZeros = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             for (let j = arr.length - 1; j >= i; j--) {
//                 arr[j] = arr[j - 1];
//             }
//             arr[i] = 0;
//             i++;
//         }
//     }
//     return arr;
// };

// X

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
// console.log(duplicateZeros([1,2,3]));
console.log(duplicateZeros([0,1]));