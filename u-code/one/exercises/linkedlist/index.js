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
        
    }

}

module.exports = { Node, LinkedList };
