function removeIslands(matrix) {
  function traverse(i, j) {
    if (i < 0 || i > matrix.length || j < 0 || j > matrix[0].length) return;
    if (matrix[i][j] === 1) {
    }
  }

  // check top row
  for (let c = 0; c < matrix[0].length; c++) {
    matrix[0][c];
  }

  //check left col
  for (let r = 0; r < matrix.length; r++) {
    matrix[r][1];
  }

  //check right col
  for (let r = 0; r < matrix.length; r++) {
    matrix[r][matrix[0].length];
  }

  // check bottom row
  for (let c = 0; c < matrix[0].length; c++) {
    matrix[matrix.length][c];
  }
}
