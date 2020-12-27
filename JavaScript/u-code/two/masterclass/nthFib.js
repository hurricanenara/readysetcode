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

console.log(fibHelper(4));
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));