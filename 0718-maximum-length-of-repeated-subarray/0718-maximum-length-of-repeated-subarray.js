/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
      if(nums1.length < 1 || nums2.length < 1){
        return 0;
    }
    
    let m = nums1.length;
    let n = nums2.length;
    
    let memo = Array.from({length : m + 1} , ()=> Array(n + 1).fill(0));
    
    let maxValue = 0;
    
    for(let i=1;  i<=m; i++){
        for(let j=1; j<=n; j++ ){
            if(nums1[i - 1] ===  nums2[j - 1]){
                memo[i][j] = memo[i - 1][j - 1] + 1;
             
                maxValue = Math.max(maxValue  ,  memo[i][j])
                
            }else{
            memo[i][j]= 0 ;
                
            }
        }
    }
    return maxValue ;
};