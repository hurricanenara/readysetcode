

// Runtime: 148 ms, faster than 9.34% of JavaScript online submissions for Maximum Product of Three Numbers.
// Memory Usage: 43 MB, less than 56.76% of JavaScript online submissions for Maximum Product of Three Numbers.

var maximumProduct = function(nums) {

    nums.sort((a, b) => a - b);
    return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3])
    
};