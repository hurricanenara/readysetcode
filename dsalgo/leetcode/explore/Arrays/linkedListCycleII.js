// https://leetcode.com/problems/linked-list-cycle-ii/
// thorough explanation https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes

// Runtime: 96 ms, faster than 38.52% of JavaScript online submissions for Linked List Cycle II.
// Memory Usage: 41.3 MB, less than 53.35% of JavaScript online submissions for Linked List Cycle II.

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
             slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next
            }
            return slow;
        }
    }
    return null;
};

// X