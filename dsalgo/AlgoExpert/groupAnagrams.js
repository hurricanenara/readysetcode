function groupAnagrams(words) {
  // Write your code here.
  const hash = {};
  for (const word of words) {
    const sorted = word.split("").sort().join("");
    if (!hash[sorted]) {
      hash[sorted] = [word];
    } else {
      hash[sorted].push(word);
    }
  }
  return Object.values(hash);
}
