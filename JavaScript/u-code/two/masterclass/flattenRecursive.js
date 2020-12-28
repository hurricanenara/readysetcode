function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  return arr.reduce((acc, el) => {
      if (Array.isArray(el)) {
          return acc.concat(flatten(el));
      } else {
          return acc.concat(el);
      }
  }, []);
}

// MDN
// const flatten = arr => {
//    return arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flattenDeep(val) ] : [...acc, val], []);
// }

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]