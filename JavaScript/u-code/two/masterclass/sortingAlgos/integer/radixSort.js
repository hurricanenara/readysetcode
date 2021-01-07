const { get } = require("http");


function getDigit(digit, index) {
    const base = 10;
    const power = index + 1;
    return Math.floor((digit % base**(power)) / (base ** (power - 1)));
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));