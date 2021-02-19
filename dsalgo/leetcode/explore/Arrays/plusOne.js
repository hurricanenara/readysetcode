// Runtime: 80 ms, faster than 64.13% of JavaScript online submissions for Plus One.
// Memory Usage: 38.7 MB, less than 52.29% of JavaScript online submissions for Plus One.

var plusOne = function(digits) {    
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

// my attempt without referencing old solution
// var plusOne = function(digits) {    
//     let carry = 1;
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] === 9) {
//             digits[i] = 0;
//         } else {
//             digits[i] = digits[i] + carry;
//             carry = 0;
//         }
//     }
//     if (carry) digits.unshift(carry);
//     return digits;
// };

console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([4,3,2,1])); // [4.3,2,2]
console.log(plusOne([0])); // [1]
console.log(plusOne([1,2,9])); // [1,3,0]
console.log(plusOne([1,9,9])); // [2,0,0]
console.log(plusOne([9,9,9])); // [2,0,0]