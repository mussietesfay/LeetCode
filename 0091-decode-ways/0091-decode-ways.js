/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === '0'){
        return 0;
    }
    
    let memo = new Array(s.length + 1).fill(0);
    memo[0] = 1;
    memo[1] = 1;
    
    for(let i = 2; i<=s.length; i++){
        
    let oneDigit = parseInt(s.slice(i-1,i));
    let twoDigit = parseInt(s.slice(i-2 , i));
        
        if(oneDigit >=1 && oneDigit <=9){
            memo[i] += memo[i - 1];
        }
        
        if(twoDigit >=10 && twoDigit <=26){
            memo[i] += memo[i - 2];
        }
    }
    return memo[s.length]
};