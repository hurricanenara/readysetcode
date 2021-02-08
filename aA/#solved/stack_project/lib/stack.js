// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            let currentTop = this.top;
            this.top = node;
            node.next = currentTop;
        }
        return ++this.length;
    }

    pop() {
        let removed;
        if (!this.length) return null;
        if (this.length === 1) {
            removed = this.top;
            this.top = null;
            this.bottom = null;
        } else {
            removed = this.top;
            this.top = this.top.next;
        }
        this.length--;
        return removed.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
