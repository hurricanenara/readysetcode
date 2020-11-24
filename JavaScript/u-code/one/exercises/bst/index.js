// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        let currentNode = this;
        if (data < currentNode.data) { 
            while (currentNode.left) { 
                currentNode = currentNode.left; 
            }
            if (data < currentNode.data) {
                currentNode.left = new Node(data); 
            } else {
                currentNode.right = new Node(data);
            }
        } else if (data > currentNode.data) {
            while (currentNode.right) {
                currentNode = currentNode.right;
            }
            if (data > currentNode.data) {
                currentNode.right = new Node(data);
            } else {
                currentNode.left = new Node(data);
            }
        }
    }

    contains(data) {
        let currentNode = this;
        if (data < currentNode.data) {
            while (currentNode.left) {
                if (currentNode.left.data === data) return data;
                currentNode = currentNode.left
            }
            return null;
        } else if (data > currentNode.data) {
            while (currentNode.right) {
                if (currentNode.right.data === data) return data;
                currentNode = currentNode.right;
            }
            return null;
        }
    }
}

module.exports = Node;
