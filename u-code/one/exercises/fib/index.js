// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative
// function fib(n) {
//     const fibArr = [1, 1];
//     let i = 0;
//     while (fibArr.length < n) {
//         fibArr.push(fibArr[i] + fibArr[i + 1]);
//         i++;
//     }
//     return fibArr[fibArr.length - 1];
// }

//recursive
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
