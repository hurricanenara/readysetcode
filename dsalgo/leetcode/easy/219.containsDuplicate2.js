// https://leetcode.com/problems/contains-duplicate-ii/
// Runtime: 92 ms, faster than 61.56% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 44.7 MB, less than 57.58% of JavaScript online submissions for Contains Duplicate II.

//using a Map
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

// using an object
function containsNearbyDuplicate(nums, k) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;
  }
  return false;
}

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 4, 5], 2));