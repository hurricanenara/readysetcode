class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to tail, remove from head
    // Head -> Node -> Node -> Node -> Tail

    // unshift
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const currentLast = this.last;
            this.last = newNode;
            currentLast.next = newNode;
        }
        return ++this.size;
    }

    // pop
    dequeue() {
        const currentFirst = this.first;
        if (!currentFirst) {
            return null;
        } else if(this.size === 1)  {
            this.first = null;
            this.last = null;
        } else {
            const newFirst = currentFirst.next;
            currentFirst.next = null;
            this.first = newFirst;
        }
        this.size--;
        return currentFirst.val;
    }

    forEach(cb) {
        let currentNode = this.last;
        while (currentNode) {
            // cb.call(this, currentNode);
            cb(currentNode);
            currentNode = currentNode.next;
        }
    }
}

const q = new Queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);

// console.log(q.forEach(node => {
//     console.log(`${node.val}, first: ${q.first.val === node.val}, last: ${q.last.val === node.val}
//     size: ${q.size}`);
// }));
// console.log(q.forEach(node => {
//     console.log(node.val);
// }));

