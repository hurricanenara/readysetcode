// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/

// Runtime: 104 ms, faster than 46.72% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
// Memory Usage: 41.7 MB, less than 93.43% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
var minMoves = function(nums) {
    if (nums == null || nums.length <= 1) return 0;
    let min = nums[0];
    let sum = 0;
    for (i = 0; i < nums.length; i++){
        sum += nums[i];
        min = Math.min(min, nums[i]);
    }
    return sum - min * nums.length;
};

// more concise
var minMoves = function(nums) {
    let moves = 0, min = Infinity;
    for(let num of nums) {
        moves += num;
        min = Math.min(min, num)
    }
    return moves - min*nums.length
};

// O(n log n) solution
var minMoves = function(nums) {
  nums.sort((a, b) => b - a)

  let moves = 0

  let index = 1
  while (index < nums.length) {
    moves += (nums[index - 1] - nums[index]) * index
    ++index
  }

  return moves
};

// Runtime: 164 ms, faster than 13.14% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
// Memory Usage: 43 MB, less than 28.47% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
var minMoves = function(nums) {
    if (nums == null || nums.length <= 1) return 0;
    nums.sort((a, b) => a - b);
    let min = nums[0];
    let sum = 0;
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i] - min;
    }
    return sum;
};

console.log(minMoves([1, 2, 3]));