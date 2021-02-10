// https://leetcode.com/problems/copy-list-with-random-pointer/


//most votes
var copyRandomList = function(head) {
    if(!head) {
      return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
      clones.set(n, new Node(n.val));
      n = n.next
    }
    n = head;
    while(n) {
      clones.get(n).next = clones.get(n.next) || null;
      clones.get(n).random = clones.get(n.random) || null;
      n = n.next
    }
    return clones.get(head);
};

//recursive
var copyRandomList = function(head) {
    let visited = new Map();
    
    let helper = (node) => {
        if (!node) return null;
        if (visited.has(node)) return visited.get(node);
        
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        newNode.next = helper(node.next);
        newNode.random = helper(node.random);
        return newNode;
    }
    return helper(head);
};

// using Map
// Runtime: 84 ms, faster than 49.61% of JavaScript online submissions for Copy List with Random Pointer.
// Memory Usage: 40.7 MB, less than 17.86% of JavaScript online submissions for Copy List with Random Pointer.
var copyRandomList = function(head) {
    if (!head) return null;
    let map = new Map();
    let curr = head;
    
    while (curr) {
        let node = curr;
        if (!map.get(node)) map.set(node, new Node(node.val));
        if (node.random !== null && !map.get(node.ramdom)) {
            map.set(node.random, new Node(node.random.val));
        }
        curr = curr.next;
    }
    
    curr = head;
    
    while (curr) {
        let node = map.get(curr);
        let next = curr.next;
        let random = curr.random;
        
        node.next = next !== null ? map.get(next) : null;
        node.random = random !== null ? map.get(random) : null;
        
        map.set(curr, node);
        curr = curr.next;
    }
    return map.get(head);
    
};

//iterative using copy property
// Runtime: 76 ms, faster than 89.32% of JavaScript online submissions for Copy List with Random Pointer.
// Memory Usage: 40.3 MB, less than 59.81% of JavaScript online submissions for Copy List with Random Pointer.
var copyRandomList = function(head) {
    if (!head) return null;
    let pointer = head;
    
    while (pointer !== null) {
        pointer.copy = new Node(pointer.val, pointer.next, pointer.random);
        pointer = pointer.next;
    }
    
    let copyHead = head.copy;
    
    pointer = head;
    
    while (pointer !== null) {
        if (pointer.copy.next) {
            pointer.copy.next = pointer.copy.next.copy;
        }
        if (pointer.copy.random) {
            pointer.copy.random = pointer.copy.random.copy;
        }
        pointer = pointer.next;
    }
    
    pointer = head;
    while (pointer !== null) {
        pointer.copy = undefined;
        pointer = pointer.next;
    }
    return copyHead;
};

//solution I like
// Runtime: 84 ms, faster than 49.61% of JavaScript online submissions for Copy List with Random Pointer.
// Memory Usage: 40.3 MB, less than 59.81% of JavaScript online submissions for Copy List with Random Pointer.
var copyRandomList = function(head) {
    const map = new Map([[null,null]]);
    let node = head;
    
    while (node) {
        map.set(node, new Node(node.val, null, null));
        node = node.next;
    }
    node = head;
    while (node) {
        const newNode = map.get(node);
        newNode.next = map.get(node.next);
        newNode.random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
};

// one while-loop with runner
var copyRandomList = function(head) {
    if (head === null) return null;

    var visited = new Map();
    var getNode = function(node) {
        if (!node) return null;
        if (visited.has(node)) {
            return visited.get(node);
        } else {
            visited.set(node, new Node(node.val));
            return visited.get(node);
        }
    }
    
    var runner = head;
    while(runner !== null) {
        getNode(runner).next = getNode(runner.next);
        getNode(runner).random = getNode(runner.random);
        runner = runner.next;
    }
    
    return getNode(head);
};
