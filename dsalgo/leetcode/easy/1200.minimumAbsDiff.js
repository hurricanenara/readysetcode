// https://leetcode.com/problems/minimum-absolute-difference/
// Runtime: 160 ms, faster than 87.50% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 49.4 MB, less than 53.13% of JavaScript online submissions for Minimum Absolute Difference.

var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    const pairs = [];
    let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1]);
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === min) pairs.push([arr[i - 1], arr[i]]);
    }
    return pairs;
};