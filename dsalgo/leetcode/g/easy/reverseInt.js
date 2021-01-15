
// Runtime: 108 ms, faster than 25.31% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40 MB, less than 77.23% of JavaScript online submissions for Reverse Integer.

const reverse = function(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    debugger
    let ret = 0;
    while (x > 0) {
        debugger
        const num = x % 10;
        x = Math.floor(x / 10);
        ret *= 10;
        ret += num;
        debugger
    }
    if (ret > Math.pow(2, 31)) {
        debugger
        return 0;
    }
    debugger
    return isNegative ? ret * -1 : ret;
};
// const reverse = function(x) {
//     if (x < 10 && x > -10) return x;
//     if (x % 10 === 0) {
        
//     }
//     const hundredth = (x % 10) * 100;
//     const tenth = x > 0 ? Math.floor((x % 100) / 10) * 10 : Math.ceil((x % 100) / 10) * 10;
//     const oneth = x > 0 ? Math.floor(x / 100) : Math.ceil(x / 100);
    
//     console.log(hundredth, tenth, oneth)
//     return hundredth + tenth + oneth;
// };

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1));
console.log(reverse(10));
console.log(reverse(100));