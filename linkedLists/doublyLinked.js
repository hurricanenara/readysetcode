
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class')
        }
    }

    setPreviousNode(node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        } else {
            throw new Error('Previous node must be a member of the Node class')
        }
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    }

    addToTail(data) {
        const newTail = new Node(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeTail() {
        const removedTail = this.tail;
        if (!removedTail) return;
        this.tail = removedTail.getPreviousNode();
        if (this.tail) this.tail.setNextNode(null);
        if (removedTail === this.head) this.removeHead();
        return removedTail.data;
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) return;
        this.head = removedHead.getNextNode();
        if (this.head) this.head.setPreviousNode(null);
        if (removedHead === this.tail) this.removeTail();
        return removedHead.data;
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode();
        }
        if (!nodeToRemove) return null;
        if (nodeToRemove === this.head) {
            this.removeHead();
        } else if (nodeToRemove === this.tail) {
            this.removeTail();
        } else {
            const nextNode = nodeToRemove.getNextNode();
            const previousNode = nodeToRemove.getPreviousNode();

            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        }
        return nodeToRemove;

    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

//subway exercise

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData('TimesSquare');
subway.printList();

// Traversing a singly linked list to find nth last node

const nthLastNode = (linkedList, n) => {
    let current = null;
    let tailSeeker = linkedList.head;
    let count = 0;
    while (tailSeeker) {
        tailSeeker = tailSeeker.next;
        if (count >= n) {
            if (!current) {
                current = linkedList.head;
            }
            current = current.next;
        }
        count++
    }
    return current;
}

Nodelist = [8, 7, 6, 5, 4, 3, 2, 1]
nthLastNode(Nodelist, 3)