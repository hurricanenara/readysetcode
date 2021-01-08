
// function mergeRanges(meetings) {
//     const sortedMeetings = meetings.sort((a, b) => {
//         return a.startTime - b.startTime;
//     });

//     const mergedMeetings = [];

//     for (let i = 0; i < meetings.length - 1; i++) {
//         console.log(i, "entered into for loop")
//         const leftMeeting = meetings[i];
//         const rightMeeting = meetings[i + 1];

//         if (leftMeeting.endTime >= rightMeeting.startTime) {
//             const mergedMeeting = { startTime: leftMeeting.startTime, endTime: Math.max(leftMeeting.endTime, rightMeeting.endTime) };
//             mergedMeetings.push(mergedMeeting);
//             i++;
//         } else {
//             mergedMeetings.push(leftMeeting);
//         }
//     }
//     return mergedMeetings;
// }

function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting    = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

//first attempt! Don't be afraid to try out your thoughts

// function mergeRanges(meetings) {
//     let mergedMeetings = [];

//     for (let i = 0; i < meetings.length; i++) {
//         const meetingOne = meetings[i];
//         for (let j = 0; j < meetings.length; j++) {
//             const meetingTwo = meetings[j];
//             if (i !== j) {
//                 if (meetingOne.endTime >= meetingTwo.startTime) {
//                     const mergedMeeting = { startTime: meetingOne.startTime, endTime: Math.max(meetingOne.endTime, meetingTwo.endTime) };
//                     mergedMeetings.push(mergedMeeting);
//                 }
//             }
//         }
//     }
//     return mergedMeetings;
// }

// console.log(mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]));
console.log(mergeRanges(  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]));