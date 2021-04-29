const _ = require("lodash");

function sayHello() {
  console.log("Hello, World");
}

_.times(5, sayHello);

// insert
// print

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//  head           tail
// 1  -> 2 -> 3 -> 4
// insert(4)

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // we insert to the end of the linked list
    this.tail.next = newNode;
    this.tail = newNode;
  }
  //head               tail
  // 0 -> 1  -> 2 -> 3 -> 4
  // insert(0)
  insertHead(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  // remove, pass in value, remove first node that matches
  // if not found, don't worry about it
  remove(value) {
    if (this.head === null) return null;
    // head                 tail
    // 0 -> 1  -> 2 -> 3 -> 4
    // 0
    // 0 -> 1

    if (value === this.head.value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return;
      }
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.value === value) {
        // 0 -> 1  -> 2 -> 3 -> 4
        if (this.tail === currentNode) {
          this.tail = prevNode;
        }
        prevNode.next = currentNode.next;
        return;
      }
      currentNode = currentNode.next;
      prevNode = prevNode.next;
    }
  }

  print() {
    if (this.head === null) return null;
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertHead(-1);
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insertHead(0);

linkedList.remove(0);
linkedList.remove(4);
linkedList.remove(2);

linkedList.print();
