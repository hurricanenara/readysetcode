// first attempt
// did not account for non-running characters

// function runLengthEncoding(string) {
//   // Write your code here.
// 	const dict = {};
// 	let encoded = "";
// 	for (let char of string) {
// 		dict[char] = ++dict[char] || 1;
// 	}
	
// 	for (let key in dict) {
// 		const mult = Math.floor(dict[key] / 9);
// 		const mod = dict[key] % 9;
// 		encoded += `9${key}`.repeat(mult) + `${mod}${key}`;
// 	}
// 	return encoded;
// }



function runLengthEncoding(string) {
	let encoded = "";
	let runningLength = 0;
	let i = 0;
	let j = 0;
	
	while (j < string.length || i < string.length) {
		if (string[i] === string[j]) {
			runningLength++;
			j++;
		} else {
			if (runningLength > 9) {
				encoded += encode(string[i], runningLength);				
			} else {
				encoded += runningLength + string[i];
			}
			runningLength = 0;
			i = j;
		}
	}
	return encoded;
}

function encode(char, length) {
	let encoded = "";
	const numNines = Math.floor(length / 9);
	const remainder = length % 9;
	encoded += ("9" + char).repeat(numNines);
	return encoded + remainder + char;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
// console.log(runLengthEncoding());
// console.log(runLengthEncoding());