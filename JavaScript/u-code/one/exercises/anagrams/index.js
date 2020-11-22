// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let objA = {};
    let objB = {};

    for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()) {
        objA[char] = objA[char] + 1 || 1;
    }

    for (let char of stringB.replace(/[^\w]/g, "").toLowerCase()) {
        objB[char] = objB[char] + 1 || 1;
    }

    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    } else {
        for (let char in objA) {
            if (objA[char] !== objB[char]) {
                return false
            }
        }
        return true;
    }

    // if able, clean up each string, turn into array, sort, then compare the two cleaned strings

    // for (let char in objA) {
    //     if (objA[char] === objB[char]) {
    //         delete objB[char];
    //         delete objA[char];
    //     }
    // }
    
    // return !Object.keys(objA).length && !Object.keys(objB).length;
}

// console.log(anagrams("hello", "olleh"));

module.exports = anagrams;
