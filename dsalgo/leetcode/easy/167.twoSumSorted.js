// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime: 80 ms, faster than 73.36% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 38.8 MB, less than 73.10% of JavaScript online submissions for Two Sum II - Input array is sorted.

var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;
    
    while (i < j) {
        if (numbers[i] + numbers[j] < target) i++;
        if (numbers[i] + numbers[j] > target) j--;
        if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
};
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));