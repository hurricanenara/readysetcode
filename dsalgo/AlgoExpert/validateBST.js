class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBST(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(node, minValue, maxValue) {
  if (node === null) return true;
  if (node.value < minValue || node.value >= maxValue) return false;

  let leftIsValid = validateBSTHelper(node.left, minValue, node.value);
  let rightIsValid = validateBSTHelper(node.right, node.value, maxValue);

  return leftIsValid && rightIsValid;
}

let node10 = new Node(10);
let node2 = new Node(2);
let node5 = new Node(5);
let node15 = new Node(15);
let node13 = new Node(13);
let node22 = new Node(22);
let node14 = new Node(14);
let node1 = new Node(1);
let node5ii = new Node(5);

node10.left = node5;
node5.left = node2;
node2.left = node1;
node5.right = node5ii;
node10.right = node15;
node15.left = node13;
node15.right = node22;
node13.right = node14;

console.log(validateBST(node10));
