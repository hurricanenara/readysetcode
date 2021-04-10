// O(N) T | O(N^2) S

function maxSumIncreasingSubsequence(array) {
  const sequences = new Array(array.length).fill(null);
  const sums = array.slice();
  let maxSumIdx = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      //strictly increasing < ; <= not stricly increasing could be same
      //  currentNum >= sums[i]) <= takes what ever comes last, > takes whatever comes first
      if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum;
        sequences[i] = j;
      }
    }
    if (sums[i] >= sums[maxSumIdx]) {
      maxSumIdx = i;
    }
  }
  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== null) {
    sequence.push(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence.reverse();
}

console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30])); // [110, [10, 20, 30, 50]]
console.log(maxSumIncreasingSubsequence([1])); // [1, [1]]
console.log(maxSumIncreasingSubsequence([-1])); // [-1, [-1]]
console.log(maxSumIncreasingSubsequence([-1, 1])); // [1, [1]]
console.log(maxSumIncreasingSubsequence([5, 4, 3, 2, 1])); // [5, [5]]
console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7])); // [35, [8, 12, 15]]
console.log(
  maxSumIncreasingSubsequence([
    10,
    15,
    4,
    5,
    11,
    14,
    31,
    25,
    31,
    23,
    25,
    31,
    50,
  ])
); // [164, [10, 11, 14, 23, 25, 31, 50]]
