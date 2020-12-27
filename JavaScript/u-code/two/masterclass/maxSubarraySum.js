

// Sliding Window Pattern - O(N)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// Divide and Conquer Pattern

function maxSubarraySum(arr, num) {

}

const arr1 = [2, 6, 9, 2, 1, 8, 5, 6, 3];
console.log(maxSubarraySum(arr1, 3));