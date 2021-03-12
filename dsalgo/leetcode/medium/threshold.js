// Given a list of integers and a desired sum, write a function that calculates a threshold number x
// such that when summing up the list of integers everything greater than x can be substituted with x
// to give the desired sum. For example, if given a list [1, 2, 5] and a desired sum of 6. a threshold of
// 3 once applied to the list can yield the desired sum (i.e. 1 + 2 + 3 = 6) If there
// are multiple of such thresholds wed like to find the lowest one.
// [1, 2, 5], 6 -> 3
// [40, 20, 10, 30], 70  -> 20 // [10, 20, 30, 40]
// [40, 20, 30, 10], 71  -> 20.5 // [10, 20, 30, 40]
// [40, 20, 10, 30], 100 -> 40

const threshold = (arr, target) => {
    arr.sort((a, b) => a - b);
    const length = arr.length;
    let sum = 0;
    
    // iterate through arr
    for (let i = 0; i < length; i++) {
        const currentNum = arr[i];
        const lengthOfNumsToRight = length - i;
        if (sum + (currentNum * lengthOfNumsToRight) >= target) {
            return (target - sum) / lengthOfNumsToRight;
        }
        sum += currentNum;
    }
}

console.log(threshold([1, 2, 5], 6));
console.log(threshold([40, 20, 10, 30], 70));
console.log(threshold([40, 20, 10, 30], 71));
console.log(threshold([40, 20, 10, 30], 100));