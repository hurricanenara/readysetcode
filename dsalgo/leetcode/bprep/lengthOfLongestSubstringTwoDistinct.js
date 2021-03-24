

var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s.length < 3) return s.length;
    let left = 0, right = 0, hash = {};
    let counter = 0;
    let max = 0;
    
    while (right < s.length) {
        if (!hash[s[right]]) {
            hash[s[right]] = 1;
            counter++;
        } else {
            hash[s[right]]++;
        }
        
        while (counter > 2) {
            hash[s[left]]--;
            if (hash[s[left]] === 0) {
                counter--;
            }
            left++;
        }
        right++;
        max = Math.max(max, right - left);
    }
    return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("eceba"));
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));