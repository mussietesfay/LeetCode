/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
     let dp=new Array(amount+1).fill(0);
    dp[0]=1;

        for(let j=0; j<coins.length; j++){
          for(let i=coins[j]; i<=amount; i++){  
            dp[i] += dp[i - coins[j]]
        }
    }
    return dp[amount];
};