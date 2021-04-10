class BST {
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
