/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length === 1) return nums;

 let midIndex = Math.floor(nums.length / 2);
 let left = sortArray(nums.slice(0 , midIndex));
 let right = sortArray(nums.slice(midIndex));

 return merge(left , right);
    
};

function merge(array1 , array2){
    let combine = [];
   let i=0;
   let j=0;

   while(i < array1.length && j < array2.length){
    if(array1[i] < array2[j]){
       combine.push(array1[i]);
       i++ 
    }else{
        combine.push(array2[j]);
        j++
    }
   }

   while(i < array1.length){
    combine.push(array1[i]);
    i++;
   }
   while(j < array2.length){
    combine.push(array2[j]);
    j++;
   }
   return combine;
 };