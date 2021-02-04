// Group anagrams
// array of strings 
// 2d arr of strings grouped by anagrams

function groupAnagrams(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const sub = [arr[i]];
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (isAnagram(arr[i], arr[j])) {
                sub.push(arr[j]);
            }
        }
        result.push(sub);
    }
    return result;
}

function isAnagram(string1, string2) {
    
    if (string1.length !== string2.length) return false;

    const hash = {};
    for (let i = 0; i < string1.length; i++) {
        hash[string1[i]] = ++hash[string1[i]] || 1;

    }

    for (let i = 0; i < string2.length; i++) {
        if (typeof hash[string2[i]]) {
            hash[string2[i]]--;
        }
    }

    return Object.keys(hash).every(key => hash[key] === 0);
}

// act , cat , tac

// {"a": 0, "c": 0, "t": 0}

console.log(isAnagram("act", "catt"));