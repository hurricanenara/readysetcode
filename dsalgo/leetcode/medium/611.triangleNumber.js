// https://leetcode.com/problems/valid-triangle-number/

// Runtime: 116 ms, faster than 47.97% of JavaScript online submissions for Valid Triangle Number.
// Memory Usage: 40.6 MB, less than 15.45% of JavaScript online submissions for Valid Triangle Number.

var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1 && nums[i] !==0; j++) {
            k = bSearchK(nums, k, nums.length - 1, nums[i] + nums[j]);
            count += k - j - 1;
        }
    }
    return count;
};

var bSearchK = function(nums, l, r, x) {
    while (r >= l && r < nums.length) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] >= x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}