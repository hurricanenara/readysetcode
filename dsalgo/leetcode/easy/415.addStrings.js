// https://leetcode.com/problems/add-strings/

// Runtime: 96 ms, faster than 48.89% of JavaScript online submissions for Add Strings.
// Memory Usage: 40.8 MB, less than 57.48% of JavaScript online submissions for Add Strings.

const addStrings = (num1, num2) => {
    if(num2.length > num1.length) return addStrings(num2, num1);
    
    let i = num1.length - 1;
	let j = num2.length - 1;
    let out = '';
    let carry = 0;
    
    while(i >= 0) {
        const digit1 = num1.charAt(i) - '0';
        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        
        let sum = carry + digit1 + digit2;
        carry = 0;
        if(sum > 9) {
            carry = 1;
            sum %= 10;
        }
        
        out = `${sum.toString()}${out}`;
        
        i -= 1;
        j -= 1;
    }
    
    if(carry > 0) out = `${carry.toString()}${out}`;
    
    return out;
};

// console.log(addStrings("123", "179"));
console.log(addStrings("123", "1979999"));