// https://leetcode.com/problems/check-if-n-and-its-double-

// Runtime: 84 ms, faster than 55.28% of JavaScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 39 MB, less than 61.91% of JavaScript online submissions for Check If N and Its Double Exist.

var checkIfExist = function(arr) {
    const set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
            return true;
        }
        set.add(arr[i]);
    }
    return false;
};

// X