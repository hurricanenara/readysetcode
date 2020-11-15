// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((acc, el) => el + acc);
}

// function reverse(str) {
//     if (!str.length) return "";
//     return reverse(str.slice(1)) + str[0];
// }

// function reverse(str) {
    // let reversed = "";
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;
// }

module.exports = reverse;
