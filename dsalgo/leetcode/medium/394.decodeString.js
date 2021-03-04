// https://leetcode.com/problems/decode-string/

// Runtime: 96 ms, faster than 11.51% of JavaScript online submissions for Decode String.
// Memory Usage: 38.3 MB, less than 86.73% of JavaScript online submissions for Decode String.


var decodeString = function(s) {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
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



