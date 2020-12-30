
// using var to hoist block scoped variables
// function insertionSort(arr) {
//     for (var i = 1 ; i < arr.length; i++) {
//         var currVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currVal;
//     }
//     return arr;
// }

function insertionSort(arr) {
    for (let i = 1 ; i < arr.length; i++) {
        let currVal = arr[i];
        let j = i - 1;
        while (arr[j] > currVal && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));