/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
  if(nums.length < 1){
      return 0;
  }  
   let memo = new Array(nums.length).fill(1) ;
    
    for(let i=1; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[i] > nums[j]){
            if(memo[j] + 1 > memo[i]){
                memo[i] = memo[j] + 1;
            }
        }
        }
    }
    
    let max =0;
    for(let i = 0; i<memo.length; i++){
        if(memo[i] > max){
            max = memo[i];
        }
    }
    return max;
};
