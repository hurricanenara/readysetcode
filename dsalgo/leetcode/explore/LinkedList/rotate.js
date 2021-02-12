
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

// rotateRight([1,2,3,4,5], k) => [4,5,1,2,3]