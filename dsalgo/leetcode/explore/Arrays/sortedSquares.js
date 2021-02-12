

var sortedSquares = function(nums) {
    const results = [];
    let left = 0;
    let right = nums.length - 1;
    let pointer = right;

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            results[pointer] = nums[left] ** 2;
            pointer--;
            left++;
        } else {
            results[pointer] = nums[right] ** 2;
            pointer--;
            right--;
        }
    }
    return results;
}

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));