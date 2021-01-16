


// const isAlienSorted = function(words, order) {

// };

// const compare = function(s1, s2, order) {
//     if (s1 === s2) return true;


// }
var isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        const prev = words[i];
        const next = words[i + 1];
        let j = 0;
        while (prev[j] && next[j] || !(prev[j] && next[j])) {
            next[j] = next[j] ? next[j] : -1;
            if ((order.indexOf(next[j]) - order.indexOf(prev[j])) > 0) {
                return true;
            }
            if ((order.indexOf(next[j]) - order.indexOf(prev[j])) < 0) {
                return false;
            }
            if (next[j] === undefined && prev[j] === undefined) {
                return true;
            }
            j++;
        }
    }
};

// const isAlienSorted = (words, order) => {
//     let obj = {};
//     for (let i = 0; i < order.length; i++) {
//         obj[order[i]] = i;
//     }

//     for (let i = 0; i < words.length - 1; i++) {
//         const word = words[i];
//         const next = words[i + 1];
//         let pointer = 0;
//         while(word[pointer] === next[pointer]) pointer++;
//         if (next[pointer] === undefined || obj[word[pointer] > obj[next[pointer]]]) {
//             return false;
//         }
//     }
//     return true;
// }

console.log(isAlienSorted(["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"], "zkgwaverfimqxbnctdplsjyohu")); // false
// console.log(isAlienSorted(["my", "f"], "gelyriwxzdupkjctbfnqmsavho")); // false
// console.log(isAlienSorted(["hello", "hello"], "abcdefghijklmnopqrstuvwxyz")); // true
// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")); // false
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")); // false
// console.log(isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz")); // true
