// Runtime: 100 ms, faster than 75.93% of JavaScript online submissions for Last Substring in Lexicographical Order.
// Memory Usage: 44.3 MB, less than 50.93% of JavaScript online submissions for Last Substring in Lexicographical Order.

var lastSubstring = function(s) {
    let i = 0;
    let j = 1;
    let k = 0;
    
    while (j + k < s.length) {
        if (s[i + k] < s[j + k]) {
            i = Math.max(i + k + 1, j);
            j = i + 1;
            k = 0;
        }
        
        if (s[i + k] === s[j + k]) {
            k += 1;
        }
        
        if (s[i + k] > s[j + k]) {
            j = j + k + 1;
            k = 0;
        }
    }
    return s.substring(i);
};


var lastSubstring = function(s) {
    let i = 0, j = 1, k = 0, l = s.length;
    while (j + k < l) {
        if (s[i+k] == s[j+k]) {
            k++;
            continue;
        } else if (s[i+k] > s[j+k]) {
            j = j + k + 1;
        } else {
            i = Math.max(i + k + 1, j)
            j = i + 1;
        }
        k = 0
    }
    return s.substring(i)
};

// X