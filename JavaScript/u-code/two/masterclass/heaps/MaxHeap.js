
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let currentValIdx = this.values.length - 1;
        
        while (currentValIdx > 0) {
            let parentIdx = Math.floor((currentValIdx - 1) / 2);

            if (this.values[currentValIdx] > this.values[parentIdx]) {
                [this.values[currentValIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentValIdx]];
            } else {
                return this.values;
            }
            currentValIdx = parentIdx;
        }
        return this.values;
    }

    extractMax() {
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        this.values.pop();
        let currentValIdx = 0;
        
        let currentVal = this.values[currentValIdx];
        let leftChildIdx = (2 * currentValIdx) + 1;
        let rightChildIdx = (2 * currentValIdx) + 2;
        
        while (currentVal < this.values[leftChildIdx] && currentVal < this.values[rightChildIdx]) {
            let leftChild = this.values[leftChildIdx];
            let rightChild = this.values[rightChildIdx];
            if (leftChild > rightChild || leftChild === rightChild) {
                [this.values[currentValIdx], this.values[leftChildIdx]] = [this.values[leftChildIdx], this.values[currentValIdx]];
                currentValIdx = leftChildIdx;
            } else if (rightChild > leftChild) {
                [this.values[currentValIdx], this.values[rightChildIdx]] = [this.values[rightChildIdx], this.values[currentValIdx]];
                currentValIdx = rightChildIdx;
            }
        }
        return this.values;
    }
}

const heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
console.log(heap.insert(55)); // [ 55, 39, 41, 18, 27, 12, 33 ]
console.log(heap.extractMax());

