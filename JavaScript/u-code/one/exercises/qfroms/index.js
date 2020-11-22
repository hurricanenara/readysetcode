// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(data) {
        this.stack1.push(data);
    }

    remove() {
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        // this.data.pop();
        const ele = this.stack2.pop();

        //reset
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop())
        }

        return ele;
    }

    peek() {
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        const ele = this.stack2.peek();
        
        //reset
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop())
        }

        return ele;
    }

}

module.exports = Queue;
