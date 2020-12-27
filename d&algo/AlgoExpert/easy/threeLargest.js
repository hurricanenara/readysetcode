function findThreeLargestNumbers(array) {
  // Write your code here.
	let threeLargest = [array[0]]; //[141]
	for (let i = 1; i < array.length; i++) {
		let next = array[i]; // 1
		if (threeLargest.every(num => num <= next)) {
			threeLargest.push(next);
			if (threeLargest.length === 4) threeLargest.shift();
		} else if (threeLargest.some(num => num <= next)) {
			if (threeLargest.length < 3) {
				threeLargest.splice(1, 0, next);
			} else {
				threeLargest.splice(1, 1, next);
				threeLargest.shift();
			}
		} else if (threeLargest.length < 3 && threeLargest.every(num => num >= next)) {
			threeLargest.unshift(next);
		}
	}
	return threeLargest;
}