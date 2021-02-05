


// faster solution

var replaceElements = function(arr) {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i];
        arr[i] = max;
        max = Math.max(max, curr);
    }
    return arr;
};



// runtime 1124ms SUPER SLOW
// var replaceElements = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.max(...arr.slice(i + 1), -1);
//     }
//     return arr;
// };

console.log(replaceElements([17, 18, 5, 4, 6, 1]));