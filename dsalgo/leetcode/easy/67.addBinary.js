// https://leetcode.com/problems/add-binary/

// Runtime: 76 ms, faster than 97.93% of JavaScript online submissions for Add Binary.
// Memory Usage: 40.7 MB, less than 48.80% of JavaScript online submissions for Add Binary.

var addBinary = function(a, b) {
    if (a === "0" && b === "0") return "0";
    
    let output = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        const num1 = a[i] === undefined ? 0 : +a[i];
        const num2 = b[j] === undefined ? 0 : +b[j];
        if (num1 + num2 + carry < 2) {
            output = (num1 + num2 + carry).toString() + output;
            carry = 0;
        } else if (num1 + num2 + carry >= 2) {
            output = (num1 + num2 + carry - 2).toString() + output;
            carry = 0;
            carry++;
        }
        i--, j--;
    }
    return `${carry || ""}${output}`;
};


// using BitInt
var addBinary = function(a, b) {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};

// O

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "11"));
console.log(addBinary("0", "11"));
console.log(addBinary("0", "0"));