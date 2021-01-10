const { throwStatement } = require("@babel/types");

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
    }

    pop() {
        if (!this.length) return null;
        const currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newTail = currentTail.prev;
            currentTail.prev.next = null;
            currentTail.prev = null;
            this.tail = newTail; // disconnect currentTail from the rest of the list
        }
        this.length--;
        return currentTail;
    }

    shift() {
        if (!this.length) return null;
        const currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = currentHead.next;
            currentHead.next.prev = null;
            currentHead.next = null;
            this.head = newHead;
        }
        this.length--;
        return currentHead;
    }

    unshift(val) {
        const newHead = new Node(val);
        if (!this.length) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            const currentHead = this.head;
            currentHead.prev = newHead;
            newHead.prev = null;
            newHead.next = currentHead;
            this.head = newHead;
        }
        this.length++;
        return this.head;
    }

    forEach(cb) {
        let currentNode = this.head;
        while (currentNode) {
            // cb.call(this, currentNode);
            cb(currentNode);
            currentNode = currentNode.next;
        }
    }
}

const list = new DoublyLinkedList();
// list.push("A");
// list.push("B");
// list.push("C");
// console.log(list.pop());
console.log(list.unshift("A"));
// console.log(list);
// list.push("C");
// list.push("D");
console.log(list.forEach(node => {
    console.log(`${node.val}, head: ${list.head.val === node.val}, tail: ${list.tail.val === node.val}
    length: ${list.length}`);
}));
// console.log(list);