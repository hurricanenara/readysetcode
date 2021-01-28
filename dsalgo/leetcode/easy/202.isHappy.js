// https://leetcode.com/problems/happy-number/

// Runtime: 100 ms, faster than 25.00% of JavaScript online submissions for Happy Number.
// Memory Usage: 40.6 MB, less than 44.89% of JavaScript online submissions for Happy Number.

// not using toString()
const getDigits = num => {
    const digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    return digits;
}

const getSquaredTotal = digits => {
    return digits.reduce((acc, el) => acc + (el * el), 0);
}

const isHappy = num => {
    const seen = new Set();
    while (num !== 1) {
        let digits = getDigits(num);
        num = getSquaredTotal(digits);
        if (seen.has(num)) {
            return false;
        }
        seen.add(num);
    }
    return true;
}

// using toString()
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

// using Floyd algorithm
var isHappy = function(n) {
    function getNext(n){
        return (n+"").split("").reduce((a,c)=>Number(a)+Number(c*c), 0);
    }
    
    let slow = n;
    let fast = getNext(n);
    while(fast!=1 && slow!=fast){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
};

// using recursion
let cache = [];
var isHappy = function(n) {
    if(n === 1){
        cache = [];
        return true;    
    }
    
    if(cache.includes(n)){
        this.cache = [];
        return false;
    }else{
        cache.push(n);
    }
    
    let nums = [...String(n)];
    let sum = 0;
    for(let num of nums){
        sum += num*num;
    }
    
    return isHappy(sum);
};

var isHappy = function(n, count = 0) {
    var sum = [...String(n)].map((digit) => { digit = parseInt(digit, 10); return digit**2 }).reduce((ac, cv) => ac+cv)
    if(count>10) return false
    if(sum!==1) return isHappy(sum, count+=1) 
    return true
};

// X

console.log(isHappy(19));
console.log(isHappy(2));
