const quicksort = (nums, start, end) => {
    if (start >= end) {
      return;
    }
  
    const pivotIndex = partition(nums, start, end);
    quicksort(nums, start, pivotIndex - 1);
    quicksort(nums, pivotIndex + 1, end);
  };
  
  const partition = (nums, start, end) => {
    const pivot = nums[end];
    let pivotIndex = start - 1;
  
    for (let i = start; i < end; i++) {
      if (nums[i] < pivot) {
        pivotIndex++;
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
      }
    }
  
    pivotIndex++;
    [nums[end], nums[pivotIndex]] = [nums[pivotIndex], nums[end]];
  
    return pivotIndex;
  };
  
  const sortArray = (nums) => {
    quicksort(nums, 0, nums.length - 1);
    return nums;
  };
  
  // Example usage:
  console.log(sortArray([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
  console.log(sortArray([5, 1, 1, 2, 0, 0])); // Output: [0, 0, 1, 1, 2, 5]
  