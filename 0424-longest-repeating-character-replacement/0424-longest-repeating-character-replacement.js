/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start = 0;
    let end = 0;
    let maxCount = 0;
    let maxLength = 0;
    let map = new Map();
    
    while(end < s.length){
        
        // update the count of the current character
        
       map.set(s[end] , (map.get(s[end]) || 0) + 1) ;
        
        // update the max count in  a single character in the current window
        
       maxCount = Math.max( maxCount  , map.get(s[end]))   
         
        // calculate the number of changes needed in the currecnt window
        
        const change = (end - start) + 1 -  maxCount ;
        
        // check change exceed k  , shrink the window from the left
        
        if(change > k){
           
          map.set(s[start] , (map.get(s[start])) - 1)  // reduce  count character at start of
            
            if(map.get(s[start]) === 0){
                map.delete(s[start]) // remove it if the count is 0;
            }
            start++; // update the window by moving the pointer
        }
        // update the max length
        
         maxLength  = Math.max( maxLength  , end - start + 1)
        end++
    }
    return  maxLength ;
};