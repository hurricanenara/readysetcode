// https://leetcode.com/problems/high-five/
// Runtime: 104 ms, faster than 23.02% of JavaScript online submissions for High Five.
// Memory Usage: 41 MB, less than 62.95% of JavaScript online submissions for High Five.

var highFive = function(items) {
    const dict = {};
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const id = items[i][0];
        const score = items[i][1];
        if (dict[id]) {
            dict[id].push(score);
        } else {
            dict[id] = [];
            dict[id].push(score);
        }
    }
    
    for (let id in dict) {
        result.push([id, getTopFiveAvg(dict[id])]);
    }
    console.log(dict)
};

var getTopFiveAvg = function(scores) {
    if (scores.length === 5) {
        return Math.floor((scores.reduce((acc, el) => acc + el)) / 5);
    }
    let sum = 0;
    scores.sort((a, b) => b - a);
    
    for (let i = 0; i < 5; i++) {
        sum += scores[i];
    }
    return Math.floor(sum / 5);
    
}

// anoter leetcoder's solution I like
var highFive = function(items) {
    const scoreBoard = {};
    for(const [id, score] of items) {
        if(scoreBoard[id]) {
            scoreBoard[id].push(score);
        } else {
            scoreBoard[id] = [score];
        }
    }
    const getAverage = (res, student) => {
        const topFive = scoreBoard[student]
        .sort((a, b) => b - a)
        .reduce((total, curr, i) => {
            if(i < 5) total += curr;
            return total;
        });
        res.push([student, Math.floor(topFive / 5)]);
        return res;
    }
    return Object.keys(scoreBoard).reduce(getAverage, [])
};

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]));