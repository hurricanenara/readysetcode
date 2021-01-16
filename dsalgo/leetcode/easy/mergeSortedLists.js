/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let head = new ListNode(0);
    let pointer = head;
    
    while (true) {
        if (l1 === null && l2 === null) {
            return null;
        } else if (l1 === null) {
            pointer.next = l2;
            break;
        } else if (l2 === null) {
            pointer.next = l1;
            break;
        } else {
            let smallerVal = 0;
            if (l1.val < l2.val) {
                smallerVal = l1.val;
                l1 = l1.next;
            } else {
                smallerVal = l2.val;
                l2 = l2.next;
            }
            const newNode = new ListNode(smallerVal);
            pointer.next = newNode;
            pointer = pointer.next;
        }
    }
    return head.next;
};

// recursive

var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2) return (l1? l1:l2);
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};