// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy

// 380

// 114

// Add to List

// Share
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// Runtime: 76 ms, faster than 71.61% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 38.5 MB, less than 47.17% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

var subtractProductAndSum = function(n) {
    let numArr = n.toString().split("").map(num => +num);
    return numArr.reduce((acc, el) => acc * el) - numArr.reduce((acc, el) => acc + el)
};

//fasted submitted 56ms

var subtractProductAndSum = function(n) {
    let sum = 0
    let product = n === 0 ? 0 : 1
    
    const len = n.toString().split('')
    
    len.map(i => {
        sum = sum + parseInt(i)
        product = product * parseInt(i)
    })
    
    return (product-sum)
};