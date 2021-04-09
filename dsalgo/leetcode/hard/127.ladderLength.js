var ladderLength = function (beginWord, endWord, wordList) {
  const graph = {};
  const fullWordList = [beginWord, ...wordList];

  for (let word of fullWordList) {
    const arr = [];
    for (let otherWord of fullWordList) {
      if (word === otherWord) {
        continue;
      }
      let i = 0;
      let diff = 0;

      while (i < word.length || i < otherWord.length) {
        if (word[i] !== otherWord[i]) {
          diff++;
        }
        i++;
      }
      if (diff === 1) {
        arr.push(otherWord);
      }
    }
    graph[word] = arr;
  }

  const queue = [[beginWord, 1]];
  const visited = new Set();

  while (queue.length) {
    const [node, gen] = queue.shift();
    if (node === endWord) {
      return gen;
    }
    if (visited.has(node) || !graph[node]) {
      continue;
    }
    visited.add(node);

    for (let vertex of graph[node]) {
      queue.push([vertex, gen + 1]);
    }
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
// console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
