// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

// Runtime: 80 ms, faster than 68.40% of JavaScript online submissions for Flatten a Multilevel Doubly Linked List.
// Memory Usage: 40 MB, less than 88.85% of JavaScript online submissions for Flatten a Multilevel Doubly Linked List.

class Node {
    constructor(val, prev=null, next=null, child=null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

// my solution that works fine via vscode and chrome devtools but not on leetcode:
// solved by detaching senteniel.next's prev proprety to null
var flatten = function(head) {
    let senteniel = new Node(0, null, null, null);
    let pointer = senteniel;
    
    function traverse(node) {
        if (node) {
            let newNode = new Node(node.val, null, null, null);
            pointer.next = newNode;
            newNode.prev = pointer;
            pointer = pointer.next;
            if (node.child) traverse(node.child);
            traverse(node.next);            
        }
    }
    traverse(head);
    senteniel.next.prev = null;
    return senteniel.next;
};

// iterative approach
var flatten = function(head) {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);
    
    const stack = [head];
    let current = dummyHead;
    let prev = null;
    
    while (stack.length) {
        current = stack.pop();
        
        if (prev) {
            current.prev = prev;
            prev.next = current;
        }
        
        if (current.next) stack.push(current.next);
        if (current.child) {
            stack.push(current.child);
            current.child = null;
        }
        prev = current;
    }
    return dummyHead.next;
};

var node12 = new Node(12)
var node11 = new Node(11)
var node10 = new Node(10)
var node9 = new Node(9)
var node8 = new Node(8)
var node7 = new Node(7)
var node6 = new Node(6)
var node5 = new Node(5)
var node4 = new Node(4)
var node3 = new Node(3)
var node2 = new Node(2)
var node1 = new Node(1)

node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.next = node4;
node3.prev = node2;
node4.next = node5;
node4.prev = node3;
node5.next = node6;
node5.prev = node4;
node6.prev = node5;
node3.child = node7;
node7.next = node8;
node8.prev = node7;
node8.next = node9;
node9.next = node10;
node9.prev = node8;
node10.prev = node9;
node8.child = node11;
node11.next = node12;
node12.prev = node11;

console.log(flatten(node1));