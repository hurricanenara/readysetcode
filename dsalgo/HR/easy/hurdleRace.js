// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

function hurdleRace(k, height) {
    return Math.max(0,Math.max(...height) - k);
}