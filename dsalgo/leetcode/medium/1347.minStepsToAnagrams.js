// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/


// not fast but straight forward
// Runtime: 160 ms, faster than 54.91% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
// Memory Usage: 44.9 MB, less than 37.45% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
// var minSteps = function(s, t) {
//     const map = {};
//     let count = 0;
//     for (let char of s) {
//         map[char] = ++map[char] || 1;
//     }
//     for (let char of t) {
//         if (map[char]) {
//             map[char]--;
//         } else {
//             count++;
//         }
//     }
//     // for (let char of t) {
//     //     if (map[char]) {
//     //         map[char]--;
//     //         continue;
//     //     }
//     //     count++;
//     // }
//     return count;
// };

// fast and straight forward
var minSteps = function(s, t) {
    const n = s.length;
    const counts = new Array(26).fill(0);
    
    for (let i = 0; i < n; i++) {
        const tIndex = t.charCodeAt(i) - 97;
        const sIndex = s.charCodeAt(i) - 97;

        counts[tIndex]++;
        counts[sIndex]--;
    }
    
    let res = 0;
    
    for (let i = 0; i < 26; i++) {
        
        if (counts[i] > 0) res += counts[i];
    }

    return res;
};

console.log(minSteps("bab", "aba")); // 1
// console.log(minSteps("leetcode", "practice")); // 5
// console.log(minSteps("anagram", "mangaar")); // 0
// console.log(minSteps("xxyyzz", "xxyyzz")); // 0
// console.log(minSteps("friend", "family")); // 4