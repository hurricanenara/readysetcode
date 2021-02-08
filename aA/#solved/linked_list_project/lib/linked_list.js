// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;
        let removed;
        if (this.length === 1) {
            removed = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.next.next && currentNode.next) {
                currentNode = currentNode.next;
            }
            removed = currentNode.next;
            this.tail = currentNode;
            currentNode.next = null;
        }
        this.length--;
        return removed;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.length) return undefined;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (!this.length || index > this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index < 0 || index + 1 > this.length) return false;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        currentNode.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index + 1 > this.length) return false;
        let prevNode = this.head;
        const newNode = new Node(val);
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next;
        }
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (!this.length || index + 1 > this.length) return undefined;
        let removed;
        let prevNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next;
        }
        removed = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
