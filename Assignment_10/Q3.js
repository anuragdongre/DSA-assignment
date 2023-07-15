function printAllSubsets(set, currentSubset = '', index = 0) {
    if (index === set.length) {
      console.log('{' + currentSubset + '}');
      return;
    }
    
    // Include the current character
    printAllSubsets(set, currentSubset + set[index], index + 1);
    
    // Exclude the current character
    printAllSubsets(set, currentSubset, index + 1);
  }
  
  // Example usage
  printAllSubsets("abc");
  printAllSubsets("abcd");
  