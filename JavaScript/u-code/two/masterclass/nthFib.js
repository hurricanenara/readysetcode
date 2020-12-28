function fib(num){
  const lastFibs = fibHelper(num);
  return lastFibs[lastFibs.length - 1];
  
}

function fibHelper(num) {
    if (num === 0) return [];
    if (num === 1) return [1];
    if (num === 2) return [1, 1];
    
    let fibArr = fibHelper(num - 1);
    fibArr = fibArr.concat(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
    return fibArr;
}

// Other great solutions

// 1. O(N) T | O(N) S

function fib(num, memoize = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = fib(num - 1, memoize) + fib(num - 2, memoize);
    return memoize[n];
  }
}

// 2. O(N) T | O(1) S
// non-recursive
function fib(num) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return num > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(fibHelper(4));
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));