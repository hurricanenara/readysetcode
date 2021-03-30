// https://www.algoexpert.io/questions/Node%20Depths

function nodeDepths(root) {
  // Write your code here.
	let total = 0;
	function traverse(node, depth) {
		if (!node) return;
		total += depth;
		traverse(node.left, depth + 1);
		traverse(node.right, depth + 1);
	}
	traverse(root, 0);
	return total;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}