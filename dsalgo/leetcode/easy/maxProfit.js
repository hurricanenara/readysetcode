// Exceeded time limit
// var maxProfit = function(prices) {
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         const purchasePrice = prices[i];
//         const maxAmongSellable = Math.max(...prices.slice(i + 1, prices.length));
//         max = Math.max(max, maxAmongSellable - purchasePrice);
//     }
//     return max;
// };

// Discussion
// Runtime: 108 ms, faster than 31.58% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 49 MB, less than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// var maxProfit = function(prices) {
//     let min = Number.MAX_SAFE_INTEGER;
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         max = Math.max(max, prices[i] - min);
//     }
//     return max;
// };

// Runtime: 96 ms, faster than 38.64% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 48.9 MB, less than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.
var maxProfit = function(prices) {
    let buy = Infinity;
    let profit = 0;

    prices.forEach(price => {
        if (price < buy) buy = price;
        if (price - buy > profit) profit = price - buy;
    });
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));