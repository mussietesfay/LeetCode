/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result=[];
 function backtrack(start , substArray){
  
    result.push([...substArray]);

    for(let i=start; i<nums.length; i++){
        substArray.push(nums[i]);
        backtrack(i + 1 , substArray) 
        substArray.pop();
    }
 }
 backtrack(0 , []);
 return result;
    
};