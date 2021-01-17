// https://leetcode.com/problems/find-pivot-index/
// Runtime: 164 ms, faster than 24.29% of JavaScript online submissions for Find Pivot Index.
// Memory Usage: 40.6 MB, less than 83.87% of JavaScript online submissions for Find Pivot Index.

var pivotIndex = function(nums) {
    if (!nums.length) return -1;
    const total = nums.reduce((acc, el) => acc + el);
    let left = 0;
    let right = total;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const numOfInterest = nums[i - 1] ? nums[i - 1] : 0;
    if ((left + numOfInterest) === (right - num - numOfInterest)) {
      return i;
    }
    left += numOfInterest;
    right -= (numOfInterest);
  }
  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([-1,-1,-1,0,1,1]));