/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length < 2) return nums[0];
    let num1 = new Array(nums.length - 1);
     let num2 = new Array(nums.length - 1);  
    
    for(let i=0; i<nums.length - 1; i++){
        num1[i] = nums[i];
        num2[i] = nums[i + 1];
    }
    num1 = rob1 (num1);
    num2 = rob1 (num2);
    
    let max = Math.max(num1 , num2);
    
    return max ;
    };

  var rob1 = function(nums) {
    if(nums.length === 0) return 0;
    
    let memo = new Array(nums.length);
    
    memo[0] = nums[0];
    memo[1] = Math.max(nums[0] , nums[1]);
    
    for(let i=2; i<nums.length; i++){
        memo[i] = Math.max(memo[i-2] + nums[i] , memo[i-1]);
    }
    
    return memo[nums.length - 1];
};
