/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // global result
    let result=[];
    candidates.sort((a,b)=>a-b);
function backtrack( start , currentSum , combination){
 
//  base case
if(currentSum === target){
  result.push([...combination]) 
  return; 
}
// backtrack case
if(currentSum > target){
    return;
}
for( let i=start; i<candidates.length; i++){
    if(start !== i && candidates[i] === candidates[i-1]) continue;
    combination.push(candidates[i])
    backtrack( i + 1 , currentSum + candidates[i] , combination)
    combination.pop();
}
}
backtrack(0 , 0 ,[]);
return result;
}