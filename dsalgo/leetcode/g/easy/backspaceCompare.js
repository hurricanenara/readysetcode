// Runtime: 76 ms, faster than 89.29% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 39.3 MB, less than 31.53% of JavaScript online submissions for Backspace String Compare.


var backspaceCompare = function(S, T) {
    const stackS = [];
    const stackT = [];
    
    for (let i = 0; i < S.length; i++) {
        const letter = S[i];
        if (letter !== "#") {
            stackS.push(letter);
        } else {
            stackS.pop();
        }
    }
    for (let i = 0; i < T.length; i++) {
        const letter = T[i];
        if (letter !== "#") {
            stackT.push(letter);
        } else {
            stackT.pop();
        }
    }
    return stackS.join("") === stackT.join("");
    
};