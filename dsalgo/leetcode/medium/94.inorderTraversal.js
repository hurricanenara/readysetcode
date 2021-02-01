
// recursive
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

// iterative
var inorderTraversal = function(root) {
    const stack = []
    const res =[]
    
    while (true) {
        if (root !== null) {
            stack.push(root)
            root = root.left
        } else {
            if (stack.length === 0) break
            root = stack.pop()
            res.push(root.val)
            root = root.right
        }
    }
    
    return res
};