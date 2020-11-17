// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let initial = " ".repeat(n);
    for (let i = 1; i <= n; i++) {
        let numOfSpace = " ".repeat(i);
        let numOfPound = "#".repeat(i);
        console.log(initial.replace(numOfSpace, numOfPound));
    }
}

module.exports = steps;
