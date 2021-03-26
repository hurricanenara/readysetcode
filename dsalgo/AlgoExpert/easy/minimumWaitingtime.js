

function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b);
	let totalWaitTime = 0;
	for (let i = 0; i < queries.length; i++) {
		totalWaitTime += (queries.length - 1 - i) * queries[i];
	}
	return totalWaitTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6])); // 17
console.log(minimumWaitingTime([1, 2, 4, 5, 2, 1])); // 23
console.log(minimumWaitingTime([5, 1, 4])); // 6