
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
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }
        const currentTail = this.tail;
        const newTail = currentTail.prev;
        currentTail.prev.next = null;
        currentTail.prev = null;
        this.tail = newTail;
        this.length--;
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
list.push("A");
list.push("B");
list.push("C");
list.pop();
// list.push("C");
// list.push("D");
console.log(list.forEach(node => {
    console.log(`${node.val}, head: ${list.head.val === node.val}, tail: ${list.tail.val === node.val}
    length: ${list.length}`);
}));
// console.log(list);