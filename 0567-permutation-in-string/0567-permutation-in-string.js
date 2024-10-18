/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Length = s1.length;
    let s2length = s2.length;
     
    if(s1Length > s2length) return false;
    
    
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    
    for(let i = 0; i< s1Length; i++ ){
      s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;  
    }
    if(theSame(s1Count ,s2Count )) return true;
    
    for(let i = s1Length; i<s2length; i++ ){
        
      s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++; 
      s2Count[s2[i - s1Length ].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        
      if(theSame(s1Count ,s2Count )) return true;  
    }
    return false;
};

function theSame(count1 , count2){
    for(let i=0; i<26; i++){
        if(count1[i] !== count2[i]){
            return false;
        }
    }
    return true;
}