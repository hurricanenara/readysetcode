class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// function diameterOfBinaryTree(root) {
//     let max = 0
     
//     function maxDepth(root) {
//         if (root === null) return 0 // if our root(num) is null then there is no path. return 0/null
//         let left = maxDepth(root.left) // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
//         let right = maxDepth(root.right) //Same above
    
        
//         max = Math.max(max, left + right) //if the path doesn't go through the root we just get the max of them
//         return Math.max(left, right) + 1 // the path goes through the root so we add 1(for the root)
//     }
//     //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
//     maxDepth(root)
//     return max
// };

function maxD(root) {
    debugger
    if (root === null) {
        return 0;
    }
    const leftD = maxD(root.left);
    const rightD = maxD(root.right);

    return Math.max(leftD, rightD) + 1;
}

const tree = new Node(1, new Node(2, new Node(4), new Node(5, new Node(6))), new Node(3));
console.log(maxD(tree));
// console.log(tree.left.right)
