function generateMatrix(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let count = 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Top row
      for (let col = startCol; col <= endCol; col++) {
        result[startRow][col] = count++;
      }
      startRow++;
  
      // Right column
      for (let row = startRow; row <= endRow; row++) {
        result[row][endCol] = count++;
      }
      endCol--;
  
      // Bottom row
      if (startRow <= endRow) {
        for (let col = endCol; col >= startCol; col--) {
          result[endRow][col] = count++;
        }
        endRow--;
      }
  
      // Left column
      if (startCol <= endCol) {
        for (let row = endRow; row >= startRow; row--) {
          result[row][startCol] = count++;
        }
        startCol++;
      }
    }
  
    return result;
  }
  