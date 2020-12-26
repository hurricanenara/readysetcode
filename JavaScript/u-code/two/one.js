
// charCount

function charCount(str) {
    const obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

// console.log(charCount("Hello WORLD hi!!!"));

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     arr1.forEach((num, i) => {
//         const squared = num * num;
//         if (arr2.includes(squared)) {
//             const indexOfMatchingEl = arr2.indexOf(squared);
//             arr2.splice(indexOfMatchingEl, 1);
//         }
//     });
//     return !arr2.length;
// }

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         const correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

// refactored

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let el of arr1) {
        freq1[el] = ++freq1[el] || 1;
    }

    for (let el of arr2) {
        freq2[el] = ++freq2[el] || 1;
    }

    for (let key in freq1) {
        const squaredNum = key ** 2;
        if (!((squaredNum in freq2) && (freq1[key] === freq2[squaredNum]))) { // (squaredNum in freq2) is (freq2.hasOwnProperty(squaredNum))
            return false;
        }
    }
    return true;
}

// console.log(same([1, 2, 3], [4, 1, 9])); //true
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1])); //false

function validAnagram(str1, str2) {

}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true