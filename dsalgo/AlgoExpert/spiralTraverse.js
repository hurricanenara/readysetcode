function spiralTraverse(array, spiraled = []) {
	if (!array ) return spiraled;
	spiraled.push(...array.shift());
	return spiralTraverse(transpose(array), spiraled);
}

function transpose(array) {
    if (!array.length) return;
	const transposed = [];
	for (let c = array[0].length - 1; c >= 0; c--) {
		const row = []
		for (let r = 0; r < array.length; r++) {
			row.push(array[r][c]);
		}
		transposed.push(row);
	}
	return transposed;
}

console.log(spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]));