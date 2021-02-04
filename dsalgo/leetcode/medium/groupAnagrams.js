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

// using Primes, interesting, says beats 99.8% and does not use sorting

    var groupAnagrams = function (strs) {
      const map = {};
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
      strs.forEach(str => {
        let prod = str.split("").reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
        map[prod] ? map[prod].push(str) : map[prod] = [str];
      });
      return Object.values(map);
    };