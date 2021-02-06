
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if (index > this.length) return -1;
        let currentNode = this.head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode.val;
    }

    addAtHead(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node; // missed
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    addAtTail(val) {
        let currenTail = this.head;
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    addAtIndex(index, val) {
        if (index === this.length) {
            this.addAtTail(val);
            return;
        }
        if (index > this.length) return;
        const newNode = new Node(val);
        let currentNode = this.head;
        let i = 0;
        let prev;
        let next;
        while (i < index) {
            if (i === index - 1) {
                prev = currentNode;
                next = prev.next;
                prev.next = newNode;
                newNode.next = next;
                this.length++;
                return;
            } else {
                i++;
                currentNode = currentNode.next;
            }
        }
    }

    deleteAtIndex(index) {
        if (index > this.length) return;
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }
        let currentNode = this.head;
        let i = 0;
        let prev;
        let next;
        while (i < index) {
            if (i === index - 1) {
                prev = currentNode;
                next = prev.next.next;
                prev.next = next;
                this.length--;
                return;
            } else {
                currentNode = currentNode.next;
                i++;
            }
        }
    }
}

// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[0],[0]]
// [null,null,null,null,2,null,2]

const sll = new SinglyLinkedList();

sll.addAtHead(1)
sll.addAtTail(3)
sll.addAtIndex(1, 2)
sll.get(1);
sll.deleteAtIndex(0);
sll.get(0);
// sll.addAtHead(2)
console.log(sll)
// console.log(sll.get(1))


// 1 -> 2 -> 3

// get(1)