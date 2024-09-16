/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    if(!grid || grid.length===0 || grid[0].length=== 0)  return 0;
    let m= grid.length;
    let n= grid[0].length;
    let max = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]=== 1){
               let count = dfs(i,j,grid );
               max = Math.max(max , count) 
            }
        }
    }
    return max;
};

function dfs(row,col, grid ){
    if(row<0 || row>= grid.length || col<0 || col>=grid[0].length || grid[row][col]!== 1) return 0;
grid[row][col]=0;
let count = 1;
count +=dfs(row-1,col, grid );
count +=dfs(row+1,col, grid );
count +=dfs(row,col-1, grid );
count +=dfs(row,col+1, grid );

    return count;
    
}