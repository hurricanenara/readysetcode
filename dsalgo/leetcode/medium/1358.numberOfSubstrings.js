

// 92ms fastest solution
var numberOfSubstrings = function(s) {
    const n = s.length;
    const counts = new Array(3).fill(0);
    
    let res = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const rightIndex = s.charCodeAt(right) - 97;
        counts[rightIndex]++;
        
        while (counts[0] > 0 && counts[1] > 0 && counts[2] > 0) {
            const leftIndex = s.charCodeAt(left) - 97;
            res += n - right;
            counts[leftIndex]--;
            left++;
        }
    }
    
    return res;
};


// 124ms
var numberOfSubstrings = function(s) {
    let res = 0;
    let obj = {'a': 0, 'b': 0, 'c': 0};
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        obj[s[i]]++;
        while (obj['a'] > 0 && obj['b'] > 0 && obj['c'] > 0) {
            res += s.length - i;
            obj[s[j]]--;
            j++;
        }
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};


// slow solution 484ms
var numberOfSubstrings = function(s) {
    let slow = 0;
    let fast = -1;
    let n = s.length;
    
    let d = {"a": 0, "b": 0, "c": 0};
    let res = 0;
    
    while (slow < n || fast < n) {
        if (Math.min(...Object.values(d)) >= 1) {
            d[s[slow]] -= 1;
            slow += 1;
        }
        while (Math.min(...Object.values(d)) < 1) {
            if (fast < n - 1) {
                fast += 1;
                d[s[fast]] += 1;
            } else {
                return res;
            }
        }
        res += n - fast;
    }
};

// console.log(numberOfSubstrings("abcabc"));
console.log(numberOfSubstrings("abccba"));