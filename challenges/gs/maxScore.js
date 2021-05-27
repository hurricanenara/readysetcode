// Input:  [{"Bob","87"}, {"Mike", "35"},{"Bob", "52"}, {"Jason","35"}, {"Mike", "55"}, {"Jessica", "99"}]
// Output: 99
// Explanation: Since Jessica's average is greater than Bob's, Mike's and Jason's average.

const highestAvg = scores => {
    if (scores.length === 0) return -1;
    const map = {};

    for (let obj of scores) {
        const student = Object.keys(obj);
        const score = Object.values(obj);
        if (map[student]) {
            map[student].push(...score);
        } else {
            map[student] = score;
        }
    }
    return Math.max(...Object.keys(map).map(student => map[student].reduce((acc, el) => acc + el) / map[student].length ));
}

let scores = [{"Bob":87}, {"Mike": 35},{"Bob": 52}, {"Jason":35}, {"Mike": 55}, {"Jessica": 99}];
console.log(highestAvg(scores));