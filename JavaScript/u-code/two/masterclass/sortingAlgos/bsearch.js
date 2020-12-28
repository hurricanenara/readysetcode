
function binarySearch(arr, target) {
    if (!arr.length) return -1;
    let mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (target > arr[mid]) { // search right
        let subSearch = binarySearch(arr.slice(mid + 1), target);
        return subSearch < 0 ? -1 : subSearch + mid + 1;
    } else if (target < arr[mid]) { // search left
        return binarySearch(arr.slice(0, mid), target);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

// incorrect 

// function binarySearch(sortedArr, target){
//   if (!sortedArr.length) return -1;
//   let midpoint = sortedArr[Math.floor(sortedArr.length / 2)];
  
//   if (target === sortedArr[midpoint]) {
//     return midpoint;
//   } else if (target > midpoint) {
//     return binarySearch(sortedArr.slice(midpoint), target);
//   } else {
//     let searchResult = binarySearch(sortedArr.slice(0, midpoint + 1));
//     searchResult < 0 ? -1 : midpoint + 1 + searchResult;
//   }
// }
