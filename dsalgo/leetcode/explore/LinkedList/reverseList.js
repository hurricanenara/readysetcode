// https://leetcode.com/problems/reverse-linked-list/

// Runtime: 76 ms, faster than 96.10% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.8 MB, less than 25.93% of JavaScript online submissions for Reverse Linked List.

var reverseList = function(head) {
    let prev = null;
    while (head) {
        let temp = head;
        head = head.next;
        temp.next = prev;
        prev = temp;
    }
    return prev;
};