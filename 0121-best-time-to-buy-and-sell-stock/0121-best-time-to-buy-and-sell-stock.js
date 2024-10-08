/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   if(prices.length === 0) return 0;
    
    let currentBuy = prices[0];
    let maxProfit = 0;
    
    for(let i=1; i<prices.length; i++){
        if(currentBuy > prices[i]){
         currentBuy = prices[i];   
        }else{
         let currentprofit = prices[i] - currentBuy; 
          maxProfit = Math.max( maxProfit , currentprofit);
        }
    }
    return maxProfit;
};