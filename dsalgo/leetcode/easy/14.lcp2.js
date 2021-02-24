

// prev solution
// Runtime: 92 ms, faster than 43.37% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 40.9 MB, less than 17.51% of JavaScript online submissions for Longest Common Prefix.
var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) return "";

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) {
            i++;
        }
        return prev.slice(0, i);
    })
};


// solution I like
// Runtime: 76 ms, faster than 95.21% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 39 MB, less than 78.86% of JavaScript online submissions for Longest Common Prefix.
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let str = strs[0];
    for (let word of strs) {
        while (word.indexOf(str) !== 0) {
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
};