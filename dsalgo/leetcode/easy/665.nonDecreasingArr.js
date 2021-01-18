// https://leetcode.com/problems/non-decreasing-array/
// Runtime: 120 ms, faster than 14.22% of JavaScript online submissions for Non-decreasing Array.
// Memory Usage: 41.2 MB, less than 61.07% of JavaScript online submissions for Non-decreasing Array.

var checkPossibility = function(nums) {
    let counter = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (counter > 0 && nums[i] > nums[i + 1]) {
            nums[i] = nums[i + 1] - 1;
            counter--;
            if (nums[i - 1] > nums[i]) return false;
        } else if (nums[i] > nums[i + 1]) {
            return false;
        }        
    }
    return true;
};

// X

console.log(checkPossibility([4,2,3])); // true
console.log(checkPossibility([4,2,1])); // false
console.log(checkPossibility([3,4,2,3])); // false
console.log(checkPossibility([5,7,1,8])); // false