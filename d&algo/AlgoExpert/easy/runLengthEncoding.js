// first attempt
// did not account for non-running characters

function runLengthEncoding(string) {
  // Write your code here.
	const dict = {};
	let encoded = "";
	for (let char of string) {
		dict[char] = ++dict[char] || 1;
	}
	
	for (let key in dict) {
		const mult = Math.floor(dict[key] / 9);
		const mod = dict[key] % 9;
		encoded += `9${key}`.repeat(mult) + `${mod}${key}`;
	}
	return encoded;
}