function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
    // Initialize the first row and column of dp
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // Fill the remaining cells of dp
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        }
      }
    }
  
    return dp[m][n];
  }
  