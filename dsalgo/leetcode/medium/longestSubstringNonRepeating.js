// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Runtime: 108 ms, faster than 83.82% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 42.9 MB, less than 75.47% of JavaScript online submissions for Longest Substring Without Repeating Characters.

const lengthOfLongestSubstring = s => {
    const set = new Set();
    let longest = 0;
    let i = 0;
    let j = 0;

    while (i < s.length && j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            longest = Math.max(longest, j - i + 1);
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    return longest;
}

var lengthOfLongestSubstring = function(s) {    
    let low=0, max = 0
    let set = new Set()
    
    for(let hi=0; hi<s.length; hi++) {
      
       while(set.has(s[hi])) {
           set.delete(s[low])
           low++
        }

        
        set.add(s[hi])
        max = Math.max(max, set.size)
    }

    return max
};

// without set, what I was trying to do
var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    }
    var p = 0;
    var q = 1;
    var result = 1;
    while (q < length) {
        var sub = s.slice(p, q);
        var i = sub.indexOf(s[q]);
        if (i !== -1) {
            p = p + i + 1;
        }
        q++;
        result = q - p > result ? q - p : result;
    }
    return result;
}

//first attempt - infinite loop

// string s
// longest substring without repeating characters

const lengthOfLongestSubstring = s  => {
    if (!s.length) return 0;

    // if number of unique characters in the given string === 1, then return 1
    // iterate through string s
    // sliding window method, unknown => max length of non-repeating substring
    // without knowing max length, start at 1
    // expand, traverse continously through the string with a pivot point at the beginning of the string
    // then until I encounter another character included in my current window, I'll continue
    // once I meet a character that is already in my substring window that I want to stretch
    // then I want to record the length of that window
    let max = -Infinity; // 
    let currentStreak = 1; // 3
    let j = 1; //
    let i = 0;

    while (i < s.length) {
        // p w w k e w
        // i j
        while (j < s.length) {
            let currentChar = s[i]; // p
            if (currentChar !== s[j]) { // w w
                if (!s.substring(i, j).includes(s[j])) { // j is not inclusive // is w in substring "wke"
                    currentStreak++, j++;
                    max = Math.max(currentStreak, max); // max = 3
                } else {
                    // i to where j is
                    // j to i + 1
                    i = j;
                    j = i + 1;
                    currentStreak = 1;
                    currentChar = s[i];
                }
            } else {
                // i to where j is
                // j to i + 1
                i = j;
                j = i + 1;
                currentStreak = 1;
                currentChar = s[i];
            }
        }
    }
    return max;
}

const longestSubstring = s  => {
    if (!s.length) return 0;
    let max = -Infinity; // 
    let currentStreak = 1; // 3
    let j = 1; //
    let i = 0;

    while (i < s.length && j < s.length) {
        let currentChar = s[i]; // p
        if (currentChar !== s[j]) { // w w
            while (j < s.length) {
                if (!s.substring(i, j).includes(s[j])) { 
                    currentStreak++, j++;
                    max = Math.max(currentStreak, max); 
                } else {
                    i = j;
                    j = i + 1;
                    currentStreak = 1;
                    currentChar = s[i];
                }
            }
        } else {
            i = j;
            j = i + 1;
            currentStreak = 1;
            currentChar = s[i];
        }
    }
    return Math.max(max, currentStreak);
}



// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


// console.log(lengthOfLongestSubstring("abcabcbb")) // 3 => abc, bca, cab, abc
// console.log(lengthOfLongestSubstring("bbbbb")) // 1 => b
console.log(lengthOfLongestSubstring("pwwkew")) // 3 => kew, wke
// console.log(lengthOfLongestSubstring("")) // 0
