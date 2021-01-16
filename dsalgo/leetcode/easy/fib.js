// https://leetcode.com/problems/fibonacci-number/submissions/

// var fib = function(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
    
//     return fib(n - 1) + fib(n - 2);
// };

// other great solutions

var fib = function(N) {
  if (N === 0 || N === 1) return N;
  
  let a = 0;
  let b = 1;
  let i = 2;
  
  for (; i <= N; i += 1) {
    const temp = a + b;
    a = b;
    b = temp; 
  }
  
  return b;
};

// utilizing memoization

var fib = function(N) {
  var memo = {}
  var helper = (x) => {
    if(memo[x]) return memo[x]
    if(x==1 || x==0) return x
    return memo[x] = helper(x-1) + helper(x-2)
  }
  return helper(N)
};

console.log(fib(4))