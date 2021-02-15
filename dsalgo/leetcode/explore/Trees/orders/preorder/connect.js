// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// Runtime: 104 ms, faster than 59.31% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 45.9 MB, less than 6.62% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
//iterative with BFS/Queue
var connect = function(root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length) {
        let next = [];
        while (queue.length) {
            let node = queue.shift();
            node.next = queue[0] || null;
            if (node.left) {
                next.push(node.left);
                next.push(node.right);
            }            
        }
        queue = next;
    }
    return root;
};

// Runtime: 104 ms, faster than 59.31% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 45.6 MB, less than 29.29% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
//recursion
var connect = function(root) {
    if (!root || !root.left) return root;
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;
    connect(root.left);
    connect(root.right);
    return root;
};