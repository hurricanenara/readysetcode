

// Runtime: 76 ms, faster than 88.17% of JavaScript online submissions for Two City Scheduling.
// Memory Usage: 38.7 MB, less than 72.14% of JavaScript online submissions for Two City Scheduling.
var twoCitySchedCost = function(costs) {
    // sort cost in ascending order
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    
    // we can send the first n to A and last n to B, this provides global optimal solution through proof by contradition
    // a logical proof that establishes the validity of a proposition by showing that assuming the proposition to be false leads to
    // contradction
    
    // [ [ 30, 200 ], [ 10, 20 ], [ 30, 20 ], [ 400, 50 ] ]

    const total = costs.reduce((acc, cost, index) => {
        if (index < costs.length / 2) {
            acc += cost[0];
        }
        else {
            acc += cost[1];
        }
        return acc;
    }, 0)
    
    return total;
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));

//
// const twoCitySchedCost = function(costs) {
//     costs.sort(costSort)
    
//     let sum = 0
    
//     costs.map((e,i) => {
//         if (i < costs.length / 2) sum += e[0]
//         else sum += e[1]
//     })
    
//     return sum
// };

// // ascending
// const costSort = function(a,b) {
//     let aCost = a[0] - a[1]
//     let bCost = b[0] - b[1]
    
//     if (aCost < bCost) return -1
//     else if (aCost > bCost) return 1
//     else if (a[0] > b[0]) return 1
//     else return -1
// }