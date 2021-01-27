// My solution
// function countingValleys(steps, path) {
//     // Write your code here
//     let level = 0;
//     let valleyCount = 0;
//     let i = 0;
//     while (i < steps) {
//         if (path[i] === "U") {
//             level++;
//             if ((level - 1) < 0 && level === 0) valleyCount++;
//         } else if (path[i] === "D") {
//             level--;
//         }
//         i++;
//     }
//     return valleyCount;
// }

// Another solution
function countingValleys(steps, path) {
    let seaLevel = 0;
    let valley = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") seaLevel++;
        else seaLevel--;

        if (path[i] === "U" && seaLevel === 0) valley++;
    }
    return valley;
}

// O

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(8, "DDUUUUDD"));
console.log(countingValleys(8, "DU"));