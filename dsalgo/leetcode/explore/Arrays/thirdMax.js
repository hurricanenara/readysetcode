

//solution using set O(N) time & space
// Runtime: 72 ms, faster than 98.08% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 42.9 MB, less than 9.31% of JavaScript online submissions for Third Maximum Number.
var thirdMax = function(nums) {
    const set = new Set(nums);
    let max = Math.max(...set);
    if (set.size < 3) return max;
    
    set.delete(max);
    secondMax = Math.max(...set);
    set.delete(secondMax);
    
    return Math.max(...set);
    
};

// slightly different method from first, supposed to be better space complexity but doesn't seem like it
// Runtime: 84 ms, faster than 62.19% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 45 MB, less than 5.09% of JavaScript online submissions for Third Maximum Number.
var thirdMax = function(nums) {
    let set = new Set();
    for (let num of nums) {
        set.add(num);
        if (set.size > 3) {
            set.delete(Math.min(...set));
        }
    }
    if (set.size === 3) return Math.min(...set);
    return Math.max(...set);
};

//seen-max method
var thirdMax = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (nums[i] > first) {
      [first, second, third] = [nums[i], first, second];
    } else if (nums[i] > second) {
      [second, third] = [nums[i], second];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }
  return third === -Infinity ? first : third;
};

//
var thirdMax = function(nums) {
    if(nums.length<3) return Math.max(...nums);
    let u = new Set(nums)
    if(u.size<3) return Math.max(...u);
    
    for(let i=0;i<2;i++){
        u.delete(Math.max(...u))
    }
    
    return Math.max(...u);
};