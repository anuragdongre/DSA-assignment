function findNextGreaterFrequency(nums) {
    const frequencyMap = new Map();
    const stack = [];
    const result = [];
  
    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  
      while (stack.length > 0 && frequencyMap.get(num) >= frequencyMap.get(stack[stack.length - 1])) {
        stack.pop();
      }
  
      stack.push(num);
    }
  
    for (let i = 0; i < nums.length; i++) {
      result[i] = frequencyMap.has(nums[i]) ? stack.includes(nums[i]) ? stack[stack.indexOf(nums[i]) + 1] : -1 : -1;
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [1, 1, 2, 3, 4, 2, 1];
  const nextGreaterFrequency = findNextGreaterFrequency(nums);
  console.log(nextGreaterFrequency);
  