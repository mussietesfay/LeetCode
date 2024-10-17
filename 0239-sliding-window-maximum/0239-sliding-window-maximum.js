/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    let result = [];
     let deque = [];
    
    for(let i = 0; i<nums.length; i++){
     
     // remove elemnt out of the window boundiers
        
        if(deque.length && deque[0] < i - k + 1){
            deque.shift()
        }
        
        // compare the max value of the current 
        
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop()
        }
        
        // add elemt to the deque
        deque.push(i)
        
        // add to result array when hit the k length
        
        if(i >= k-1){
            result.push(nums[deque[0]]) // because the max value is in front of the deque
        }
    }
     
     return result;
};