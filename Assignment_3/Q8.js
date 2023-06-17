// Sort the intervals based on the start time.
// Iterate through the sorted intervals starting from the second interval:
// Compare the start time of the current interval with the end time of the previous interval.
// If the start time of the current interval is less than or equal to the end time of the previous interval, return false (overlap detected).
// If no overlaps are found, return true (person can attend all meetings).

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test case
  const intervals = [[0, 30], [5, 10], [15, 20]];
  console.log(canAttendMeetings(intervals));  // Output: false
  

//   The time complexity of this algorithm is O(n log n), where n is the number of intervals, due to the sorting step. The space complexity is O(1) since we are using only a constant amount of extra memory for the comparison and iteration variables.
