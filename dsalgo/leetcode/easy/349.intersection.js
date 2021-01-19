// https://leetcode.com/problems/intersection-of-two-arrays/

// using Map

// Runtime: 84 ms, faster than 54.90% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 39.8 MB, less than 60.24% of JavaScript online submissions for Intersection of Two Arrays.

// var intersection = function(nums1, nums2) {
//   let map = new Map();
//   for (let num of nums1) {
//     if (!map.has(num)) {
//         map.set(num, 1);
//     }
//   }
//   return nums2.filter(n => {
//       if (map.has(n)) {
//         map.delete(n);
//         return true;
//     } else {
//         return false;
//     }
//   });
// };

// using set
function intersection(nums1 , nums2){
    let setNum1 = new Set(nums1);

    return [...new Set(nums2.filter(num => setNum1.has(num)))];
}

console.log(intersection([1,2,2,1], [2,2])); // [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [9, 4]