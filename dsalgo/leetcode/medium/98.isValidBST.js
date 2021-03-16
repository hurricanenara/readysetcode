


// recursive solution I like
var isValidBST = function(root) {
    
    function validate(root, low, high) {
        if (!root) return true;
        if ((low !== null && root.val <= low) || (high !== null && root.val >= high)) {
            return false;
        }
        return validate(root.right, root.val, high) && validate(root.left, low, root.val);
    }
    return validate(root, null, null);
};

// recursive
var isValidBST = function(root) {
    function isValid (root, low, high) {
        if (!root) return true;
        if (root.val <= low || root.val >= high) return false;
        if (root.left && root.val <= root.left.val) return false;
        if (root.right && root.val >= root.right.val) return false;
        
        return isValid(root.left, Math.min(root.val, low), Math.min(root.val, high)) && isValid(root.right, Math.max(root.val, low), Math.max(root.val, high));
    }
    return isValid(root, -Infinity, Infinity);
};

// iterative using stack
var isValidBST = function(root) {
    let stack = [];
    let inorder = Number.NEGATIVE_INFINITY;
    
    while (stack.length > 0 || root != null) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        };
        
        root = stack.pop();
        
        // if next element in inorder traversal
        // is smaller than the previous one
        // that's not BST
        
        if (root.val <= inorder) {
            return false;
        };
        
        inorder = root.val;
        root = root.right;
    }
    
    return true;
};