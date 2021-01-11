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
        this.visited = [];
    }

    bfs() {
        const q = this.queue;
        q.push(this.root);
        let currentNode = q[0];
        while (currentNode) {
            debugger
            if (currentNode.left) {
                debugger
                q.push(currentNode.left);
            }
            if (currentNode.right) {
                debugger
                q.push(currentNode.right);
            }
            debugger
            this.visited.push(q.shift());
            currentNode = q[0];
        }
        debugger
        return this.visited;
    }
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
console.log(tree.bfs());