// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size))
    }
    return chunked;
}

//using splice

// function chunk(array,size){
//   let chunk = [];
//   while (array.length > 0) {
//     chunk.push(array.splice(0, size));
//   }
//   return chunk;
// }

//recursive

// function chunk(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }
 
//   return [array.slice(0, size), ...chunk(array.slice(size), size)];
// }

module.exports = chunk;
