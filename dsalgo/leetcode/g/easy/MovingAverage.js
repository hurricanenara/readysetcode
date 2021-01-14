// Runtime: 144 ms, faster than 23.74% of JavaScript online submissions for Moving Average from Data Stream.
// Memory Usage: 45.8 MB, less than 9.85% of JavaScript online submissions for Moving Average from Data Stream.

var MovingAverage = function(size) {
    this.vals = [];
    this.queue = [null];
    this.size = size;
};

/*
@param {number} val
@return {number}
 */
// MovingAverage.prototype.next = function(val) {
//     if (this.vals.length === this.size) {
//         this.vals.shift();
//     }
//     this.vals.push(val);
//     const sum = this.vals.reduce((acc, el) => acc + el);
//     this.queue.push(sum / this.vals.length);
//     return sum / this.vals.length;
// };
// MovingAverage.prototype.next = function(val) {
//     if (this.vals.length < this.size) {
//         this.vals.push(val);
//     } else if (this.vals.length === this.size) {
//         this.vals.shift();
//         this.vals.push(val);
//     }
//     const sum = this.vals.reduce((acc, el) => acc + el);
//     this.queue.push(sum / this.vals.length);
//     return sum / this.vals.length;
// };


// optimized
// Runtime: 116 ms, faster than 84.34% of JavaScript online submissions for Moving Average from Data Stream.
// Memory Usage: 44.6 MB, less than 74.49% of JavaScript online submissions for Moving Average from Data Stream.
var MovingAverage = function(size) {
    this.queue = [];
    this.size = size;
    this.res = 0;
};

/*
@param {number} val
@return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val);
    if (this.queue.length > this.size) {
        this.res -= this.queue.shift();
    }
    this.res += val;
    return this.res / this.queue.length;
};
let obj = new MovingAverage(3);
console.log(obj.next(1));
console.log(obj.next(10));
console.log(obj.next(3));
console.log(obj.next(5));
console.log(obj.queue);