// https://leetcode.com/problems/reverse-words-in-a-string/

// Runtime: 80 ms, faster than 78.33% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 40.5 MB, less than 37.20% of JavaScript online submissions for Reverse Words in a String.

const reverseWords = string => {
    const splitString = string.split(" ");
    const reversed = [];

    splitString.forEach(word => {
        if (word !== " " && word !== "") {
            reversed.push(word);
        }
    }); // reversed = ["hello", "word"];

    return reversed.reduce((acc, el) => {
        return el + " " + acc;
    });
}

// brute force pseudo

// split the string with " " delimiter
// then iterate through the array, only filter elements that are not a space : " " in reverse order

// "Hello  my      name      is  word" => "word is name my Hello"


console.log(reverseWords("the sky is blue")) //"blue is sky the"
console.log(reverseWords("  hello world  ")) //"world hello"
console.log(reverseWords("  Bob    Loves  Alice   ")) //"Alice Loves Bob"

