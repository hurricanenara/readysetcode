

const fibs = n => {
    if (n === 0) return [];
    if (n === 1) return [1];
    if (n === 2) return [1, 1];

    let lastFibs = fibs(n - 1);
    let lastNum = lastFibs[lastFibs.length - 1] + lastFibs[lastFibs.length - 2];
    return lastFibs = lastFibs.concat(lastNum);
}


var climbStairs = function(n, memo = {1:1, 2:2}) {
   if (memo[n] !== undefined) return memo[n];   
   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
   return memo[n];
};

console.log(fibs(5))