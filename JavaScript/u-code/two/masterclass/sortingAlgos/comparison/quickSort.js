
// shortened version of func on line 14
function quickSort(arr) {
    if (arr.length < 2) return arr;

    let pivot = arr[0];

    let left = arr.filter(num => num < pivot);
    let right = arr.slice(1).filter(num => num >= pivot);
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// function quickSort(arr) {
//     if (arr.length < 2) return arr;

//     let pivot = arr[0];

//     let left = arr.filter(num => num < pivot);
//     let right = arr.slice(1).filter(num => num >= pivot);
//     left = quickSort(left);
//     right = quickSort(right);

//     return left.concat([pivot]).concat(right);
// }

//in-place method O(n log n) T and O(log n) S

// function pivot(arr, start = 0, end = arr.length - 1) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   // We are assuming the pivot is always the first element
//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

//   // Swap the pivot from the start the swapPoint
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }


// function quickSort(arr, left = 0, right = arr.length -1){
//     if(left < right){
//         let pivotIndex = pivot(arr, left, right) //3
//         //left
//         quickSort(arr,left,pivotIndex-1);
//         //right
//         quickSort(arr,pivotIndex+1,right);
//       }
//      return arr;
// } 

console.log(quickSort([5, 3, 2, 8, 6]));