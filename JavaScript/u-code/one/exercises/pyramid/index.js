// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let initial = " ".repeat(n);
    for (let i = 1; i <= n; i++) {
        let numOfSpace = " ".repeat(i);
        let numOfPound = "#".repeat(i);
        let right = initial.replace(numOfSpace, numOfPound);
        let left = right.split("").reverse().join("");
        console.log(left + right.slice(1))
    }
}

//using padStart and padEnd
// function pyramid(n) {
//   let step = 0;
//   let hashStr = "#";
//   while (step < n) {
//     console.log(hashStr.padStart(n + step, " ").padEnd(2 * n - 1, " "));
//     hashStr += "##";
//     step++;
//   }
// }

module.exports = pyramid;
