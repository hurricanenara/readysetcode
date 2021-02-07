class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var oddEvenList = function(head) {
    if (!head) return head;
    let oddPointer = head;
    let evenPointer = head.next;
    let evenHead = head.next;
    
    while (oddPointer && oddPointer.next && oddPointer.next.next) {
        oddPointer.next = oddPointer.next.next;
        oddPointer = oddPointer.next;
        evenPointer.next = oddPointer.next;
        evenPointer = evenPointer.next;
    }
    oddPointer.next = evenHead;
    return head;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
const list = node1;

console.log(oddEvenList(list));


