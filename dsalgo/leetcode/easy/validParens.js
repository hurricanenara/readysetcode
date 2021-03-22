const balance = string => {
    // string = "{hi}"
    const dict = {"(": ")", "{": "}", "[": "]"}; // closing bracket as key
    const valid = ["(", ")", "{", "}", "[", "]"];
    // const dict = {")": "(", "}": "{", "]": "["}; // closing bracket as key
    // constant for opening and const for closing - separate it out
    // if (char in dict)
    const stack = [];
    
    for (const char of string) {
        if (!valid.includes(char)) continue;
        if (dict[char]) {
            stack.push(dict[char]);
        } else if (char !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}

// console.log(balance("({[]})"));
console.log(balance("{hi}"));
console.log(balance("([12{}ab]1)"));