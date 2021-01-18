
// Runtime: 148 ms, faster than 9.34% of JavaScript online submissions for Maximum Product of Three Numbers.
// Memory Usage: 43 MB, less than 56.76% of JavaScript online submissions for Maximum Product of Three Numbers.

// var maximumProduct = function(nums) {

//     nums.sort((a, b) => a - b);
//     return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3])
    
// };

var maximumProduct = function(nums) {
    // get top 3 max and top 2 min in one pass
    let max1 = -Infinity, 
        max2 = -Infinity,
        max3 = -Infinity,
        min1 = Infinity,
        min2 = Infinity;
        
    for(let num of nums){
        // fetch max
        if(num > max1){
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if(num > max2){
            max3 = max2;
            max2 = num;
        } else if(num > max3){
            max3 = num;
        }
        
        // fetch min
        if(num < min1){
            min2 = min1;
            min1 = num
        } else if(num < min2){
            min2 = num;
        }
    }
    // return max of top 3, or top1 and last 2
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
    
};

console.log(maximumProduct([1,2,3,4]));
console.log(maximumProduct([-1,-2,-3]));
console.log(maximumProduct([-1, -98, 4,-100, 2, 3]));