function productSum(array, level = 1) {
	let sum = 0;
	for (let element of array) {
		if (Array.isArray(element)) {
			sum += productSum(element, level + 1);
		} else {
			sum += element;
		}
	}
	return sum * level;
}