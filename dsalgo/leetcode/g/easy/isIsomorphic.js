// Runtime: 116 ms, faster than 11.64% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 43.9 MB, less than 13.28% of JavaScript online submissions for Isomorphic Strings.

const isIsomorphic = function(s, t) {
    const obj = {};
    debugger
    for( let i = 0; i < s.length; i++) {
        debugger
        if (!obj['s' + s[i]]) {
            debugger
            obj['s' + s[i]] = t[i];
        }
        if (!obj['t' + t[i]]) {
            debugger
            obj['t' + t[i]] = s[i];
        }
        if (t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) {
            debugger
            return false;
        }
    }
    debugger
    return true;
};

// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));


// const isIsomorphic = function(s, t) {
//     const hash = {};
    
//     for (let i = 0; i < s.length; i++) {
//         const sLetter = s[i];
//         const tLetter = t[i];
//         if (!hash[sLetter]) {
//             hash[sLetter] = tLetter;
//         } else if (!Object.values(hash).includes(tLetter)) {
//             console.log(Object.values(hash), tLetter)
//             return hash;
//         }
//     }
//     return true;
// };

//using Map
var isIsomorphic = function(s, t) {
    let m = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i]))
            m.set(s[i], t[i])
        else {
            
            if (m.get(s[i]) != t[i]) {
                
                return false
            }
        }
    }
    return new Set([...m.values()]).size == m.size;
};