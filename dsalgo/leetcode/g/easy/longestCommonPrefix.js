// Runtime: 88 ms, faster than 55.92% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 41 MB, less than 14.30% of JavaScript online submissions for Longest Common Prefix.

var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) return "";

    return strs.reduce((prev, next) => {
        debugger
        let i = 0;
        debugger
        while (prev[i] && next[i] && prev[i] === next[i]) {
            debugger
            i++;
        }
        debugger
        return prev.slice(0, i);
    })
};
// var longestCommonPrefix = function(strs) {
    
//     let commonPrefix = "";
//     let set = new Set();
    
//     for (let i = 0; i <= 200; i++) {
//         debugger
//         for (let j = 0; j <strs.length - 1; j++) {
//             debugger
//             if (strs[j][i] !== strs[j + 1][i]) {
//                 debugger
//                 return "";
//             }
//             debugger
//             set.add(strs[j][i]);
//         }
//     }
//     debugger
//     // return commonPrefix;
//     return set;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));