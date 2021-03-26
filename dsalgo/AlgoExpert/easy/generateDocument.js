
// O(n + m) time | O(c) space where n is the number of chars, m is the length of documents
// and c is the number of unique characters in the characters string

// function generateDocument(characters, document) {
// 	const count = {};
// 	for (const char of characters) {
// 		count[char] = (count[char] || 0) + 1;
// 	}

// 	for (const char of document) {
// 		if (!count[char]) return false;
// 		count[char]--;
// 	}
// 	return true;
// }

// O(m * (n + m)) time and O(1) space where n is the number of characters and m is the length of the document
function generateDocument(characters, document) {
    for (const character of document) {
        const documentFrequency = countCharacterFrequency(character, document);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;
    }
    return true;
}

function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    }
    return frequency;
}

console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"));