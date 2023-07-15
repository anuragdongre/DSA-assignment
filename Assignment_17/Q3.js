function countStudents(students, sandwiches) {
    const n = students.length;
    let i = 0; // index to track the student
    let j = 0; // index to track the sandwich
  
    while (i < n && j < n) {
      if (students[i] === sandwiches[j]) {
        i++; // student takes the sandwich
        j++; // move to the next sandwich
      } else {
        // student doesn't want the sandwich, move to the next student
        i++;
      }
    }
  
    return n - j; // number of students unable to eat
  }
  
  // Example usage:
  console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // Output: 0
  console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // Output: 3
  