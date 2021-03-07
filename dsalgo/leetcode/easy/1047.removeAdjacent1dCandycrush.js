// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// Runtime: 124 ms, faster than 29.26% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 51.1 MB, less than 6.85% of JavaScript online submissions for Remove All Adjacent Duplicates In String.

const removeAdjacent = string => {
    if (!string.length) return "";

    const stack = [];
    // [["c", 1], ["a", 1]]
    // "abbaca"
    for (const char of string) {
        // [char, count]

        if (!stack.length) {
            stack.push([char, 1]);
            continue;
        }
        if (stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++;
            if (stack[stack.length - 1][1] > 1) stack.pop();
        } else {
            stack.push([char, 1]);
        }
    }

    let result = ""; // "ac"

    for (let i = 0; i < stack.length; i++) {
        const [char, count] = stack[i];
        result = result + char.repeat(count); // unshifting while appending
    }

    return result;

    // edge case to catch for empty string

    // recursively, stack

    // initialize a stack
    // iterate through my input string, then push onto the stack my data in
    // format -> [char, count]

    // if the top of stack data/count + incoming data/count from my iteration > 1
    // then I will pop off that data
    // I'll continue this iteration until I have completely passed the string once

    // time complexity O(N)
    // space complexity O(N) storing at most string.lenght of data/subarrays

}

// all lower case input string
// edge cases: string empty

console.log(removeAdjacent("abbaca")) // "ca"

// "abbaca" -> "aaca" -> "ca"