// https://leetcode.com/problems/count-univalue-subtrees/

// Runtime: 116 ms, faster than 10.50% of JavaScript online submissions for Count Univalue Subtrees.
// Memory Usage: 40.5 MB, less than 70.14% of JavaScript online submissions for Count Univalue Subtrees.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var countUnivalSubtrees = function(root) {
    let count = 0;
    
    function findAllSubTrees(node) {
        if (node === null) return true;
        const left = findAllSubTrees(node.left);
        const right = findAllSubTrees(node.right);
        
        if (!left || !right) return false;
        
        if (node.left !== null && node.left.val !== node.val) return false;
        if (node.right !== null && node.right.val !== node.val) return false;
        
        count++;
        return true;
    }
    findAllSubTrees(root);
    return count;
};