class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// 96 ms
// 41 mb
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

// Runtime: 88 ms, faster than 82.33% of JavaScript online submissions for Odd Even Linked List.
// Memory Usage: 41.4 MB, less than 14.79% of JavaScript online submissions for Odd Even Linked List.
var oddEvenList = function(head) {
    if (!head) return head;

    let odd = head;
    let even = head.next;

    while (odd && odd.next) {
        let temp = odd.next;
        odd.next = odd.next.next;
        if (odd.next) {
            odd = odd.next;
            temp.next = odd.next;
        }
    }
    odd.next = even;
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


