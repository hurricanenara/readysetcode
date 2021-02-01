// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Runtime: 88 ms, faster than 41.92% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 40.2 MB, less than 40.40% of JavaScript online submissions for Binary Tree Level Order Traversal.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const levelorderTraversal = root => {
//     const queue = [root];
//     const visited = [];
//     let current = root;
//     while (queue[0]) {
//         const node = queue.shift();
//         visited.push(node.val);
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return visited;
// }

// var levelOrder = function(root) {
//     if (root === null) return [];
//     const queue = [root];
//     const visited = [[root.val]];
//     while (queue[0]) {
//         const node = queue.shift();
//         const children = [];
//         if (node.left) {
//             queue.push(node.left);
//             children.push(node.left.val);
//         }
//         if (node.right) {
//             queue.push(node.right);
//             children.push(node.right.val);
//         }
//         if (children.length) visited.push(children);
//     }
//     return visited;
// };

var levelOrder = function(root) {
    if (!root) return [];
    
    const queue = [root];
    const levels = [];
    
    while (queue[0]) {
        const queueLength = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            if (current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            currentLevel.push(current.val);
        }
        levels.push(currentLevel);
    }
    return levels;
};

const tree = new Node(3);
tree.left = new Node(9);
tree.right = new Node(20)
tree.right.left = new Node(15)
tree.right.right = new Node(7)
// console.log(tree)
// tree.left = new Node(6);
// tree.right = new Node(15);
// tree.right.right = new Node(20);
// tree.left.left = new Node(3);
// tree.left.right = new Node(8);

console.log(levelOrder(tree));