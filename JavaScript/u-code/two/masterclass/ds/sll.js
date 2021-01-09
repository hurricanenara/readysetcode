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
        
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.next.next === null) {
                currentNode.next = null;
                this.tail = currentNode;
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
console.log(list);
list.pop("B");
console.log(list);
