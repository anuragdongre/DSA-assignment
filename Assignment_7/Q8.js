function checkStraightLine(coordinates) {
    const n = coordinates.length;
  
    if (n <= 2) {
      return true;
    }
  
    const x1 = coordinates[0][0];
    const y1 = coordinates[0][1];
    const x2 = coordinates[1][0];
    const y2 = coordinates[1][1];
    const slope = (y2 - y1) / (x2 - x1);
  
    for (let i = 2; i < n; i++) {
      const x = coordinates[i][0];
      const y = coordinates[i][1];
      const currentSlope = (y - y1) / (x - x1);
  
      if (currentSlope !== slope) {
        return false;
      }
    }
  
    return true;
  }
  