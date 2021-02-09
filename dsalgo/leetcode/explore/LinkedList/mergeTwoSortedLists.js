
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var mergeTwoLists = function(l1, l2) {
    let head = new Node(0);
    let pointer = head;

    while (true) {
        if (!l1 && !l2) {
            return null;
        } else if (!l1) {
            pointer.next = l2;
            break;
        } else if (!l2) {
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
            const newNode = new Node(smallerVal);
            pointer.next = newNode;
            pointer = pointer.next;
        }
    }
    return head.next;
}