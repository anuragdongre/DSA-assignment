function multiply(mat1, mat2) {
    const m = mat1.length;
    const n = mat2[0].length;
    const k = mat1[0].length;
  
    const result = Array.from({ length: m }, () => Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let t = 0; t < k; t++) {
          result[i][j] += mat1[i][t] * mat2[t][j];
        }
      }
    }
  
    return result;
  }
  