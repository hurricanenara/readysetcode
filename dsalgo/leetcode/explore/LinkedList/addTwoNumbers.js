// https://leetcode.com/problems/add-two-numbers/

// Runtime: 120 ms, faster than 98.02% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 44.2 MB, less than 47.18% of JavaScript online submissions for Add Two Numbers.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new Node(0);
    let pointer = head;
    let sum = 0;
    while (true) {
        if (l1 === null && l2 === null) break;
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        if (sum + carry > 9) {
            sum = sum % 10;
            pointer.next = new Node(sum + carry);
            carry = 1;
            pointer = pointer.next;
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        } else if (sum + carry <= 9) {
            pointer.next = new Node(sum + carry);
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
            pointer = pointer.next;
            carry = 0;
        }
    }
    return head.next;
};

//l1 nodes
const node1 = new Node(9);
const node2 = new Node(9);
const node3 = new Node(9);
const node4 = new Node(9);
const node5 = new Node(9);
const node6 = new Node(9);
const node7 = new Node(9);
const node8 = new Node(9);
const node9 = new Node(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

//l2 nodes
const node10 = new Node(9);
const node11 = new Node(9);
const node12 = new Node(9);
const node13 = new Node(9);
node10.next = node11;
node11.next = node12;
node12.next = node13;
// //l1 nodes
// const node1 = new Node(2);
// const node2 = new Node(4);
// const node3 = new Node(3);
// node1.next = node2;
// node2.next = node3;

// //l2 nodes
// const node4 = new Node(5);
// const node5 = new Node(6);
// const node6 = new Node(4);
// node4.next = node5;
// node5.next = node6;

console.log(addTwoNumbers(node1, node4));