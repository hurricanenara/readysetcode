
// var maxPair = function(nums, target) {
//     let first = nums[0]; // 0
//     let second = nums[1]; // 1

//     for (let i = 2; i < nums.length; i++) {
//         const curr = nums[i];
//         if ((first + second >= target) || ((first + second < target) && (second + curr > first + second) && (second + curr < target) )) {
//             if (first >= target || (curr + second < target)) {
//                 first = second;
//                 second = curr;
//             } else {
//                 second = curr;
//             }
//         }
//     }
//     return [first, second];
// }

var maxPair = function(nums, target) {
    let first = nums[0]; // 0
    let second = nums[1]; // 1

    for (let i = 2; i < nums.length; i++) {
        const curr = nums[i];
        const currSum = first + second;
        const firstSum = first + curr;
        const secondSum = second + curr;
        if ((currSum > firstSum && currSum > secondSum  && first >= target)) {
            first = second;
            second = curr;
        } else if (currSum > target && firstSum < target) {
            second = curr;
        }
    }
    return [first, second];
}

console.log(maxPair([5,4,2,0,3,1], 5)); // 4
console.log(maxPair([1, 2], 4)); // 3
console.log(maxPair([6,2,4,7,9,1], 4)); // 3
console.log(maxPair([4,7,45,1,8,18,34,22,16], 10)); // 3