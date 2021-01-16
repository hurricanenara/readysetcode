// https://leetcode.com/problems/merge-sorted-array/submissions/

// Took a while to understand but I understand!

// var merge = function (nums1, m, nums2, n) {
//     var insertPos = m + n - 1;
//     m--; n--;
//     while (n >= 0) {
//         nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
//     }
//     console.log("loop finished")
//     return nums1;
// };

// Runtime: 76 ms, faster than 85.19% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 38.7 MB, less than 34.40% of JavaScript online submissions for Merge Sorted Array.
var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[insertPos] = nums1[m];
            m--;
        } else {
            nums1[insertPos] = nums2[n];
            n--;
        }
        insertPos--;
    }
    console.log("loop finished")
    return nums1;
};


// first attempt
// var merge = function(nums1, m, nums2, n) {
    
//     let pos = 0;
//     for (let i = 0; i < m + n; i++) {
//         if (nums1[i] > nums2[pos] || ( i > pos && nums1[i] === 0)) {
//             const temp = nums1[i];
//             nums1[i] = nums2[pos];
//             nums1[i + 1] = temp;
//             pos++
//         }
//     }
//     return nums1;
// };

// Expeected [1,2,2,3,5,6]
// But got [1,2,2,3,5,6,0]

const numArr1 = [1,2,3,0,0,0];
const m = 3;
const numArr2 = [2,5,6];
const n = 3;

console.log(merge(numArr1, m, numArr2, n));