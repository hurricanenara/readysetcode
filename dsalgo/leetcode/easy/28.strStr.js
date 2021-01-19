// https://leetcode.com/problems/implement-strstr/
// https://www.youtube.com/watch?v=GTJr8OvyEVQ

// using KMP process
// Runtime: 88 ms, faster than 32.35% of JavaScript online submissions for Implement strStr().
// Memory Usage: 40 MB, less than 29.11% of JavaScript online submissions for Implement strStr()

var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    const lps = kmp(needle);
    let j = 0;
    for (let i = 0; i < haystack.length;) {
        if (haystack[i] === needle[j]) {
            if (j < needle.length - 1) {
                i++;
                j++
            } else {
                return i - j;
            }
        } else if (haystack[i] !== needle[j]) {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }
    }
    return -1;
};

var kmp = function(needle) {
    const lps = new Array(needle.length).fill(0);
    let j = 0;
    for (let i = 1; i < lps.length;) {
        if (needle[i] !== needle[j]) {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        } else if (needle[i] === needle[j]) {
            lps[i] = j + 1;
            j++;
            i++;
        }
    }
    return lps;
}

console.log(strStr("hello", "ll"));
console.log(strStr("abxabcabcaby", "abcaby"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("aaa", "aaaa"));
console.log(strStr("hello", ""));
// console.log(kmp(["a","b","c","d","a","b","c","a"])); // [0,0,0,0,1,2,3,1];
// console.log(kmp(["a","a","b","a","a","b","a","a","a"])); // [0,1,0,1,2,3,4,5,2];

//first attempt
// var strStr = function(haystack, needle) {
//     if (needle.length === 0) return 0;

//     let i = 0;
//     let j = 0;
//     let found;
    
//     while (i < haystack.length) {
//         if (needle[j] !== haystack[i]) {
//             i++;
//             continue;
//         }
//         if (needle[j] === haystack[i]) {
//             found = i;
//             while (j < needle.length && i < haystack.length) {
//                 if (needle[j] === haystack[i]) {
//                     j++;
//                     i++;                    
//                 } else {
//                     break;
//                 }
//             }
//             if (i === needle.length - 1) {
//                 return -1;
//             }
//         }
//     }
//     return -1;
    
// };

