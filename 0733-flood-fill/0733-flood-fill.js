/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if(!image || image.length === 0 || image[0].length === 0) return ;
    
     let oldColor = image[sr][sc];
    
    if(oldColor === color){
        return image;
    }
    
    dfs(sr , sc , image , oldColor , color)
    return image;
};

function dfs(row , col , image , oldColor , color){
    if(row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !==  oldColor  ) return;
    
    image[row][col] = color;
    
    dfs(row - 1, col , image , oldColor , color)
    dfs(row + 1, col , image , oldColor , color)
    dfs(row , col - 1 , image , oldColor , color)
    dfs(row , col + 1 , image , oldColor , color)

    
    
    
}