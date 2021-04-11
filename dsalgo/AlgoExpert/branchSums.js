class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  const sums = [];
  function traverse(node, sum) {
    if (!node) return;
    sum += node.value;
    if (!node.left && !node.right) {
      sums.push(sum);
    }
    traverse(node.left, sum);
    traverse(node.right, sum);
  }
  traverse(root, 0);
  return sums;
}
