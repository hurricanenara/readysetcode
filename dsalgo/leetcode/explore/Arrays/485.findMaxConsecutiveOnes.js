// https://leetcode.com/problems/max-consecutive-ones/

// Runtime: 88 ms, faster than 65.59% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 41.4 MB, less than 52.35% of JavaScript online submissions for Max Consecutive Ones.

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, count += nums[i]);
        if (nums[i] === 0) count = 0;
    }
    return max;
};

// X

