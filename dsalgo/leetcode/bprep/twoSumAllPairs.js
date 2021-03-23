
const twoSumAllPairs = (arr, target) => {
    const hash = {};
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        let complement = target - num;

        hash[num] = ++hash[num] || 1;

        if (complement in hash) {
            const count = hash[complement];
            for (let i = 0; i < count; i++) {
                pairs.push([complement, num]);
                pairs.push([num, complement]);
            }
        }
    }
    return pairs;
}

console.log(twoSumAllPairs([1, 1, 2, 3, 4], 3));