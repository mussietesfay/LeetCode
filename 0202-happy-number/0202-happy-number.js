/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  
    let seen = new Set();
    
    function check(num){
        let sum = 0;
        
        while(num > 0){
            let digits = num % 10;
            sum += digits * digits;
            num = Math.floor(num / 10);
        }
        
        return sum;
    }
    
    while(n !== 1 && !seen.has(n)){
        seen.add(n);
        n = check(n)
    }
    
    return n === 1;
};