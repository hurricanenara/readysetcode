
// Runtime: 96 ms, faster than 55.92% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 41.4 MB, less than 33.86% of JavaScript online submissions for Merge Intervals.

// my twist on the problem
var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let result = [prev];
    
    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];
        if (currentStart <= prev[1]) {
            prev[1] = Math.max(prev[1], currentEnd);
        } else {
            result.push(intervals[i]);
            prev = intervals[i];
        }
    }
    return result;
};

// loops through first interval (redundant to prev)
function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  var prev = intervals[0];
  var res = [prev];
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
}

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    
    let final = [];
    
    for (let x of intervals) {
        let last = final[final.length - 1]
        if ( last && last[1] >= x[0]) {
            last[1] = Math.max(last[1], x[1]);
        } else {
            final.push(x);
        }
    }    
  return final;
};

console.log(merge([[1,4],[0,4]]));
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));