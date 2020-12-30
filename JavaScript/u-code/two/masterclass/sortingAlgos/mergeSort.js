
function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let sortedLeft = mergeSort(arr.slice(0, mid));
    let sortedRight = mergeSort(arr.slice(mid));

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const merged = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else if (left[0] === right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }
    // merged = merged.concat(left, right);
    // return merged;
    return [...merged, ...left, ...right];
}

// console.log(merge([1, 5, 7], [2, 6, 8]));
console.log(mergeSort([2, 1, 9, 7, 5]));