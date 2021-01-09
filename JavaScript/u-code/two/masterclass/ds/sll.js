const { tsImportEqualsDeclaration } = require("@babel/types");

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.next.next === null) {
                currentNode.next = null;
                this.tail = currentNode;
                this.length--;
            }
            currentNode = currentNode.next;
        }
    }

    shift() {
        if (this.head === null) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;

        }
        this.length--;
    }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
console.log(list);

// const list2 = new SinglyLinkedList();
// console.log(list2.pop("A"));