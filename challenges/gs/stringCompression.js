// https://leetcode.com/problems/string-compression/
// Runtime: 96 ms, faster than 30.69% of JavaScript online submissions for String Compression.
// Memory Usage: 40.6 MB, less than 49.91% of JavaScript online submissions for String Compression.
const compress = function(chars) {
    if (!chars.length) return 0;
    let j = 0;
    let curr = chars[0];
    let counter = 0;
    for (let i = 0; i <= chars.length; i++) {
        if (chars[i] === curr) {
            counter++;
        } else {
            chars[j] = curr;
            if (counter > 1) {
                const s = counter.toString();
                for (let k = 0; k < s.length; k++) chars[++j] = s[k];
            }
            j++;
            curr = chars[i];
            counter = 1;
        }
    }
    return chars;
}

// X - 100%

//read and write variation
var compress = function(chars) {
     let write = 0, count = 0, letter = chars[0];
    for (let read = 0; read <= chars.length; ++read) {
        if (chars[read] === letter) {
            ++count;
        } else {
            chars[write++] = letter;
            letter = chars[read];
            if (count > 1) {
                for (const number of String(count)) {
                    chars[write++] = number;
                }
            }
            count = 1;
        }
    }
    return write;
};


//variation - compress string, not in-place
// const compressString = function(string) {
//     let compressed = "";
//     let i = 0;
//     while (i < string.length) {
//         let char = string[i];
//         let count = 0;
//         while (char === string[i]) {
//             count++;
//             i++;
//         }
//         if (count > 1) {
//             compressed += char + count.toString();
//         } else {
//             compressed += char;
//         }
//     }
//     return compressed;
// }

// console.log(compress(["a","a","b","b","c","c","c"]));
// console.log(compress(["a"]));
// console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
console.log(compress(["a","a","a","b","b","a","a"]));