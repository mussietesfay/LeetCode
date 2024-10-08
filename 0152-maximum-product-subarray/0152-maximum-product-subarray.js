/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  
    
   let leftProduct = 1;
    let rigthProduct = 1;
    let ans = nums[0];
    
    for(let i = 0; i<nums.length; i++){
     
     leftProduct = leftProduct === 0 ? 1 : leftProduct;
      rigthProduct =  rigthProduct === 0 ? 1: rigthProduct;
      
     leftProduct *= nums[i];
      
     rigthProduct *= nums[nums.length - 1 -i];
        
     ans = Math.max(ans , Math.max(leftProduct , rigthProduct))   ;
      
    }
    return ans;
};