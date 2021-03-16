// https://leetcode.com/problems/meeting-rooms-ii/

// Runtime: 84 ms, faster than 92.39% of JavaScript online submissions for Meeting Rooms II.
// Memory Usage: 41.9 MB, less than 26.55% of JavaScript online submissions for Meeting Rooms II.

// var minMeetingRooms = function(intervals) {
//     if (intervals.length === 1) return 1;
//     intervals.sort((a, b) => a[0] - b[0]);
    
//     let minHeap = [];
//     for (let i = 0; i < intervals.length; i++) {
//         const [start, end] = intervals[i];
//         if (!minHeap.length) {
//             minHeap.push(end);
//         } else {
//             let earliestAvailableTime = minHeap[0];
//             if (start < earliestAvailableTime) {
//                 minHeap.push(end);
//                 minHeap.sort((a, b) => a - b);
//             } else {
//                 minHeap[0] = Math.max(earliestAvailableTime, end);
//                 minHeap.sort((a, b) => a - b);
//             }
//         }
//     }
//     return minHeap.length;
// };

// not using min heap
var minMeetingRooms = function(intervals) {
    if (intervals.length <2) return intervals.length;
    let rooms = 0;
    
    const starts = intervals.map(a => a[0]).sort((a,b) => a-b ) // [2, 4]
    const ends = intervals.map(a => a[1]).sort((a,b) => a-b) // [7, 10]
    
    let endPointer = 0;
    
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[endPointer]) {
            rooms++;
        } else {
            endPointer++; 
        }
    }
    
    return rooms;
}
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[2,4],[7,10]])); // 1
console.log(minMeetingRooms([[1,5],[8,9],[8,9]])); // 2

// var minMeetingRooms = function(intervals) {
//     if (intervals.length === 1) return 1;

//     intervals.sort((a, b) => a[0] - b[0]);

//     let required = 1;
//     let prevEnd = intervals[0][1]; // 30

//     for (const range of intervals.slice(1)) {
//         const currentStart = range[0]; // 15
//         const currentEnd = range[1]; // 20
//         if (currentStart < prevEnd) {
//             required++;
//         }
//         prevEnd = currentEnd;
//     }
//     return required;
// };

