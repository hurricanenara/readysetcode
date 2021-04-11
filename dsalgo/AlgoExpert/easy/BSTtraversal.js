function inOrderTraverse(tree, array) {
  // Write your code here.
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    array.push(node.value);
    traverse(node.right);
  }
  traverse(tree);
  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  function traverse(node) {
    if (!node) return;
    array.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(tree);
  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    array.push(node.value);
  }
  traverse(tree);
  return array;
}
