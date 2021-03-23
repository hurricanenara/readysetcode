
var decodeString = function(s) {
    const stack = [];

    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }
    
    let current = stack.pop();
    let string = "";
        
    while (current !== "[") {
        string = current + string;
        current = stack.pop();
    }
    
    let multiplier = "";
    current = stack.pop();
    while (!Number.isNaN(Number(current))) {
        multiplier = current + multiplier;
        current = stack.pop();        
    }
    if (current !== undefined) stack.push(current);
    stack.push(string.repeat(Number(multiplier)));
    }
    return stack.join("");
};

var decodeString = function(s) {
    const stack = [];

    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }

        let current = stack.pop();
        let string = "";

        while (current !== "[") {
            string = current + string;
            current = stack.pop();
        }

        let multiplier = "";
        current = stack.pop();
        while (!Number.isNaN(Number(current))) {
            multiplier = current + multiplier;
            current = stack.pop();
        }
        if (current !== undefined) stack.push(current);
        stack.push(string.repeat(+multiplier));
    }
    return stack.join("");
};

console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("2[abc]3[cd]ef"));
// console.log(decodeString("abc3[cd]xyz"));