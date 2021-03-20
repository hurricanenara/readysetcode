

var findKthLargest = function(nums, k) {
    // return nums.sort((a, b) => b - a)[k - 1];
    // return nums.sort((a, b) => a - b)[nums.length - k];
    return quickSort(nums)[k - 1];
};

// Unacceptably slow!
// Runtime: 1312 ms, faster than 5.14% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 183.2 MB, less than 5.10% of JavaScript online submissions for Kth Largest Element in an Array.


var quickSort = arr => {
    if (arr.length === 0 || arr.length === 1) return arr;
    const pivot = arr[0];
    // desc
    let leftArr = arr.slice(1).filter(el => el >= pivot);
    let rightArr = arr.filter(el => el < pivot);
    // asc
    // let leftArr = arr.filter(el => el < pivot);
    // let rightArr = arr.slice(1).filter(el => el >= pivot);

    // return quickSort(leftArr) + pivot + quickSort(rightArr);
    return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr));
}

console.log(findKthLargest([3,2,1,5,6,4], 2)); // [ 6, 5, 4, 3, 2, 1 ] 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // [ 6, 5, 5, 4, 3, 3, 2, 2, 1 ] 4

// console.log(quickSort([3,2,1,5,6,4]));
// console.log(quickSort([3,2,3,1,2,4,5,5,6]));
// console.log(quickSort([100, 5, 2, 1]));

// using Min Heap


/*
Approach:

create a min heap class with a capacity of k
when the heap reaches capacity eject the minimum num
loop over nums and add each num to the heap
at the end, the largest k number of elements will be left in the heap
the smallest of them being at the top of the heap, which is the kth largest number
The time complexity for this solution is O(N logK). Which is better than sorting the entire array which takes order of O(N logN). K is often smaller than N.
 */

// so much faster than quicksort
// Runtime: 100 ms, faster than 39.44% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 41.1 MB, less than 22.89% of JavaScript online submissions for Kth Largest Element in an Array.

var findKthLargest = function(nums, k) {
    
    // ============ Min Heap Class
    class MinHeap {
        
        constructor(capacity) {
            this.capacity = capacity;
            this.value = [];
        }
        
        add(val) {
            this.value.push(val);
            this.bubbleUp(this.value.length-1);
            if(this.value.length > this.capacity) this.remove();
        }
        
        remove() {
            this.swap(0, this.value.length-1);
            const min = this.value.pop();
            this.trickleDown(0);
            return min;
        }
        
        bubbleUp(idx) {
            const parent = Math.floor((idx-1)/2);
            let max = idx;
            
            if(parent >= 0 && this.value[parent] > this.value[max]) max = parent;
            
            if(max !== idx) {
                this.swap(max, idx);
                this.bubbleUp(max);
            }
        }
        
        trickleDown(idx) {
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;
            
            if(leftChild < this.value.length && this.value[leftChild] < this.value[min]) min = leftChild;
            if(rightChild < this.value.length && this.value[rightChild] < this.value[min]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.trickleDown(min);
            }
        }
        
        swap(i, j) {
            [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
        }
    }
    // ==============
    
    const minHeap = new MinHeap(k);
    
    for(let n of nums) minHeap.add(n);
    
    return minHeap.remove();
};

// using Max Heap
class MaxHeap {
  constructor() {
    this.value = [];
  }

  add(val) {
    this.value.push(val);
    this.bubbleUp(this.value.length - 1);
  }

  remove() {
    this.swap(0, this.value.length - 1);
    const max = this.value.pop();
    this.trickleDown(0);
    return max;
  }

  bubbleUp(idx) {
    const parent = Math.floor((idx - 1) / 2);
    let min = idx;

    if (parent >= 0 && this.value[parent] < this.value[min]) min = parent;

    if (min !== idx) {
      this.swap(min, idx);
      this.bubbleUp(min);
    }
  }

  trickleDown(idx) {
    const leftChild = 2 * idx + 1;
    const rightChild = 2 * idx + 2;
    let max = idx;

    if (leftChild < this.value.length && this.value[leftChild] > this.value[max]) max = leftChild;
    if (rightChild < this.value.length && this.value[rightChild] > this.value[max]) max = rightChild;

    if (max !== idx) {
      this.swap(max, idx);
      this.trickleDown(max);
    }
  }

  swap(i, j) {
    [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
  }
}

//using quick select
// Runtime: 104 ms, faster than 34.18% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 40.8 MB, less than 25.82% of JavaScript online submissions for Kth Largest Element in an Array.
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);

    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, end, k);
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, start, pivotIndex - 1, k);
    }
    return arr[pivotIndex];
};

function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start;
    let j = end - 1;
    while(i <= j) {    
        while (arr[i] < pivot) {
            i += 1;
        } 
        while (arr[j] > pivot) {
            j -= 1;
        }
        if(i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }   
    }
    swap(arr, i, end);
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}