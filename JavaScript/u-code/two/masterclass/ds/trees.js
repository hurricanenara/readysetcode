class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return newNode.val;
        } else {
            let currentNode = this.root;
            while (currentNode) { // currentNode
                if (val === currentNode.val) return null;
                if (val < currentNode.val) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return newNode.val;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return newNode.val;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    find(val) {
        let currentNode = this.root;
        while (currentNode) {
            if (val === currentNode.val) return true;
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

}

const tree = new BinarySearchTree();
tree.root = new Node(10);
const root = tree.root;

root.left = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(7);

root.right = new Node(13);
root.right.left = new Node(11);
root.right.right = new Node(16);

// console.log(tree.find(2));

// find recursive
// find(val, node = this.root) {
//         if (node === null) return false;
//         if (val === node.value) return true;
//         return val < node.value ? this.find(val, node.left) : this.find(val, node.right);
// }

// console.log(tree.insert(17));



    //shortened

    // insert(value) {
    //     var newNode = new Node(value);
    //     if(this.root === null){
    //         this.root = newNode;
    //         return this;
    //     }
    //     var current = this.root;
    //     while(true){
    //         if(value === current.value) return undefined;
    //         if(value < current.value){
    //             if(current.left === null){
    //                 current.left = newNode;
    //                 return this;
    //             }
    //             current = current.left;
    //         } else {
    //             if(current.right === null){
    //                 current.right = newNode;
    //                 return this;
    //             } 
    //             current = current.right;
    //         }
    //     }
    // }

    // insert(val) {
    //     const newNode = new Node(val);
    //     if (!this.root) {
    //         this.root = newNode;
    //         return newNode.val;
    //     } else {
    //         let currentNode = this.root;
    //         while (true) { // true
    //             if (val === currentNode.val) return null;
    //             if (val < currentNode.val) {
    //                 if (!currentNode.left) {
    //                     currentNode.left = newNode;
    //                     return newNode.val;
    //                 } else {
    //                     currentNode = currentNode.left;
    //                 }
    //             } else {
    //                 if (!currentNode.right) {
    //                     currentNode.right = newNode;
    //                     return newNode.val;
    //                 } else {
    //                     currentNode = currentNode.right;
    //                 }
    //             }
    //         }
    //     }
    // }

    // insert(val) {
    //     const newNode = new Node(val);
    //     if (!this.root) {
    //         this.root = newNode;
    //     } else {
    //         const currentNode = this.root;
    //         while (currentNode) {
    //             if (val < currentNode.val) {
                    
    //                 currentNode = currentNode.left;
    //             } else {
                    
    //                 currentNode = currentNode.right;
    //             }
    //         }
    //     }
    // }