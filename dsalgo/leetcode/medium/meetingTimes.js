
/* 

Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.
If there is no common time slot that satisfies the requirements, return an empty array.
The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.
It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.

 

Example 1:

Input: 
slots1 = [[10,50],[60,120],[140,210]], 
slots2 = [[0,15],[60,70]], duration = 8
Output: [60,68]

Example 2:

Input: 
slots1 = [[10,50],[60,120],[140,210]], 
slots2 = [[0,15],[60,70]], duration = 12
Output: []
 

Constraints:

1 <= slots1.length, slots2.length <= 104
slots1[i].length, slots2[i].length == 2
slots1[i][0] < slots1[i][1]
slots2[i][0] < slots2[i][1]
0 <= slots1[i][j], slots2[i][j] <= 109
1 <= duration <= 106
*/

// iterate through open ranges of times for each person
// 1. the range of open minutes for each subarray
// 2. [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1
// could be unsorted

// Input: 
// slots1 = [[10,50],[60,120],[140,210]], 
// slots2 = [[0,15],[60,70]], duration = 8
// Output: [60,68]

/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function (slots1, slots2, duration) {
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);

    // for (let i = 0; i < Math.max(slots1.length, slots2.length); i++) {
    // }
    let i = 0;
    let j = 0;

    while (i < slots1.length && j < slots2.length) {
        const maxStartTime = Math.max(slots1[i][0], slots2[j][0]);
        const minEndTime = Math.min(slots1[i][1], slots2[j][1]);

        if (maxStartTime + duration <= minEndTime) {
            return [maxStartTime, maxStartTime + duration];
        }
        if (slots1[i][1] <= slots2[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return [];
};

// console.log(minAvailableDuration)

