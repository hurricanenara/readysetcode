// https://leetcode.com/problems/sort-characters-by-frequency/

// Runtime: 96 ms, faster than 82.37% of JavaScript online submissions for Sort Characters By Frequency.
// Memory Usage: 43 MB, less than 69.32% of JavaScript online submissions for Sort Characters By Frequency.

var frequencySort = function(s) {
    if (!s.length) return "";
    const obj = {};
    for (const char of s) {
        obj[char] = ++obj[char] || 1;
    }
    
    const sortedChars = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    let frequencyString = "";
    
    for (const char of sortedChars) {
        frequencyString += char.repeat(obj[char]);
    }
    return frequencyString;
};