// Runtime: 100 ms, faster than 49.36% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 43.3 MB, less than 69.95% of JavaScript online submissions for Remove Linked List Elements.

var removeElements = function(head, val) {
    if (!head) return head;
    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
    let current = head;
    while (current && current.next) {
        if (current.next.val === val) {
            const nodeToRemove = current.next;
            current.next = nodeToRemove.next;
        } else {
            current = current.next;
        }
    }
    return head;
};