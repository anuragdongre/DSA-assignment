class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const mergeKLists = (lists) => {
    const minHeap = new MinHeap();
  
    // Add the head nodes of all linked lists to the min-heap
    for (let list of lists) {
      if (list !== null) {
        minHeap.insert(list);
      }
    }
  
    const dummy = new ListNode();
    let curr = dummy;
  
    while (!minHeap.isEmpty()) {
      const node = minHeap.extractMin();
      curr.next = node;
      curr = curr.next;
  
      if (node.next !== null) {
        minHeap.insert(node.next);
      }
    }
  
    return dummy.next;
  };
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    insert(node) {
      this.heap.push(node);
      this.heapifyUp();
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  
    heapifyUp() {
      let i = this.heap.length - 1;
      const node = this.heap[i];
  
      while (i > 0) {
        const parentIndex = Math.floor((i - 1) / 2);
        const parent = this.heap[parentIndex];
  
        if (node.val >= parent.val) {
          break;
        }
  
        this.heap[i] = parent;
        i = parentIndex;
      }
  
      this.heap[i] = node;
    }
  
    heapifyDown() {
      let i = 0;
      const node = this.heap[i];
      const n = this.heap.length;
  
      while (i < n) {
        const leftChildIndex = 2 * i + 1;
        const rightChildIndex = 2 * i + 2;
        let smallestIndex = i;
  
        if (
          leftChildIndex < n &&
          this.heap[leftChildIndex].val < this.heap[smallestIndex].val
        ) {
          smallestIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < n &&
          this.heap[rightChildIndex].val < this.heap[smallestIndex].val
        ) {
          smallestIndex = rightChildIndex;
        }
  
        if (smallestIndex === i) {
          break;
        }
  
        this.heap[i] = this.heap[smallestIndex];
        i = smallestIndex;
      }
  
      this.heap[i] = node;
    }
  }
  
  // Example usage:
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const list3 = new ListNode(2, new ListNode(6));
  
  const merged = mergeKLists([list1, list2, list3]);
  let current = merged;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  