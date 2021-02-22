// https://leetcode.com/problems/minimum-size-subarray-sum/
// Runtime: 76 ms, faster than 89.11% of JavaScript online submissions for Minimum Size Subarray Sum.
// Memory Usage: 39.6 MB, less than 40.39% of JavaScript online submissions for Minimum Size Subarray Sum.

var minSubArrayLen = function(target, nums) {
    let ans = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            ans = Math.min(ans, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};

//X

console.log(7, [2,3,1,2,4,3]);
console.log(4, [1,4,4]);
console.log(11, [1,1,1,1,1,1,1,1]);