// Runtime: 172 ms, faster than 44.62% of JavaScript online submissions for Logger Rate Limiter.
// Memory Usage: 48.9 MB, less than 32.31% of JavaScript online submissions for Logger Rate Limiter.

/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.tracker = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    debugger
    if (this.tracker[message] === undefined || timestamp >= (this.tracker[message] + 10)) {
        debugger
        this.tracker[message] = timestamp;
        return true;
    } else {
        debugger
        return false;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

let logger = new Logger();
// console.log(logger.shouldPrintMessage(0, "A")); // true
// console.log(logger.shouldPrintMessage(0, "B")); // true
// console.log(logger.shouldPrintMessage(0, "C")); // true
// console.log(logger.shouldPrintMessage(0, "A")); // false
// console.log(logger.shouldPrintMessage(0, "B")); // false
// console.log(logger.shouldPrintMessage(0, "C")); // false
// console.log(logger.shouldPrintMessage(0, "A")); // false
// console.log(logger.shouldPrintMessage(0, "B")); // false
// console.log(logger.shouldPrintMessage(0, "C")); // false
// console.log(logger.shouldPrintMessage(0, "A")); // false
// [null,true,true,true,false,false,false,false,false,false,false]
console.log(logger.shouldPrintMessage(1, "foo"));  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
// console.log(logger);
console.log(logger.shouldPrintMessage(2, "bar"));  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
// console.log(logger);
console.log(logger.shouldPrintMessage(3, "foo"));  // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar"));  // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo")); // true