function isPalindrome(string) {
	for (let i = 0; i < (string.length / 2); i++) {
		if (string[i] !== string[string.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}

// other solutions

// O(N) time | O(N) space
/*
function isPalindrome(string) {
  // Write your code here.
	for (let i = 0; i < (string.length / 2); i++) {
		if (string[i] !== string[string.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}
*/

// O(N) time | O(1) space
/*
function isPalindrome(string) {
  // Write your code here.
	for (let i = 0; i < (string.length / 2); i++) {
		if (string[i] !== string[string.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}
*/