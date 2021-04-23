// Runtime: 164 ms, faster than 68.60% of JavaScript online submissions for Boats to Save People.
// Memory Usage: 46.2 MB, less than 75.00% of JavaScript online submissions for Boats to Save People.

var numRescueBoats = function (people, limit) {
  let boats = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => a - b);

  while (i <= j) {
    if (people[i] + people[j] > limit) {
      boats++;
      j--;
    } else {
      j--, i++, boats++;
    }
  }
  return boats;
};
