/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0;
    let end = 0;
    let count = 0;
    let maxFlip = 0;
   
    
    while( end < nums.length){
       
       if(nums[end] === 0){
          count++;  
       } 
        
        while( count > k){
            
            if(nums[start] === 0){
                 count--;
            }
            start++;
        }
      maxFlip = Math.max(maxFlip , end - start + 1)  ;
       end++
    }
    return maxFlip;
};