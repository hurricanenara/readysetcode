
// first attempt - fails when there is no pair summing up to 0

// function sumZero(sortedArr) {
//     let i = 0;
//     let j = sortedArr.length - 1;

//     while (sortedArr[i] + sortedArr[j] !== 0) {
//         if (sortedArr[i] + sortedArr[j] < 0) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return [sortedArr[i], sortedArr[j]];
// }

function sumZero(sortedArr) {
    let i = 0;
    let j = sortedArr.length - 1;

    while (i < j) {
        const sum = sortedArr[i] + sortedArr[j];
        if (sum === 0) {
            return [sortedArr[i], sortedArr[j]]
        } else if (sum > 0) {
            j--;
        } else {
            i++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));