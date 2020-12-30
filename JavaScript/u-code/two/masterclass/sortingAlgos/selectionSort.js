
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        // console.log(minIndex, i);
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            console.log(arr);
        }
    }
    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));