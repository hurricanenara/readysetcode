// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/

// Runtime: 88 ms, faster than 54.18% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40 MB, less than 85.26% of JavaScript online submissions for Remove Nth Node From End of List.

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};