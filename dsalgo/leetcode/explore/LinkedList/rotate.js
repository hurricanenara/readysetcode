// https://leetcode.com/problems/rotate-list/

// Runtime: 88 ms, faster than 85.84% of JavaScript online submissions for Rotate List.
// Memory Usage: 40.1 MB, less than 88.20% of JavaScript online submissions for Rotate List.

var rotateRight = function(head, k) {
    let dummy = new ListNode();
    let slow = dummy;
    let fast = dummy;
    let length = 0;
    dummy.next = head;
    
    while (fast.next !== null) {
        fast = fast.next;
        length++;
    }
    k = k % length;
    for (let i = 1; i <= length - k; i++) {
        slow = slow.next;
    }
    fast.next = dummy.next;
    dummy.next = slow.next;
    slow.next = null;
    return dummy.next;
}

// X

// rotateRight([1,2,3,4,5], k) => [4,5,1,2,3]