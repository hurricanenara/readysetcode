

// dynamic programming
const climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[n];
}

//recursion
const climbStairs = function(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
}


console.log(climbStairs(3));
console.log(climbStairs(2));