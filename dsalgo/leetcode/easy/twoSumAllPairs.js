
// using hash

const twoSumAllPairs = (arr, target) => {
    arr.sort(((a, b) => a - b));
    const dict = {};
    const pairs = [];

    for (let i = 0; i < arr.length; i ++) {
        let temp = target - arr[i];

        if (temp in dict) {
            let count = dict[temp];
            for (let j = 0; j < count; j++) {
                pairs.push([temp, arr[i]]);
                pairs.push([arr[i], temp]);
            }
        }

        if (arr[i] in dict) {
            dict[arr[i]] += 1;
        } else {
            dict[arr[i]] = 1;
        }
    }
    return pairs;
}

// console.log(twoSumAllPairs([1, 1, 2, 2, 3], 3));
console.log(twoSumAllPairs([1,1,1,2,3], 3));

// const twoSumAllPairs = (arr, target) => {
//     arr.sort((a, b) => a - b);
//     // [1, 1, 1, 2, 3]
//     // [1, 2, 3, 3, 5]
//     let left = 0;
//     let right = arr.length - 1;

//     const pairs = [];

//     while (left < right) {
//         if (arr[left] + arr[right] < target) {
//             left++;
//         } else if (arr[left] + arr[right] > target) {
//             right--;
//         } else if (arr[left] + arr[right] === target) {
//             pairs.push([arr[left], arr[right]]);

//             const rightNeighbor = arr[right - 1];
//             const leftNeighbor = arr[left + 1];

//             let innerLeft = left;
//             let innerRight = right;

//             if (arr[left] === leftNeighbor) {
//                 innerLeft++;
//                 while (innerLeft < innerRight) {
//                     if (arr[innerLeft] + arr[innerRight] === target) {
//                         pairs.push([arr[innerLeft], arr[innerRight]]);
//                     }
//                     innerLeft++;
//                 }
//             }
//             if (arr[right] === rightNeighbor) {
//                 innerLeft = left;
//                 innerRight = right;
//                 while (innerLeft < innerRight) {
//                     if (arr[innerLeft] + arr[innerRight] === target) {
//                         pairs.push([arr[innerLeft], arr[innerRight]]);
//                     }
//                     innerRight--;
//                 }
//             }
//             break;
//         }

//     }
//     return pairs;
// }

// console.log(twoSumAllPairs([1, 2, 1, 1, 3], 3)); 
// console.log(twoSumAllPairs([1, 3, 5, 3, 2], 4)); 
// console.log(twoSumAllPairs([1, 1, 1, 2, 2, 3], 3));