// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        // this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (this.head === null) return null;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next) {
                currentNode = currentNode.next;
            } else {
                return currentNode;
            }
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (this.size() === 1) this.head = null;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next.next === null) {
                currentNode.next = null;
            }
            currentNode = currentNode.next;
        }
    }

    insertLast(data) {
        const newNode = new Node(data, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.next === null) {
                    currentNode.next = newNode;
                    return;
                }
                currentNode = currentNode.next;
            }
        }
    }

    getAt(index) {
        let count = 0;
        let currentNode = this.head;
        while (count < index && currentNode && index <= this.size()) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    removeAt(index) {
        const prevNode = this.getAt(index - 1);
        if (index === 0 && this.head) this.head = this.head.next;
        if (prevNode) {
            prevNode.next = this.getAt(index + 1);
        }
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.insertFirst(data);
        } else if (index > this.size()) {
            this.insertLast(data);
        } else {

            const prevNode = this.getAt(index - 1);
            if (prevNode) {
                prevNode.next = new Node(data, prevNode.next) || new Node(data);
            }

        }
        // const nodeToInsert = new Node(data, this.getAt(index + 1));
        // prevNode.next = nodeToInsert;
    }

    forEach(cb) {
        let currentNode = this.head;
        while (currentNode) {
            // cb.call(this, currentNode);
            cb(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
