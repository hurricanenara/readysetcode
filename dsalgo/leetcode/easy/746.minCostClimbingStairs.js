// https://leetcode.com/problems/min-cost-climbing-stairs/
// Runtime: 92 ms, faster than 45.66% of JavaScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 38.7 MB, less than 97.72% of JavaScript online submissions for Min Cost Climbing Stairs.

// full-fledged variables for better understanding
var minCostClimbingStairs = function(cost) {
    if (cost.length === 1) return 0;
    if (cost.length === 2)return Math.min(cost[0], cost[1]);

    let minCostTwoBefore = cost[0];
    let minCostOneBefore = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const minCostAtCurrent = cost[i] + Math.min(minCostOneBefore, minCostTwoBefore);

        minCostTwoBefore = minCostOneBefore;
        minCostOneBefore = minCostAtCurrent;
    }
    return Math.min(minCostOneBefore, minCostTwoBefore);
};

// short-named variables for conciceness
var minCostClimbingStairs = function(cost) {
    let min1 = cost[0]
    let min2 = cost[1];
    
    for (let i = 2; i < cost.length; i++){
        let temp = Math.min(min1, min2) + cost[i];
        min1 = min2;
        min2 = temp;
    }
    
    return Math.min(min1, min2);
};

// with dp array which I like! but it's O(n) space compared to O(1) space if variables are used like above

var minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    // return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
    return dp;
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));