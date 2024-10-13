/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   
    let start = 0;
    let end = 0;
    let max = 0;
    
    while(start <= end && end < nums.length){
        if(nums[end] === 1){
            max = Math.max(max , end - start + 1);
            end++;
        }else{
           start = end + 1;
            end = start
          
        }
        
    }
    return max;
};