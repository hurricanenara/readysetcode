// https://leetcode.com/problems/missing-number/ 

// Runtime: 100 ms, faster than 33.94% of JavaScript online submissions for Missing Number.
// Memory Usage: 40.9 MB, less than 77.23% of JavaScript online submissions for Missing Number.

var missingNumber = function(nums) {
    const sum = (nums.length * (nums.length + 1 )) / 2;
    return sum - nums.reduce((acc, el) => acc + el);
};

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([0])); // 1