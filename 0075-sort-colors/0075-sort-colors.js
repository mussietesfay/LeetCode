/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    for(let i=1; i<nums.length; i++){
        let temp = nums[i];
        let j;
        for(j=i-1; j>=0 && nums[j] > temp; j--){
            nums[j + 1] = nums[j]
        }
        nums[j+1] = temp;
    }
};