// https://leetcode.com/problems/valid-mountain-array//

// Runtime: 76 ms, faster than 95.20% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 41.6 MB, less than 57.37% of JavaScript online submissions for Valid Mountain Array.

var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    
    let isDecreasing = false;
    let isIncreasing = false;
    
    for (let i = 1, j = 0; i < arr.length; i++, j++) {
        if (arr[j] < arr[i] && !isDecreasing) {
            isIncreasing = true;
            continue;
        }
        isDecreasing = true;
        
        if (arr[j] <= arr[i]) return false;
    }
    return isDecreasing && isIncreasing;
};

// X almost

console.log(validMountainArray([0,2,3,4,5,2,1,0]));

//
var validMountainArray = function(arr) {
    if (arr.length < 3) return false
    
    let hasIncreased = false
    let hasDecreased = false
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            if (hasDecreased) return false  
            hasIncreased = true
        } else if (arr[i] < arr[i-1]) {
            if (!hasIncreased) return false
            hasDecreased = true
        } else {
            return false
        }
    }
    
    return hasIncreased && hasDecreased
};