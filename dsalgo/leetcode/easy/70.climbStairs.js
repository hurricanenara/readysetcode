// https://leetcode.com/problems/climbing-stairs/

// Basically fibonacci


// Runtime: 104 ms, faster than 5.39% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.3 MB, less than 66.11% of JavaScript online submissions for Climbing Stairs.
var climbStairs = function(n) {
    // dp[i] represents # of ways to reach i-th floor
    let dp = new Array(n+1); // size is n+1 because array is zero-indexed
    dp[0] = 1, dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

var climbStairs = function(n) {    
    let prev = 0;
    let cur = 1;
    let temp;
    
    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = cur;
        cur += temp; 
    }
    return cur;
}


// solving recursively with memoization
var climbStairs = function(n) {
    let memo = new Map();   
    let cs = (n) => {
        if(!memo.has(n)) {
            let res = (n < 2) ? 1 : cs(n-2) + cs(n-1);
            memo.set(n,res);      
        }
        return memo.get(n);
    }
    return cs(n)
};

// Runtime: 76 ms, faster than 72.37% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.3 MB, less than 66.11% of JavaScript online submissions for Climbing Stairs

var climbStairs = function(n, memo = {1:1, 2:2}) {
   if (memo[n] !== undefined) return memo[n];   
   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
   return memo[n];
};

// X;

// console.log(climbStairs(3));
console.log(climbStairs(5));