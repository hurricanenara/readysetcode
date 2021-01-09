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

    unshift(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    get(index) {
        if ((this.length < index) || (this.head === null) || index < 0) return null;
        let counter = index;
        let currentNode = this.head;
        while (counter > 0) {
            counter--;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        const newNode = new Node(val);
        const rightNode = this.get(index);
        const leftNode = this.get(index - 1);

        if (index < 0) return null;

        if (this.head === null || index === 0) {
            this.unshift(val);
            return true; // or we can use !!this.unshift(val);
        } else if (index >= this.length) {
            this.push(val);
            return true;
        } else {
            leftNode.next = newNode;
            newNode.next = rightNode;
            this.length++;
        }
    }
}

const list = new SinglyLinkedList();
list.push("A");
// list.push("B");
list.push("C");
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.unshift("Z");
// list.unshift("X");
list.insert(1, "Z");
console.log(list);
console.log(list.head.next);


// const list2 = new SinglyLinkedList();
// console.log(list2.pop("A"));