
// function countUniqueValues(sortedArr) {
//     if (!sortedArr.length) return 0;
//     let count = 1;
//     let i = 0;
//     let j = 1;

//     while (j < sortedArr.length) {
//         if (sortedArr[i] === sortedArr[j]) {
//             j++;
//         } else if (sortedArr[i] !== sortedArr[j]) {
//             count++;
//             j++;
//             i = j - 1;
//         }
//     }
//     return count;

// }

// mutates sortedArr agument (not advised but saves space)

function countUniqueValues(sortedArr) {
    if (!sortedArr.length) return 0;
    let i = 0;
    for (let j = 1; j < sortedArr.length; j++) {
        if (sortedArr[i] !== sortedArr[j]) {
            i++;
            sortedArr[i] = sortedArr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));