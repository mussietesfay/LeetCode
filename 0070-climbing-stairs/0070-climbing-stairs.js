/**
 * @param {number} n
 * @return {number}
 */
let memo = [];
var climbStairs = function(n) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n === 1) {
    return 1;
  }
  if(n===2){
    return 2;
  }
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n];
}
