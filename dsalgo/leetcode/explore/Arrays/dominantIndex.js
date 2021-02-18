

var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    for (let i = 0; i < nums.length; i++) {
        if (i !== index && max < (nums[i] * 2)) return -1;
    }
    return index;
};

// without Math
var dominantIndex = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      ans = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return first >= second * 2 ? ans : -1;
};

//also without math
var dominantIndex = function(nums) {
  let max = -Infinity;
  let maxIndex;
  
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  
  for (let i = 0; i < nums.length; i += 1) {
    if (max / nums[i] < 2 && nums[i] !== max) {
      return -1;
    }
  }
  
  return maxIndex;
};

console.log(dominantIndex([0,0,0,1]));