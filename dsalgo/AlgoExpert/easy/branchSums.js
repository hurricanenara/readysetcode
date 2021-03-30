class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	const branchSumArr = [];
	function traverse(node, sum = 0) {
		if (!node) return;
		sum += node.value;
		if (!node.left && !node.right) {
			branchSumArr.push(sum);
		}
		traverse(node.left, sum);
		traverse(node.right, sum);
	}
	traverse(root);
	return branchSumArr;
}

