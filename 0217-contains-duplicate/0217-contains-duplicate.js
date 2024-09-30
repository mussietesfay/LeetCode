/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let check= new Set(nums);
    if(check.size !== nums.length){
        return true;
    }
    return false;
};