function convertTo2DArray(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
  
    const result = new Array(m);
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n);
    }
  
    for (let i = 0; i < m * n; i++) {
      const row = Math.floor(i / n);
      const col = i % n;
      result[row][col] = original[i];
    }
  
    return result;
  }
  