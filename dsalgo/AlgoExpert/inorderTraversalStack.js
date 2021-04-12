class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// var inorderTraversal = function (root) {
//   const output = [];
//   if (root === null) return output;

//   const stack = [];
//   let curr = root;

//   while (curr !== null || stack.length !== 0) {
//     if (curr !== null) {
//       stack.push(curr);
//       curr = curr.left;
//     } else {
//       curr = stack.pop();
//       output.push(curr.value);
//       curr = curr.right;
//     }
//   }

//   return output;
// };
// var inorderTraversal = function (root) {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];

//   while (stack.length) {
//     if (root) {
//       root = root.left;
//       if (root) stack.push(root);
//     } else {
//       root = stack.pop();
//       result.push(root.value);
//       root = root.right;
//       if (root) stack.push(root);
//     }
//   }
//   return result;
// };

var inorderTraversal = function (root) {
  const stack = [];
  const res = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.value);
    curr = curr.right;
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

/**
 * The goal is to maintain a stack of nodes to visit as we traverse
 * down the tree. As we traverse down, We go left and push all the
 * left nodes first in the stack. Once we reach to the bottom, we
 * store the node value and traverse right.
 *           1
 *         /   \
 *        2     3    preorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
 *       / \   /     (left -> root -> right)
 *      4   5 6
 */
