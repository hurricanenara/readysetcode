class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// easy way
// O(N) T | O(N) S
function flattenBinaryTree(root) {
  const inOrderNodes = getNodesInOrder(root, []);
  for (let i = 0; i < inOrderNodes.length - 1; i++) {
    let leftNode = inOrderNodes[i];
    let rightNode = inOrderNodes[i + 1];
    leftNode.right = rightNode;
    rightNode.left = leftNode;
  }
  return inOrderNodes[0];
}

function getNodesInOrder(tree, array) {
  if (!tree) return;
  getNodesInOrder(tree.left, array);
  array.push(tree);
  getNodesInOrder(tree.right, array);
  return array;
}

// in-place O(N) | O(d) S
function flattenBinaryTree(root) {
  // Write your code here.
  const [leftMost, _] = flattenTree(root);
  return leftMost;
}

function flattenTree(node) {
  let leftMost;
  let rightMost;
  if (node.left === null) {
    leftMost = node;
  } else {
    let [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenTree(node.left);
    connectNodes(leftSubtreeRightMost, node);
    leftMost = leftSubtreeLeftMost;
  }

  if (node.right === null) {
    rightMost = node;
  } else {
    let [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenTree(node.right);
    connectNodes(node, rightSubtreeLeftMost);
    rightMost = rightSubtreeRightMost;
  }
  return [leftMost, rightMost];
}

function connectNodes(left, right) {
  left.right = right;
  right.left = left;
}
