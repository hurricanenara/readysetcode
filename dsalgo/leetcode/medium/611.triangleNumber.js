// https://leetcode.com/problems/valid-triangle-number/

// Runtime: 116 ms, faster than 47.97% of JavaScript online submissions for Valid Triangle Number.
// Memory Usage: 40.6 MB, less than 15.45% of JavaScript online submissions for Valid Triangle Number.

var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1 && nums[i] !==0; j++) {
            k = bSearchK(nums, k, nums.length - 1, nums[i] + nums[j]);
            count += k - j - 1;
        }
    }
    return count;
};

var bSearchK = function(nums, l, r, x) {
    while (r >= l && r < nums.length) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] >= x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

// faster and less space solution, no binary search
// Runtime: 92 ms, faster than 78.05% of JavaScript online submissions for Valid Triangle Number.
// Memory Usage: 40.2 MB, less than 59.35% of JavaScript online submissions for Valid Triangle Number.

var triangleNumber = function(nums) {
    let counter = 0;
    nums.sort((a, b) => (a - b));
    for (let i = 0; i < (nums.length - 2); i++) {
        if (nums[i] == 0) {
            continue;
        }
       let k = i + 2;
       for (let j = i + 1; j < (nums.length - 1); j++) {
           while ( k < nums.length && (nums[i] + nums[j] > nums[k])) {
               k++;
           }
           
           counter = counter + k - j - 1;
       } 
    }
    return counter;
};

// in the middle time and space -wise
//but more digestible?

var triangleNumber = function(nums) {
    nums = nums.filter((item) => item > 0)
        .sort((a, b) => a-b);
    
    let res = 0;
    for(let i=nums.length-1;i>=0;i--){
        let lo = 0;
        let hi = i-1;
        while(lo < hi) {
            if(nums[lo] + nums[hi] > nums[i]){
                res += hi - lo;
                hi--;
            } else
                lo++;
        }
    }
    return res;
};
