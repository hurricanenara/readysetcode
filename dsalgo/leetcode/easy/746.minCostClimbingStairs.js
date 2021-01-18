// https://leetcode.com/problems/min-cost-climbing-stairs/
// Runtime: 92 ms, faster than 45.66% of JavaScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 38.7 MB, less than 97.72% of JavaScript online submissions for Min Cost Climbing Stairs.

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