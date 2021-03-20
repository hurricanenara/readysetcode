// https://leetcode.com/problems/find-all-duplicates-in-an-array/


// the key piece of information that the below indexing into nums with the element at nums[i] works is
// ***** The integers in the input array arr satisfy 1 ≤ arr[i] ≤ n, where n is the size of array. [2] *****

// Runtime: 104 ms, faster than 94.88% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 46.2 MB, less than 92.90% of JavaScript online submissions for Find All Duplicates in an Array.
var findDuplicates = function(nums) {
    const dupes = [];
    for (const num of nums) {
        // Math.abs(num) - 1 -> Math.abs is crucial in that a number we are iterating over could have been negated previously
        if (nums[Math.abs(num) - 1] < 0) {
            // seen before
            dupes.push(Math.abs(num));
        } else {
            nums[Math.abs(num) - 1] *= -1;
        }
    }
    return dupes;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
// 3 2 1 6 7 1