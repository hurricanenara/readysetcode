// https://leetcode.com/problems/power-of-two/

// Runtime: 100 ms, faster than 55.11% of JavaScript online submissions for Power of Two.
// Memory Usage: 39.9 MB, less than 80.42% of JavaScript online submissions for Power of Two.

var isPowerOfTwo = function(n) {
    // if (n === 0) return false;
    return n > 0 ? (n & n - 1) === 0 : false;
};