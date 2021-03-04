
// using Map

/*
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/* 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return this.cache.get(key);
};

/* 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
    }
};

const lru = new LRUCache(2);
console.log(lru.put(1,1));
console.log(lru.put(2,2));
console.log(lru.get(1));
console.log(lru.put(3,3));
console.log(lru.get(2));
console.log(lru.put(4,4));
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));

// using Doubly Linked List

var LRUCache = function(capacity) {
  this.size = capacity;
  this.cache = new Map(); // key -> ListNode
  this.firstNode = new ListNode(0);
  this.lastNode = new ListNode(0);
  this.firstNode.next = this.lastNode;
  this.lastNode.prev = this.firstNode;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;
  const targetNode = this.cache.get(key);
  this.removeNode(targetNode);
  this.addNode(targetNode);
  return targetNode.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    const targetNode = this.cache.get(key);
    this.removeNode(targetNode)
  }
  const newNode = new ListNode(key, value);
  this.cache.set(key, newNode);
  this.addNode(newNode);
  if (this.cache.size > this.size) {
    const lastNode = this.lastNode.prev;
    this.cache.delete(lastNode.key);
    this.removeNode(lastNode);
  }
};

LRUCache.prototype.addNode = function(node) {
  const nextNode = this.firstNode.next;
  this.firstNode.next = node;
  node.prev = this.firstNode;
  node.next = nextNode;
  nextNode.prev = node;
};

LRUCache.prototype.removeNode = function(node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
}

function ListNode(key, val) {
  this.val = val;
  this.key = key;
  this.prev = null;
  this.next = null;
}