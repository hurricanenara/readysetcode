// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/


// Runtime: 164 ms, faster than 57.03% of JavaScript online submissions for Serialize and Deserialize Binary Tree.
// Memory Usage: 49.1 MB, less than 58.05% of JavaScript online submissions for Serialize and Deserialize Binary Tree.

var serializeHelper = function (root, lst) {
	if (!root) {
		lst.push('null');
        return;
	} 
    // Pre-Order traversal
    lst.push(root.val);
    serializeHelper(root.left, lst);
    serializeHelper(root.right, lst);
};

var serialize = function (root) {
	var lst = [];
	serializeHelper(root, lst);
	return lst.toString();
};

var deserializeHelper = function (lst) {
	if (!lst.length) return null;
    
	let val = lst.shift();
    
	if (val === 'null') return null;
    
	var root = new TreeNode(val);
	root.left = deserializeHelper(lst);
	root.right = deserializeHelper(lst);
	return root;
};

var deserialize = function (data) {
	if (!data) return null;
	return deserializeHelper(data.split(','));
};

//X