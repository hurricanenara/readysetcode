const { throwStatement, tsExpressionWithTypeArguments } = require("@babel/types");

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
        return currentTail.val;
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
        return currentHead.val;
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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        const mid = this.length / 2;
        let counter;
        let currentNode;
        if (index <= mid) {
            currentNode = this.head;
            counter = index;
            while (counter) {
                currentNode = currentNode.next;
                counter--;
            }
        } else {
            currentNode = this.tail;
            counter = this.length - index - 1;
            while (counter) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode.val;
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
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            const foundNode = this.get(index);
            if (foundNode) {
                const leftToFoundNode = foundNode.prev;
                foundNode.prev = newNode;
                newNode.prev = leftToFoundNode;
                leftToFoundNode.next = newNode;
                newNode.next = foundNode;
            }
            this.length++;
        }
    }

    remove(index) {
        const foundNode = this.get(index);
        if (!this.length) return null;
        if (foundNode) {
            if (index === 0) {
                this.shift();
            } else if (index === this.length - 1) {
                this.pop();
            } else {
                const left = foundNode.prev;
                const right = foundNode.next;
                foundNode.prev = null;
                foundNode.next = null;
                left.next = right;
                right.prev = left;
                this.length--;
            }
            return foundNode.val;
        } else {
            return null;
        }
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
list.push("Z");
list.push("C");
list.push("D");
list.push("E");
// list.insert(4, "Z");
// list.remove(-2);
// list.push("F");
// console.log(list.pop());
// console.log(list.unshift("A"));
// console.log(list);
// list.push("C");
// list.push("D");
console.log(list.forEach(node => {
    console.log(`${node.val}, head: ${list.head.val === node.val}, tail: ${list.tail.val === node.val}
    length: ${list.length}`);
}));
// console.log(list.get(5).val);