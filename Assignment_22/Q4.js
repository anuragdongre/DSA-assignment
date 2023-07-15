class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function constructTree(Preorder, Inorder, Postorder) {
    if (Preorder.length === 0 || Inorder.length === 0 || Postorder.length === 0) {
      return null;
    }
  
    const rootVal = Preorder[0];
    const root = new Node(rootVal);
  
    const index = Inorder.indexOf(rootVal);
    const InorderLeft = Inorder.slice(0, index);
    const InorderRight = Inorder.slice(index + 1);
  
    const PreorderLeft = Preorder.slice(1, index + 1);
    const PreorderRight = Preorder.slice(index + 1);
  
    const PostorderLeft = Postorder.slice(0, index);
    const PostorderRight = Postorder.slice(index, -1);
  
    root.left = constructTree(PreorderLeft, InorderLeft, PostorderLeft);
    root.right = constructTree(PreorderRight, InorderRight, PostorderRight);
  
    return root;
  }
  
  function areTraversalsSameTree(Preorder, Inorder, Postorder) {
    const tree = constructTree(Preorder, Inorder, Postorder);
  
    return tree !== null;
  }
  
  // Example usage
  const Preorder1 = [1, 2, 4, 5, 3];
  const Inorder1 = [4, 2, 5, 1, 3];
  const Postorder1 = [4, 5, 2, 3, 1];
  
  console.log(areTraversalsSameTree(Preorder1, Inorder1, Postorder1)); // Output: true
  
  const Preorder2 = [1, 5, 4, 2, 3];
  const Inorder2 = [4, 2, 5, 1, 3];
  const Postorder2 = [4, 1, 2, 3, 5];
  
  console.log(areTraversalsSameTree(Preorder2, Inorder2, Postorder2)); // Output: false
  