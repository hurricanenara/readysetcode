// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let capitalized = ""; // or capitalized = str[0].toUpperCase(); and have i start from 1
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            capitalized += str[i].toUpperCase();
        } else if (str[i - 1] === " ") {
            capitalized += str[i].toUpperCase();
        } else {
            capitalized += str[i];
        }
    }
    return capitalized;
}

module.exports = capitalize;
