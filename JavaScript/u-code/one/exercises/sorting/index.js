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

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let indexOfMin = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[indexOfMin]) {
//                 indexOfMin = j;
//             }
//         }
//         if (indexOfMin !== i) {
//             [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
//         }
//     }
//     return arr;
// }

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
