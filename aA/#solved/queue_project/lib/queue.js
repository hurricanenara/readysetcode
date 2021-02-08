// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (!this.length) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        return ++this.length;
    }

    dequeue() {
        if (!this.length) return null;
        let removed;
        if (this.length === 1) {
            removed = this.front;
            this.front = null;
            this.back = null;
        } else {
            removed = this.front;
            this.front = this.front.next;
        }
        this.length--;
        return removed.value;
    }
    
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;