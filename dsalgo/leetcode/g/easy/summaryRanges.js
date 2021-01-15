// Runtime: 76 ms, faster than 72.16% of JavaScript online submissions for Summary Ranges.
// Memory Usage: 38.3 MB, less than 88.65% of JavaScript online submissions for Summary Ranges.

const summaryRanges = function(nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums[0] + ""];
    
    const ranges = [[nums[0], nums[0]]];
    let i = 0;
    let arrIdx = 0;
    while (i < nums.length - 1) {
        const left = nums[i];
        const right = nums[i + 1];
        if (right - left === 1) {
            ranges[arrIdx][1] = right;
        } else {
            ranges.push([right, right]);
            arrIdx++;
        }
        i++;
    }
    return ranges.map(range => {
        if (range[0] === range[1]) {
            return range[1] + "";
        }else {
            return range.join("->");
        }
    });
};

//shorter and improved from Discussion

// var summaryRanges = function(nums) {
//     debugger
//     var t = 0
//     var ans = []
//     nums.push('#')
//     debugger
//     for (var i=1;i<nums.length;i++) {
//         debugger
//         if (nums[i] - nums[t] !== i - t) {
//             debugger
//             if (i - t > 1) {
//                 debugger
//                 ans.push(nums[t] + '->'+ (nums[i-1]))
//             } else {
//                 debugger
//                 ans.push(nums[t].toString())
//             }
//             debugger
//             t = i
//         }
//     }
//     return ans
// }



// console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
// console.log(summaryRanges([]));
// console.log(summaryRanges([-1]));
// console.log(summaryRanges([0]));