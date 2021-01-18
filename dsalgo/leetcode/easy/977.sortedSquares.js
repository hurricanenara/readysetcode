
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Runtime: 208 ms, faster than 6.17% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 45.3 MB, less than 51.65% of JavaScript online submissions for Squares of a Sorted Array.

// slow and trivial method
// var sortedSquares = function(nums) {
//     return nums.map(num => num * num).sort((a, b) => a - b);
// };

// O(n) T & S
// Runtime: 124 ms, faster than 54.04% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 45.7 MB, less than 19.36% of JavaScript online submissions for Squares of a Sorted Array.

var sortedSquares = function(nums) {
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    let pointer = right;

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[pointer] = nums[left] ** 2;
            pointer--;
            left++;
        } else {
            result[pointer] = nums[right] ** 2;
            pointer--;
            right--;
        }
    }
    
    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]))