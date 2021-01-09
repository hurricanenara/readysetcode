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

    remove(index) {
        const rightNode = this.get(index + 1);
        const leftNode = this.get(index - 1);

        if (index < 0 || !this.length) return null;

        if (index >= (this.length - 1)) {
            this.pop();
        } else if (index === 0) {
            this.shift();
        } else {
            leftNode.next = rightNode;
            this.length--;
        }
    }

    // common challenge
    // reverse() {
    //     if (!this.head) return null;
    //     if (this.length === 1) return this;

    //     for (let i = 0; i < this.length / 2; i++) {
    //         let leftNode = this.get(i);
    //         let rightNode = this.get(this.length - i - 1);
    //         [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val];
    //     }
    //     return this;
    // }

    // reverse() {
    //     if (!this.head) return null;
    //     if (this.length === 1) return this;

    //     let beg = this.head;
    //     let end = this.tail;
    //     let counter = Math.floor(this.length / 2);
    //     let size = this.length - 1;
    //     while (counter) {
    //         [beg.val, end.val] = [end.val, beg.val];
    //         beg = beg.next;
    //         end = this.get(--size);
    //         counter--;
    //     }
    //     return this;
    // }

    reverse() {
        let nodeOfInterest = this.head;
        this.head = this.tail;
        this.tail = nodeOfInterest;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = nodeOfInterest.next;
            nodeOfInterest.next = prev;
            prev = nodeOfInterest;
            nodeOfInterest = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");

// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.unshift("Z");
// list.unshift("X");
// list.insert(1, "Z");
// console.log(list);
console.log(list.reverse());


// const list2 = new SinglyLinkedList();
// console.log(list2.pop("A"));