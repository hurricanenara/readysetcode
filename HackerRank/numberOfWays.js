// function numberOfWays(queries) {
//     // Write your code here
//     queries.forEach(query => {
//         let sum = 0;
//         let min = query[0] < query[1] ? query[0] : query[1];
//         let max = query[0] > query[1] ? query[0] : query[1];
//         // console.log(query);
//         // console.log(min, max)
//         while (min > 0) {
//             sum += min * max;
//             min--;
//             max--;
//         }
//         // numWays.push(sum);
//         console.log(sum);
//     })
// }

function numberOfWays(queries) {
    // Write your code here
    let ways = [];
    queries.forEach(query => {
        let sum = 0;
        let min = query[0] < query[1] ? query[0] : query[1];
        let max = query[0] > query[1] ? query[0] : query[1];
        while (min > 0) {
            sum += min * max;
            min--;
            max--;
        }
        // console.log(sum);
        ways.push(sum);
    })
    return ways;
}

numberOfWays([[3, 4], [6, 5]]);
