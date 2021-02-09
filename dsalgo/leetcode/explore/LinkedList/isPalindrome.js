
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;

    while (slow) {
        if (slow.val !== head.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
}

var reverseList = function(head) {
    let prev = null;
    while (head) {
        const current = head;
        head = head.next;
        current.next = prev;
        prev = current;
    }
    return prev;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1));