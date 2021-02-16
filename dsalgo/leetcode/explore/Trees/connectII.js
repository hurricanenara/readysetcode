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

//another solution
var connect = function(root) {
    let parent = root
    while (parent) {
        let dummy = new Node()
        let curr = dummy
        while (parent) {
            if (parent.left) {
                curr.next = parent.left
                curr=curr.next
            }
            if (parent.right) {
                curr.next = parent.right
                curr=curr.next
            }
            parent = parent.next
        }
        parent = dummy.next
    }
    return root
};

//recursion
var connect = function(root) {
    function dfs(node, parent) {
        if (!node) return
        if (node === parent?.left && parent?.right) {
            node.next = parent.right
        } else if (parent) {
            let curr = parent.next
            while (curr) {
                if (curr.left) node.next = curr.left
                else if (curr.right) node.next = curr.right
                if (node.next) curr = null
                else curr = curr.next
            }
        }
        dfs(node.right, node)
        dfs(node.left, node)
    }
    dfs(root, null)
    return root
}

//using queues
var connect = function(root) {
    
    if (root == null) return root;
    
    let q = [root];
    let q1 = [];
    
    while (q.length != 0) {
        let current = q.shift();
        
        if (current.left) { q1.push(current.left); }
        if (current.right) { q1.push(current.right); }
        
        if (q.length === 0 ) {
            
            for (let i = 0; i < q1.length - 1; i++) {
                q1[i].next = q1[i+1];
            }
            
            q = q1;
            q1 = [];
        }
    }
    return root;
};

//slightly different queue
var connect = function(root) {
    if(!root) return root;
    let queue = [root];
    while(queue.length !== 0){
        let length = queue.length;
        while(length>0){
            let cur = queue.shift(); 
            if(length - 1 > 0) cur.next = queue[0]
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
            length -=1;
        }
           
    }
    return root
};