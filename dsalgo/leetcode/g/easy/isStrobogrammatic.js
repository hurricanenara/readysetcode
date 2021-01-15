// Runtime: 64 ms, faster than 97.84% of JavaScript online submissions for Strobogrammatic Number.
// Memory Usage: 38.4 MB, less than 46.04% of JavaScript online submissions for Strobogrammatic Number.

const isStrobogrammatic = function(num) {
    const hash = {"0":"0", "1":"1", "6":"9", "8":"8", "9":"6"};
    // "123456789"
    // "1689" ""
    // when keyed into rotated self, digit at indices rotate as well
    let rotated = "";
    for (let i = num.length - 1; i >= 0; i--) {
        const numToRotate = num[i];
        rotated += hash[numToRotate];
    }
    return rotated === num;
};

// console.log(isStrobogrammatic("69"));
// console.log(isStrobogrammatic("88"));
// console.log(isStrobogrammatic("962"));
// console.log(isStrobogrammatic("1"));
// console.log(isStrobogrammatic("96"));
console.log(isStrobogrammatic("101"));

var isStrobogrammatic = function(num) {
    myMap=new Map();
    myMap.set('6','9');
    myMap.set('9','6');
    myMap.set('0','0');
    myMap.set('1','1');
    myMap.set('8','8');  
    var l = 0, r = num.length - 1;
    while (l <= r) {
        if (!myMap.has(num.charAt(l))) return false; // This line is not really needed. If charAt(l) is not present in the map, then your second if statement will handle it.?
        if (myMap.get(num.charAt(l)) != num.charAt(r))
            return false;
        l++;
        r--;
    } 
    return true;
};