
class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let currentValIdx = this.values.length - 1;
        
        while (currentValIdx > 0) {
            let parentIdx = Math.floor((currentValIdx - 1) / 2);

            if (this.values[currentValIdx] < this.values[parentIdx]) {
                [this.values[currentValIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentValIdx]];
            } else {
                return this.values;
            }
            currentValIdx = parentIdx;
        }
        return this.values;
    }
}

const heap = new MinBinaryHeap();
heap.values = [1, 2, 3, 17, 19, 36, 7];
console.log(heap.insert(55));
console.log(heap.insert(0));
// console.log(heap.insert(45));
// console.log(heap.insert(99));
