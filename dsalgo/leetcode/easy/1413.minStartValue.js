// Runtime: 76 ms, faster than 74.71% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 38.3 MB, less than 83.33% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

var minStartValue = function(nums) {
    let min = 1;
    let sum = 0;
    for (let num of nums) {
      sum = sum + num;
      min = Math.min(min, sum);
    }
    if (min === 1) return min;
    return (-1 * min) + 1;
};