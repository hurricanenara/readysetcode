function nodeDepths(root) {
  // Write your code here.
  let totalDepth = 0;

  function traverse(node, depth) {
    if (!node) return;
    totalDepth += depth;
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, 0);
  return totalDepth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
