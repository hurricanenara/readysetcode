// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Runtime: 104 ms, faster than 85.44% of JavaScript online submissions for Reverse String.
// Memory Usage: 46.3 MB, less than 6.73% of JavaScript online submissions for Reverse String.

var reverseString = function(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        [s[i], s[Math.abs(i - (s.length - 1))]] = [s[Math.abs(i - (s.length - 1))], s[i]]
    }
};