/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length===0 || grid[0].length=== 0)  return 0;
    let m= grid.length;
    let n= grid[0].length;
     let count=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]=== '1'){
                dfs(i,j,grid);
                count++;
            }
        }
    }
    return count;
};

function dfs(row,col, grid){
    if(row<0 || row>= grid.length || col<0 || col>=grid[0].length || grid[row][col]!== '1') return;
grid[row][col]= '0';
dfs(row-1,col, grid);
dfs(row+1,col, grid);
dfs(row,col-1, grid);
dfs(row,col+1, grid);
}