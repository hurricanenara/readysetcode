// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    for (let i = 0; i < Math.ceil((str.length - 1) / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}

//could also use array helper "every" to check that every left and right chars are equal but not as efficient as this checks array twice

// const checkPalindromeRec = (str) => {
//   if (str.length <= 1) return true;
//   else if (str[0] !== str[str.length - 1]) return false;
//   return checkPalindromeRec(str.slice(1, str.length - 1));
// }; 

module.exports = palindrome;
