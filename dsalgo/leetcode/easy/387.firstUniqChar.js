// https://leetcode.com/problems/first-unique-character-in-a-string/

// Runtime: 124 ms, faster than 42.70% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 46.7 MB, less than 9.14% of JavaScript online submissions for First Unique Character in a String.

var firstUniqChar = function(s) {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] ? obj[s[i]].push(i) : obj[s[i]] = [i];
    }
    for (let key in obj) {
        if (obj[key].length === 1) {
            return obj[key][0];
        }
    }
    return -1;
};

// O

// saves some space without arrays
// Runtime: 128 ms, faster than 33.56% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 42.7 MB, less than 33.08% of JavaScript online submissions for First Unique Character in a String.

var firstUniqChar = function(s) {
    const obj = {};
    
    for (let char of s) {
        obj[char] = ++obj[char] || 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

// using map
var firstUniqChar = function(s) {
    const count = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!count[s[i]]) {
            count[s[i]] = 1;
        } else {
            count[s[i]]++
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(count[s[i]] === 1) return i
    }    
    return -1
};

// bucket array
function firstUniqChar(s){ 
    const lettersFrequency = new Uint16Array(26);

    for (const c of s)
        ++lettersFrequency[c.charCodeAt() - 97];

    for (let i = 0; i < s.length; ++i)
        if (lettersFrequency[s[i].charCodeAt() - 97] === 1)
            return i;

    return -1;
}

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2