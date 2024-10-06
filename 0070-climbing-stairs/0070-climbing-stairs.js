/**
 * @param {number} n
 * @return {number}
 */
// let memo = [];
// var climbStairs = function(n) {
//   if (memo[n] !== undefined) {
//     return memo[n];
//   }
//   if (n === 1) {
//     return 1;
//   }
//   if(n===2){
//     return 2;
//   }
//   memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
//   return memo[n];
// }
var climbStairs = function(n){
    if(n === 0 ) return 0;
    let memo = new Array (n);
    
    memo[0] = 1;
    memo[1] = 2;
    
    for(let i = 2; i<n ; i++){
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    
    return memo[n - 1]
    
}