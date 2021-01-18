// https://leetcode.com/problems/degree-of-an-array/
// Runtime: 148 ms, faster than 34.25% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 43 MB, less than 53.88% of JavaScript online submissions for Degree of an Array.

var findShortestSubArray = function(nums) {
    const count = {};
    const firstIndex = {};
    const lastIndex = {};
    let max = 0;
    
    nums.forEach((num, i) => {
        count[num] = ++count[num] || 1;
         max = Math.max(max, count[num]);
        if (firstIndex[num] === undefined) firstIndex[num] = i;
        lastIndex[num] = i;
    });
    
    let result = nums.length;
    for (let key in count) {
        if (count[key] === max) {
            result = Math.min(result, lastIndex[key] - firstIndex[key] + 1);
        }
    }
    return result;
};

// Allegedly the fastst
const findShortestSubArray = function (nums) {
    const right = {}
    const count = {}
    const left = {}
    debugger
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        if (left[x] === undefined) {
            left[x] = i
        }
        right[x] = i
        count[x] = (count[x] || 0) + 1
    }

    let answer = nums.length
    let degree = Math.max(...Object.values(count))
    for(let[key, value] of Object.entries(count)){
        if(value===degree){
            answer = Math.min(answer, right[key]-left[key]+1)
        }
    }
    return answer
};

// const findShortestSubArray = (nums) => {
//     const counts = {};
//     const firstIndexes = {};
//     const lastIndexes = {};
//     let max = 0;
//     for (let i = 0; i < nums.length; i++) {
//         const k = nums[i];
//         counts[k] = ++counts[k] || 1;
//         max = Math.max(max, counts[k]);
//         if (firstIndexes[k] === undefined) {
//             firstIndexes[k] = i;
//         }
//         lastIndexes[k] = i;
//     }
//     let res = nums.length;
//     for (const k in counts) {
//         if (counts[k] === max) {
//             res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1);
//         }
//     }
//     return res;
// };

// first attempt 51 / 89 test cases passed.
// var findShortestSubArray = function(nums) {
//     if (nums.length === 1) return 1;
//     const map = {};
//     nums.forEach((num, i) => {
//         map[num] ? map[num].push(i) : map[num] = [i];
//     });
//     let indices;
//     let longest = 1;
//     for (let key in map) {
//         if (map[key].length > 1) {
//                 if ((map[key].length >= longest )) {
//                     indices = map[key];
//                     longest = map[key].length;
//                 }
//         }
//     }
//     // return indices.length;
//     return nums.slice(Math.min(...indices), Math.max(...indices) + 1).length;
// };

console.log(findShortestSubArray([1,2,2,3,1]));
console.log(findShortestSubArray([1,2,2,3,1,4,2]));