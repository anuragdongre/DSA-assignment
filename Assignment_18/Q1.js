const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
  
    const merged = [];
    for (const interval of intervals) {
      if (merged.length === 0 || interval[0] > merged[merged.length - 1][1]) {
        merged.push(interval);
      } else {
        merged[merged.length - 1][1] = Math.max(
          merged[merged.length - 1][1],
          interval[1]
        );
      }
    }
  
    return merged;
  };
  
  // Example usage:
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals)); // Output: [[1,6],[8,10],[15,18]]
  