
function birthday(s, d, m) {
    let ways = 0;
    if (m === 1 && d === s[0]) return ++ways;
    for (let i = 0; i <= s.length - m; i++) { // stuck because i bounds was set to s.length - 1 - m, worked after removing 1, Discussion
        if (s.slice(i, i + m).reduce((acc, val) => {
            return acc + val;
        }) === d) {
            ways++;
        }
    }
    return ways;
}


// console.log(birthday([5, 1, 2, 4, 4, 2, 4, 2, 2, 5, 1, 4, 3, 1, 1, 1, 2, 1, 4, 1], 18, 6));
// console.log(birthday([1, 2, 1, 3, 2], 3, 2));
// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
// console.log(birthday([4], 4, 1));
console.log(birthday([2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2], 26, 8)); // 16