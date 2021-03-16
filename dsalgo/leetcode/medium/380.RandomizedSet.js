// https://leetcode.com/problems/insert-delete-getrandom-o1/

// Runtime: 144 ms, faster than 90.62% of JavaScript online submissions for Insert Delete GetRandom O(1).
// Memory Usage: 47.4 MB, less than 81.24% of JavaScript online submissions for Insert Delete GetRandom O(1).

class RandomizedSet {
    constructor() {
        this.map = {}; // used to keep the location in array
        this.arr = []; // used for O(1) random
    }

    insert(val) {
        if (this.map[val] !== undefined) {
            return false;
        }
        this.map[val] = this.arr.length;
        this.arr.push(val);
        return true;
    }

    remove(val) {
        if (this.map[val] === undefined) return false;
        let index = this.map[val];
        delete this.map[val];
        if (index === this.arr.length - 1) {
            this.arr.pop(); // last value
        } else {
            let temp = this.arr.pop()
            this.arr[index] = temp;
            this.map[temp] = index;
        }
        return true;
    }

    getRandom() {
        if (this.arr.length === 0) return null;
        let rand = Math.floor(Math.random() * this.arr.length);  
        // console.log(rand, this.arr[rand], this.arr, this.map);
        return this.arr[rand];
    }
}

var RandomizedSet = function() {
    this.storage = {}
    this.nums = []
};

RandomizedSet.prototype.insert = function(val) {
    if(this.storage[val] !== undefined) return false
    this.nums.push(val)
    this.storage[val] = this.nums.length - 1
    return true
};

RandomizedSet.prototype.remove = function(val) {
    if(this.storage[val] === undefined) return false
    let len = this.nums.length - 1;
    let index = this.storage[val];
    this.storage[this.nums[len]] = this.storage[val];
    [this.nums[index], this.nums[len]] = [this.nums[len], this.nums[index]];
    this.nums.pop()
    return delete this.storage[val]
};

RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(this.nums.length * Math.random())]
};