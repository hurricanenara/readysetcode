
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