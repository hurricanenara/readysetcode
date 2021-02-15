function DFSPostOrder() {
    let data = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node);
    }
    traverse(this.root);
    return data;
}