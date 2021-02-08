
const isValid = (s) => { // "([)]", "{[]}"
    const dictionary = { "(": ")", "[": "]", "{": "}" }
    let stack = [s[0]];

    if (s === "") return true;

    for (let i = 1; i < s.length; i++) {
        let curChar = s[i];
        let peek = stack[stack.length - 1];
        if (curChar === dictionary[peek]) {
            stack.pop();
        } else {
            stack.push(curChar);
        }
    }
    return !stack.length;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));