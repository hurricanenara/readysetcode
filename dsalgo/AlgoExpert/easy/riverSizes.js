function riverSizes(grid) {
  // Write your code here.
  const sizes = [];
  const dfs = (i, j, count) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === 0
    )
      return;
    if (grid[i][j] === 1) {
      count++;
      grid[i][j] = 0;
    }

    dfs(i - 1, j, count); // up
    dfs(i + 1, j, count); // down
    dfs(i, j - 1, count); // left
    dfs(i, j + 1, count); // right
    // return count;
    sizes.push(count);
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let count = dfs(i, j, 1);
        sizes.push(count);
      }
    }
  }
  return sizes;
}
