// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

function pickingNumbers(a) {
    let maxcount = 0;
    [...new Set(a)].forEach(num => {
        debugger
        maxcount = Math.max(maxcount,
            a.reduce((acc, val) => {
                debugger
                return acc += (val === num || val === num + 1)
            }, 0))
            debugger
    })
    return maxcount;
}

//X

console.log(pickingNumbers([4,6,5,3,3,1]));
console.log(pickingNumbers([1,2,2,3,1,2]));