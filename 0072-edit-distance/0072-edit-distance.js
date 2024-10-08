/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
   if (word1.length < 1) return word2.length;
    if (word2.length < 1) return word1.length;
    
    let m = word1.length;
    let n = word2.length;
    let memo = Array.from({length : m + 1} , ()=> Array(n + 1).fill(0));
    
    for(let i = 0; i <= m ; i++){
      memo[i][0] = i;  
    }
    
    for(let j = 0 ; j <= n ; j++){
        memo[0][j] = j;
    }
    
    
    
    for(let i = 1; i<=m; i++){
        for(let j = 1; j<=n; j++){
            if (word1.charAt(i - 1) === word2.charAt(j - 1)){
               memo[i][j] = memo[i - 1][j - 1];
               }else{
                 memo[i][j] = Math.min(memo[i - 1][j - 1] + 1, Math.min(memo[i - 1][j] + 1 , memo[i][j - 1] + 1))  
               }
        }
    }

return memo[m][n];
};