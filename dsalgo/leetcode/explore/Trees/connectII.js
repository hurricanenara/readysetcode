// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// Runtime: 96 ms, faster than 88.51% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.
// Memory Usage: 43.3 MB, less than 76.13% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.

var connect = function(root) {
    let dummyHead = new Node(0);
    let pre = dummyHead;
    let head = root;
    while (root !== null) {
        if (root.left !== null) {
            pre.next = root.left;
            pre = pre.next;
        }
        if (root.right !== null) {
            pre.next = root.right;
            pre = pre.next;
        }
        root = root.next;
        if (root === null) {
            pre = dummyHead;
            root = dummyHead.next;
            dummyHead.next = null;
        }
    }
    return head;
};
// X
// input [0,2,4,1,null,3,-1,5,1,null,6,null,8]
// exepcted [0,#,2,4,#,1,3,-1,#,5,1,6,8,#]

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/37813/Java-solution-with-constant-space