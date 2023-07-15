function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    }
  
    var moves = 0;
    moves += towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`move disk ${n} from rod ${source} to rod ${destination}`);
    moves++;
    moves += towerOfHanoi(n - 1, auxiliary, source, destination);
  
    return moves;
  }
  
  // Example usage
  var N = 2;
  var totalMoves = towerOfHanoi(N, 1, 2, 3);
  console.log(`Total moves: ${totalMoves}`);
  