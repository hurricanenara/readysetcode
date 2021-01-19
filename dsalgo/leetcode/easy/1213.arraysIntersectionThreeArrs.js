// https://leetcode.com/problems/intersection-of-three-sorted-arrays/

// Runtime: 92 ms, faster than 41.38% of JavaScript online submissions for Intersection of Three Sorted Arrays.
// Memory Usage: 41.2 MB, less than 31.61% of JavaScript online submissions for Intersection of Three Sorted Arrays.

var arraysIntersection = function(arr1, arr2, arr3) {
    let map = new Map();
    let map2 = new Map();
    for (let num of arr1) {
        map.set(num, map.get(num) + 1 || 1);
    }
    const intersectionOne = arr2.filter(n => {
        if (map.has(n)) {
            map.delete(n);
            return true;
        } else {
            return false;
        }
    });
    for (let num of intersectionOne) {
        map2.set(num, map2.get(num) + 1 || 1);
    }
    const intersectionTwo = arr3.filter(n => {
        if (map2.has(n)) {
            map2.delete(n);
            return true;
        } else {
            return false;
        }
    })
    return intersectionTwo;
};

// O - solved with very little help! referred to the previous itersection problem (intersection 1)

// using binary search

var arraysIntersection = function(arr1, arr2, arr3) {
    
    return arr1
        .filter(num1 => binarySearch(arr2, num1) !== -1)
        .filter(num2 => binarySearch(arr3, num2) !== -1);
};

var binarySearch = function(arr, target) {
    let n = arr.length;
    let head = 0;
    let tail = n - 1;
    
    while (head <= tail) {
        if ((head === tail) && arr[head] === target) {
            return head;
        }
        
        let mid = head + Math.floor((tail - head) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (target > arr[mid]) {
            head = mid + 1;
        } else {
            tail = mid - 1;
        }
    }
    
    return -1;
}

// relatively quick

var arraysIntersection = function(arr1, arr2, arr3) {
    let result = [];
    const hashMap = {};
    
    for (let i = 0; i < arr1.length; i++) {
        hashMap[arr1[i]] = false;
    }
    
    for (let i = 0; i < arr2.length; i++) {
        if (hashMap[arr2[i]] === false) {
            hashMap[arr2[i]] = true;
        } 
    }
    
    for (let i = 0; i < arr3.length; i++) {
        if (hashMap[arr3[i]] === true) {
            result.push(arr3[i]);
        } 
    }
    
    return result;
};