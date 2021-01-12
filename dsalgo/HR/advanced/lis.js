// Longest Increasing Sequence
// Source: HackerRank
// Difficulty: Advanced

// brute-force method
// function lis(arr) {
//     let max = 0;
//     const listArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let tail = arr[i];
//         const nextNum = arr[i + 1];
//         const subLis = [tail];
//         debugger
//         if (nextNum > tail) {
//             debugger
//             for (let j = i + 1; j < arr.length; j++) {
//                 const currNum = arr[j];
//                 debugger
//                 if (tail < currNum) {
//                     debugger
//                     subLis.push(currNum);
//                 }
//             }
//         }
//         listArr.push(subLis);
//     }
//     // return max;
//     return listArr;
// }

// function innerLIS(subArr) {
//     let max = 0;
//     const lisArr = [];
//     debugger
//     for (let i = 0; i < subArr.length; i++) {
//         const subLis = [subArr[i]];
//         for (let j = i + 1; j < subArr.length; j++) {
//             debugger
//             const tail = subLis[subLis.length - 1];
//             if (tail < subArr[j]) {
//                 debugger
//                 subLis.push(subArr[j]);
//             } 
//         }
//         debugger
//         // max = Math.max(max, subLis.length);
//         lisArr.push(subLis);
//     }
//     return lisArr;
// }

function lis(arr) {
    if (arr.length <= 1) {
        return arr.length;
    }
    let max = 0;
    const lis = new Array(arr.length).fill(1);
    for ( let i = 1; i < arr.length; i++) {
        debugger
        for (let j = 0; j < i; j++) {
            debugger
            if (arr[j] < arr[i]) {
                debugger
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
        debugger
        max = Math.max(max, lis[i]);
    }
    // return lis;
    return max;
}

// console.log(lis([1, 4, 5, 2, 6]));
// console.log(lis([1, 2, 2, 3, 1, 6]))
console.log(lis([10, 12, 20, 6, 7, 8, 9, 3, 5]));
// console.log(lis([6, 2, 4, 3, 7, 4, 5]));
// console.log(innerLIS([3, 7, 4, 5]));