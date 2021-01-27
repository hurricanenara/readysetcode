// Runtime: 88 ms, faster than 33.39% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 39.5 MB, less than 24.13% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

// var maxProfit = function(prices) {
//     let i = 0;
//     let buy, sell, profit = 0;
//     let n = prices.length - 1;
//     while (i < n) {
//       while (prices[i + 1] <= prices[i]) {
//         i++;
//       }
//       buy = prices[i];
//       while (prices[i + 1] > prices[i]) {
//         i++;
//       }
//       sell = prices[i];
//       profit += (sell - buy);
//     }
//     return profit;
// };

// can this function be refactored to return all strictly increasing subarrays? like [1, 5] and [3, 6] for first example

// var maxProfit = function(prices) {
//     let i = 0;
//     let profit = [];
//     let buy = [];
//     let sell = [];
//     let n = prices.length - 1;
//     while (i < n) {
//       while (prices[i + 1] <= prices[i]) {
//         i++;
//       }
//       buy = prices[i];
//       while (prices[i + 1] > prices[i]) {
//           console.log(profit, "profit")
//         i++;
//       }
//       sell = prices[i];
//       sell - buy > 0 ? profit.push([buy, sell]) : "";
//     }
//     return profit;
// };
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};

// var maxProfit = function (prices) {
//     let profit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         let prev = prices[i - 1];
//         let current = prices[i];

//         if (prev < current) {
//             profit += current - prev;
//         }
//     }
    
//     return profit;
// };

// X

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([3, 2, 5, 8, 1, 9]));