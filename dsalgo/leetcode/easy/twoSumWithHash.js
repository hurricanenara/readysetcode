// Runtime: 76 ms, faster than 83.53% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.7 MB, less than 73.70% of JavaScript online submissions for Two Sum.


// return nums
const twoSum = (arr, target) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const comp = target - arr[i];
        if (obj[comp] !== undefined) {
            return [arr[i], comp];
        }
        obj[arr[i]] = comp;
    }
    return [];
}

// return indices of nums

var twoSum = function(nums, target) {
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        const num = nums[i];
        if (hash[comp] !== undefined) {
            return [i, hash[comp]];
        }
        hash[num] = i;
    }
    return [];
};

console.log(twoSum([11,5,7,15,2], 9));
// console.log(twoSum());
// console.log(twoSum());
