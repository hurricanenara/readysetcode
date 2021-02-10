//  a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = Math.min(...A);
    let max = Math.max(...A);
    
    if (max < 0) return 1;
    for (let i = min; i < max; i++) {
        if (!A.includes(i)) return i;
    }
    return max + 1;    
}

console.log(solution([1,3,6,4,1,2])) //5
console.log(solution([1,2,3])) //4
console.log(solution([-1,-2,-3])) //1

