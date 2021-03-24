// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// Runtime: 80 ms, faster than 46.43% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 38.7 MB, less than 47.15% of JavaScript online submissions for Letter Combinations of a Phone Number.

var letterCombinations = function(digits) {
    if (!digits.length) return [];
	const DIGIT_LETTERS = {
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"]
	};
    
    const currentMnemonic = new Array(digits.length).fill("0");
    const foundMnemonics = [];
    
    function letterCombinationsHelper(idx, digits, currentMnemonic, foundMnemonics) {
        if (idx === digits.length) {
            const mnemonic = currentMnemonic.join("");
            foundMnemonics.push(mnemonic);
        } else {
            const digit = digits[idx];
            const letters = DIGIT_LETTERS[digit];
            for (const letter of letters) {
                currentMnemonic[idx] = letter;
                letterCombinationsHelper(idx + 1, digits, currentMnemonic, foundMnemonics);
            }
        }
    }
    
    letterCombinationsHelper(0, digits, currentMnemonic, foundMnemonics);
    return foundMnemonics;
};