
function groupAnagrams(arr) {
    const hash = {};
    // const set = new Set();
    // const result = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let sorted = word.split("").sort().join("");
        hash[sorted] ? hash[sorted].push(word) : hash[sorted] = [word];
    }

    // return hash;
    return Object.values(hash);
}

console.log(groupAnagrams(["act", "cat", "tac", "dog"]));
console.log(groupAnagrams(["a"]));

// before starting to type:
// 5- 10 minutes of talking about input, output
// start off with questions about edge cases

// high-level overview
// pseudocode
