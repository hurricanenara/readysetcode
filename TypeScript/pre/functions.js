"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    // can have a return type of undefined e.g. return;
    console.log("result" + num);
}
function addAndHandle(n1, n2, cb) {
    // see line 17 regarding void callback
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
    //   return result; although specified to not return anything, this is legal, but it just won't be used in any way
});
printResult(add(5, 12));
// function types
var combineValues;
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined; //is valid
