

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
           index++
           counts[i]--
        }
    }
    
    return count
};

// console.log(heightChecker([1,1,4,2,1,3]));
// console.log(heightChecker([5,1,2,3,4]));
console.log(heightChecker([1,2,3,4,5]));