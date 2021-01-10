
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // this.first is at the top of the stack
    /*
    | this.first |
    |    node    |
    |    node    |
    |    node    |
    |    node    |
    | this.last  |
    |____________|
    */

    push(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const lastNode = this.first;
            this.first = newNode;
            newNode.next = lastNode;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return null;

        const topNode = this.first;
        
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const nextNode = topNode.next;
            this.first = nextNode;
            topNode.next = null;
        }
        this.size--;
        return topNode.val;
    }


    forEach(cb) {
        let currentNode = this.first;
        while (currentNode) {
            // cb.call(this, currentNode);
            cb(currentNode);
            currentNode = currentNode.next;
        }
    }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
stack.pop();
// stack.pop();
// stack.pop();

console.log(stack);

console.log(stack.forEach(node => {
    console.log(`${node.val}, first: ${stack.first.val === node.val}, last: ${stack.last.val === node.val}
    size: ${stack.size}`);
}));