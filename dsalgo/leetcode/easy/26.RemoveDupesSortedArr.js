// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 128 ms, faster than 16.07% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 40.6 MB, less than 86.47% of JavaScript online submissions for Remove Duplicates from Sorted Array.

// solution I liked from another leetcoder
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};


// my first attempt that did not satisfy what the question was asking

// var removeDuplicates = function(nums) {
//     return new Set(nums).size;
// };


// var removeDuplicates = function(nums) {
//   let i = 1;
//   let j = 0; 
//   while (i < nums.length) {
//     let num = nums[i];
//     if (nums[j] !== num){
//       nums[++j] = num;
//     } else {
//       i++;
//     }
//   }
//   return j + 1;
// };

// console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));