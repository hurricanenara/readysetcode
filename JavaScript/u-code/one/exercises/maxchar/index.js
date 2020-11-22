// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let count = {};
    for (let char of str) {
        count[char] = count[char] + 1 || 1;
    }
    let max = Math.max(...Object.values(count));
    for (let char in count) {
        if (count[char] === max) return char;
    }
}

module.exports = maxChar;
