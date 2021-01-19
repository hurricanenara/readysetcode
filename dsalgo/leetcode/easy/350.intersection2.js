// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Runtime: 76 ms, faster than 95.19% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 40.5 MB, less than 38.31% of JavaScript online submissions for Intersection of Two Arrays II.

var intersect = function(nums1, nums2) {
    const map = new Map();
    const result = [];

    for (let num of nums1) {
        map.set(num, map.get(num) + 1 || 1);
    }

    for (let num of nums2) {
        if (map.get(num) >= 1) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    return result;
}

console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([9,4,9,8,4,5,4,9], [4,9,5])); // [9, 4];

// X Go over this and the first intersction problem