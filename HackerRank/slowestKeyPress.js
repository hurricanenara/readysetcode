
// solved 11/2/2020

function slowestKey(keyTimes) {
    // Write your code here
    let times = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < keyTimes.length; i++) {
        let key = keyTimes[i][0];
        let time = keyTimes[i][1];
        let prevTime = keyTimes[i - 1] ? keyTimes[i - 1][1] : 0;
        if (!times[key]) {
            times[key] = time - prevTime;
        } else {
            if (times[key] < (time - prevTime)) {
                times[key] = (time - prevTime);
            }
        }
    }
    let keyArr = Object.values(times);
    let max = Math.max(...keyArr);
    let maxKey = Object.keys(times).filter(key => times[key] === max);
    return alphabet[maxKey];
}