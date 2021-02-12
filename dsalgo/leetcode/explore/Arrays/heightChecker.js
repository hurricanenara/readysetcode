
//without sorting

// Runtime: 80 ms, faster than 71.83% of JavaScript online submissions for Height Checker.
// Memory Usage: 39.3 MB, less than 13.18% of JavaScript online submissions for Height Checker.

var heightChecker = function(heights) {
    const counts = new Array(101).fill(0)
    
    for (const height of heights) {
        counts[height]++
    }
    
    let index = 0
    let count = 0
    
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 0) continue
        
        while(counts[i] > 0) {
           if (i != heights[index]) {
               count++
           }
           index++;
           counts[i]--;
        }
    }
    
    return count
};

// oneliner after sorting

// Runtime: 84 ms, faster than 43.66% of JavaScript online submissions for Height Checker.
// Memory Usage: 38.8 MB, less than 47.28% of JavaScript online submissions for Height Checker.
var heightChecker = function (heights) {
  return [...heights]
    .sort((a, b) => a - b)
    .reduce((acc, cur, index) => (cur == heights[index] ? acc : acc + 1), 0);
};


// console.log(heightChecker([1,1,4,2,1,3]));
// console.log(heightChecker([5,1,2,3,4]));
console.log(heightChecker([1,2,3,4,5]));