const findMinArrowShots = (points) => {
    if (points.length === 0) {
      return 0;
    }
  
    points.sort((a, b) => a[1] - b[1]);
  
    let end = points[0][1];
    let arrows = 1;
  
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] > end) {
        arrows++;
        end = points[i][1];
      } else {
        end = Math.min(end, points[i][1]);
      }
    }
  
    return arrows;
  };
  
  // Example usage:
  console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // Output: 2
  console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])); // Output: 4
  console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])); // Output: 2
  