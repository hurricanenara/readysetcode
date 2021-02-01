
var postorderTraversal = function(root) {
    const data = [];
    if (root === null) return data;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.val);
    }
    traverse(root);
    return data;
};

// iterative
var postorderTraversal = function(root) {
    if(!root) return []
    
    let res = []
    let stack = [root]
    
    while (stack.length > 0) {
        let node = stack.pop()
        res.push(node.val)
        
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
        
    }
    return res.reverse();
};