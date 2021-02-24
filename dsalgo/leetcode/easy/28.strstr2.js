

// no .substring method solution

// Runtime: 84 ms, faster than 49.06% of JavaScript online submissions for Implement strStr().
// Memory Usage: 39.4 MB, less than 42.54% of JavaScript online submissions for Implement strStr().
const strStr = (haystack, needle) => {
  if (needle === '' || needle === haystack) return 0;    
  if (haystack.length < needle.length) return -1;        
  
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {    
    if (haystack[i] === needle[0]) {                
      for (let j = 0; j < needle.length; j++) {     
        if (needle[j] !== haystack[i + j]) {        
          break;                                    
        } else if (j === needle.length - 1){        
          return i;                                
        }
      }
    }
  }
  
  return -1;                                       
};

// short and fast solution I prefer

// Runtime: 76 ms, faster than 87.28% of JavaScript online submissions for Implement strStr().
// Memory Usage: 38.6 MB, less than 88.50% of JavaScript online submissions for Implement strStr().
const strStr = (haystack, needle) => {
    let nL = needle.length;
    let hL = haystack.length;
    
    for (let start = 0; start < hL - nL + 1; ++start) {
        if (haystack.substring(start, start + nL) === needle) {
            return start;
        }
    }
    return -1;
};