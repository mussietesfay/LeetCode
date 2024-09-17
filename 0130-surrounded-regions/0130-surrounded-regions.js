/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length === 0 || board[0].length === 0) return;
   const m=board.length;
   const n=board[0].length;

   for(let i=0; i<m; i++){
    dfsCore(i,0,board)
    dfsCore(i,n-1,board)
   }
   for(let j=0; j<n; j++){
    dfsCore(0,j,board)
    dfsCore(m-1,j,board)
   }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'T') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};
function dfsCore(row,col,board){
    if (row < 0 || row >= board.length|| col < 0 || col >= board[0].length || board[row][col] !== 'O') return;
        board[row][col] ='T';
        dfsCore(row-1,col,board);
        dfsCore(row+1,col,board);
        dfsCore(row,col-1,board);
        dfsCore(row,col+1,board);
    
};