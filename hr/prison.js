function prison(n, m, h, v) {
    // Write your code here
    let area = 1;
    let nArrDist = [...Array(n + 2).keys()].filter(num => !h.includes(num));
    let mArrDist = [...Array(m + 2).keys()].filter(num => !v.includes(num));
    nArrDist = getDistanceArr(nArrDist).filter(num => num !== 1);
    mArrDist = getDistanceArr(mArrDist).filter(num => num !== 1);
    // console.log(nArrDist)
    // console.log(mArrDist)
    return nArrDist[0] * mArrDist[0];
}

function getDistanceArr(input) {
    let arr = [];
    for (let i = 0; i < input.length - 1; i++) {
        arr.push(input[i + 1] - input[i]);
    }
    return arr;
}

//does not pass time complexity requirement for 6 out of 15 test cases.