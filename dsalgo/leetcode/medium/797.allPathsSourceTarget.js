// https://leetcode.com/problems/all-paths-from-source-to-target/

// Runtime: 120 ms, faster than 63.49% of JavaScript online submissions for All Paths From Source to Target.
// Memory Usage: 47.3 MB, less than 34.26% of JavaScript online submissions for All Paths From Source to Target.

// var allPathsSourceTarget = function(graph) {
//     const paths = [];

//     const dfs = (index, path) => {
//         // only if the path is a target path
//         if (path[path.length - 1] === graph.length - 1) {
//             paths.push(path);
//             return;
//         }
//         for (let i = 0; i < graph[index].length; i++) {
//             dfs(graph[index][i], [...path, graph[index][i]])
//         }
//     }
//     dfs(0, [0]);
//     return paths;

// };

var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;

    const paths = [];

    const dfs = (node, path) => {
        path.push(node);

        // if we've reached the target, we've found a path

        if (node === target) {
            paths.push(path);
            return;
        }

        for (let edge of graph[node]) {
            dfs(edge, [...path]); // pass in copy of path;
        }
    }
    dfs(0, []);
    return paths;
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));
// console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));
// console.log(allPathsSourceTarget([[1],[]]));
// console.log(allPathsSourceTarget([[1,2,3],[2],[3],[]]));
// console.log(allPathsSourceTarget([[1,3],[2],[3],[]]));