const { get } = require("http");


function getDigit(digit, index) {
    const base = 10;
    const power = index + 1;
    return Math.floor((Math.abs(digit) % base**(power)) / (base ** (power - 1)));
}

// console.log(getDigit(-12345, 0));
// console.log(getDigit(12345, 1));
// console.log(getDigit(12345, 2));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));

function digitCount(digit) {
    let count = 1;
    let base = 10;
    while (digit !== (digit % base)) {
        count++
        base *= 10;
    }
    return count;
}

// Shorter and cleaner way

function digitCountShort(digit) {
    return Math.floor(Math.log10(digit)) + 1;
}

// console.log(digitCount(1));
// console.log(digitCount(25));
// console.log(digitCount(314));
// console.log(digitCount(-12345));

function mostDigits(digitArr) {
    let max = 0;
    digitArr.forEach(num => {
        max = Math.max(max, digitCount(num));
    });
    return max;

    // for-loop
    // let max = 0;
    // for (let i = 0; i < digitArr.length; i++) {
    //     max = Math.max(max, digitCount(digitArr[i]));
    // }
    // return max;
}

console.log(mostDigits([1, 2, 34, 676, 12, 12345]));