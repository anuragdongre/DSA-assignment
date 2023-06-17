// Initialize an empty transpose array to store the transposed matrix.
// Get the number of rows (numRows) and number of columns (numCols) of the original matrix.
// Iterate through each column index j from 0 to numCols - 1.
// Create an empty row array.
// Iterate through each row index i from 0 to numRows - 1.
// Access the element at position (i, j) in the original matrix (matrix[i][j]) and push it to the row array.
// After completing the inner loop, push the row array to the transpose array.
// Repeat steps 4-7 until all columns have been processed.
// Return the transpose array as the result.

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transpose = [];
  
    for (let j = 0; j < numCols; j++) {
      const row = [];
      for (let i = 0; i < numRows; i++) {
        row.push(matrix[i][j]);
      }
      transpose.push(row);
    }
  
    return transpose;
  }
  
  // Test case
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(transposeMatrix(matrix));

//   The time complexity of this algorithm is O(m * n), where m is the number of rows and n is the number of columns in the matrix. We iterate through each element in the matrix once to construct the transpose. The space complexity is also O(m * n) as we store the transposed matrix in the transpose array.
