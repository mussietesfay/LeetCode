/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let outDegree=[];
    let inDegree=[];
    for(let i=0; i<=n; i++){
        outDegree[i]=0;
        inDegree[i]=0;
    }
    for(let i=0; i<trust.length; i++){

        let [from,to]=trust[i];
        inDegree[to]++;
        outDegree[from]++;
    }
    for(let i=1; i<=n; i++){
        if(inDegree[i]===n-1 && outDegree[i]===0 ){
            return i;
        }
    }
    return -1;
};