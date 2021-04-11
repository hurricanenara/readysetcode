// function moveElementToEnd(array, toMove) {
//   // Write your code here.
//   let i = 0;
//   let j = 1;

//   while (i < array.length && j < array.length) {
//     if (array[i] === toMove && array[j] !== toMove) {
//       [array[i], array[j]] = [array[j], array[i]];
//       i++;
//     }
//     while (array[j] === toMove && j < array.length) {
//       j++;
//     }
//   }
//   return array;
// }

// O(N) T | O(1) S in-place

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] === toMove && array[j] !== toMove) {
      [array[i], array[j]] = [array[j], array[i]];
      i++, j--;
    }
    if (array[i] !== toMove) i++;
    if (array[j] === toMove) j--;
  }
  return array;
}

// their solution

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) {
      [array[i], array[j]] = [array[j], array[i]];
    }
    i++;
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
