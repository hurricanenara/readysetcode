/*
 * @param {number[]} digits
 * @return {number[]}
 */

 //  Runtime: 72 ms, faster than 94.79% of JavaScript online submissions for Plus One.
// Memory Usage: 38.6 MB, less than 47.52% of JavaScript online submissions for Plus One.

let plusOne = function(digits) {    
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9])); // [1, 0, 0];
console.log(plusOne([9, 0, 9]));
console.log(plusOne([0, 0]));

// var plusOne = function(digits) {    
//     return ((+digits.join("") + 1) + "").split("").map(Number);
// };
// var plusOne = function(digits) {    
//     const popped = [];
//     for (let i = digits.length - 1; i >= 0; i--) {
//         const digit = digits[i];
//         if (digit === 9) {
//             digits.pop();
//             popped.push(0);
//         }
//     }
//     if (digits[digits.length - 1] === undefined) {
//         return [1, ...popped];
//     } else {
//         ++digits[digits.length - 1];
//         return [...digits, ...popped];
//     }
// };

// var plusOne = function(digits) {    
//     if (digits[digits.length - 1] === 9) {
//         digits.pop();
//         digits[digits.length - 1] === undefined ? digits.push(1) : ++digits[digits.length - 1];
//         digits.push(0);
        
//     } else {
//         ++digits[digits.length - 1];    
//     }
//     return digits;
// };



// [9] => [1, 0]
// [1, 2, 9] => [1, 3, 0]