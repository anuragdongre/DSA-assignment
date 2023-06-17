// Initialize minRow to m and minCol to n.
// Iterate through each element in the ops array using a loop variable i.
// Update minRow to the minimum value between minRow and the first element of ops[i] (ops[i][0]).
// Update minCol to the minimum value between minCol and the second element of ops[i] (ops[i][1]).
// Return the product of minRow and minCol as the number of maximum integers in the matrix.

function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let i = 0; i < ops.length; i++) {
      minRow = Math.min(minRow, ops[i][0]);
      minCol = Math.min(minCol, ops[i][1]);
    }
  
    return minRow * minCol;
  }
  
  // Test case
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  console.log(maxCount(m, n, ops));

  
//   The time complexity of this algorithm is O(k), where k is the length of the ops array. We iterate through the ops array once to find the minimum values. The space complexity is O(1) as we only use a constant amount of additional space.

