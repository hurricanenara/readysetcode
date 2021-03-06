"use strict";
// union type in ts
function combine(input1, // instead of number | string
input2, resultConversion // literal types
) {
    // you can have more than two pipes/types
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNams = combine("Nara", "Seungyoon", "as-text");
console.log(combinedNams);
