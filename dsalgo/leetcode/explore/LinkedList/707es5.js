/**
 * Initialize your data structure here.
 */

var Node = function(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.length) return -1;
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
        currentNode = currentNode.next;
        i++;
    }
    return currentNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newTail = new Node(val);
    if (this.head === null) {
        this.head = newTail;
        this.tail = newTail;
        this.length++;
        return;
    }
    
    let currenTail = this.head;
    while (currenTail.next) {
        currenTail = currenTail.next;
    }
    currenTail.next = newTail;
    this.tail = newTail;
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }
    if (index > this.length) return;
    const newNode = new Node(val);
    let currentNode = this.head;
    let i = 0;
    let prev;
    let next;
    while (i < index) {
        if (i === index - 1) {
            prev = currentNode;
            next = prev.next;
            prev.next = newNode;
            newNode.next = next;
            this.length++;
            return;
        } else {
            i++;
            currentNode = currentNode.next;
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
        if (index > this.length) return;
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }
        let currentNode = this.head;
        let i = 0;
        let prev;
        let next;
        while (i < index) {
            if (i === index - 1) {
                prev = currentNode;
                next = prev.next.next;
                prev.next = next;
                this.length--;
                return;
            } else {
                currentNode = currentNode.next;
                i++;
            }
        }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */