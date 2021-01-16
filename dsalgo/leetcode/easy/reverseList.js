
function reverseList(head) {
    let prev = null;

    while (head) {
        current = head;
        head = head.next;
        current.next = prev;
        prev = current;
    }
    return prev;
}