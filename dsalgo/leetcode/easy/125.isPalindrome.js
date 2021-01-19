// https://leetcode.com/problems/valid-palindrome/

// Runtime: 100 ms, faster than 49.11% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 40.6 MB, less than 93.27% of JavaScript online submissions for Valid Palindrome.

var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    s = s.toLowerCase();
    
    while (i < j) {
        let left = s[i].charCodeAt();
        let right = s[j].charCodeAt();
        if (!isLetter(left)) {
            i++;
            continue;
        }
        if (!isLetter(right)) {
            j--;
            continue;
        }
        if (s[i].charCodeAt() !== s[j].charCodeAt()) return false;
        i++;
        j--;
    }
    return true;
};

var isLetter = function(code) {
    if ((code >= 48 && code <= 57) ||
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)) {
        return true;
    } else {
        return false;
    }
}
// var isPalindrome = function(s) {
//     let i = 0;
//     let j = s.length - 1;
//     s = s.toLowerCase();
    
//     while (i < j) {
//         if (!(s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122)) {
//             while (!(s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122)) i++;
//         }
//         if (!(s[j].charCodeAt() >= 97 && s[j].charCodeAt() <= 122)) {
//             while (!(s[j].charCodeAt() >= 97 && s[j].charCodeAt() <= 122)) j--;
//         }
//         if (!(s[i].charCodeAt() === s[j].charCodeAt())) {
//             return false;
//         }
//         if ((s[i].charCodeAt() === s[j].charCodeAt())) {
//             i++;
//             j--;
//         }
//     }
//     return true;
// };

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(",."));