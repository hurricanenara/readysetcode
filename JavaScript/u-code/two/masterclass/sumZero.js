
function sumZero(sortedArr) {
    let i = 0;
    let j = sortedArr.length - 1;

    while (sortedArr[i] + sortedArr[j] !== 0) {
        if (sortedArr[i] + sortedArr[j] < 0) {
            i++;
        } else {
            j--;
        }
    }
    return [sortedArr[i], sortedArr[j]];
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));