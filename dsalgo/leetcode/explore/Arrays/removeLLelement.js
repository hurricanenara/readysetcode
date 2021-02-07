
// 96ms
var removeElements = function(head, val) {
    if (!head) return head;
    while (head) {
        if (head.val === val) head = head.next;
        else break;
    }

    let currentNode = head;
    while (currentNode && currentNode.next) {
        if (currentNode.next.val === val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};

//recursive a little slower at 104ms
var removeElements = function(head, val) {
    if (!head) return null;
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next: head;
};