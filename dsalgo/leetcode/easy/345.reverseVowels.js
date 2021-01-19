// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Runtime: 112 ms, faster than 34.83% of JavaScript online submissions for Reverse Vowels of a String.
// Memory Usage: 45.9 MB, less than 37.56% of JavaScript online submissions for Reverse Vowels of a String.

var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    const strArr = s.split("");
    let i = 0;
    let j = s.length - 1;

    
    while (i < j) {
        if (!vowels.includes(s[i])) {
            i++;
            continue;
        }
        if (!vowels.includes(s[j])) {
            j--;
            continue;
        }
        if (vowels.includes([s[i]]) && vowels.includes(s[j])) {
            [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
            i++;
            j--;
        }
    }
    return strArr.join("");
};

// using stacks
var reverseVowels = function(s) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      stack.push(s[i])
    }
  }
  let ans = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      ans.push(stack.pop())
    } else {
      ans.push(s[i])
    }
  }
  return ans.join('')
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));