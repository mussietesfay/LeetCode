/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result=[];
    function backtracking(start , currentSum , combination){
        if(currentSum === target ){
            result.push([...combination ]);
            return;
        }
        if(currentSum > target){
            return;
        }
        for(let i=start; i<candidates.length; i++){
            combination.push(candidates[i]);
            backtracking(i , currentSum + candidates[i] , combination);
            combination.pop();
        }
    }
    backtracking(0, 0 , []);
    return result;
};