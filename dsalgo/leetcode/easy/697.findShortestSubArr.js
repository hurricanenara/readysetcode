
const findShortestSubArray = (nums) => {
    const counts = {};
    const firstIndexes = {};
    const lastIndexes = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const k = nums[i];
        counts[k] = ++counts[k] || 1;
        max = Math.max(max, counts[k]);
        if (firstIndexes[k] === undefined) {
            firstIndexes[k] = i;
        }
        lastIndexes[k] = i;
    }
    let res = nums.length;
    for (const k in counts) {
        if (counts[k] === max) {
            res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1);
        }
    }
    return res;
};

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