class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// iterative
//  O(N) T | O(N) S
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode === null) continue;
    swap(currentNode);
    queue.push(currentNode.left);
    queue.push(currentNode.right);
  }
}

//recursive
//  O(N) T | O(depth) S
function invertBinaryTree(tree) {
  if (tree === null) return;
  swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swap(node) {
  [node.left, node.right] = [node.right, node.left];
}
