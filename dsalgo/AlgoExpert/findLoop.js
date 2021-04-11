class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(N) T | O(1) S

function findLoop(head) {
  // Write your code here.
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// function findLoop(head) {
//   // Write your code here.
//   let slow = head;
//   let fast = head;

//   while (slow.next && fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow.value === fast.value) {
//       fast = head;
//       while (fast.value !== slow.value) {
//         fast = fast.next;
//         slow = slow.next;
//       }
//       return slow;
//     }
//   }
// }

// function findLoop(head) {
//   // Write your code here.
//   let slow = head;
//   let fast = head;

//   while (slow.next && fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow.value === fast.value) {
//       return slow;
//     }
//   }
// }

const node0 = new LinkedList(0);
const node1 = new LinkedList(1);
const node2 = new LinkedList(2);
const node3 = new LinkedList(3);
const node4 = new LinkedList(4);
const node5 = new LinkedList(5);
const node6 = new LinkedList(6);
const node7 = new LinkedList(7);
const node8 = new LinkedList(8);
const node9 = new LinkedList(9);

node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node4;

console.log(findLoop(node0));
