/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    
    let start = 0;
    let end = 0 ;
    let sum = 0;
    let maxSum = -Infinity;
    let map = new Map();
    
    while(end < nums.length){
        
        // check if the value is not in the hashtabe 
        
        if(!map.has(nums[end])){
           map.set(nums[end]);// add to the hashtabel 
          
           sum += nums[end]; // add to the sum
            
            maxSum = Math.max(maxSum , sum); // update the max sum
            
             end++// move one step the pointer forward
        }
        else{
           map.delete(nums[start])// remove the elemnt from the hashtable 
            sum -= nums[start] // erase from the 
            start++;
        }
    }
    return maxSum === -Infinity ? -1 : maxSum ;
};