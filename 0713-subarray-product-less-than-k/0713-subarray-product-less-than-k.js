/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if( k <= 1) return 0;
    
    let start = 0;
    let end = 0;
    let maxProduct = 1;
    let count = 0;
    
    while (end < nums.length){
        maxProduct *= nums[end]; 
        
        while(maxProduct >= k){
        maxProduct /= nums[start];
            start++;
        }
        count += end - start + 1;
        
        end++;
    }
    return count;
};