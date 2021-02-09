/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    
    while (slow !== null) {
        if (head.val !== slow.val) return false;
        slow = slow.next;
        head = head.next;
    }
    return true;
};

var reverseList = function(head) {
    let prev = null;
    
    while (head) {
        const current = head;
        head = head.next;
        current.next = prev;
        prev = current;
    }
    return prev;
}

// recursion
var isPalindrome = function(head) {
    let curr = head;
    const traverse = node => {
        if (node === null) {
            return true;
        }
        // traverse to the end of the list first
        const prevIsSame = traverse(node.next);
        // when the call stack bounces back, compare the values 
        // from the head and from the bottom up
        const currIsSame = curr.val === node.val;
        curr = curr.next;
        return prevIsSame && currIsSame;
    }
    return traverse(head);
};