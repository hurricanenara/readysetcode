class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  let diameter = 0;
  function maxDepth(root) {
    if (!root) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    diameter = Math.max(diameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  maxDepth(tree);
  return diameter;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);

node1.left = node3;
node1.right = node2;
node3.left = node7;
node3.right = node4;
node7.left = node8;
node8.left = node9;
node4.right = node5;
node5.right = node6;

console.log(binaryTreeDiameter(node1));
