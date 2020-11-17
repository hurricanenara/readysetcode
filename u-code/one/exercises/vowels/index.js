// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
// function vowels(str) {
//     const vowels = /[aeiou]$/gi; //i case insensitive g will not stop
//     let count = 0;
//     for (let char of str) {
//         if (vowels.test(char)) count ++;
//     }
//     return count;
// }

module.exports = vowels;
