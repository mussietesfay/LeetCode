/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  
    let sum = 0;
    let start = 0;
    let end = 0;
    let min = Infinity;
    
    while(end < nums.length){
       
         sum += nums[end]
        
      while (sum >= target){
          min = Math.min(min , end - start + 1);
          sum -= nums[start];
          start++;
      } 
        end++;
       
    }
    return min === Infinity ? 0 : min; 
};