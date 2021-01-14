// Runtime: 72 ms, faster than 89.55% of JavaScript online submissions for Missing Ranges.
// Memory Usage: 38.5 MB, less than 66.31% of JavaScript online submissions for Missing Ranges.

var findMissingRanges = function(nums, lower, upper) {
    const result = [];
    nums = [lower - 1, ...nums, upper + 1];
    
    for (let i = 0; i < nums.length - 1; i++) {
        const diff = nums[i + 1] - nums[i];
        
        if (diff === 2) {
            result.push(nums[i] + 1 + "");
        } else if (diff > 2) {
            result.push(`${nums[i] + 1}->${nums[i + 1] - 1}`);
        }
    }
    return result;
};