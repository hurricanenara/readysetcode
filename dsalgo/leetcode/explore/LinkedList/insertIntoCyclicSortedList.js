// https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/

// Runtime: 88 ms, faster than 57.14% of JavaScript online submissions for Insert into a Sorted Circular Linked List.
// Memory Usage: 40.1 MB, less than 65.71% of JavaScript online submissions for Insert into a Sorted Circular Linked List.


var insert = function(head, insertVal) {
    if (!head) {
        let newNode = new Node(insertVal, null);
        newNode.next = newNode;
        return newNode;
    }
    
    let prev = head;
    let curr = head.next;
    let toInsert = false;
    
    do {
        if (prev.val <= insertVal && insertVal <= curr.val) {
            toInsert = true;
        } else if (prev.val > curr.val) {
            if (insertVal >= prev.val || insertVal <= curr.val) {
                toInsert = true;
            }
        }
        if (toInsert) {
            prev.next = new Node(insertVal, curr);
            return head;
        }
        prev = curr;
        curr = curr.next;
    } while (prev !== head);
    
    prev.next = new Node(insertVal, curr);
    return head;
};

// X

// first attempt, wrong solution, not enough cases solved

var insert = function(head, insertVal) {
    let node = new Node(insertVal, null);
    let pointer = head;
    if (!head) {
        node.next = node;
        return node;
    }
    if (pointer.next === pointer) {
        pointer.next = node;
        node.next = pointer;
        return head;
    }
    while (pointer) {
        if (insertVal > pointer.val && insertVal <pointer.next.val) {
            pointer.next = node;
            node.next = pointer.next;
            return head;
        }
        pointer = pointer.next;
    }
    return head;
};