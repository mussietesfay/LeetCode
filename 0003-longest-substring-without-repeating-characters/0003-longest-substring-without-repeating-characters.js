/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let end = 0;
    let start = 0;
    let max = 0;
    
    while(end < s.length){
       
        if(! map.has(s[end])){
           map.set(s[end]);
            end++;
            max = Math.max(max , map.size);
            
        }else{
          map.delete(s[start]);
            start++
        }
    }
    return max;
};