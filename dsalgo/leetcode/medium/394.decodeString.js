// https://leetcode.com/problems/decode-string/

// Runtime: 96 ms, faster than 11.51% of JavaScript online submissions for Decode String.
// Memory Usage: 38.3 MB, less than 86.73% of JavaScript online submissions for Decode String.


var decodeString = function(s) {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue; // skips everyhing below
        }
        let cur = stack.pop();
        let str = "";
        while (cur !== "[") {
            str = cur + str;
            cur = stack.pop();
        }
        let num = "";
        cur = stack.pop();
        while (!Number.isNaN(Number(cur))) {
            num = cur + num;
            cur = stack.pop();
        }
        if (cur) stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
};

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
console.log(decodeString("abc3[cd]xyz")); // "abccdcdcdxyz"

// another way without using stack

var decodeString = function(s) {
    while(s.indexOf('[')!=-1) { // base case, breaks when there's no bracket found
        let left = s.lastIndexOf('['); // left position of the inner-most `[`
        let right = left + s.substring(left).indexOf(']'); // right positio of the inner-most `]`
        let word = s.substring(left+1, right); // between them is the string
        let count = "";
        while(!isNaN(s[left - 1])) { // try to find a valid number
            left--;
            count = s[left] + count;
        }
        s = s.substring(0,left) + word.repeat(count) + s.substring(right+1); // put them all togher and repeat :)
    }
    return s;
};

