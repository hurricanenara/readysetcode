class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// let answer = 0;
// function maxDepth(root, depth) {
//     if (!root) return;
//     if (root.left === null && root.right === null) {
//         answer = Math.max(answer, depth);
//     }
//     maxDepth(root.left, depth + 1);
//     maxDepth(root.right, depth + 1);
//     return answer
// }


//dfs also top bottom
var maxDepth = function(root) {
    let maxDepth = 0;
    function dfs(root, depth) {
        if (!root) {
            maxDepth = Math.max(depth, maxDepth);
            return;
        }
        dfs(root.left, depth+1);
        dfs(root.right, depth+1);
    }
    dfs(root, 0);
    return maxDepth;
	// Time Complexity: O(n)
    // Space Complexity: O(n), in the worst case; in case of a skewed tree
};

// short also bottom up
var maxDepthD = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//bfs
var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 0, queue = [{node: root, level:1}];
    while(queue.length) {
        let {node, level} = queue.shift();
        maxDepth = Math.max(maxDepth, level);
        if (node.left) queue.push({node: node.left, level: level+1});
        if (node.right) queue.push({node: node.right, level: level+1});
    }
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

var maxDepthQ = function(root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, len);
    }
    return depth;
};

const tree = new Node("E");
tree.right = new Node("F");
tree.right.right = new Node("G");
tree.left = new Node("B");
tree.left.right = new Node("D");
tree.left.right.left = new Node("C");
tree.left.left = new Node("A");

console.log(maxDepthD(tree));

// fastested recorded

function findDepth(node) {
    
    if(node == null) return 0;
    
    if(node.left == null && node.right == null) return 1;
    
    let leftDepth = findDepth(node.left) + 1
    let rightDepth = findDepth(node.right) + 1
    
    return Math.max(leftDepth, rightDepth)
}