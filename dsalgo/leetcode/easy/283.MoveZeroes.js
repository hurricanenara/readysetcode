
// var moveZeroes = function(nums) {
//     let pos = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums [i] !== 0) {
//             nums[pos] = nums[i];
//             pos++;
//         }
//     }
//     for (i = pos; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// };

var moveZeroes = function(nums) {
    let idx = 0;
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[idx] = nums[i];
            nums[i] = idx === i ? nums[i] : 0;
            idx++;
        }
    }
};

// my failed attempt!

// var moveZeroes = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             let j = i;
//             while (j < nums.length - 1) {
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//                 j++;
//             }
//         }
//     }
//     return nums;
// };

// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([1, 1, 1]));