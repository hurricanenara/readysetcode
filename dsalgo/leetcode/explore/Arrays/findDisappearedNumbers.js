

// using in-place o(n) time and o(1) space
// Runtime: 116 ms, faster than 73.42% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 46.4 MB, less than 76.78% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
var findDisappearedNumbers = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let newIndex = Math.abs(nums[i]) - 1;
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1;
        }
    }
    const result = [];
    
    for (let i = 1; i < nums.length + 1; i++) {
        if (nums[i - 1] > 0) {
            result.push(i);
        }
    }
    return result;
};

//using hash table o(n) time and space
// Runtime: 132 ms, faster than 53.43% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 50.4 MB, less than 17.98% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
var findDisappearedNumbers = function(nums) {
    let hash = {};
    for (let num of nums) {
        hash[num] = 1;
    }
    const result = [];
    
    for (let i = 1; i < nums.length + 1; i++) {
        if (!hash[i]) result.push(i);
    }
    return result;
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));