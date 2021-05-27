
// Brute Force O(n^2) T | O(1) S
// var trap = function(height) {
//     if (height === null || !height.length) return 0;
    
//     let res = 0;
//     for (let i = 0; i < height.length; i++) {
//         let lMax = 0;
//         let rMax = 0;
        
//         for (let j = 0; j < i; j++) {
//             lMax = Math.max(lMax, height[j]);
//         }
//         for (let j = i + 1; j < height.length; j++) {
//             rMax = Math.max(rMax, height[j]);
//         }
//         const water = Math.min(lMax, rMax) - height[i];
//         if (water > 0) res += water;
//     }
//     return res;
// };

// Dynamic Programming O(n) T | O(n) S
// Runtime: 96 ms, faster than 46.22% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 40.6 MB, less than 24.47% of JavaScript online submissions for Trapping Rain Water.
// var trap = function(height) {
//     if (height.length === 0) return 0;

//     let res = 0;
//     let l = height.length;
//     let lMax = {};
//     let rMax = {};

//     lMax[0] = height[0];
//     for (let i = 1; i < l; i++) {
//     lMax[i] = Math.max(height[i], lMax[i - 1]);
//     }

//     rMax[l - 1] = height[l - 1];
//     for (let i = l - 2; i >= 0; i--) {
//     rMax[i] = Math.max(height[i], rMax[i + 1]);
//     }

//     for (let i = 0; i < height.length; i++) {
//     res += Math.min(lMax[i], rMax[i]) - height[i];
//     }

//     return res;
// };

/** 3) Stack */
// time O(n)
// space O(n)
// var trap = function(height) {
//     let res = 0;
//     let i = 0;
//     const st = [];

//     while (i < height.length) {
//         while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
//             const top = st[st.length - 1];
//             st.pop();

//             if (st.length === 0) break;

//             const dist = i - st[st.length - 1] - 1;
//             const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
//             res += dist * h;
//         }
//         st.push(i);
//         i++;
//     }
//     return res;
// };

/** 4) Two pointers */
// time O(n)
// space O(1)
// Runtime: 72 ms, faster than 99.33% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 39 MB, less than 95.55% of JavaScript online submissions for Trapping Rain Water.
var trap = function(height) {
    if (height.length === 0) return 0;

    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;

    let res = 0;

    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
            res += lMax - height[l];
        }

        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
            res += rMax - height[r];
        }

        height[l] < height[r] ? l++ : r--;
    }

    return res;
};

var trap = function(height) {
    if(!height.length || height.length === 1) return 0;
    let lower = 0, level = 0; l = 0, r = height.length -1;
    let result = 0;
    while(l < r){
        lower = height[ height[l] < height[r] ? l++ : r--];
        level = Math.max(lower, level);
        result = result + (level - lower);
    }
    return result;
    
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));