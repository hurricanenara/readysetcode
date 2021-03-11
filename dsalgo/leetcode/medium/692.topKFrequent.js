
// non empty array of words
// K Most frequent words
// sort by frequency
// two words same freq, word with lower alphabetical order comes first
// input: array of words, K

// iterate through the array of words
// hashMap to store the count of each word's appearance

// compare same freq words by alphabetical order

//return array of correctly sorted words

const kMostFreqWords = (words, k) => {
    const hash = {};

    for (const word of words) {
        if (!hash[word]) {
            hash[word] = 1;
        } else {
            hash[word]++;
        }
    }

    // function compare(a, b) {
    //   if (a is less than b by some ordering criterion) {
    //     return -1;
    //   }
    //   if (a is greater than b by the ordering criterion) {
    //     return 1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // }

    //order by count/value first descending

    // "abc" : 2, "bcd": 1 => ["bcd", "abc"]
    const sorted = Object.keys(hash).sort((a, b) => { // a and be are keys
        if (hash[b] > hash[a]) {
            return 1;
        } else if (hash[b] === hash[a]) {
            //  [1, 4, 3] => b > a then swap, if a > b then do nothing, a === b, then do nothing
            return a.localeCompare(b);
            // if (b > a) {
            //     return 1; // swap places
            // } else if (b < a) {
            //     return 0;
            // }
        } else if (hash[b] < hash[a]) {
            return -1;
        }
    });

    return sorted.slice(0, k);

    // take care of the same frequencies
}

let arr = [1, 2, 4, 3, 7, 10];

const mySort = arr => {
    arr.sort((a, b) => {
        if (b > a) {
            return 1;
        } else if (b < a) {
            return -1;
        } else {
            return 0;
        }
    });
    return arr;
}

// console.log(mySort(arr));

console.log(kMostFreqWords(["i", "love", "leetcode", "i", "love", "coding"], 2))
console.log(kMostFreqWords(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))