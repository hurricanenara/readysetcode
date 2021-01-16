// Runtime: 76 ms, faster than 97.03% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.9 MB, less than 78.11% of JavaScript online submissions for Majority Element.
// https://leetcode.com/problems/majority-element/submissions/
var majorityElement = function(nums) {
    const obj = {};
    nums.forEach(num => {
        obj[num] = ++obj[num] || 1;
    });
    return Object.keys(obj).filter(key => obj[key] > nums.length / 2)[0];
};

// using Booyer Moore algorithm https://leetcode.com/problems/majority-element/discuss/982621/JavaScript-Booyer-Moore-Algorithm