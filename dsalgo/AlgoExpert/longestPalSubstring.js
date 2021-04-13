function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    let odd = getLongestPalindromeFrom(string, i - 1, i + 1); // odd length pal
    let even = getLongestPalindromeFrom(string, i - 1, i);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

console.log(longestPalindromicSubstring("abaxyzzyxf"));
// console.log(longestPalindromicSubstring("a"));
// console.log(longestPalindromicSubstring("noon high it is"));
// console.log(longestPalindromicSubstring("abccbait's highnoon"));
// console.log(longestPalindromicSubstring("abcdefgfedcbazzzzzzzzzzzzzzzzzzzz"));
// console.log(longestPalindromicSubstring("abcdefggfedcba"));
// console.log(longestPalindromicSubstring("z234a5abbba54a32z"));
