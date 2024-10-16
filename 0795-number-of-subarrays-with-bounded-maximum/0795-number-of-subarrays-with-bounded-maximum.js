/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
  
    let start = -1;
    let end = 0;
    let count = 0;
    let validount = 0
    
    while(end < nums.length){
        if(nums[end] > right){
            start = end ;
             validount = 0; 
        }else if(nums[end] >= left){
            validount = end - start ;
            
            count += validount;
            
        } else{
           count += validount; 
        }
        end++;
    }
    return count;
};