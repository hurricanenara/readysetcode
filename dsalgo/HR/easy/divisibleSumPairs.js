function divisibleSumPairs(n, k, ar) {
    let count = 0;
    debugger
    for (let i = 0; i < ar.length - 1; i++) {
        debugger
        for (let j = i + 1; j < ar.length; j++) {
            debugger
            if ((ar[i] + ar[j]) % k === 0) {
                debugger
                count++;   
            }
        }
    }
    return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));