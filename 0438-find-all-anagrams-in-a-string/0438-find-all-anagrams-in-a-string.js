/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    
    let sLength = s.length;
    let pLength = p.length;
    
    let sCount = new Array(26).fill(0);
    let pCount = new Array(26).fill(0);
    
    // Initialize frequency counts for p and the first window of s
    for (let i = 0; i < pLength; i++) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Check the first window
    if (theSame(sCount, pCount)) {
        result.push(0);  
    }
    
    // Slide the window over s
    for (let i = pLength; i < sLength; i++) {
        // Add the new character to the window
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;  
        // Remove the character going out of the window
        sCount[s[i - pLength].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        
        // Check if the current window matches pCount
        if (theSame(sCount, pCount)) {
            result.push(i - pLength + 1);  
        }
    }

    return result;
};

function theSame(count1, count2) {
    for (let i = 0; i < 26; i++) {
        if (count1[i] !== count2[i]) {
            return false;
        }
    }
    return true;
}