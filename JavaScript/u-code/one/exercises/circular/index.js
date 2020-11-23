// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// function circular(list) {
//     let slow = list.head;
//     let fast = list.head;
//     while (fast.next && fast.next.next) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow.data === fast.data) return true;
//     }
//     return false;
// }

function circular(list) {
    const nodes = new Set();
    for (let node of list) {
        if (nodes.has(node)) {
            return true;
        }
        nodes.add(node);
    }
 
    return false;
}

module.exports = circular;
