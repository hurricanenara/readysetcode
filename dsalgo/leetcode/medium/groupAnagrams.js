https://leetcode.com/problems/group-anagrams/

// Runtime: 208 ms, faster than 20.63% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 51.5 MB, less than 16.71% of JavaScript online submissions for Group Anagrams.

var groupAnagrams = function(strs) {
    const hash = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sorted = word.split("").sort().join("");
        hash[sorted] ? hash[sorted].push(word) : hash[sorted] = [word];
    }

    return Object.values(hash);
};