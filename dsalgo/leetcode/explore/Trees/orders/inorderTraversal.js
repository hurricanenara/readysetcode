
var inorderTraversal = function(root) {
    const data = [];
    if (root === null) return data;
    function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return data;
};