class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
        this.queue = [];
        this.stack = [];
        this.visited = [];
    }

    bfs() {
        const q = this.queue;
        q.push(this.root);
        let currentNode = q[0];
        while (currentNode) {
            if (currentNode.left) q.push(currentNode.left);
            if (currentNode.right) q.push(currentNode.right);
            this.visited.push(q.shift().val);
            currentNode = q[0];
        }
        return this.visited;
    }
    
    dfsIterative() {
        
    }

    // dfsPreOrder() {
    //     debugger
    //     const visited = [];
    //     let currentNode = this.root;

    //     function dfsTraverse(node) {
    //         debugger
    //         visited.push(node.val);
    //         if (node.left) {
    //             debugger
    //             dfsTraverse(node.left);
    //         }
    //         if (node.right) {
    //             debugger
    //             dfsTraverse(node.right);
    //         }
    //     }
    //     debugger
    //     dfsTraverse(currentNode);
    //     debugger
    //     return visited;
    // }
    
}

const tree = new BinaryTree();

tree.root = new Node(10);
const root = tree.root;

root.left = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(7);

root.right = new Node(13);
root.right.left = new Node(11);
root.right.right = new Node(16);

// console.log(root);
// console.log(tree.bfs());
// console.log(tree.dfsPreOrder());
// console.log(tree.dfs());