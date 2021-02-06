
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this. tail = null;
    }
}

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

const head = new Node(1);
const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1;

console.log(hasCycle(head));