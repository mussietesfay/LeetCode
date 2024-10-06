/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost === 0) return 0;
    let memo = new Array(cost.length + 1);
    
    memo[0] = 0;
    memo[1] = 0;
    
    for(let i=2; i<=cost.length; i++){
        memo[i] = Math.min(memo[i -1] + cost[i - 1] , memo[i - 2] + cost[i - 2]);
    }
     return memo[cost.length ]
};