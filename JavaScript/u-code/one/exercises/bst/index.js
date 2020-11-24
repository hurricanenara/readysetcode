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

    // insert(data) {
    //     let currentNode = this;
    //     if (data < currentNode.data) { 
    //         while (currentNode.left) { 
    //             currentNode = currentNode.left; 
    //         }
    //         if (data < currentNode.data) {
    //             currentNode.left = new Node(data); 
    //         } else {
    //             currentNode.right = new Node(data);
    //         }
    //     } else if (data > currentNode.data) {
    //         while (currentNode.right) {
    //             currentNode = currentNode.right;
    //         }
    //         if (data > currentNode.data) {
    //             currentNode.right = new Node(data);
    //         } else {
    //             currentNode.left = new Node(data);
    //         }
    //     }
    // }

    // using recursion
    insert(data) {
        let currentNode = this;
        if (data < currentNode.data) {
            if (currentNode.left) {
                currentNode.left.insert(data);
            } else {
                currentNode.left = new Node(data);
            }
        } else if (data > currentNode.data) {
            if (currentNode.right) {
                currentNode.right.insert(data);
            } else {
                currentNode.right = new Node(data);
            }
        }
    }

    // resursive contains

    contains(data) {
        let currentNode = this;
        if (currentNode.data === data) return currentNode;
        // if (currentNode.data) return null;
        if (data < currentNode.data) {
            if (currentNode.left) {
                return currentNode.left.contains(data);
            } else {
                return null;
            }
        } else {
            if (currentNode.right) {
                return currentNode.right.contains(data);
            } else {
                return null;
            }
        }
    }

    // shorter solution passing the next (left or right) node
    // contains(data, node = this) {
    //     if (!node) return null;
    //     if (node.data === data) return node;
    //     if (data > node.data) return this.contains(data, node.right);
    //     if (data < node.data) return this.contains(data, node.left);
    // }

    // another way
    contains(data) {
        if (this.data === data) return this;
        if (data < this. data && this.left) {
            return this.left.contains(data);
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        } else {
            return null;
        }
    }

    //my attempt without recursion
 
    // contains(data) {
    //     let currentNode = this;
    //     if (data < currentNode.data) {
    //         while (currentNode.left) {
    //             if (currentNode.left.data === data) return currentNode;
    //             currentNode = currentNode.left
    //         }
    //         return null;
    //     } else if (data > currentNode.data) {
    //         while (currentNode.right) {
    //             if (currentNode.right.data === data) return currentNode;
    //             currentNode = currentNode.right;
    //         }
    //         return null;
    //     }
    // }
}

module.exports = Node;
