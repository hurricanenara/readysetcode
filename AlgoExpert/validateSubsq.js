function isValidSubsequence(array, sequence) {
  // Write your code here.
	const seqArr = sequence;
	for (let i = 0; i < array.length; i++) {
		// console.log(`comparing ${array[i]} at index ${i}`)
		for (let j = 0; j < seqArr.length; j++) {
			// console.log(`with ${seqArr[j]} at index ${j}`)
			if (array[i] === seqArr[j]) {
				seqArr.shift();
				break;
			}
		}
	}
	return !seqArr.length;
}