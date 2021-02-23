

// var findCircleNum = function(M) {
//     let res = 0;
//     const dsu = new DSU(M.length);
//     for(let row = 0; row < M.length; row++) {
//         for(let col = 0; col < M[0].length; col++) {
//             if(M[row][col] === 1) {
//                 dsu.union(row, col);
//             }
//         }
//     }
//     return new Set(M.map((m, i) => dsu.find(i))).size;
// };

// class DSU {
//     constructor(N) {
//         this.parent = [...new Array(N).keys()];
//     }
//     find(x) {
//         if(this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
//         return this.parent[x];
//     }
//     union(x, y) {
//         this.parent[this.find(x)] = this.find(y);
//     }
// }

// //
// var findCircleNum = function(isConnected) {
//    let count = 0; 
//    const len = isConnected.length; 
//    const visited = {}; 
//    for(let i =0;i<len;i++) {
//      if(!visited[i]) {
//          count++;         
//          dfs(isConnected,i,visited);
//      }      
//    }
//    return count; 
// };

// function dfs(m,i,visited) {
//     visited[i] = true;
//     const arr = m[i];
//     for(let j = 0;j<arr.length;j++) {
//         if(arr[j] === 1 && !visited[j]) {
//             dfs(m,j,visited);
//         }
//     }
    
// }

//
// Runtime: 76 ms, faster than 98.97% of JavaScript online submissions for Number of Provinces.
// Memory Usage: 40.2 MB, less than 97.82% of JavaScript online submissions for Number of Provinces.
var findCircleNum = function(isConnected) {
    let visited = new Set;
    let provs = 0;
    for(let i = 0; i < isConnected.length; i++) {
        if(!(visited.has(i))) {
           provs++;
           DFS(isConnected, i, visited);
        }
    }
    return provs;
};

const DFS = (isConnected, i, visited) => {
    visited.add(i);
    for(let j = 1; j < isConnected.length; j++) {
        if(isConnected[i][j] && !(visited.has(j))) DFS(isConnected, j, visited);
    }
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3