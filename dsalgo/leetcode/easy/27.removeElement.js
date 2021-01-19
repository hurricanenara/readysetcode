// https://leetcode.com/problems/remove-element/

// Runtime: 80 ms, faster than 65.42% of JavaScript online submissions for Remove Element.
// Memory Usage: 38.6 MB, less than 73.48% of JavaScript online submissions for Remove Element.

var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i++] = nums[j];
        }
    }
    return i;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));