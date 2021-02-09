
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getTail() {
        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    addAtHead(val) {
        const currentNode = new Node(val);
        currentNode.next = this.head;
        if (this.head) this.head.prev = currentNode;
        return currentNode;
    }

    addAtTail(val) {
        if (!this.head) {
            this.addAtHead(val);
            return;
        }
        let prev = getTail();
        let currentNode = new Node(val);
        prev.next = currentNode;
        currentNode.prev = prev;
    }

    get(index) {
        let currentNode = this.head;
        for (let i = 0; i < index && currentNode; i++) {
            while (currentNode && currentNode.next) {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    addAtIndex(index, val) {
        if (index === 0) this.addAtHead(val);
        let prev = this.get(index);
        let newNode = new Node(val);
        newNode.prev = prev;
        newNode.next = prev.next;
        prev.next = newNode;
        if (prev.next) prev.next.prev = newNode;
    }

    deleteAtIndex(index) {
        let currentNode = get(index);
        if (!currentNode) return;

        if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
        } else {
            this.head = currentNode.next;
        }
        if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
        }
    }
}