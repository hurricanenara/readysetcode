// let string = "hello";

// for (let i in [4, 5, 6, 7]) {
//     console.log(i);
// }

var restoreString = function(s, indices) {
    let hash = {};
    for (let i in indices) {
        hash[indices[i]] = s[i];
    }
    return Object.values(hash).join('');
};

// Runtime: 88 ms, faster than 70.80% of JavaScript online submissions for Shuffle String.
// Memory Usage: 40.6 MB, less than 6.52% of JavaScript online submissions for Shuffle String.

//fastest code
// My take to imporve below code - what if you map it?

const restoreString = function(s, indices) {
  const newStringArr = [];
  
  indices.forEach((index, i) => {
    newStringArr[index] = s[i];
  });     
  
  return newStringArr.join('');
};

//smallest space

var restoreString = function(s, indices) {
   
    const result = new Array(s.length);
   
    [...s].forEach((x, i) =>{
     (result[indices[i]] = x)});
    // console.log(result)
    return result.join('');
};