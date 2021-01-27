
// First solution 288ms T 0ms S

/*
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/* 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/*
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/*
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1];
};

/*
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
*/

// Faster solution from Discuss
// Runtime: 124 ms, faster than 63.32% of JavaScript online submissions for Min Stack.
// Memory Usage: 47.5 MB, less than 28.80% of JavaScript online submissions for Min Stack.

var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push({
        value: x,
        min: this.stack.length === 0 ? x : Math.min(x, this.getMin())
    });
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1].value;
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};