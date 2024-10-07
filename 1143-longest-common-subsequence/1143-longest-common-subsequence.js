/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if(text1.length < 1 || text2.length < 1){
        return 0;
    }
    
    let m = text1.length;
    let n = text2.length;
    
    let memo = Array.from({length : m + 1} , ()=> Array(n + 1).fill(0));
    
    for(let i=1;  i<=m; i++){
        for(let j=1; j<=n; j++ ){
            if(text1[i - 1] ===  text2[j - 1]){
                memo[i][j] = memo[i - 1][j - 1] + 1;
            }else{
            memo[i][j]=Math.max(memo[i-1][j], memo[i][j-1]);
            }
        }
    }
    return memo[m][n];
}; 