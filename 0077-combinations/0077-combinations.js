/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result=[];

    function backtrack (index, currectCombination){
        if(currectCombination.length === k){
            result.push([...currectCombination]);
            return;
        }

        if(index > n){
            return;
        }
       backtrack (index + 1 , currectCombination) 
        currectCombination.push(index);
       backtrack (index + 1 , currectCombination)
       currectCombination.pop();
    }
   backtrack (1 , [])  
   return result;
};