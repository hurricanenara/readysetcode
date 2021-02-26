

// Runtime: 68 ms, faster than 97.54% of JavaScript online submissions for Longest Absolute File Path.
// Memory Usage: 38.6 MB, less than 46.72% of JavaScript online submissions for Longest Absolute File Path.

var lengthLongestPath = function(input) {
    let max = 0;
    let local = [];
    
    for (let line of input.split('\n')) {
        const depth = [...line].lastIndexOf('\t') + 1;
        local[depth] = (local[depth - 1] || 0) + line.length - depth;
        if (line.indexOf('.') > -1) {
            max = Math.max(max, local[depth] + depth);
        }
    }
    return max;
};