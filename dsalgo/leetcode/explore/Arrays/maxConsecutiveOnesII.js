

var findMaxConsecutiveOnes = function(nums) {
    let right = 0;
    let left = 0;
    let K = 1;
    
    while (right < nums.length) {
        if (nums[right] === 0) {
            K++;
        }
        if (K < 0) {
            if (nums[left] === 0) {
                K++;
            }
            left++;
        }
        right++;
    }
    return right - left;
};

//sliding window approach

var findMaxConsecutiveOnes = function(arr) {
    let maxConsecutiveOne = 0;
    let start = 0;
    let k = 1;
    let zeroCount = 0;
    
    for (let end = 0; end < arr.length; end++) {
        if (arr[end] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (arr[start] === 0) {
                zeroCount--;
            }
            start++;
        }
        maxConsecutiveOne = Math.max(maxConsecutiveOne, end - start + 1);
    }
    return maxConsecutiveOne;
};