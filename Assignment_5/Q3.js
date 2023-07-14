function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
  
    for (let i = nums.length - 1; i >= 0; i--) {
      const leftSquare = nums[left] ** 2;
      const rightSquare = nums[right] ** 2;
  
      if (leftSquare >= rightSquare) {
        result[i] = leftSquare;
        left++;
      } else {
        result[i] = rightSquare;
        right--;
      }
    }
  
    return result;
  }
  