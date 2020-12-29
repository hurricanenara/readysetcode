

function stringSearch(str, target) {
    let count = 0;
    for (let i = 0; i <= str.length - target.length; i++) {
        if (str.slice(i, i + target.length) === target) {
            count++;
        }
    }
    return count;
}

console.log(stringSearch("hellolo lo lo", "lo"));
console.log(stringSearch("lorie loled", "lol"));