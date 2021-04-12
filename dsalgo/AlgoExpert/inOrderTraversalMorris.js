class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var inorderTraversal = function (root) {
  const res = [];
  let curr = root;
  let pre;
  while (curr !== null) {
    if (curr.left === null) {
      res.push(curr.value);
      curr = curr.right;
    } else {
      pre = curr.left;
      while (pre.right !== null) {
        pre = pre.right;
      }
      pre.right = curr;
      let temp = curr;
      curr = curr.left;
      temp.left = null;
    }
  }
  return res;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node9 = new Node(9);
const node6 = new Node(6);
const node7 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node4.right = node9;
node3.left = node6;
node3.right = node7;

console.log(inorderTraversal(node1));
