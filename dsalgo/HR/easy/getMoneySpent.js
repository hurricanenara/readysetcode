
// function getMoneySpent(keyboards, drives, b) {
//     debugger
//     const dp = keyboards;
//     const length = Math.max(keyboards.length, drives.length);
    
//     for (let i = 0; i < length; i++) {
//         const prev = dp[i - 1] ? dp[i - 1] : 0;
//         const current = dp[i] + drives[i];
//         if (current <= b) {
//             dp[i] = Math.max(prev, dp[i] + drives[i]);
//         }
//         if (current > b) {
//             if (i === 0) {
//                 return -1;
//             } else {
//                 return dp[i - 1]
//             }
//         }
        
//     }

// }

// console.log(getMoneySpent([40,50,60], [5,8,12], 60));
// console.log(getMoneySpent([4], [5], 5));
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));