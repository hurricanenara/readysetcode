// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// Runtime: 100 ms, faster than 64.83% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 48.2 MB, less than 38.64% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree. 

var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    // return left === null ? right : right === null ? left : root;
    if (left === null) return right;
    if (right === null) return left;
    return root;
};

// X