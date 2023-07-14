class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function constructTree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    const value = parseInt(s, 10);
    let leftSubstring = "";
    let rightSubstring = "";
    let openingParenthesesCount = 0;
    let i = 0;
  
    while (i < s.length) {
      if (s[i] === "(") {
        openingParenthesesCount++;
      } else if (s[i] === ")") {
        openingParenthesesCount--;
      }
  
      if (openingParenthesesCount === 0 && leftSubstring.length === 0) {
        const leftSubstringStartIndex = s.indexOf("(", i);
        leftSubstring = s.substring(i + 1, leftSubstringStartIndex);
        i = leftSubstringStartIndex;
      } else if (openingParenthesesCount === 0 && leftSubstring.length > 0 && rightSubstring.length === 0) {
        const rightSubstringStartIndex = s.indexOf("(", i);
        rightSubstring = s.substring(i + 1, rightSubstringStartIndex);
        break;
      }
  
      i++;
    }
  
    const leftChild = constructTree(leftSubstring);
    const rightChild = constructTree(rightSubstring);
  
    return new TreeNode(value, leftChild, rightChild);
  }
  
  function treeToArray(root) {
    if (!root) {
      return [];
    }
  
    const result = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);
  
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  
    return result;
  }
  
  function constructBinaryTreeFromString(s) {
    const root = constructTree(s);
    return treeToArray(root);
  }
  