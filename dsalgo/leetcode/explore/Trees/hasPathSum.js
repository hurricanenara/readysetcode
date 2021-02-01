// https://leetcode.com/problems/path-sum/

// Runtime: 84 ms, faster than 93.06% of JavaScript online submissions for Path Sum.
// Memory Usage: 42 MB, less than 73.48% of JavaScript online submissions for Path Sum.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};

const tree = new Node(5);
tree.right = new Node(8);
tree.right.right = new Node(4);
tree.right.left = new Node(13);
tree.right.right.right = new Node(1);
tree.left = new Node(4);
tree.left.left = new Node(11);
tree.left.left.left = new Node(7);
tree.left.left.right = new Node(2);

console.log(hasPathSum(tree, 22))