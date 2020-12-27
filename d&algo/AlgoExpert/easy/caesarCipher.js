function caesarCipherEncryptor(string, key) {
	const alpha = "abcdefghijklmnopqrstuvwxyz";
	let encrypted = "";
	
	for (let i = 0; i < string.length; i++) {
		const charIdx = alpha.indexOf(string[i]);
		encrypted += alpha[(charIdx + key) % alpha.length];
	}
	
	return encrypted;
}

//using charCoeAt() and a helper function O(N) t | O(N) s
/*
function caesarCipherEncryptor(string, key) {
  // Write your code here.
	const alpha = "abcdefghijklmnopqrstuvwxyz";
	let encrypted = "";
	
	for (let i = 0; i < string.length; i++) {
		const charIdx = alpha.indexOf(string[i]);
		encrypted += alpha[(charIdx + key) % alpha.length];
	}
	
	return encrypted;
}
*/
