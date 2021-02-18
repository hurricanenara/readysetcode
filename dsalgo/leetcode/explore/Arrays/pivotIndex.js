
// solved!
var pivotIndex = function(nums) {
    let right = nums.reduce((acc, el) => acc + el);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        if (left === right) return i;
        left += nums[i];
    }
    return -1;

}

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
console.log(pivotIndex([3])); // 0

// prev solution I had

var pivotIndex = function(nums) {
  if (nums.length === 0) return -1;
  const sum = nums.reduce((acc, el) => acc + el);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === (sum - nums[i] - left)) return i;
    left += nums[i];
  }
  return -1;
};