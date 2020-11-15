// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// without convering integer to string
function reverseInt(n) {
    let reversedInt = 0;
    while (n) {
        reversedInt = (reversedInt * 10) + (n % 10);
        n = parseInt(n / 10);
    }
    return reversedInt;
}
// function reverseInt(n) {
//     if (n < 0) {
//         return ((n * -1).toString().split("").reverse().join("")) * -1;
//     } else {
//         return +(n.toString().split("").reverse().join(""));
//     }
// }

module.exports = reverseInt;
