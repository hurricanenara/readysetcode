// Runtime: 84 ms, faster than 84.80% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 41 MB, less than 69.99% of JavaScript online submissions for Linked List Cycle.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow.val === fast.val) return true;
    }
    return false;
};