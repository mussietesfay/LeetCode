/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
   let result=[];
   function backtrack(start , curentSum , path){
    if(path.length === k){
        if(curentSum === n){
          result.push([...path]);
        }
        return;
    }
   for(let i= start; i<=9; i++){
    path.push(i);
    backtrack(i + 1 , curentSum + i , path)
    path.pop();
   }
   } 
   backtrack(1 , 0 , []);
   return result;
};