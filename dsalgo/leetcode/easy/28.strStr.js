
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;

    let i = 0;
    let j = 0;
    let found;
    
    while (i < haystack.length) {
        if (needle[j] !== haystack[i]) {
            i++;
            continue;
        }
        if (needle[j] === haystack[i]) {
            found = i;
            while (j < needle.length && i < haystack.length) {
                if (needle[j] === haystack[i]) {
                    j++;
                    i++;                    
                } else {
                    break;
                }
            }
            if (i === needle.length - 1) {
                return -1;
            }
        }
    }
    return -1;
    
};

console.log(strStr("hello", "ll"));
console.log(strStr("hello", ""));
console.log(strStr("aaa", "aaaa"));
console.log(strStr("mississippi", "issip"));