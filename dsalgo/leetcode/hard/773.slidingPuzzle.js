/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const mapping = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4],
  };

  const swap = (state, pos, next) => {
    const array = state.split("");
    [array[pos], array[next]] = [array[next], array[pos]];
    return array.join("");
  };

  let state = "";
  board.forEach((row) => (state += row.join("")));

  const visited = new Set(state);

  const q = [[state, state.indexOf("0"), 0]];

  while (q.length) {
    let [state, pos, moves] = q.shift();

    if (state === "123450") {
      return moves;
    }

    for (let next of mapping[pos]) {
      const newState = swap(state, pos, next);
      if (visited.has(newState)) {
        continue;
      }
      visited.add(newState);
      q.push([newState, next, moves + 1]);
    }
  }
  return -1;
};

console.log(
  slidingPuzzle([
    [1, 2, 3],
    [4, 0, 5],
  ])
); // 1
console.log(
  slidingPuzzle([
    [1, 2, 3],
    [5, 4, 0],
  ])
); // -1
console.log(
  slidingPuzzle([
    [3, 2, 4],
    [1, 5, 0],
  ])
); // 14
