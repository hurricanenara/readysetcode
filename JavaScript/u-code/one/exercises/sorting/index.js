// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        // console.log(minIndex, i);
        for (let j = i + 1; j < arr.length; j++) {
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

// previously stated as selectionSort but it isn't
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr);
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 console.log(arr, "entered if statement");
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
//     return arr;
// }

console.log(selectionSort([6,3,1,0,4,8,9]));

function mergeSort(arr) {
    if (arr.length ===1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center); // not including center by calling slice
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else if (left[0] === right[0]) {
            results.push(left.shift()); //if same take left
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
