

function linSearch(arr, val) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(linSearch([1,2,3,4,5,6,7,8,9], 9));

// incorrect forEach use
// arr.forEach((el, i) => {
//     console.log(el, val);
//     console.log(el === val)
//     if (el === val) {
//         return i;
//     }
// });
// return -1;

// using forEach correctly

// const linearForEachSearch = (array, value) => {
//     let find = -1
//     array.forEach((element, index) => {
//         if(element == value){
//           find = index
//         }
//     })
//     return find
// }