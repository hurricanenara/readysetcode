// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

// Runtime: 96 ms, faster than 57.88% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
// Memory Usage: 44.9 MB, less than 35.13% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.

var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    
    let res = '';
    
    for (let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
};
// var removeDuplicates = function(s, k) {
    
//     let i = 0, j = 0;
    
//     while (i <= j) {
//         while (j < i + k - 1) {
//             if (s[i] !== s[j]) {
//                 i++;
//                 continue
//             }
//             j++;
//         }
//         removeDuplicates(s.slice(0,i) + s.slice(j + 1), k);
//     }
// };

console.log(removeDuplicates("deeedbbcccbdaa", 3));