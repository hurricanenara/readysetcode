var validPalindromes = function(s) {
    let i = 0;
    let j = s.length - 1;

    let errors = 1;

    while (i < j) {
        
        if (s[i] === s[j]) {
            i++;
            j--;
        } else if (s[i + 1] === s[j] && s[i + 2] === s[j - 1] && errors) {
            i++;
            errors--;
        } else if (s[j - 1] === s[i] && errors) {
            j--;
            errors--;
        } else {
            return false;
        }
    }
    return true;
};

// Recursively solved

const validPalindrome = (str, skipped = false) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      if (skipped) {
        return false;
      }
      return (
        validPalindrome(str.substring(i, j), true) ||
        validPalindrome(str.substring(i + 1, j + 1), true)
      );
    }
  }
  return true;
};

// console.log(validPalindrome("aba"));
// console.log(validPalindrome("abca"));
// console.log(validPalindrome("abbca"));
// console.log(validPalindrome("abc"));
console.log(validPalindrome("eedede"));

// var validPalindrome = function(s) {
//     if (s.length <= 3) {
//         if (s[0] !== s[s.length - 1] && s[0] !== s[1]) {
//             return false;
//         }
//         return true;
//     }
//     let change = true;
//     for (let i = 0; i < Math.floor(s.length / 2); i++) {
//         if (s[i] !== s[s.length - 1 - i] && change) {
//             change = false;
//         } else if (s[i] !== s[s.length - 1 - i] && !change) {
//             return false;
//         }
//     }
//     return true;
// };

// X

