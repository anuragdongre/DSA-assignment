function searchMatrix(matrix, target) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let left = 0;
    let right = numRows * numCols - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const row = Math.floor(mid / numCols);
      const col = mid % numCols;
      const num = matrix[row][col];
  
      if (num === target) {
        return true;
      } else if (num < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  