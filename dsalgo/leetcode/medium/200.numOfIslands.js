

var numIslands = function(grid) {
    
    const dfs = (i, j) => {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return;
        
        grid[i][j] = '0';
        
        dfs(i-1, j); // up
        dfs(i+1, j); // down
        dfs(i, j-1); // left
        dfs(i, j+1); // right
    }
    
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        
        for(let j = 0; j < grid[i].length; j++) {
            
            if(grid[i][j] === '1') {
                count++;
                dfs(i, j)
            }
        }
    }
    return count;
};

// console.log(numIslands([
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]));
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));