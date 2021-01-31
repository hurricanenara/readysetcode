class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}


// var preorderTraversal = function(root) {
//     let currentNode = root;
//     const vals = [];
//     //search left
//     while (currentNode) {
//         vals.push(currentNode.val)
//         currentNode = currentNode.left || currentNode.right;
//     }
//     return vals;
// };

// faster recursion
// 92ms
var preorderTraversal = function(root) {
    const vals = [];
    function traverse(root) {
        if (root === null) return vals;
        vals.push(root.val);
        traverse(root.left);
        traverse(root.right);
        return vals;      
    }
    return traverse(root);
};

//recursively return the preorder traversal of a tree's nodes' values
// 160ms
var preorderTraversal = function(root) {
    const result = [];
    function traverse(node) {
        if (root != null) {
            result.push(node.val);
            if (node.left) { 
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
    }
    traverse(root);
    return result;
};

const tree = new Node(1, null, new Node(2, new Node(3), null));
const tree2 = new Node(1, new Node(2), null);
const tree3 = new Node(1, null, new Node(2));
const tree4 = new Node(3, new Node(2), new Node(1));
// console.log(preorderTraversal(tree));
// console.log(preorderTraversal(tree2));
// console.log(preorderTraversal(tree3));
console.log(preorderTraversal(tree4));
// console.log(tree4)