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
    return (min * -1) + 1;
}

// another great solution (faster);

function minStartValue(nums) {
  let min = Infinity;
  let sum = 0;
  nums.forEach(n => {
    min = Math.min(min, sum += n);
  });
  return min >= 1 ? 1 : Math.abs(min - 1);
}

console.log(minStartValue([-3,2,-3,4,2])); // 5
console.log(minStartValue([1,2])); // 1
console.log(minStartValue([1,-2,-3])); // 5